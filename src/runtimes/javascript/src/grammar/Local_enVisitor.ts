// Generated from grammar/Local_en.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Local_enParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Local_enVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `Local_enParser.lang`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLang?: (ctx: LangContext) => Result;

	/**
	 * Visit a parse tree produced by `Local_enParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `Local_enParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `Local_enParser.command_print`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_print?: (ctx: Command_printContext) => Result;

	/**
	 * Visit a parse tree produced by `Local_enParser.command_read`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_read?: (ctx: Command_readContext) => Result;

	/**
	 * Visit a parse tree produced by `Local_enParser.command_assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_assign?: (ctx: Command_assignContext) => Result;

	/**
	 * Visit a parse tree produced by `Local_enParser.command_block_func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_block_func?: (ctx: Command_block_funcContext) => Result;

	/**
	 * Visit a parse tree produced by `Local_enParser.command_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_call?: (ctx: Command_callContext) => Result;

	/**
	 * Visit a parse tree produced by `Local_enParser.command_block_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_block_if?: (ctx: Command_block_ifContext) => Result;

	/**
	 * Visit a parse tree produced by `Local_enParser.command_block_else`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_block_else?: (ctx: Command_block_elseContext) => Result;

	/**
	 * Visit a parse tree produced by `Local_enParser.command_block_while`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_block_while?: (ctx: Command_block_whileContext) => Result;

	/**
	 * Visit a parse tree produced by `Local_enParser.math_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMath_arg?: (ctx: Math_argContext) => Result;

	/**
	 * Visit a parse tree produced by `Local_enParser.bool_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_arg?: (ctx: Bool_argContext) => Result;

	/**
	 * Visit a parse tree produced by `Local_enParser.command_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_arg?: (ctx: Command_argContext) => Result;
}

