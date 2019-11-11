using System;
using System.Collections.Generic;
using Antlr4.Runtime.Misc;
using Antlr4.Runtime.Tree;
using static LanguageBaseParser;

public class ChildLangVisitor : LanguageBaseBaseVisitor<object>
{
    private Dictionary<string, object> ENVIRONMENT = new Dictionary<string, object>();

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

            Console.Write($"{Eval(item)} ");
        }
        Console.WriteLine();

        return base.VisitCommand_print(context);
    }

    public override object VisitCommand_read([NotNull] Command_readContext context)
    {
        var value = Console.ReadLine();
        ENVIRONMENT.Add(context.VARIABLE().ToString(), value);
        return base.VisitCommand_read(context);
    }

    public override object VisitCommand_assign([NotNull] Command_assignContext context)
    {
        var value = Eval(context.children[1]).ToString();
        ENVIRONMENT[context.children[0].ToString()] = value;

        return base.VisitCommand_assign(context);
    }

    public override object VisitCommand_block_func([NotNull] Command_block_funcContext context)
    {
        var body = (BlockContext)context.GetChild(3);
        ENVIRONMENT.Add(context.VARIABLE().ToString(), body);
        return null;
    }

    public override object VisitCommand_call([NotNull] Command_callContext context)
    {
        var body = (BlockContext)ENVIRONMENT[context.VARIABLE().ToString()];
        return VisitBlock(body);
    }

    public override object VisitCommand_block_if([NotNull] Command_block_ifContext context)
    {
        if (context.ChildCount < 3)
            throw new ChildLangRuntimeException();

        bool condition = Eval(context.GetChild<Bool_argContext>(0));
        if (condition)
        {
            var block = (BlockContext)context.GetChild(3);
            return Visit(block);
        }
        else if (context.ChildCount == 5)
        {
            var elseContext = (Command_block_elseContext)context.GetChild(4);
            if (elseContext != null)
            {
                return Visit(elseContext.block());
            }
        }

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
        return base.Visit(body);
    }

    private object Eval(IParseTree arg)
    {
        if (arg is TerminalNodeImpl terminalNode)
            return Eval(terminalNode);

        if (arg is Math_argContext mathArg)
            return Eval(mathArg);

        if (arg is Bool_argContext boolArg)
            return Eval(boolArg);

        if (arg is Command_argContext commandArg)
        {
            var args = new List<object>();
            foreach (var item in commandArg.children)
            {
                var subEval = Eval(item);
                args.Add(subEval);
            }

            return args.Count == 1 ? args[0] : args;
        }
        throw new ChildLangRuntimeException();
    }

    private object Eval(TerminalNodeImpl arg)
    {
        if (arg.Symbol.Type == STRING)
            return arg.ToString();

        if (arg.Symbol.Type == NUMBER)
            return arg.ToString();

        if (arg.Symbol.Type == VARIABLE)
            return ENVIRONMENT[arg.ToString()];

        if (arg.Symbol.Type == BOOL_TRUE)
            return true;

        if (arg.Symbol.Type == VARIABLE)
            return false;

        throw new ChildLangRuntimeException();
    }

    /// <summary>
    /// todo: refactor
    /// </summary>
    /// <param name="arg"></param>
    /// <returns></returns>
    private bool Eval(Bool_argContext arg)
    {
        if (arg.children.Count == 1 && arg.children[0] is TerminalNodeImpl node)
        {
            if (node.Symbol.Type == BOOL_TRUE)
                return true;

            if (node.Symbol.Type == BOOL_FALSE)
                return false;

            throw new ChildLangRuntimeException();
        }

        if (arg.ChildCount != 3)
            throw new ChildLangRuntimeException();

        string left = GetTerminalString(GetLastTerminalNodeChild(arg.GetChild(0), 0));
        var op = (TerminalNodeImpl)arg.children[1];
        string right = GetTerminalString(GetLastTerminalNodeChild(arg.GetChild(2), 0));

        if (op.Symbol.Type == BOOL_EQ)
            return left == right; // compare bool as string

        if (op.Symbol.Type == BOOL_GT)
            return double.Parse(left) > double.Parse(right);

        if (op.Symbol.Type == BOOL_LT)
            return double.Parse(left) < double.Parse(right);


        throw new ChildLangRuntimeException();
    }

    private double Eval(Math_argContext arg)
    {
        double value = 0;

        var left = GetDoubleValue(GetLastTerminalNodeChild(arg.GetChild(0), 0));
        var op = (TerminalNodeImpl)arg.children[1];
        var right = GetDoubleValue(GetLastTerminalNodeChild(arg.GetChild(2), 0));

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
            return (TerminalNodeImpl)context;

        return GetLastTerminalNodeChild(context.GetChild(0), index);
    }

    private string GetTerminalString(TerminalNodeImpl t)
    {
        if (t.Symbol.Type == VARIABLE)
            return ENVIRONMENT[t.ToString()].ToString();

        if (t.Symbol.Type == NUMBER)
            return t.GetText();

        throw new ChildLangRuntimeException();
    }

    private double GetDoubleValue(TerminalNodeImpl t)
    {
        if (t.Symbol.Type == VARIABLE)
            return Convert.ToDouble(ENVIRONMENT[t.ToString()]);

        return double.Parse(t.GetText());
    }
}
