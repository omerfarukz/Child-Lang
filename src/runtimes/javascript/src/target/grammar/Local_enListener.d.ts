import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { LangContext } from "./Local_enParser";
import { BlockContext } from "./Local_enParser";
import { CommandContext } from "./Local_enParser";
import { Command_printContext } from "./Local_enParser";
import { Command_readContext } from "./Local_enParser";
import { Command_assignContext } from "./Local_enParser";
import { Command_block_funcContext } from "./Local_enParser";
import { Command_callContext } from "./Local_enParser";
import { Command_block_ifContext } from "./Local_enParser";
import { Command_block_elseContext } from "./Local_enParser";
import { Command_block_whileContext } from "./Local_enParser";
import { Math_argContext } from "./Local_enParser";
import { Bool_argContext } from "./Local_enParser";
import { Command_argContext } from "./Local_enParser";
/**
 * This interface defines a complete listener for a parse tree produced by
 * `Local_enParser`.
 */
export interface Local_enListener extends ParseTreeListener {
    /**
     * Enter a parse tree produced by `Local_enParser.lang`.
     * @param ctx the parse tree
     */
    enterLang?: (ctx: LangContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.lang`.
     * @param ctx the parse tree
     */
    exitLang?: (ctx: LangContext) => void;
    /**
     * Enter a parse tree produced by `Local_enParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `Local_enParser.command`.
     * @param ctx the parse tree
     */
    enterCommand?: (ctx: CommandContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.command`.
     * @param ctx the parse tree
     */
    exitCommand?: (ctx: CommandContext) => void;
    /**
     * Enter a parse tree produced by `Local_enParser.command_print`.
     * @param ctx the parse tree
     */
    enterCommand_print?: (ctx: Command_printContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.command_print`.
     * @param ctx the parse tree
     */
    exitCommand_print?: (ctx: Command_printContext) => void;
    /**
     * Enter a parse tree produced by `Local_enParser.command_read`.
     * @param ctx the parse tree
     */
    enterCommand_read?: (ctx: Command_readContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.command_read`.
     * @param ctx the parse tree
     */
    exitCommand_read?: (ctx: Command_readContext) => void;
    /**
     * Enter a parse tree produced by `Local_enParser.command_assign`.
     * @param ctx the parse tree
     */
    enterCommand_assign?: (ctx: Command_assignContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.command_assign`.
     * @param ctx the parse tree
     */
    exitCommand_assign?: (ctx: Command_assignContext) => void;
    /**
     * Enter a parse tree produced by `Local_enParser.command_block_func`.
     * @param ctx the parse tree
     */
    enterCommand_block_func?: (ctx: Command_block_funcContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.command_block_func`.
     * @param ctx the parse tree
     */
    exitCommand_block_func?: (ctx: Command_block_funcContext) => void;
    /**
     * Enter a parse tree produced by `Local_enParser.command_call`.
     * @param ctx the parse tree
     */
    enterCommand_call?: (ctx: Command_callContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.command_call`.
     * @param ctx the parse tree
     */
    exitCommand_call?: (ctx: Command_callContext) => void;
    /**
     * Enter a parse tree produced by `Local_enParser.command_block_if`.
     * @param ctx the parse tree
     */
    enterCommand_block_if?: (ctx: Command_block_ifContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.command_block_if`.
     * @param ctx the parse tree
     */
    exitCommand_block_if?: (ctx: Command_block_ifContext) => void;
    /**
     * Enter a parse tree produced by `Local_enParser.command_block_else`.
     * @param ctx the parse tree
     */
    enterCommand_block_else?: (ctx: Command_block_elseContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.command_block_else`.
     * @param ctx the parse tree
     */
    exitCommand_block_else?: (ctx: Command_block_elseContext) => void;
    /**
     * Enter a parse tree produced by `Local_enParser.command_block_while`.
     * @param ctx the parse tree
     */
    enterCommand_block_while?: (ctx: Command_block_whileContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.command_block_while`.
     * @param ctx the parse tree
     */
    exitCommand_block_while?: (ctx: Command_block_whileContext) => void;
    /**
     * Enter a parse tree produced by `Local_enParser.math_arg`.
     * @param ctx the parse tree
     */
    enterMath_arg?: (ctx: Math_argContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.math_arg`.
     * @param ctx the parse tree
     */
    exitMath_arg?: (ctx: Math_argContext) => void;
    /**
     * Enter a parse tree produced by `Local_enParser.bool_arg`.
     * @param ctx the parse tree
     */
    enterBool_arg?: (ctx: Bool_argContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.bool_arg`.
     * @param ctx the parse tree
     */
    exitBool_arg?: (ctx: Bool_argContext) => void;
    /**
     * Enter a parse tree produced by `Local_enParser.command_arg`.
     * @param ctx the parse tree
     */
    enterCommand_arg?: (ctx: Command_argContext) => void;
    /**
     * Exit a parse tree produced by `Local_enParser.command_arg`.
     * @param ctx the parse tree
     */
    exitCommand_arg?: (ctx: Command_argContext) => void;
}
