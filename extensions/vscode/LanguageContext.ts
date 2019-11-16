import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { LanguageBaseLexer } from './runtime/src/runtimes/javascript/src/grammar/LanguageBaseLexer';
import { LanguageBaseParser } from './runtime/src/runtimes/javascript/src/grammar/LanguageBaseParser';
import { ChildLangVisitor } from './runtime/src/runtimes/javascript/src/ChildLangVisitor';

export class LanguageContext {

    RunFile(path: string) {
        console.clear();

        fs.readFile(path, 'utf-8', (err, data) => {
            if (err)
                throw err;

            this.Run(data);
        });
    }

    Run(code: string) {
        let inputStream = new ANTLRInputStream(code);
        let lexer = new LanguageBaseLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new LanguageBaseParser(tokenStream);

        let tree = parser.lang();
        var visitor = new ChildLangVisitor();
       
        visitor.visit(tree);
    }
}

new LanguageContext().RunFile(process.argv[2]);