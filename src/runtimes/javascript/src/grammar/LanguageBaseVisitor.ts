// Generated from grammar/LanguageBase.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LanguageBaseParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LanguageBaseVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LanguageBaseParser.lang`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLang?: (ctx: LangContext) => Result;

	/**
	 * Visit a parse tree produced by `LanguageBaseParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `LanguageBaseParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `LanguageBaseParser.command_print`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_print?: (ctx: Command_printContext) => Result;

	/**
	 * Visit a parse tree produced by `LanguageBaseParser.command_read`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_read?: (ctx: Command_readContext) => Result;

	/**
	 * Visit a parse tree produced by `LanguageBaseParser.command_assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_assign?: (ctx: Command_assignContext) => Result;

	/**
	 * Visit a parse tree produced by `LanguageBaseParser.command_block_func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_block_func?: (ctx: Command_block_funcContext) => Result;

	/**
	 * Visit a parse tree produced by `LanguageBaseParser.command_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_call?: (ctx: Command_callContext) => Result;

	/**
	 * Visit a parse tree produced by `LanguageBaseParser.command_block_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_block_if?: (ctx: Command_block_ifContext) => Result;

	/**
	 * Visit a parse tree produced by `LanguageBaseParser.command_block_else`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_block_else?: (ctx: Command_block_elseContext) => Result;

	/**
	 * Visit a parse tree produced by `LanguageBaseParser.command_block_while`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_block_while?: (ctx: Command_block_whileContext) => Result;

	/**
	 * Visit a parse tree produced by `LanguageBaseParser.math_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMath_arg?: (ctx: Math_argContext) => Result;

	/**
	 * Visit a parse tree produced by `LanguageBaseParser.bool_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_arg?: (ctx: Bool_argContext) => Result;

	/**
	 * Visit a parse tree produced by `LanguageBaseParser.command_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_arg?: (ctx: Command_argContext) => Result;
}

