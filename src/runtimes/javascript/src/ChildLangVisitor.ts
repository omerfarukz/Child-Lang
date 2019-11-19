import * as P from "./grammar/LanguageBaseParser";
import { LanguageBaseVisitor } from "./grammar/LanguageBaseVisitor";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { LanguageBaseLexer } from "./grammar/LanguageBaseLexer";

import { UserInputOutput } from "./UserInputOutput";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";

export class ChildLangVisitor implements LanguageBaseVisitor<object>
{
    private defaultResult: Object = new Object();
    private ENVIRONMENT: Map<string, any> = new Map<string, any>();

    constructor(private io: UserInputOutput) { }

    visitCommand_print(ctx: P.Command_printContext) {
        for (var i = 1; i < ctx.childCount; i++) {
            const value = this.eval(ctx.getChild(i));
            let valueToWrite: string = "" + value;

            this.io.write(valueToWrite, false);

            if (i < ctx.childCount)
                this.io.write(' ', false);
        }
        this.io.write('', true);
        return this.defaultResult;
    }

    async visitCommand_read(ctx: P.Command_readContext) {
        var line = await this.io.readLine();
        this.ENVIRONMENT.set(ctx.VARIABLE().text, line);
        return this.defaultResult;
    }

    visitCommand_assign(ctx: P.Command_assignContext) {
        var value = this.eval(ctx.getChild(1));
        this.ENVIRONMENT.set(ctx.VARIABLE().text, value);
        return this.defaultResult;
    }

    async visitCommand_call(ctx: P.Command_callContext) {
        var block = this.ENVIRONMENT.get(ctx.VARIABLE().text);
        return await this.visit(block);
    }

    async visitCommand_block_if(ctx: P.Command_block_ifContext) {
        let condition: boolean = this.eval(ctx.bool_arg());
        if (condition) {
            return await this.visit(ctx.block());
        } else {
            var elseBlock = ctx.command_block_else();
            if (elseBlock != null) {
                return await this.visit(elseBlock.block());
            }
        }
        return this.defaultResult;
    }

    visitCommand_block_func(ctx: P.Command_block_funcContext) {
        this.ENVIRONMENT.set(ctx.VARIABLE().text, ctx.block());
        return this.defaultResult;
    }

    async visitCommand_block_while(ctx: P.Command_block_whileContext) {
        while (this.eval(ctx.bool_arg())) {
            await this.visit(ctx.block());
        }
        return this.defaultResult;
    }

    async visit(tree: ParseTree): Promise<object> {
        //this.log(tree.toStringTree());
        if (
            tree instanceof P.LangContext ||
            tree instanceof P.BlockContext ||
            tree instanceof P.CommandContext
        ) {
            if (tree.children != null) {
                for(let i = 0; i < tree.childCount; i++) {
                    const child = tree.getChild(i);
                    await this.visit(child);
                }
            }
        } else {
            if (tree instanceof P.Command_printContext)
                return this.visitCommand_print(tree);

            if (tree instanceof P.Command_readContext)
                return await this.visitCommand_read(tree);

            if (tree instanceof P.Command_assignContext)
                return this.visitCommand_assign(tree);

            if (tree instanceof P.Command_callContext)
                return await this.visitCommand_call(tree);

            if (tree instanceof P.Command_block_ifContext)
                return await this.visitCommand_block_if(tree);

            if (tree instanceof P.Command_block_funcContext)
                return this.visitCommand_block_func(tree);

            if (tree instanceof P.Command_block_whileContext)
                return await this.visitCommand_block_while(tree);
        }
        return this.defaultResult;
    }

    eval(tree: ParseTree): any {
        if (tree instanceof P.Command_argContext) {
            if (tree.childCount == 1) {
                return this.eval(tree.getChild(0));
            }
        } else if (tree instanceof TerminalNode) {
            if (tree.symbol.type == LanguageBaseLexer.STRING)
                return tree.text;

            if (tree.symbol.type == LanguageBaseLexer.NUMBER)
                return tree.text;

            if (tree.symbol.type == LanguageBaseLexer.BOOL_TRUE)
                return true; // TODO:

            if (tree.symbol.type == LanguageBaseLexer.BOOL_FALSE)
                return false; // TODO:

            if (tree.symbol.type == LanguageBaseLexer.VARIABLE) {
                var value = this.ENVIRONMENT.get(tree.text);
                if (value != null)
                    return value;
            }
        } else if (tree instanceof P.Math_argContext) {
            if (tree.childCount == 1) {
                return this.eval(tree.getChild(0));
            } else if (tree.childCount == 3) {
                const left = parseFloat(this.eval(tree.getChild(0)));
                var operator = tree.getChild(1) as TerminalNode;
                const right = parseFloat(this.eval(tree.getChild(2)));

                if (operator.symbol.type == LanguageBaseLexer.ADD)
                    return left + right;
                if (operator.symbol.type == LanguageBaseLexer.SUB)
                    return left - right;
                if (operator.symbol.type == LanguageBaseLexer.MUL)
                    return left * right;
                if (operator.symbol.type == LanguageBaseLexer.DIV)
                    return left / right;
            }
        } else if (tree instanceof P.Bool_argContext) {
            if (tree.childCount == 1) {
                return this.eval(tree.getChild(0));
            } else if (tree.childCount == 3) {
                const left = this.eval(tree.getChild(0));
                var operator = tree.getChild(1) as TerminalNode;
                const right = this.eval(tree.getChild(2));

                if (operator.symbol.type == LanguageBaseLexer.BOOL_EQ)
                    return (left == right);
                else if (operator.symbol.type == LanguageBaseLexer.BOOL_GT)
                    return (parseFloat(left) > parseFloat(right));
                else if (operator.symbol.type == LanguageBaseLexer.BOOL_LT)
                    return (parseFloat(left) < parseFloat(right));
            }
        }

        throw new Error("tree can not evaluated. " + tree.toStringTree());
    }

    visitChildren(node: RuleNode): object {
        throw new Error("Method not implemented.");
    }
    visitTerminal(node: TerminalNode): object {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node: ErrorNode): object {
        throw new Error("Method not implemented.");
    }

    log(message?: any, ...optionalParams: any[]): void {
        console.debug("[log", message, "]", optionalParams);
    }
}