using System;
using System.IO;
using System.Text;
using Antlr4.Runtime;
using ChildLang.impl;

namespace runtime
{
    class Program
    {
        static void Main(string[] args)
        {
            var lexerType = typeof(Local_enLexer);
            const string codePath = "input_en.txt";

            var script = File.ReadAllText(codePath, Encoding.UTF8);
            Visit(lexerType, script);
        }

        static void Visit(Type lexerType, string script)
        {
            var inputStream = new AntlrInputStream(new StringReader(script));
            var lexer = (Lexer)Activator.CreateInstance(lexerType, inputStream);// new lang_tr(inputStream);
            var tokenStream = new CommonTokenStream(lexer);
            var parser = new LanguageBaseParser(tokenStream);

            var context = parser.lang();
            var visitor = new ChildLangVisitor();
            visitor.Visit(context);
        }
    }
}
