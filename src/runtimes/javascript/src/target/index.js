"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const LanguageBaseLexer_1 = require("./grammar/LanguageBaseLexer");
const LanguageBaseParser_1 = require("./grammar/LanguageBaseParser");
const ChildLangVisitor_1 = require("./ChildLangVisitor");
var code = "; code prints numbers from 10 to 1\r\nCOUNTER 10\r\nwhile   COUNTER greater 0\r\nprint   COUNTER\r\n; set new value of counter\r\nCOUNTER COUNTER minus 1\r\n\r\nprint end of the story";
// Create the lexer and parser
let inputStream = new antlr4ts_1.ANTLRInputStream(code);
let lexer = new LanguageBaseLexer_1.LanguageBaseLexer(inputStream);
let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
let parser = new LanguageBaseParser_1.LanguageBaseParser(tokenStream);
// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.lang();
var visitor = new ChildLangVisitor_1.ChildLangVisitor();
visitor.visit(tree);
//# sourceMappingURL=index.js.map