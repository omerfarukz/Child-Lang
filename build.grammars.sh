#!/bin/bash
alias antlr4='java -Xmx500M -cp "bin/antlr-4.7.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool'

# runtime.dotnet 
antlr4 -Dlanguage=CSharp -no-listener -visitor -o runtimes/dotnetcore/src src/grammar/lang*.g4