using System;
using System.Collections.Generic;
using Antlr4.Runtime.Misc;
using Antlr4.Runtime.Tree;
using static langParser;

namespace ChildLang.impl
{
    public class ChildLangVisitor : langBaseVisitor<object>
    {
        private Dictionary<string, object> VARIABLES = new Dictionary<string, object>();

        public override object VisitCommand_block_func([NotNull] Command_block_funcContext context)
        {
            var body = context.GetChild<BlockContext>(1);
            VARIABLES.Add(context.VARIABLE().ToString(), body);
            return base.Visit(context.children[2]);
        }

        public override object VisitCommand_block_while([NotNull] Command_block_whileContext context)
        {
            var conditionExp = context.GetChild<Bool_argContext>(1);
            var body = context.GetChild<BlockContext>(1);
            while (true)
            {
                bool condition = Eval(conditionExp.bool_arg()[0]);
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

            bool condition = Eval(context.GetChild<Bool_argContext>(0).bool_arg()[0]);
            if (condition)
            {
                var body = (BlockContext)context.children[1];
                Visit(body);
            }
            else if (context.ChildCount == 4)
            {
                var body = context.GetChild< Command_block_elseContext>(2).block();
                Visit(body);
            }

            var footer = context.children[context.ChildCount - 1];
            return base.Visit(footer);
        }

        public override object VisitCommand_call([NotNull] Command_callContext context)
        {
            var body = (BlockContext)VARIABLES[context.VARIABLE().ToString()];
            return VisitBlock(body);
        }


        /// <summary>
        /// todo: remove
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public override object VisitBlock([NotNull] BlockContext context)
        {
            return base.VisitBlock(context);
        }

        public override object VisitAssign_arg([NotNull] Assign_argContext context)
        {
            var value = Eval(context.children[0]).ToString();
            var parent = (Command_assignContext)context.Parent;
            ITerminalNode parentVar = parent.VARIABLE();
            VARIABLES[parentVar.ToString()] = value;

            return base.VisitAssign_arg(context);
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

            throw new ArgumentException();
        }

        private bool Eval(Bool_argContext m)
        {
            if (m.ChildCount != 3)
                throw new Exception();

            string left = GetTerminalString((TerminalNodeImpl)m.children[0]);
            var op = (TerminalNodeImpl)m.children[1];
            string right = GetTerminalString((TerminalNodeImpl)m.children[2]);

            if (op.Symbol.Type == BOOL_EQ)
                return left == right; // compare bool as string

            if (op.Symbol.Type == BOOL_GT)
                return double.Parse(left) > double.Parse(right);

            if (op.Symbol.Type == BOOL_LS)
                return double.Parse(left) < double.Parse(right);

            if (op.Symbol.Type == BOOL_TRUE)
                return true;

            if (op.Symbol.Type == BOOL_FALSE)
                return false;

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

            var left = GetDoubleValue((TerminalNodeImpl)m.children[0]);
            var op = (TerminalNodeImpl)m.children[1];
            var right = GetDoubleValue((TerminalNodeImpl)m.children[2]);

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
