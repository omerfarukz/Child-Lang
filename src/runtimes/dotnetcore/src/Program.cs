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
            var code = File.ReadAllText("input_tr.txt", Encoding.UTF8);

            var inputStream = new AntlrInputStream(new StringReader(code));
            var lexer = new lang_tr(inputStream);
            var tokenStream = new CommonTokenStream(lexer);
            var parser = new langParser(tokenStream);

            var context = parser.lang();
            var visitor = new ChildLangVisitor();
            visitor.Visit(context);
        }
    }
}
