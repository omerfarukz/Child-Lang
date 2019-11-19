import { ANTLRInputStream, CommonTokenStream, Lexer, Parser } from 'antlr4ts';
import * as fs from 'fs';
import { LanguageBaseLexer } from './runtime/src/runtimes/javascript/src/grammar/LanguageBaseLexer';
import { LanguageBaseParser } from './runtime/src/runtimes/javascript/src/grammar/LanguageBaseParser';
import { ChildLangVisitor } from './runtime/src/runtimes/javascript/src/ChildLangVisitor';
import { Local_trLexer } from './runtime/src/runtimes/javascript/src/grammar/Local_trLexer';
import { Local_trParser } from './runtime/src/runtimes/javascript/src/grammar/Local_trParser';
import { UserInputOutput } from './runtime/src/runtimes/javascript/src/UserInputOutput';

export class LanguageContext {

    // RunFile(path: string) {
    //     console.clear();

    //     fs.readFile(path, 'utf-8', (err, data) => {
    //         if (err)
    //             throw err;
    //         if (path.endsWith("tr.ch"))
    //             this.Run(data, "tr");

    //         this.Run(data, "");
    //     });
    // }

    constructor(private io: UserInputOutput) {}

    async Run(code: string, language: string) {
        let inputStream = new ANTLRInputStream(code);
        let lexer: Lexer;

        // TODO: abstract factory
        if (language == "tr")
            lexer = new Local_trLexer(inputStream);
        else
            lexer = new LanguageBaseLexer(inputStream);

        let tokenStream = new CommonTokenStream(lexer);
        var visitor = new ChildLangVisitor(this.io);
        if (language == "tr") {
            let parser = new Local_trParser(tokenStream);
            visitor.visit(parser.lang());
        }
        else {
            let parser = new LanguageBaseParser(tokenStream);
            await visitor.visit(parser.lang());
        }
    }
}