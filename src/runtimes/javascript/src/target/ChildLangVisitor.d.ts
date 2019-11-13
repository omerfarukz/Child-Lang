import * as P from "./grammar/LanguageBaseParser";
import { LanguageBaseVisitor } from "./grammar/LanguageBaseVisitor";
import { ParseTree } from "antlr4ts/tree/ParseTree";
export declare class ChildLangVisitor implements LanguageBaseVisitor<object> {
    private defaultResult;
    private ENVIRONMENT;
    visitCommand_print(ctx: P.Command_printContext): Object;
    visitCommand_read(ctx: P.Command_readContext): Object;
    visitCommand_assign(ctx: P.Command_assignContext): Object;
    visitCommand_call(ctx: P.Command_callContext): object;
    visitCommand_block_if(ctx: P.Command_block_ifContext): object;
    visitCommand_block_func(ctx: P.Command_block_funcContext): Object;
    visitCommand_block_while(ctx: P.Command_block_whileContext): Object;
    visit(tree: import("antlr4ts/tree/ParseTree").ParseTree): object;
    visitChildren(node: import("antlr4ts/tree/RuleNode").RuleNode): object;
    visitTerminal(node: import("antlr4ts/tree/TerminalNode").TerminalNode): object;
    visitErrorNode(node: import("antlr4ts/tree/ErrorNode").ErrorNode): object;
    eval(tree: ParseTree): any;
    log(message?: any, ...optionalParams: any[]): void;
}
