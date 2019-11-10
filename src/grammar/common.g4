lexer grammar common;

VARIABLE                : CHARSET ~(' '|'\r'|'\n');
STRING                  : QUOTE ('""'|~'"')* QUOTE
                        | TEXT
                        ;
COMMENT                 : ';'  ~([\r\n])*;
TEXT                    : SAFECODEPOINT+;
QUOTE                   : '"';
NUMBER: INT (DEC_DELIMITER DIGIT+)?;
fragment CHARSET        : [A-Z_] [A-Z_0-9]+;
fragment SAFECODEPOINT  : ~([ "\r\n]);
fragment INT            : [1-9] ([0-9]+)?;
fragment DIGIT          : ZERO | [1-9];
fragment DEC_DELIMITER  : '.';
fragment ZERO           : '0';
fragment SPACE          : ' ';
EOL                     : EOF | '\r'? '\n';
WS                      : [ \t]+ -> skip;