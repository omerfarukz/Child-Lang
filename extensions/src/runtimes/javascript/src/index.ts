import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { LanguageBaseLexer } from './grammar/LanguageBaseLexer';
import { LanguageBaseParser } from './grammar/LanguageBaseParser';
import { ChildLangVisitor } from './ChildLangVisitor';


// Create the lexer and parser
// Run("read LINE\r\nprint LINE");
function Run(code: string) {
    let inputStream = new ANTLRInputStream(code);
    let lexer = new LanguageBaseLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new LanguageBaseParser(tokenStream);

    let tree = parser.lang();
    var visitor = new ChildLangVisitor();
    visitor.visit(tree);
}