"use strict";
// Generated from grammar/Local_en.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class Local_enParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(Local_enParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return Local_enParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "Local_en.g4"; }
    // @Override
    get ruleNames() { return Local_enParser.ruleNames; }
    // @Override
    get serializedATN() { return Local_enParser._serializedATN; }
    // @RuleVersion(0)
    lang() {
        let _localctx = new LangContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, Local_enParser.RULE_lang);
        let _la;
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
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Local_enParser.COMMAND_WRITE) | (1 << Local_enParser.COMMAND_READ) | (1 << Local_enParser.COMMAND_FUNC) | (1 << Local_enParser.COMMAND_CALL) | (1 << Local_enParser.COMMAND_IF) | (1 << Local_enParser.COMMAND_WHILE) | (1 << Local_enParser.VARIABLE) | (1 << Local_enParser.COMMENT))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, Local_enParser.RULE_block);
        let _la;
        try {
            let _alt;
            this.state = 47;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case Local_enParser.COMMAND_FUNC:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 33;
                        this.command_block_func();
                    }
                    break;
                case Local_enParser.COMMAND_IF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 34;
                        this.command_block_if();
                    }
                    break;
                case Local_enParser.COMMAND_WHILE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 35;
                        this.command_block_while();
                    }
                    break;
                case Local_enParser.COMMAND_WRITE:
                case Local_enParser.COMMAND_READ:
                case Local_enParser.COMMAND_CALL:
                case Local_enParser.VARIABLE:
                case Local_enParser.COMMENT:
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
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 39;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 42;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                            case 1:
                                {
                                    this.state = 41;
                                    this.match(Local_enParser.EOL);
                                }
                                break;
                        }
                        this.state = 45;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === Local_enParser.EOL) {
                            {
                                this.state = 44;
                                this.match(Local_enParser.EOL);
                            }
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    command() {
        let _localctx = new CommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, Local_enParser.RULE_command);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 54;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Local_enParser.COMMENT:
                        {
                            this.state = 49;
                            this.match(Local_enParser.COMMENT);
                        }
                        break;
                    case Local_enParser.COMMAND_CALL:
                        {
                            this.state = 50;
                            this.command_call();
                        }
                        break;
                    case Local_enParser.COMMAND_WRITE:
                        {
                            this.state = 51;
                            this.command_print();
                        }
                        break;
                    case Local_enParser.COMMAND_READ:
                        {
                            this.state = 52;
                            this.command_read();
                        }
                        break;
                    case Local_enParser.VARIABLE:
                        {
                            this.state = 53;
                            this.command_assign();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 57;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            this.state = 56;
                            this.match(Local_enParser.EOL);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    command_print() {
        let _localctx = new Command_printContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, Local_enParser.RULE_command_print);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 59;
                this.match(Local_enParser.COMMAND_WRITE);
                this.state = 63;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 63;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
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
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 65;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    command_read() {
        let _localctx = new Command_readContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, Local_enParser.RULE_command_read);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 67;
                this.match(Local_enParser.COMMAND_READ);
                this.state = 68;
                this.match(Local_enParser.VARIABLE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    command_assign() {
        let _localctx = new Command_assignContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, Local_enParser.RULE_command_assign);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 70;
                this.match(Local_enParser.VARIABLE);
                this.state = 74;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    command_block_func() {
        let _localctx = new Command_block_funcContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, Local_enParser.RULE_command_block_func);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 76;
                this.match(Local_enParser.COMMAND_FUNC);
                this.state = 77;
                this.match(Local_enParser.VARIABLE);
                this.state = 78;
                this.match(Local_enParser.EOL);
                this.state = 79;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    command_call() {
        let _localctx = new Command_callContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, Local_enParser.RULE_command_call);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 81;
                this.match(Local_enParser.COMMAND_CALL);
                this.state = 82;
                this.match(Local_enParser.VARIABLE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    command_block_if() {
        let _localctx = new Command_block_ifContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, Local_enParser.RULE_command_block_if);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 84;
                this.match(Local_enParser.COMMAND_IF);
                this.state = 85;
                this.bool_arg();
                this.state = 86;
                this.match(Local_enParser.EOL);
                this.state = 87;
                this.block();
                this.state = 89;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    command_block_else() {
        let _localctx = new Command_block_elseContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, Local_enParser.RULE_command_block_else);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 91;
                this.match(Local_enParser.COMMAND_ELSE);
                this.state = 92;
                this.match(Local_enParser.EOL);
                this.state = 93;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    command_block_while() {
        let _localctx = new Command_block_whileContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, Local_enParser.RULE_command_block_while);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 95;
                this.match(Local_enParser.COMMAND_WHILE);
                this.state = 96;
                this.bool_arg();
                this.state = 97;
                this.match(Local_enParser.EOL);
                this.state = 98;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    math_arg(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Math_argContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 22;
        this.enterRecursionRule(_localctx, 22, Local_enParser.RULE_math_arg, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 103;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Local_enParser.NUMBER:
                        {
                            this.state = 101;
                            this.match(Local_enParser.NUMBER);
                        }
                        break;
                    case Local_enParser.VARIABLE:
                        {
                            this.state = 102;
                            this.match(Local_enParser.VARIABLE);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 113;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 111;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new Math_argContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, Local_enParser.RULE_math_arg);
                                        this.state = 105;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 106;
                                        _la = this._input.LA(1);
                                        if (!(_la === Local_enParser.MUL || _la === Local_enParser.DIV)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
                                        this.pushNewRecursionContext(_localctx, _startState, Local_enParser.RULE_math_arg);
                                        this.state = 108;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 109;
                                        _la = this._input.LA(1);
                                        if (!(_la === Local_enParser.ADD || _la === Local_enParser.SUB)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    bool_arg() {
        let _localctx = new Bool_argContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, Local_enParser.RULE_bool_arg);
        let _la;
        try {
            this.state = 121;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 116;
                        _la = this._input.LA(1);
                        if (!(_la === Local_enParser.VARIABLE || _la === Local_enParser.NUMBER)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 117;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Local_enParser.BOOL_EQ) | (1 << Local_enParser.BOOL_GT) | (1 << Local_enParser.BOOL_LT))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 118;
                        _la = this._input.LA(1);
                        if (!(_la === Local_enParser.VARIABLE || _la === Local_enParser.NUMBER)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
                        this.match(Local_enParser.VARIABLE);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 120;
                        _la = this._input.LA(1);
                        if (!(_la === Local_enParser.BOOL_TRUE || _la === Local_enParser.BOOL_FALSE)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    command_arg() {
        let _localctx = new Command_argContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, Local_enParser.RULE_command_arg);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 123;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Local_enParser.VARIABLE) | (1 << Local_enParser.NUMBER) | (1 << Local_enParser.STRING))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 11:
                return this.math_arg_sempred(_localctx, predIndex);
        }
        return true;
    }
    math_arg_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 4);
            case 1:
                return this.precpred(this._ctx, 3);
        }
        return true;
    }
    static get _ATN() {
        if (!Local_enParser.__ATN) {
            Local_enParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(Local_enParser._serializedATN));
        }
        return Local_enParser.__ATN;
    }
}
exports.Local_enParser = Local_enParser;
Local_enParser.COMMAND_WRITE = 1;
Local_enParser.COMMAND_READ = 2;
Local_enParser.COMMAND_FUNC = 3;
Local_enParser.COMMAND_CALL = 4;
Local_enParser.COMMAND_IF = 5;
Local_enParser.COMMAND_ELSE = 6;
Local_enParser.COMMAND_WHILE = 7;
Local_enParser.BOOL_EQ = 8;
Local_enParser.BOOL_GT = 9;
Local_enParser.BOOL_LT = 10;
Local_enParser.BOOL_TRUE = 11;
Local_enParser.BOOL_FALSE = 12;
Local_enParser.MUL = 13;
Local_enParser.DIV = 14;
Local_enParser.ADD = 15;
Local_enParser.SUB = 16;
Local_enParser.VARIABLE = 17;
Local_enParser.NUMBER = 18;
Local_enParser.STRING = 19;
Local_enParser.COMMENT = 20;
Local_enParser.TEXT = 21;
Local_enParser.QUOTE = 22;
Local_enParser.EOL = 23;
Local_enParser.WS = 24;
Local_enParser.RULE_lang = 0;
Local_enParser.RULE_block = 1;
Local_enParser.RULE_command = 2;
Local_enParser.RULE_command_print = 3;
Local_enParser.RULE_command_read = 4;
Local_enParser.RULE_command_assign = 5;
Local_enParser.RULE_command_block_func = 6;
Local_enParser.RULE_command_call = 7;
Local_enParser.RULE_command_block_if = 8;
Local_enParser.RULE_command_block_else = 9;
Local_enParser.RULE_command_block_while = 10;
Local_enParser.RULE_math_arg = 11;
Local_enParser.RULE_bool_arg = 12;
Local_enParser.RULE_command_arg = 13;
// tslint:disable:no-trailing-whitespace
Local_enParser.ruleNames = [
    "lang", "block", "command", "command_print", "command_read", "command_assign",
    "command_block_func", "command_call", "command_block_if", "command_block_else",
    "command_block_while", "math_arg", "bool_arg", "command_arg",
];
Local_enParser._LITERAL_NAMES = [
    undefined, "'print'", "'read'", "'func'", "'call'", "'if'", "'else'",
    "'while'", "'equals'", "'greater'", "'lesser'", "'true'", "'false'", "'times'",
    "'divide'", "'plus'", "'minus'", undefined, undefined, undefined, undefined,
    undefined, "'\"'",
];
Local_enParser._SYMBOLIC_NAMES = [
    undefined, "COMMAND_WRITE", "COMMAND_READ", "COMMAND_FUNC", "COMMAND_CALL",
    "COMMAND_IF", "COMMAND_ELSE", "COMMAND_WHILE", "BOOL_EQ", "BOOL_GT", "BOOL_LT",
    "BOOL_TRUE", "BOOL_FALSE", "MUL", "DIV", "ADD", "SUB", "VARIABLE", "NUMBER",
    "STRING", "COMMENT", "TEXT", "QUOTE", "EOL", "WS",
];
Local_enParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(Local_enParser._LITERAL_NAMES, Local_enParser._SYMBOLIC_NAMES, []);
Local_enParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1A\x80\x04\x02" +
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
class LangContext extends ParserRuleContext_1.ParserRuleContext {
    block(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }
        else {
            return this.getRuleContext(i, BlockContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_lang; }
    // @Override
    accept(visitor) {
        if (visitor.visitLang) {
            return visitor.visitLang(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LangContext = LangContext;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    command_block_func() {
        return this.tryGetRuleContext(0, Command_block_funcContext);
    }
    command_block_if() {
        return this.tryGetRuleContext(0, Command_block_ifContext);
    }
    command_block_while() {
        return this.tryGetRuleContext(0, Command_block_whileContext);
    }
    command(i) {
        if (i === undefined) {
            return this.getRuleContexts(CommandContext);
        }
        else {
            return this.getRuleContext(i, CommandContext);
        }
    }
    EOL(i) {
        if (i === undefined) {
            return this.getTokens(Local_enParser.EOL);
        }
        else {
            return this.getToken(Local_enParser.EOL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_block; }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class CommandContext extends ParserRuleContext_1.ParserRuleContext {
    COMMENT() { return this.tryGetToken(Local_enParser.COMMENT, 0); }
    command_call() {
        return this.tryGetRuleContext(0, Command_callContext);
    }
    command_print() {
        return this.tryGetRuleContext(0, Command_printContext);
    }
    command_read() {
        return this.tryGetRuleContext(0, Command_readContext);
    }
    command_assign() {
        return this.tryGetRuleContext(0, Command_assignContext);
    }
    EOL() { return this.tryGetToken(Local_enParser.EOL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_command; }
    // @Override
    accept(visitor) {
        if (visitor.visitCommand) {
            return visitor.visitCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CommandContext = CommandContext;
class Command_printContext extends ParserRuleContext_1.ParserRuleContext {
    COMMAND_WRITE() { return this.getToken(Local_enParser.COMMAND_WRITE, 0); }
    command_arg(i) {
        if (i === undefined) {
            return this.getRuleContexts(Command_argContext);
        }
        else {
            return this.getRuleContext(i, Command_argContext);
        }
    }
    math_arg(i) {
        if (i === undefined) {
            return this.getRuleContexts(Math_argContext);
        }
        else {
            return this.getRuleContext(i, Math_argContext);
        }
    }
    bool_arg(i) {
        if (i === undefined) {
            return this.getRuleContexts(Bool_argContext);
        }
        else {
            return this.getRuleContext(i, Bool_argContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_command_print; }
    // @Override
    accept(visitor) {
        if (visitor.visitCommand_print) {
            return visitor.visitCommand_print(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Command_printContext = Command_printContext;
class Command_readContext extends ParserRuleContext_1.ParserRuleContext {
    COMMAND_READ() { return this.getToken(Local_enParser.COMMAND_READ, 0); }
    VARIABLE() { return this.getToken(Local_enParser.VARIABLE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_command_read; }
    // @Override
    accept(visitor) {
        if (visitor.visitCommand_read) {
            return visitor.visitCommand_read(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Command_readContext = Command_readContext;
class Command_assignContext extends ParserRuleContext_1.ParserRuleContext {
    VARIABLE() { return this.getToken(Local_enParser.VARIABLE, 0); }
    command_arg() {
        return this.tryGetRuleContext(0, Command_argContext);
    }
    bool_arg() {
        return this.tryGetRuleContext(0, Bool_argContext);
    }
    math_arg() {
        return this.tryGetRuleContext(0, Math_argContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_command_assign; }
    // @Override
    accept(visitor) {
        if (visitor.visitCommand_assign) {
            return visitor.visitCommand_assign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Command_assignContext = Command_assignContext;
class Command_block_funcContext extends ParserRuleContext_1.ParserRuleContext {
    COMMAND_FUNC() { return this.getToken(Local_enParser.COMMAND_FUNC, 0); }
    VARIABLE() { return this.getToken(Local_enParser.VARIABLE, 0); }
    EOL() { return this.getToken(Local_enParser.EOL, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_command_block_func; }
    // @Override
    accept(visitor) {
        if (visitor.visitCommand_block_func) {
            return visitor.visitCommand_block_func(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Command_block_funcContext = Command_block_funcContext;
class Command_callContext extends ParserRuleContext_1.ParserRuleContext {
    COMMAND_CALL() { return this.getToken(Local_enParser.COMMAND_CALL, 0); }
    VARIABLE() { return this.getToken(Local_enParser.VARIABLE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_command_call; }
    // @Override
    accept(visitor) {
        if (visitor.visitCommand_call) {
            return visitor.visitCommand_call(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Command_callContext = Command_callContext;
class Command_block_ifContext extends ParserRuleContext_1.ParserRuleContext {
    COMMAND_IF() { return this.getToken(Local_enParser.COMMAND_IF, 0); }
    bool_arg() {
        return this.getRuleContext(0, Bool_argContext);
    }
    EOL() { return this.getToken(Local_enParser.EOL, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    command_block_else() {
        return this.tryGetRuleContext(0, Command_block_elseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_command_block_if; }
    // @Override
    accept(visitor) {
        if (visitor.visitCommand_block_if) {
            return visitor.visitCommand_block_if(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Command_block_ifContext = Command_block_ifContext;
class Command_block_elseContext extends ParserRuleContext_1.ParserRuleContext {
    COMMAND_ELSE() { return this.getToken(Local_enParser.COMMAND_ELSE, 0); }
    EOL() { return this.getToken(Local_enParser.EOL, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_command_block_else; }
    // @Override
    accept(visitor) {
        if (visitor.visitCommand_block_else) {
            return visitor.visitCommand_block_else(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Command_block_elseContext = Command_block_elseContext;
class Command_block_whileContext extends ParserRuleContext_1.ParserRuleContext {
    COMMAND_WHILE() { return this.getToken(Local_enParser.COMMAND_WHILE, 0); }
    bool_arg() {
        return this.getRuleContext(0, Bool_argContext);
    }
    EOL() { return this.getToken(Local_enParser.EOL, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_command_block_while; }
    // @Override
    accept(visitor) {
        if (visitor.visitCommand_block_while) {
            return visitor.visitCommand_block_while(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Command_block_whileContext = Command_block_whileContext;
class Math_argContext extends ParserRuleContext_1.ParserRuleContext {
    math_arg(i) {
        if (i === undefined) {
            return this.getRuleContexts(Math_argContext);
        }
        else {
            return this.getRuleContext(i, Math_argContext);
        }
    }
    MUL() { return this.tryGetToken(Local_enParser.MUL, 0); }
    DIV() { return this.tryGetToken(Local_enParser.DIV, 0); }
    ADD() { return this.tryGetToken(Local_enParser.ADD, 0); }
    SUB() { return this.tryGetToken(Local_enParser.SUB, 0); }
    NUMBER() { return this.tryGetToken(Local_enParser.NUMBER, 0); }
    VARIABLE() { return this.tryGetToken(Local_enParser.VARIABLE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_math_arg; }
    // @Override
    accept(visitor) {
        if (visitor.visitMath_arg) {
            return visitor.visitMath_arg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Math_argContext = Math_argContext;
class Bool_argContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER(i) {
        if (i === undefined) {
            return this.getTokens(Local_enParser.NUMBER);
        }
        else {
            return this.getToken(Local_enParser.NUMBER, i);
        }
    }
    VARIABLE(i) {
        if (i === undefined) {
            return this.getTokens(Local_enParser.VARIABLE);
        }
        else {
            return this.getToken(Local_enParser.VARIABLE, i);
        }
    }
    BOOL_EQ() { return this.tryGetToken(Local_enParser.BOOL_EQ, 0); }
    BOOL_GT() { return this.tryGetToken(Local_enParser.BOOL_GT, 0); }
    BOOL_LT() { return this.tryGetToken(Local_enParser.BOOL_LT, 0); }
    BOOL_TRUE() { return this.tryGetToken(Local_enParser.BOOL_TRUE, 0); }
    BOOL_FALSE() { return this.tryGetToken(Local_enParser.BOOL_FALSE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_bool_arg; }
    // @Override
    accept(visitor) {
        if (visitor.visitBool_arg) {
            return visitor.visitBool_arg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Bool_argContext = Bool_argContext;
class Command_argContext extends ParserRuleContext_1.ParserRuleContext {
    VARIABLE() { return this.tryGetToken(Local_enParser.VARIABLE, 0); }
    STRING() { return this.tryGetToken(Local_enParser.STRING, 0); }
    NUMBER() { return this.tryGetToken(Local_enParser.NUMBER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return Local_enParser.RULE_command_arg; }
    // @Override
    accept(visitor) {
        if (visitor.visitCommand_arg) {
            return visitor.visitCommand_arg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Command_argContext = Command_argContext;
//# sourceMappingURL=Local_enParser.js.map