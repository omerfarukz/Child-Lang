using System;
using System.Collections.Generic;
using Antlr4.Runtime;
using Antlr4.Runtime.Misc;
using Antlr4.Runtime.Tree;
using static LanguageBaseParser;

namespace ChildLang.impl
{
    public class ChildLangVisitor : LanguageBaseBaseVisitor<object>
    {
        private Dictionary<string, object> VARIABLES = new Dictionary<string, object>();

        public override object VisitCommand_block_func([NotNull] Command_block_funcContext context)
        {
            var body = (BlockContext)context.GetChild(3);
            VARIABLES.Add(context.VARIABLE().ToString(), body);
            return null;
        }

        public override object VisitCommand_block_while([NotNull] Command_block_whileContext context)
        {
            var conditionExp = (Bool_argContext)context.GetChild(1);
            var body = (BlockContext)context.GetChild(3);
            while (true)
            {
                bool condition = Eval(conditionExp);
                if (!condition)
                    break;
                Visit(body);
            }

            var footer = context.children[2];

            return base.Visit(body);
        }

        public override object VisitCommand_block_if([NotNull] Command_block_ifContext context)
        {
            if (context.ChildCount < 3)
            {
                throw new Exception();
            }

            bool condition = Eval(context.GetChild<Bool_argContext>(0));
            if (condition)
            {
                var body = (BlockContext)context.GetChild(3);
                return Visit(body);
            }       
            else if (context.ChildCount == 5)
            {
                // else's body
                var els = (Command_block_elseContext)context.GetChild(4);
                if (els != null)
                {
                    var b = els.block();
                    return Visit(b);
                }
            }

            return null;
        }

        public override object VisitCommand_call([NotNull] Command_callContext context)
        {
            var body = (BlockContext)VARIABLES[context.VARIABLE().ToString()];
            return VisitBlock(body);
        }

        public override object VisitCommand_assign([NotNull] Command_assignContext context)
        {
            var value = Eval(context.children[1]).ToString();
            VARIABLES[context.children[0].ToString()] = value;

            return base.VisitCommand_assign(context);
        }

        public override object VisitCommand_read([NotNull] Command_readContext context)
        {
            var value = Console.ReadLine();
            VARIABLES.Add(context.VARIABLE().ToString(), value);
            return base.VisitCommand_read(context);
        }

        public override object VisitCommand_print([NotNull] Command_printContext context)
        {
            bool first = true;
            foreach (var item in context.children)
            {
                if (first)
                {
                    first = false;
                    continue;
                }

                var value = Eval(item);
                Console.Write($"{value} ");
            }
            Console.WriteLine();

            return base.VisitCommand_print(context);
        }

        private object Eval(IParseTree parseTree)
        {
            if (parseTree is TerminalNodeImpl t)
            {
                return Eval(t);
            }
            else if (parseTree is Command_argContext a)
            {
                var args = new List<object>();
                foreach (var item in a.children)
                {
                    var subEval = Eval(item);
                    args.Add(subEval);
                }

                return args.Count == 1 ? args[0] : args;
            }
            else if (parseTree is Math_argContext m)
            {
                return Eval(m);
            }
            else if (parseTree is Bool_argContext b)
            {
                return Eval(b);
            }
            throw new NotSupportedException();
        }

        private object Eval(TerminalNodeImpl t)
        {
            if (t.Symbol.Type == STRING)
            {
                return t.ToString();
            }
            else if (t.Symbol.Type == NUMBER)
            {
                return t.ToString();
            }
            else if (t.Symbol.Type == VARIABLE)
            {
                return VARIABLES[t.ToString()];
            }
            else if (t.Symbol.Type == BOOL_TRUE)
            {
                return true;
            }
            else if (t.Symbol.Type == VARIABLE)
            {
                return false;
            }
            throw new ArgumentException();
        }

        private bool Eval(Bool_argContext m)
        {
            if (m.children.Count == 1 && m.children[0] is TerminalNodeImpl m1)
            {
                if (m1.Symbol.Type == BOOL_TRUE)
                    return true;

                if (m1.Symbol.Type == BOOL_FALSE)
                    return false;

                throw new ArgumentException();
            }

            if (m.ChildCount != 3)
                throw new Exception();

            string left = GetTerminalString(GetLastTerminalNodeChild(m.GetChild(0), 0));
            var op = (TerminalNodeImpl)m.children[1];
            string right = GetTerminalString(GetLastTerminalNodeChild(m.GetChild(2), 0));

            if (op.Symbol.Type == BOOL_EQ)
                return left == right; // compare bool as string

            if (op.Symbol.Type == BOOL_GT)
                return double.Parse(left) > double.Parse(right);

            if (op.Symbol.Type == BOOL_LT)
                return double.Parse(left) < double.Parse(right);


            throw new ArgumentException();
        }

        private string GetTerminalString(TerminalNodeImpl t)
        {
            if (t.Symbol.Type == VARIABLE)
            {
                return VARIABLES[t.ToString()].ToString();
            }
            else if (t.Symbol.Type == NUMBER)
            {
                return t.GetText();
            }
            throw new ArgumentException();
        }

        private double Eval(Math_argContext m)
        {
            double value = 0;

            var left = GetDoubleValue(GetLastTerminalNodeChild(m.GetChild(0), 0));
            var op = (TerminalNodeImpl)m.children[1];
            var right = GetDoubleValue(GetLastTerminalNodeChild(m.GetChild(2), 0));

            if (op.Symbol.Type == ADD)
                return left + right;

            if (op.Symbol.Type == SUB)
                return left - right;

            if (op.Symbol.Type == MUL)
                return left * right;

            if (op.Symbol.Type == DIV)
                return left / right;

            return value;
        }

        private TerminalNodeImpl GetLastTerminalNodeChild(IParseTree context, int index)
        {
            if (context.ChildCount == 0)
            {
                return (TerminalNodeImpl)context;
            }
            return GetLastTerminalNodeChild(context.GetChild(0), index);
        }


        private  object GetLastTerminalNodeValue(IParseTree context, int index)
        {
            var value = GetLastTerminalNodeChild(context.GetChild(0), index);
            return Eval(value);
        }

        private double GetDoubleValue(TerminalNodeImpl t)
        {
            if (t.Symbol.Type == VARIABLE)
            {
                return Convert.ToDouble(VARIABLES[t.ToString()]);
            }
            else// if (t.Symbol.Type == NUMBER)
            {
                return double.Parse(t.GetText());
            }
        }
    }
}
