using System;
using System.IO;
using System.Text;
using Antlr4.Runtime;

namespace runtime
{
    class Program
    {
        static void Main(string[] args)
        {
            var lexerType = typeof(Local_enLexer);
            var codePath = "input_en.txt";

            var script = File.ReadAllText(codePath, Encoding.UTF8);
            Visit(lexerType, script);
        }

        static void Visit(Type lexerType, string script)
        {
            var inputStream = new AntlrInputStream(new StringReader(script));
            var lexer = (Lexer)Activator.CreateInstance(lexerType, inputStream);
            var tokenStream = new CommonTokenStream(lexer);
            var parser = new LanguageBaseParser(tokenStream);

            var context = parser.lang();
            var visitor = new ChildLangVisitor();
            visitor.Visit(context);
        }
    }
}
