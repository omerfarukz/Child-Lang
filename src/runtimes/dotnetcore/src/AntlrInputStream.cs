using System.IO;

namespace runtime
{
    internal class AntlrInputStream
    {
        private StringReader stringReader;

        public AntlrInputStream(StringReader stringReader)
        {
            this.stringReader = stringReader;
        }
    }
}