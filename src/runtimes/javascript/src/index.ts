import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { LanguageBaseLexer } from './grammar/LanguageBaseLexer';
import { LanguageBaseParser } from './grammar/LanguageBaseParser';
import { ChildLangVisitor } from './ChildLangVisitor';


var code = "; code prints numbers from 10 to 1\r\nCOUNTER 10\r\nwhile   COUNTER greater 0\r\nprint   COUNTER\r\n; set new value of counter\r\nCOUNTER COUNTER minus 1\r\n\r\nprint end of the story";
// Create the lexer and parser
let inputStream = new ANTLRInputStream(code);
let lexer = new LanguageBaseLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new LanguageBaseParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.lang();
var visitor = new ChildLangVisitor();
visitor.visit(tree);