import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { LanguageBaseLexer } from './grammar/LanguageBaseLexer';
import { LanguageBaseParser } from './grammar/LanguageBaseParser';
import { ChildLangVisitor } from './ChildLangVisitor';


var code = "read LINE\r\nprint LINE";
// Create the lexer and parser
let inputStream = new ANTLRInputStream(code);
let lexer = new LanguageBaseLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new LanguageBaseParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.lang();
var visitor = new ChildLangVisitor();
visitor.visit(tree);