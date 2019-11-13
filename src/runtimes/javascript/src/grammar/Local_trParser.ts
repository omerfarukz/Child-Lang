// Generated from grammar/Local_tr.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Local_trVisitor } from "./Local_trVisitor";


export class Local_trParser extends Parser {
	public static readonly COMMAND_WRITE = 1;
	public static readonly COMMAND_READ = 2;
	public static readonly COMMAND_FUNC = 3;
	public static readonly COMMAND_CALL = 4;
	public static readonly COMMAND_IF = 5;
	public static readonly COMMAND_ELSE = 6;
	public static readonly COMMAND_WHILE = 7;
	public static readonly BOOL_EQ = 8;
	public static readonly BOOL_GT = 9;
	public static readonly BOOL_LT = 10;
	public static readonly BOOL_TRUE = 11;
	public static readonly BOOL_FALSE = 12;
	public static readonly MUL = 13;
	public static readonly DIV = 14;
	public static readonly ADD = 15;
	public static readonly SUB = 16;
	public static readonly VARIABLE = 17;
	public static readonly NUMBER = 18;
	public static readonly STRING = 19;
	public static readonly COMMENT = 20;
	public static readonly TEXT = 21;
	public static readonly QUOTE = 22;
	public static readonly EOL = 23;
	public static readonly WS = 24;
	public static readonly RULE_lang = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_command = 2;
	public static readonly RULE_command_print = 3;
	public static readonly RULE_command_read = 4;
	public static readonly RULE_command_assign = 5;
	public static readonly RULE_command_block_func = 6;
	public static readonly RULE_command_call = 7;
	public static readonly RULE_command_block_if = 8;
	public static readonly RULE_command_block_else = 9;
	public static readonly RULE_command_block_while = 10;
	public static readonly RULE_math_arg = 11;
	public static readonly RULE_bool_arg = 12;
	public static readonly RULE_command_arg = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"lang", "block", "command", "command_print", "command_read", "command_assign", 
		"command_block_func", "command_call", "command_block_if", "command_block_else", 
		"command_block_while", "math_arg", "bool_arg", "command_arg",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'yaz'", "'oku'", "'metot'", "'git'", "'e\u011Fer'", "'de\u011Filse'", 
		"'d\u00F6ng\u00FC'", "'e\u015Fittir'", "'b\u00FCy\u00FCkt\u00FCr'", "'k\u00FC\u00E7\u00FCkt\u00FCr'", 
		"'evet'", "'hay\u0131r'", undefined, "'b\u00F6l\u00FC'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMAND_WRITE", "COMMAND_READ", "COMMAND_FUNC", "COMMAND_CALL", 
		"COMMAND_IF", "COMMAND_ELSE", "COMMAND_WHILE", "BOOL_EQ", "BOOL_GT", "BOOL_LT", 
		"BOOL_TRUE", "BOOL_FALSE", "MUL", "DIV", "ADD", "SUB", "VARIABLE", "NUMBER", 
		"STRING", "COMMENT", "TEXT", "QUOTE", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Local_trParser._LITERAL_NAMES, Local_trParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Local_trParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Local_tr.g4"; }

	// @Override
	public get ruleNames(): string[] { return Local_trParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Local_trParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Local_trParser._ATN, this);
	}
	// @RuleVersion(0)
	public lang(): LangContext {
		let _localctx: LangContext = new LangContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Local_trParser.RULE_lang);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 28;
				this.block();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Local_trParser.COMMAND_WRITE) | (1 << Local_trParser.COMMAND_READ) | (1 << Local_trParser.COMMAND_FUNC) | (1 << Local_trParser.COMMAND_CALL) | (1 << Local_trParser.COMMAND_IF) | (1 << Local_trParser.COMMAND_WHILE) | (1 << Local_trParser.VARIABLE) | (1 << Local_trParser.COMMENT))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Local_trParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.state = 47;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Local_trParser.COMMAND_FUNC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 33;
				this.command_block_func();
				}
				break;
			case Local_trParser.COMMAND_IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 34;
				this.command_block_if();
				}
				break;
			case Local_trParser.COMMAND_WHILE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 35;
				this.command_block_while();
				}
				break;
			case Local_trParser.COMMAND_WRITE:
			case Local_trParser.COMMAND_READ:
			case Local_trParser.COMMAND_CALL:
			case Local_trParser.VARIABLE:
			case Local_trParser.COMMENT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 37;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 36;
						this.command();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 39;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 42;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 41;
					this.match(Local_trParser.EOL);
					}
					break;
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Local_trParser.EOL) {
					{
					this.state = 44;
					this.match(Local_trParser.EOL);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command(): CommandContext {
		let _localctx: CommandContext = new CommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Local_trParser.RULE_command);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Local_trParser.COMMENT:
				{
				this.state = 49;
				this.match(Local_trParser.COMMENT);
				}
				break;
			case Local_trParser.COMMAND_CALL:
				{
				this.state = 50;
				this.command_call();
				}
				break;
			case Local_trParser.COMMAND_WRITE:
				{
				this.state = 51;
				this.command_print();
				}
				break;
			case Local_trParser.COMMAND_READ:
				{
				this.state = 52;
				this.command_read();
				}
				break;
			case Local_trParser.VARIABLE:
				{
				this.state = 53;
				this.command_assign();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 57;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 56;
				this.match(Local_trParser.EOL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_print(): Command_printContext {
		let _localctx: Command_printContext = new Command_printContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Local_trParser.RULE_command_print);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.match(Local_trParser.COMMAND_WRITE);
			this.state = 63;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 63;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						this.state = 60;
						this.command_arg();
						}
						break;

					case 2:
						{
						this.state = 61;
						this.math_arg(0);
						}
						break;

					case 3:
						{
						this.state = 62;
						this.bool_arg();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 65;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_read(): Command_readContext {
		let _localctx: Command_readContext = new Command_readContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Local_trParser.RULE_command_read);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(Local_trParser.COMMAND_READ);
			this.state = 68;
			this.match(Local_trParser.VARIABLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_assign(): Command_assignContext {
		let _localctx: Command_assignContext = new Command_assignContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Local_trParser.RULE_command_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(Local_trParser.VARIABLE);
			this.state = 74;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 71;
				this.command_arg();
				}
				break;

			case 2:
				{
				this.state = 72;
				this.bool_arg();
				}
				break;

			case 3:
				{
				this.state = 73;
				this.math_arg(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_block_func(): Command_block_funcContext {
		let _localctx: Command_block_funcContext = new Command_block_funcContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Local_trParser.RULE_command_block_func);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(Local_trParser.COMMAND_FUNC);
			this.state = 77;
			this.match(Local_trParser.VARIABLE);
			this.state = 78;
			this.match(Local_trParser.EOL);
			this.state = 79;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_call(): Command_callContext {
		let _localctx: Command_callContext = new Command_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Local_trParser.RULE_command_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.match(Local_trParser.COMMAND_CALL);
			this.state = 82;
			this.match(Local_trParser.VARIABLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_block_if(): Command_block_ifContext {
		let _localctx: Command_block_ifContext = new Command_block_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Local_trParser.RULE_command_block_if);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(Local_trParser.COMMAND_IF);
			this.state = 85;
			this.bool_arg();
			this.state = 86;
			this.match(Local_trParser.EOL);
			this.state = 87;
			this.block();
			this.state = 89;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 88;
				this.command_block_else();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_block_else(): Command_block_elseContext {
		let _localctx: Command_block_elseContext = new Command_block_elseContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Local_trParser.RULE_command_block_else);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(Local_trParser.COMMAND_ELSE);
			this.state = 92;
			this.match(Local_trParser.EOL);
			this.state = 93;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_block_while(): Command_block_whileContext {
		let _localctx: Command_block_whileContext = new Command_block_whileContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Local_trParser.RULE_command_block_while);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.match(Local_trParser.COMMAND_WHILE);
			this.state = 96;
			this.bool_arg();
			this.state = 97;
			this.match(Local_trParser.EOL);
			this.state = 98;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public math_arg(): Math_argContext;
	public math_arg(_p: number): Math_argContext;
	// @RuleVersion(0)
	public math_arg(_p?: number): Math_argContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Math_argContext = new Math_argContext(this._ctx, _parentState);
		let _prevctx: Math_argContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, Local_trParser.RULE_math_arg, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Local_trParser.NUMBER:
				{
				this.state = 101;
				this.match(Local_trParser.NUMBER);
				}
				break;
			case Local_trParser.VARIABLE:
				{
				this.state = 102;
				this.match(Local_trParser.VARIABLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 113;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 111;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						_localctx = new Math_argContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Local_trParser.RULE_math_arg);
						this.state = 105;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 106;
						_la = this._input.LA(1);
						if (!(_la === Local_trParser.MUL || _la === Local_trParser.DIV)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 107;
						this.math_arg(5);
						}
						break;

					case 2:
						{
						_localctx = new Math_argContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Local_trParser.RULE_math_arg);
						this.state = 108;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 109;
						_la = this._input.LA(1);
						if (!(_la === Local_trParser.ADD || _la === Local_trParser.SUB)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 110;
						this.math_arg(4);
						}
						break;
					}
					}
				}
				this.state = 115;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool_arg(): Bool_argContext {
		let _localctx: Bool_argContext = new Bool_argContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Local_trParser.RULE_bool_arg);
		let _la: number;
		try {
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
				_la = this._input.LA(1);
				if (!(_la === Local_trParser.VARIABLE || _la === Local_trParser.NUMBER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 117;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Local_trParser.BOOL_EQ) | (1 << Local_trParser.BOOL_GT) | (1 << Local_trParser.BOOL_LT))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 118;
				_la = this._input.LA(1);
				if (!(_la === Local_trParser.VARIABLE || _la === Local_trParser.NUMBER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 119;
				this.match(Local_trParser.VARIABLE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 120;
				_la = this._input.LA(1);
				if (!(_la === Local_trParser.BOOL_TRUE || _la === Local_trParser.BOOL_FALSE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command_arg(): Command_argContext {
		let _localctx: Command_argContext = new Command_argContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Local_trParser.RULE_command_arg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Local_trParser.VARIABLE) | (1 << Local_trParser.NUMBER) | (1 << Local_trParser.STRING))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 11:
			return this.math_arg_sempred(_localctx as Math_argContext, predIndex);
		}
		return true;
	}
	private math_arg_sempred(_localctx: Math_argContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1A\x80\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x06\x02 \n\x02\r\x02\x0E\x02!\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x06\x03(\n\x03\r\x03\x0E\x03)\x03\x03\x05\x03" +
		"-\n\x03\x03\x03\x05\x030\n\x03\x05\x032\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x049\n\x04\x03\x04\x05\x04<\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x06\x05B\n\x05\r\x05\x0E\x05C\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07M\n\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\\\n\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05" +
		"\rj\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\rr\n\r\f\r\x0E\ru\v\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E|\n\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x02\x02\x03\x18\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\b" +
		"\x03\x02\x0F\x10\x03\x02\x11\x12\x03\x02\x13\x14\x03\x02\n\f\x03\x02\r" +
		"\x0E\x03\x02\x13\x15\x02\x88\x02\x1F\x03\x02\x02\x02\x041\x03\x02\x02" +
		"\x02\x068\x03\x02\x02\x02\b=\x03\x02\x02\x02\nE\x03\x02\x02\x02\fH\x03" +
		"\x02\x02\x02\x0EN\x03\x02\x02\x02\x10S\x03\x02\x02\x02\x12V\x03\x02\x02" +
		"\x02\x14]\x03\x02\x02\x02\x16a\x03\x02\x02\x02\x18i\x03\x02\x02\x02\x1A" +
		"{\x03\x02\x02\x02\x1C}\x03\x02\x02\x02\x1E \x05\x04\x03\x02\x1F\x1E\x03" +
		"\x02\x02\x02 !\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02" +
		"\"\x03\x03\x02\x02\x02#2\x05\x0E\b\x02$2\x05\x12\n\x02%2\x05\x16\f\x02" +
		"&(\x05\x06\x04\x02\'&\x03\x02\x02\x02()\x03\x02\x02\x02)\'\x03\x02\x02" +
		"\x02)*\x03\x02\x02\x02*,\x03\x02\x02\x02+-\x07\x19\x02\x02,+\x03\x02\x02" +
		"\x02,-\x03\x02\x02\x02-/\x03\x02\x02\x02.0\x07\x19\x02\x02/.\x03\x02\x02" +
		"\x02/0\x03\x02\x02\x0202\x03\x02\x02\x021#\x03\x02\x02\x021$\x03\x02\x02" +
		"\x021%\x03\x02\x02\x021\'\x03\x02\x02\x022\x05\x03\x02\x02\x0239\x07\x16" +
		"\x02\x0249\x05\x10\t\x0259\x05\b\x05\x0269\x05\n\x06\x0279\x05\f\x07\x02" +
		"83\x03\x02\x02\x0284\x03\x02\x02\x0285\x03\x02\x02\x0286\x03\x02\x02\x02" +
		"87\x03\x02\x02\x029;\x03\x02\x02\x02:<\x07\x19\x02\x02;:\x03\x02\x02\x02" +
		";<\x03\x02\x02\x02<\x07\x03\x02\x02\x02=A\x07\x03\x02\x02>B\x05\x1C\x0F" +
		"\x02?B\x05\x18\r\x02@B\x05\x1A\x0E\x02A>\x03\x02\x02\x02A?\x03\x02\x02" +
		"\x02A@\x03\x02\x02\x02BC\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02" +
		"\x02D\t\x03\x02\x02\x02EF\x07\x04\x02\x02FG\x07\x13\x02\x02G\v\x03\x02" +
		"\x02\x02HL\x07\x13\x02\x02IM\x05\x1C\x0F\x02JM\x05\x1A\x0E\x02KM\x05\x18" +
		"\r\x02LI\x03\x02\x02\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02M\r\x03\x02" +
		"\x02\x02NO\x07\x05\x02\x02OP\x07\x13\x02\x02PQ\x07\x19\x02\x02QR\x05\x04" +
		"\x03\x02R\x0F\x03\x02\x02\x02ST\x07\x06\x02\x02TU\x07\x13\x02\x02U\x11" +
		"\x03\x02\x02\x02VW\x07\x07\x02\x02WX\x05\x1A\x0E\x02XY\x07\x19\x02\x02" +
		"Y[\x05\x04\x03\x02Z\\\x05\x14\v\x02[Z\x03\x02\x02\x02[\\\x03\x02\x02\x02" +
		"\\\x13\x03\x02\x02\x02]^\x07\b\x02\x02^_\x07\x19\x02\x02_`\x05\x04\x03" +
		"\x02`\x15\x03\x02\x02\x02ab\x07\t\x02\x02bc\x05\x1A\x0E\x02cd\x07\x19" +
		"\x02\x02de\x05\x04\x03\x02e\x17\x03\x02\x02\x02fg\b\r\x01\x02gj\x07\x14" +
		"\x02\x02hj\x07\x13\x02\x02if\x03\x02\x02\x02ih\x03\x02\x02\x02js\x03\x02" +
		"\x02\x02kl\f\x06\x02\x02lm\t\x02\x02\x02mr\x05\x18\r\x07no\f\x05\x02\x02" +
		"op\t\x03\x02\x02pr\x05\x18\r\x06qk\x03\x02\x02\x02qn\x03\x02\x02\x02r" +
		"u\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02t\x19\x03\x02\x02" +
		"\x02us\x03\x02\x02\x02vw\t\x04\x02\x02wx\t\x05\x02\x02x|\t\x04\x02\x02" +
		"y|\x07\x13\x02\x02z|\t\x06\x02\x02{v\x03\x02\x02\x02{y\x03\x02\x02\x02" +
		"{z\x03\x02\x02\x02|\x1B\x03\x02\x02\x02}~\t\x07\x02\x02~\x1D\x03\x02\x02" +
		"\x02\x11!),/18;ACL[iqs{";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Local_trParser.__ATN) {
			Local_trParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Local_trParser._serializedATN));
		}

		return Local_trParser.__ATN;
	}

}

export class LangContext extends ParserRuleContext {
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_lang; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitLang) {
			return visitor.visitLang(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public command_block_func(): Command_block_funcContext | undefined {
		return this.tryGetRuleContext(0, Command_block_funcContext);
	}
	public command_block_if(): Command_block_ifContext | undefined {
		return this.tryGetRuleContext(0, Command_block_ifContext);
	}
	public command_block_while(): Command_block_whileContext | undefined {
		return this.tryGetRuleContext(0, Command_block_whileContext);
	}
	public command(): CommandContext[];
	public command(i: number): CommandContext;
	public command(i?: number): CommandContext | CommandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommandContext);
		} else {
			return this.getRuleContext(i, CommandContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Local_trParser.EOL);
		} else {
			return this.getToken(Local_trParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_block; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.COMMENT, 0); }
	public command_call(): Command_callContext | undefined {
		return this.tryGetRuleContext(0, Command_callContext);
	}
	public command_print(): Command_printContext | undefined {
		return this.tryGetRuleContext(0, Command_printContext);
	}
	public command_read(): Command_readContext | undefined {
		return this.tryGetRuleContext(0, Command_readContext);
	}
	public command_assign(): Command_assignContext | undefined {
		return this.tryGetRuleContext(0, Command_assignContext);
	}
	public EOL(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_command; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitCommand) {
			return visitor.visitCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_printContext extends ParserRuleContext {
	public COMMAND_WRITE(): TerminalNode { return this.getToken(Local_trParser.COMMAND_WRITE, 0); }
	public command_arg(): Command_argContext[];
	public command_arg(i: number): Command_argContext;
	public command_arg(i?: number): Command_argContext | Command_argContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Command_argContext);
		} else {
			return this.getRuleContext(i, Command_argContext);
		}
	}
	public math_arg(): Math_argContext[];
	public math_arg(i: number): Math_argContext;
	public math_arg(i?: number): Math_argContext | Math_argContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Math_argContext);
		} else {
			return this.getRuleContext(i, Math_argContext);
		}
	}
	public bool_arg(): Bool_argContext[];
	public bool_arg(i: number): Bool_argContext;
	public bool_arg(i?: number): Bool_argContext | Bool_argContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bool_argContext);
		} else {
			return this.getRuleContext(i, Bool_argContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_command_print; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitCommand_print) {
			return visitor.visitCommand_print(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_readContext extends ParserRuleContext {
	public COMMAND_READ(): TerminalNode { return this.getToken(Local_trParser.COMMAND_READ, 0); }
	public VARIABLE(): TerminalNode { return this.getToken(Local_trParser.VARIABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_command_read; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitCommand_read) {
			return visitor.visitCommand_read(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_assignContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(Local_trParser.VARIABLE, 0); }
	public command_arg(): Command_argContext | undefined {
		return this.tryGetRuleContext(0, Command_argContext);
	}
	public bool_arg(): Bool_argContext | undefined {
		return this.tryGetRuleContext(0, Bool_argContext);
	}
	public math_arg(): Math_argContext | undefined {
		return this.tryGetRuleContext(0, Math_argContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_command_assign; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitCommand_assign) {
			return visitor.visitCommand_assign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_block_funcContext extends ParserRuleContext {
	public COMMAND_FUNC(): TerminalNode { return this.getToken(Local_trParser.COMMAND_FUNC, 0); }
	public VARIABLE(): TerminalNode { return this.getToken(Local_trParser.VARIABLE, 0); }
	public EOL(): TerminalNode { return this.getToken(Local_trParser.EOL, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_command_block_func; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitCommand_block_func) {
			return visitor.visitCommand_block_func(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_callContext extends ParserRuleContext {
	public COMMAND_CALL(): TerminalNode { return this.getToken(Local_trParser.COMMAND_CALL, 0); }
	public VARIABLE(): TerminalNode { return this.getToken(Local_trParser.VARIABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_command_call; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitCommand_call) {
			return visitor.visitCommand_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_block_ifContext extends ParserRuleContext {
	public COMMAND_IF(): TerminalNode { return this.getToken(Local_trParser.COMMAND_IF, 0); }
	public bool_arg(): Bool_argContext {
		return this.getRuleContext(0, Bool_argContext);
	}
	public EOL(): TerminalNode { return this.getToken(Local_trParser.EOL, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public command_block_else(): Command_block_elseContext | undefined {
		return this.tryGetRuleContext(0, Command_block_elseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_command_block_if; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitCommand_block_if) {
			return visitor.visitCommand_block_if(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_block_elseContext extends ParserRuleContext {
	public COMMAND_ELSE(): TerminalNode { return this.getToken(Local_trParser.COMMAND_ELSE, 0); }
	public EOL(): TerminalNode { return this.getToken(Local_trParser.EOL, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_command_block_else; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitCommand_block_else) {
			return visitor.visitCommand_block_else(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_block_whileContext extends ParserRuleContext {
	public COMMAND_WHILE(): TerminalNode { return this.getToken(Local_trParser.COMMAND_WHILE, 0); }
	public bool_arg(): Bool_argContext {
		return this.getRuleContext(0, Bool_argContext);
	}
	public EOL(): TerminalNode { return this.getToken(Local_trParser.EOL, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_command_block_while; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitCommand_block_while) {
			return visitor.visitCommand_block_while(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Math_argContext extends ParserRuleContext {
	public math_arg(): Math_argContext[];
	public math_arg(i: number): Math_argContext;
	public math_arg(i?: number): Math_argContext | Math_argContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Math_argContext);
		} else {
			return this.getRuleContext(i, Math_argContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.DIV, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.SUB, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.NUMBER, 0); }
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.VARIABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_math_arg; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitMath_arg) {
			return visitor.visitMath_arg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_argContext extends ParserRuleContext {
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Local_trParser.NUMBER);
		} else {
			return this.getToken(Local_trParser.NUMBER, i);
		}
	}
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Local_trParser.VARIABLE);
		} else {
			return this.getToken(Local_trParser.VARIABLE, i);
		}
	}
	public BOOL_EQ(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.BOOL_EQ, 0); }
	public BOOL_GT(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.BOOL_GT, 0); }
	public BOOL_LT(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.BOOL_LT, 0); }
	public BOOL_TRUE(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.BOOL_TRUE, 0); }
	public BOOL_FALSE(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.BOOL_FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_bool_arg; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitBool_arg) {
			return visitor.visitBool_arg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_argContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.VARIABLE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(Local_trParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Local_trParser.RULE_command_arg; }
	// @Override
	public accept<Result>(visitor: Local_trVisitor<Result>): Result {
		if (visitor.visitCommand_arg) {
			return visitor.visitCommand_arg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


