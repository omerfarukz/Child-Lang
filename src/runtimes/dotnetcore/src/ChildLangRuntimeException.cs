using System;
namespace runtime
{
    public class ChildLangRuntimeException : Exception
    {
        public ChildLangRuntimeException() : this(null, null)
        { }
        public ChildLangRuntimeException(string message, Exception innerException) : base(message, innerException)
        {}
    }
}
