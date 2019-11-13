import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { LangContext } from "./LanguageBaseParser";
import { BlockContext } from "./LanguageBaseParser";
import { CommandContext } from "./LanguageBaseParser";
import { Command_printContext } from "./LanguageBaseParser";
import { Command_readContext } from "./LanguageBaseParser";
import { Command_assignContext } from "./LanguageBaseParser";
import { Command_block_funcContext } from "./LanguageBaseParser";
import { Command_callContext } from "./LanguageBaseParser";
import { Command_block_ifContext } from "./LanguageBaseParser";
import { Command_block_elseContext } from "./LanguageBaseParser";
import { Command_block_whileContext } from "./LanguageBaseParser";
import { Math_argContext } from "./LanguageBaseParser";
import { Bool_argContext } from "./LanguageBaseParser";
import { Command_argContext } from "./LanguageBaseParser";
/**
 * This interface defines a complete listener for a parse tree produced by
 * `LanguageBaseParser`.
 */
export interface LanguageBaseListener extends ParseTreeListener {
    /**
     * Enter a parse tree produced by `LanguageBaseParser.lang`.
     * @param ctx the parse tree
     */
    enterLang?: (ctx: LangContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.lang`.
     * @param ctx the parse tree
     */
    exitLang?: (ctx: LangContext) => void;
    /**
     * Enter a parse tree produced by `LanguageBaseParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `LanguageBaseParser.command`.
     * @param ctx the parse tree
     */
    enterCommand?: (ctx: CommandContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.command`.
     * @param ctx the parse tree
     */
    exitCommand?: (ctx: CommandContext) => void;
    /**
     * Enter a parse tree produced by `LanguageBaseParser.command_print`.
     * @param ctx the parse tree
     */
    enterCommand_print?: (ctx: Command_printContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.command_print`.
     * @param ctx the parse tree
     */
    exitCommand_print?: (ctx: Command_printContext) => void;
    /**
     * Enter a parse tree produced by `LanguageBaseParser.command_read`.
     * @param ctx the parse tree
     */
    enterCommand_read?: (ctx: Command_readContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.command_read`.
     * @param ctx the parse tree
     */
    exitCommand_read?: (ctx: Command_readContext) => void;
    /**
     * Enter a parse tree produced by `LanguageBaseParser.command_assign`.
     * @param ctx the parse tree
     */
    enterCommand_assign?: (ctx: Command_assignContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.command_assign`.
     * @param ctx the parse tree
     */
    exitCommand_assign?: (ctx: Command_assignContext) => void;
    /**
     * Enter a parse tree produced by `LanguageBaseParser.command_block_func`.
     * @param ctx the parse tree
     */
    enterCommand_block_func?: (ctx: Command_block_funcContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.command_block_func`.
     * @param ctx the parse tree
     */
    exitCommand_block_func?: (ctx: Command_block_funcContext) => void;
    /**
     * Enter a parse tree produced by `LanguageBaseParser.command_call`.
     * @param ctx the parse tree
     */
    enterCommand_call?: (ctx: Command_callContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.command_call`.
     * @param ctx the parse tree
     */
    exitCommand_call?: (ctx: Command_callContext) => void;
    /**
     * Enter a parse tree produced by `LanguageBaseParser.command_block_if`.
     * @param ctx the parse tree
     */
    enterCommand_block_if?: (ctx: Command_block_ifContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.command_block_if`.
     * @param ctx the parse tree
     */
    exitCommand_block_if?: (ctx: Command_block_ifContext) => void;
    /**
     * Enter a parse tree produced by `LanguageBaseParser.command_block_else`.
     * @param ctx the parse tree
     */
    enterCommand_block_else?: (ctx: Command_block_elseContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.command_block_else`.
     * @param ctx the parse tree
     */
    exitCommand_block_else?: (ctx: Command_block_elseContext) => void;
    /**
     * Enter a parse tree produced by `LanguageBaseParser.command_block_while`.
     * @param ctx the parse tree
     */
    enterCommand_block_while?: (ctx: Command_block_whileContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.command_block_while`.
     * @param ctx the parse tree
     */
    exitCommand_block_while?: (ctx: Command_block_whileContext) => void;
    /**
     * Enter a parse tree produced by `LanguageBaseParser.math_arg`.
     * @param ctx the parse tree
     */
    enterMath_arg?: (ctx: Math_argContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.math_arg`.
     * @param ctx the parse tree
     */
    exitMath_arg?: (ctx: Math_argContext) => void;
    /**
     * Enter a parse tree produced by `LanguageBaseParser.bool_arg`.
     * @param ctx the parse tree
     */
    enterBool_arg?: (ctx: Bool_argContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.bool_arg`.
     * @param ctx the parse tree
     */
    exitBool_arg?: (ctx: Bool_argContext) => void;
    /**
     * Enter a parse tree produced by `LanguageBaseParser.command_arg`.
     * @param ctx the parse tree
     */
    enterCommand_arg?: (ctx: Command_argContext) => void;
    /**
     * Exit a parse tree produced by `LanguageBaseParser.command_arg`.
     * @param ctx the parse tree
     */
    exitCommand_arg?: (ctx: Command_argContext) => void;
}