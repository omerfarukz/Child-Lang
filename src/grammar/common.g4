lexer grammar common;

STRING                  : QUOTE ('""'|~'"')* QUOTE
                        | TEXT
                        ;

COMMENT                 : ';'  ~([\r\n])*;
VARIABLE                : CHARSET (SPACE+|EOL);
TEXT                    : SAFECODEPOINT+;
QUOTE                   : '"';

fragment CHARSET        : [A-Z_] [A-Z_0-9]+;
fragment SAFECODEPOINT  : ~([ "\r\n]);
fragment INT            : [1-9] ([0-9]+)?;
fragment DIGIT          : ZERO | [1-9];
fragment ZERO           : '0';
fragment SPACE          : ' ';

EOL                     : EOF | '\r'? '\n';
WS                      : [ \t]+ -> skip;