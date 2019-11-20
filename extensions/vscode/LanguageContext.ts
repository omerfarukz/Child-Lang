import { ANTLRInputStream, CommonTokenStream, Lexer, Parser } from 'antlr4ts';
import { LanguageBaseParser } from './runtime/src/runtimes/javascript/src/grammar/LanguageBaseParser';
import { ChildLangVisitor } from './runtime/src/runtimes/javascript/src/ChildLangVisitor';
import { Local_trLexer } from './runtime/src/runtimes/javascript/src/grammar/Local_trLexer';
import { UserInputOutput } from './runtime/src/runtimes/javascript/src/UserInputOutput';
import { Local_enLexer } from './runtime/src/runtimes/javascript/src/grammar/Local_enLexer';

export class LanguageContext {

    constructor(private io: UserInputOutput) { }

    async Run(code: string, language: string) {
        let inputStream = new ANTLRInputStream(code);
        let lexer: Lexer;

        // TODO: abstract factory
        if (language == "tr")
            lexer = new Local_trLexer(inputStream);
        else
            lexer = new Local_enLexer(inputStream);

        let tokenStream = new CommonTokenStream(lexer);
        var visitor = new ChildLangVisitor(this.io);

        let parser = new LanguageBaseParser(tokenStream);
        await visitor.visit(parser.lang());
    }
}