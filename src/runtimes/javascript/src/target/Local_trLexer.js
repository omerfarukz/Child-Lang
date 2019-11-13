"use strict";
// Generated from grammar/Local_tr.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class Local_trLexer extends Lexer_1.Lexer {
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(Local_trLexer._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return Local_trLexer.VOCABULARY;
    }
    // @Override
    get grammarFileName() { return "Local_tr.g4"; }
    // @Override
    get ruleNames() { return Local_trLexer.ruleNames; }
    // @Override
    get serializedATN() { return Local_trLexer._serializedATN; }
    // @Override
    get channelNames() { return Local_trLexer.channelNames; }
    // @Override
    get modeNames() { return Local_trLexer.modeNames; }
    static get _ATN() {
        if (!Local_trLexer.__ATN) {
            Local_trLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(Local_trLexer._serializedATN));
        }
        return Local_trLexer.__ATN;
    }
}
Local_trLexer.COMMAND_WRITE = 1;
Local_trLexer.COMMAND_READ = 2;
Local_trLexer.COMMAND_FUNC = 3;
Local_trLexer.COMMAND_CALL = 4;
Local_trLexer.COMMAND_IF = 5;
Local_trLexer.COMMAND_ELSE = 6;
Local_trLexer.COMMAND_WHILE = 7;
Local_trLexer.BOOL_EQ = 8;
Local_trLexer.BOOL_GT = 9;
Local_trLexer.BOOL_LT = 10;
Local_trLexer.BOOL_TRUE = 11;
Local_trLexer.BOOL_FALSE = 12;
Local_trLexer.MUL = 13;
Local_trLexer.DIV = 14;
Local_trLexer.ADD = 15;
Local_trLexer.SUB = 16;
Local_trLexer.VARIABLE = 17;
Local_trLexer.NUMBER = 18;
Local_trLexer.STRING = 19;
Local_trLexer.COMMENT = 20;
Local_trLexer.TEXT = 21;
Local_trLexer.QUOTE = 22;
Local_trLexer.EOL = 23;
Local_trLexer.WS = 24;
// tslint:disable:no-trailing-whitespace
Local_trLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
Local_trLexer.modeNames = [
    "DEFAULT_MODE",
];
Local_trLexer.ruleNames = [
    "COMMAND_WRITE", "COMMAND_READ", "COMMAND_FUNC", "COMMAND_CALL", "COMMAND_IF",
    "COMMAND_ELSE", "COMMAND_WHILE", "BOOL_EQ", "BOOL_GT", "BOOL_LT", "BOOL_TRUE",
    "BOOL_FALSE", "MUL", "DIV", "ADD", "SUB", "DEC_DELIMITER", "VARIABLE",
    "NUMBER", "STRING", "COMMENT", "TEXT", "QUOTE", "CHARSET", "INT", "SAFECODEPOINT",
    "DIGIT", "ZERO", "SPACE", "EOL", "WS",
];
Local_trLexer._LITERAL_NAMES = [
    undefined, "'yaz'", "'oku'", "'metot'", "'git'", "'e\u011Fer'", "'de\u011Filse'",
    "'d\u00F6ng\u00FC'", "'e\u015Fittir'", "'b\u00FCy\u00FCkt\u00FCr'", "'k\u00FC\u00E7\u00FCkt\u00FCr'",
    "'evet'", "'hay\u0131r'", undefined, "'b\u00F6l\u00FC'", undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, "'\"'",
];
Local_trLexer._SYMBOLIC_NAMES = [
    undefined, "COMMAND_WRITE", "COMMAND_READ", "COMMAND_FUNC", "COMMAND_CALL",
    "COMMAND_IF", "COMMAND_ELSE", "COMMAND_WHILE", "BOOL_EQ", "BOOL_GT", "BOOL_LT",
    "BOOL_TRUE", "BOOL_FALSE", "MUL", "DIV", "ADD", "SUB", "VARIABLE", "NUMBER",
    "STRING", "COMMENT", "TEXT", "QUOTE", "EOL", "WS",
];
Local_trLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(Local_trLexer._LITERAL_NAMES, Local_trLexer._SYMBOLIC_NAMES, []);
Local_trLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1A\u0109\b\x01" +
    "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
    "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
    "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
    "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
    "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
    "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x03\x02" +
    "\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
    "\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t" +
    "\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E" +
    "\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
    "\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x99\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
    "\x10\x05\x10\xA8\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
    "\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xB4\n\x11\x03\x12\x03\x12\x03" +
    "\x13\x03\x13\x07\x13\xBA\n\x13\f\x13\x0E\x13\xBD\v\x13\x03\x14\x03\x14" +
    "\x03\x14\x06\x14\xC2\n\x14\r\x14\x0E\x14\xC3\x05\x14\xC6\n\x14\x03\x15" +
    "\x03\x15\x03\x15\x03\x15\x07\x15\xCC\n\x15\f\x15\x0E\x15\xCF\v\x15\x03" +
    "\x15\x03\x15\x03\x15\x05\x15\xD4\n\x15\x03\x16\x03\x16\x07\x16\xD8\n\x16" +
    "\f\x16\x0E\x16\xDB\v\x16\x03\x17\x06\x17\xDE\n\x17\r\x17\x0E\x17\xDF\x03" +
    "\x18\x03\x18\x03\x19\x03\x19\x06\x19\xE6\n\x19\r\x19\x0E\x19\xE7\x03\x1A" +
    "\x03\x1A\x06\x1A\xEC\n\x1A\r\x1A\x0E\x1A\xED\x05\x1A\xF0\n\x1A\x03\x1B" +
    "\x03\x1B\x03\x1C\x03\x1C\x05\x1C\xF6\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03" +
    "\x1E\x03\x1F\x03\x1F\x05\x1F\xFE\n\x1F\x03\x1F\x05\x1F\u0101\n\x1F\x03" +
    " \x06 \u0104\n \r \x0E \u0105\x03 \x03 \x02\x02\x02!\x03\x02\x03\x05\x02" +
    "\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
    "\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11" +
    "!\x02\x12#\x02\x02%\x02\x13\'\x02\x14)\x02\x15+\x02\x16-\x02\x17/\x02" +
    "\x181\x02\x023\x02\x025\x02\x027\x02\x029\x02\x02;\x02\x02=\x02\x19?\x02" +
    "\x1A\x03\x02\v\x05\x02\f\f\x0F\x0F\"\"\x03\x02$$\x04\x02\f\f\x0F\x0F\x04" +
    "\x02C\\aa\x05\x022;C\\aa\x03\x023;\x03\x022;\x06\x02\f\f\x0F\x0F\"\"$" +
    "$\x04\x02\v\v\"\"\x02\u0114\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
    "\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
    "\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
    "\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02" +
    "\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02" +
    "\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02" +
    "\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03" +
    "\x02\x02\x02\x02/\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02" +
    "\x02\x03A\x03\x02\x02\x02\x05E\x03\x02\x02\x02\x07I\x03\x02\x02\x02\t" +
    "O\x03\x02\x02\x02\vS\x03\x02\x02\x02\rX\x03\x02\x02\x02\x0F`\x03\x02\x02" +
    "\x02\x11f\x03\x02\x02\x02\x13n\x03\x02\x02\x02\x15w\x03\x02\x02\x02\x17" +
    "\x80\x03\x02\x02\x02\x19\x85\x03\x02\x02\x02\x1B\x98\x03\x02\x02\x02\x1D" +
    "\x9A\x03\x02\x02\x02\x1F\xA7\x03\x02\x02\x02!\xB3\x03\x02\x02\x02#\xB5" +
    "\x03\x02\x02\x02%\xB7\x03\x02\x02\x02\'\xBE\x03\x02\x02\x02)\xD3\x03\x02" +
    "\x02\x02+\xD5\x03\x02\x02\x02-\xDD\x03\x02\x02\x02/\xE1\x03\x02\x02\x02" +
    "1\xE3\x03\x02\x02\x023\xE9\x03\x02\x02\x025\xF1\x03\x02\x02\x027\xF5\x03" +
    "\x02\x02\x029\xF7\x03\x02\x02\x02;\xF9\x03\x02\x02\x02=\u0100\x03\x02" +
    "\x02\x02?\u0103\x03\x02\x02\x02AB\x07{\x02\x02BC\x07c\x02\x02CD\x07|\x02" +
    "\x02D\x04\x03\x02\x02\x02EF\x07q\x02\x02FG\x07m\x02\x02GH\x07w\x02\x02" +
    "H\x06\x03\x02\x02\x02IJ\x07o\x02\x02JK\x07g\x02\x02KL\x07v\x02\x02LM\x07" +
    "q\x02\x02MN\x07v\x02\x02N\b\x03\x02\x02\x02OP\x07i\x02\x02PQ\x07k\x02" +
    "\x02QR\x07v\x02\x02R\n\x03\x02\x02\x02ST\x07g\x02\x02TU\x07\u0121\x02" +
    "\x02UV\x07g\x02\x02VW\x07t\x02\x02W\f\x03\x02\x02\x02XY\x07f\x02\x02Y" +
    "Z\x07g\x02\x02Z[\x07\u0121\x02\x02[\\\x07k\x02\x02\\]\x07n\x02\x02]^\x07" +
    "u\x02\x02^_\x07g\x02\x02_\x0E\x03\x02\x02\x02`a\x07f\x02\x02ab\x07\xF8" +
    "\x02\x02bc\x07p\x02\x02cd\x07i\x02\x02de\x07\xFE\x02\x02e\x10\x03\x02" +
    "\x02\x02fg\x07g\x02\x02gh\x07\u0161\x02\x02hi\x07k\x02\x02ij\x07v\x02" +
    "\x02jk\x07v\x02\x02kl\x07k\x02\x02lm\x07t\x02\x02m\x12\x03\x02\x02\x02" +
    "no\x07d\x02\x02op\x07\xFE\x02\x02pq\x07{\x02\x02qr\x07\xFE\x02\x02rs\x07" +
    "m\x02\x02st\x07v\x02\x02tu\x07\xFE\x02\x02uv\x07t\x02\x02v\x14\x03\x02" +
    "\x02\x02wx\x07m\x02\x02xy\x07\xFE\x02\x02yz\x07\xE9\x02\x02z{\x07\xFE" +
    "\x02\x02{|\x07m\x02\x02|}\x07v\x02\x02}~\x07\xFE\x02\x02~\x7F\x07t\x02" +
    "\x02\x7F\x16\x03\x02\x02\x02\x80\x81\x07g\x02\x02\x81\x82\x07x\x02\x02" +
    "\x82\x83\x07g\x02\x02\x83\x84\x07v\x02\x02\x84\x18\x03\x02\x02\x02\x85" +
    "\x86\x07j\x02\x02\x86\x87\x07c\x02\x02\x87\x88\x07{\x02\x02\x88\x89\x07" +
    "\u0133\x02\x02\x89\x8A\x07t\x02\x02\x8A\x1A\x03\x02\x02\x02\x8B\x8C\x07" +
    "m\x02\x02\x8C\x8D\x07g\x02\x02\x8D\x8E\x07t\x02\x02\x8E\x99\x07g\x02\x02" +
    "\x8F\x90\x07\xE9\x02\x02\x90\x91\x07c\x02\x02\x91\x92\x07t\x02\x02\x92" +
    "\x93\x07r\x02\x02\x93\x99\x07\u0133\x02\x02\x94\x95\x07v\x02\x02\x95\x96" +
    "\x07c\x02\x02\x96\x97\x07p\x02\x02\x97\x99\x07g\x02\x02\x98\x8B\x03\x02" +
    "\x02\x02\x98\x8F\x03\x02\x02\x02\x98\x94\x03\x02\x02\x02\x99\x1C\x03\x02" +
    "\x02\x02\x9A\x9B\x07d\x02\x02\x9B\x9C\x07\xF8\x02\x02\x9C\x9D\x07n\x02" +
    "\x02\x9D\x9E\x07\xFE\x02\x02\x9E\x1E\x03\x02\x02\x02\x9F\xA0\x07c\x02" +
    "\x02\xA0\xA1\x07t\x02\x02\xA1\xA2\x07v\x02\x02\xA2\xA8\x07\u0133\x02\x02" +
    "\xA3\xA4\x07g\x02\x02\xA4\xA5\x07m\x02\x02\xA5\xA6\x07n\x02\x02\xA6\xA8" +
    "\x07g\x02\x02\xA7\x9F\x03\x02\x02\x02\xA7\xA3\x03\x02\x02\x02\xA8 \x03" +
    "\x02\x02\x02\xA9\xAA\x07g\x02\x02\xAA\xAB\x07m\x02\x02\xAB\xAC\x07u\x02" +
    "\x02\xAC\xB4\x07k\x02\x02\xAD\xAE\x07\xE9\x02\x02\xAE\xAF\x07\u0133\x02" +
    "\x02\xAF\xB0\x07m\x02\x02\xB0\xB1\x07c\x02\x02\xB1\xB2\x07t\x02\x02\xB2" +
    "\xB4\x07v\x02\x02\xB3\xA9\x03\x02\x02\x02\xB3\xAD\x03\x02\x02\x02\xB4" +
    "\"\x03\x02\x02\x02\xB5\xB6\x07.\x02\x02\xB6$\x03\x02\x02\x02\xB7\xBB\x05" +
    "1\x19\x02\xB8\xBA\n\x02\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA\xBD\x03\x02" +
    "\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC&\x03\x02" +
    "\x02\x02\xBD\xBB\x03\x02\x02\x02\xBE\xC5\x053\x1A\x02\xBF\xC1\x05#\x12" +
    "\x02\xC0\xC2\x057\x1C\x02\xC1\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02" +
    "\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC6\x03\x02\x02" +
    "\x02\xC5\xBF\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6(\x03\x02\x02" +
    "\x02\xC7\xCD\x05/\x18\x02\xC8\xC9\x07$\x02\x02\xC9\xCC\x07$\x02\x02\xCA" +
    "\xCC\n\x03\x02\x02\xCB\xC8\x03\x02\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC" +
    "\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE" +
    "\xD0\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD1\x05/\x18\x02\xD1" +
    "\xD4\x03\x02\x02\x02\xD2\xD4\x05-\x17\x02\xD3\xC7\x03\x02\x02\x02\xD3" +
    "\xD2\x03\x02\x02\x02\xD4*\x03\x02\x02\x02\xD5\xD9\x07=\x02\x02\xD6\xD8" +
    "\n\x04\x02\x02\xD7\xD6\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7" +
    "\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA,\x03\x02\x02\x02\xDB\xD9" +
    "\x03\x02\x02\x02\xDC\xDE\x055\x1B\x02\xDD\xDC\x03\x02\x02\x02\xDE\xDF" +
    "\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0." +
    "\x03\x02\x02\x02\xE1\xE2\x07$\x02\x02\xE20\x03\x02\x02\x02\xE3\xE5\t\x05" +
    "\x02\x02\xE4\xE6\t\x06\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02" +
    "\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE82\x03\x02" +
    "\x02\x02\xE9\xEF\t\x07\x02\x02\xEA\xEC\t\b\x02\x02\xEB\xEA\x03\x02\x02" +
    "\x02\xEC\xED\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02" +
    "\x02\xEE\xF0\x03\x02\x02\x02\xEF\xEB\x03\x02\x02\x02\xEF\xF0\x03\x02\x02" +
    "\x02\xF04\x03\x02\x02\x02\xF1\xF2\n\t\x02\x02\xF26\x03\x02\x02\x02\xF3" +
    "\xF6\x059\x1D\x02\xF4\xF6\t\x07\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF4" +
    "\x03\x02\x02\x02\xF68\x03\x02\x02\x02\xF7\xF8\x072\x02\x02\xF8:\x03\x02" +
    "\x02\x02\xF9\xFA\x07\"\x02\x02\xFA<\x03\x02\x02\x02\xFB\u0101\x07\x02" +
    "\x02\x03\xFC\xFE\x07\x0F\x02\x02\xFD\xFC\x03\x02\x02\x02\xFD\xFE\x03\x02" +
    "\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0101\x07\f\x02\x02\u0100\xFB\x03" +
    "\x02\x02\x02\u0100\xFD\x03\x02\x02\x02\u0101>\x03\x02\x02\x02\u0102\u0104" +
    "\t\n\x02\x02\u0103\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105" +
    "\u0103\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0107\x03\x02" +
    "\x02\x02\u0107\u0108\b \x02\x02\u0108@\x03\x02\x02\x02\x15\x02\x98\xA7" +
    "\xB3\xBB\xC3\xC5\xCB\xCD\xD3\xD9\xDF\xE7\xED\xEF\xF5\xFD\u0100\u0105\x03" +
    "\b\x02\x02";
exports.Local_trLexer = Local_trLexer;
//# sourceMappingURL=Local_trLexer.js.map