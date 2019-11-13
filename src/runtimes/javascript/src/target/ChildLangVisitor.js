"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const P = require("./grammar/LanguageBaseParser");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const LanguageBaseLexer_1 = require("./grammar/LanguageBaseLexer");
const readlineSync = require("readline-sync"); // TODO:
class ChildLangVisitor {
    constructor() {
        this.defaultResult = new Object();
        this.ENVIRONMENT = new Map();
    }
    visitCommand_print(ctx) {
        for (var i = 1; i < ctx.childCount; i++) {
            const value = this.eval(ctx.getChild(i));
            let valueToWrite = "" + value; // TODO: 
            process.stdout.write(valueToWrite); // TODO:
            if (i < ctx.childCount)
                process.stdout.write(' '); // TODO: 
        }
        process.stdout.write('\r\n');
        return this.defaultResult;
    }
    visitCommand_read(ctx) {
        var line = readlineSync.question('');
        this.ENVIRONMENT.set(ctx.VARIABLE().text, line);
        return this.defaultResult;
    }
    visitCommand_assign(ctx) {
        var value = this.eval(ctx.getChild(1));
        this.ENVIRONMENT.set(ctx.VARIABLE().text, value);
        return this.defaultResult;
    }
    visitCommand_call(ctx) {
        var block = this.ENVIRONMENT.get(ctx.VARIABLE().text);
        return this.visit(block);
    }
    visitCommand_block_if(ctx) {
        let condition = this.eval(ctx.bool_arg());
        if (condition) {
            return this.visit(ctx.block());
        }
        else {
            var elseBlock = ctx.command_block_else();
            if (elseBlock != null) {
                return this.visit(elseBlock.block());
            }
        }
        return this.defaultResult;
    }
    visitCommand_block_func(ctx) {
        this.ENVIRONMENT.set(ctx.VARIABLE().text, ctx.block());
        return this.defaultResult;
    }
    visitCommand_block_while(ctx) {
        while (this.eval(ctx.bool_arg())) {
            this.visit(ctx.block());
        }
        return this.defaultResult;
    }
    visit(tree) {
        //this.log(tree.toStringTree());
        if (tree instanceof P.LangContext ||
            tree instanceof P.BlockContext ||
            tree instanceof P.CommandContext) {
            if (tree.children != null) {
                tree.children.forEach(child => {
                    this.visit(child);
                });
            }
        }
        else {
            if (tree instanceof P.Command_printContext)
                return this.visitCommand_print(tree);
            if (tree instanceof P.Command_readContext)
                return this.visitCommand_read(tree);
            if (tree instanceof P.Command_assignContext)
                return this.visitCommand_assign(tree);
            if (tree instanceof P.Command_callContext)
                return this.visitCommand_call(tree);
            if (tree instanceof P.Command_block_ifContext)
                return this.visitCommand_block_if(tree);
            if (tree instanceof P.Command_block_funcContext)
                return this.visitCommand_block_func(tree);
            if (tree instanceof P.Command_block_whileContext)
                return this.visitCommand_block_while(tree);
        }
        return this.defaultResult;
    }
    visitChildren(node) {
        throw new Error("Method not implemented.");
    }
    visitTerminal(node) {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node) {
        throw new Error("Method not implemented.");
    }
    eval(tree) {
        if (tree instanceof P.Command_argContext) {
            if (tree.childCount == 1) {
                return this.eval(tree.getChild(0));
            }
        }
        else if (tree instanceof TerminalNode_1.TerminalNode) {
            if (tree.symbol.type == LanguageBaseLexer_1.LanguageBaseLexer.STRING)
                return tree.text;
            if (tree.symbol.type == LanguageBaseLexer_1.LanguageBaseLexer.NUMBER)
                return tree.text;
            if (tree.symbol.type == LanguageBaseLexer_1.LanguageBaseLexer.BOOL_TRUE)
                return true; // TODO:
            if (tree.symbol.type == LanguageBaseLexer_1.LanguageBaseLexer.BOOL_FALSE)
                return false; // TODO:
            if (tree.symbol.type == LanguageBaseLexer_1.LanguageBaseLexer.VARIABLE) {
                var value = this.ENVIRONMENT.get(tree.text);
                if (value != null)
                    return value;
            }
        }
        else if (tree instanceof P.Math_argContext) {
            if (tree.childCount == 1) {
                return this.eval(tree.getChild(0));
            }
            else if (tree.childCount == 3) {
                const left = parseFloat(this.eval(tree.getChild(0)));
                var operator = tree.getChild(1);
                const right = parseFloat(this.eval(tree.getChild(2)));
                var evaluated = Number.NaN;
                if (operator.symbol.type == LanguageBaseLexer_1.LanguageBaseLexer.ADD)
                    return left + right;
                if (operator.symbol.type == LanguageBaseLexer_1.LanguageBaseLexer.SUB)
                    return left - right;
                if (operator.symbol.type == LanguageBaseLexer_1.LanguageBaseLexer.MUL)
                    return left * right;
                if (operator.symbol.type == LanguageBaseLexer_1.LanguageBaseLexer.DIV)
                    return left / right;
            }
        }
        else if (tree instanceof P.Bool_argContext) {
            if (tree.childCount == 1) {
                return this.eval(tree.getChild(0));
            }
            else if (tree.childCount == 3) {
                const left = this.eval(tree.getChild(0));
                var operator = tree.getChild(1);
                const right = this.eval(tree.getChild(2));
                let evaluated = false;
                if (operator.symbol.type == LanguageBaseLexer_1.LanguageBaseLexer.BOOL_EQ)
                    return (left == right);
                else if (operator.symbol.type == LanguageBaseLexer_1.LanguageBaseLexer.BOOL_GT)
                    return (left > right);
                else if (operator.symbol.type == LanguageBaseLexer_1.LanguageBaseLexer.BOOL_LT)
                    return (left < right);
            }
        }
        throw new Error("tree can not evaluated. " + tree.toStringTree());
    }
    log(message, ...optionalParams) {
        console.debug("[log", message, "]", optionalParams);
    }
}
exports.ChildLangVisitor = ChildLangVisitor;
//# sourceMappingURL=ChildLangVisitor.js.map