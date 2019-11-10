#!/bin/bash
alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool'

antlr4 -Dlanguage=CSharp -no-listener -visitor -o runtimes/dotnetcore/src grammar/lang*.g4