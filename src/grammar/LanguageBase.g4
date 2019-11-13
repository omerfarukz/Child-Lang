grammar LanguageBase;

lang: (block)+;

block                   : command_block_func
                        | command_block_if
                        | command_block_while
                        | command+ EOL? EOL?
                        ;

//< Command expressions
command                 : (COMMENT | command_call | command_print | command_read | command_assign) EOL?;
command_print           : COMMAND_WRITE (command_arg | math_arg | bool_arg)+;
command_read            : COMMAND_READ VARIABLE;
command_assign          : VARIABLE (command_arg | bool_arg | math_arg);
command_block_func      : COMMAND_FUNC VARIABLE EOL block;
command_call            : COMMAND_CALL VARIABLE;
command_block_if        : COMMAND_IF bool_arg EOL block command_block_else?;
command_block_else      : COMMAND_ELSE EOL block;
command_block_while     : COMMAND_WHILE bool_arg EOL block;
//> Command expressions

math_arg                : math_arg (MUL|DIV) math_arg
                        | math_arg (ADD|SUB) math_arg
                        | NUMBER
                        | VARIABLE
                        ;

bool_arg                : (NUMBER | VARIABLE) (BOOL_EQ | BOOL_GT| BOOL_LT) (NUMBER | VARIABLE)
                        | VARIABLE
                        | (BOOL_TRUE | BOOL_FALSE)
                        ;
command_arg             : VARIABLE
                        | STRING
                        | NUMBER
                        ;


//< Command names
COMMAND_WRITE   : 'print';
COMMAND_READ    : 'read';
COMMAND_FUNC    : 'func';
COMMAND_CALL    : 'call';
COMMAND_IF      : 'if';
COMMAND_ELSE    : 'else';
COMMAND_WHILE   : 'while';
//> Command names

//<Boolean definitions
BOOL_EQ         : 'equals';
BOOL_GT         : 'greater';
BOOL_LT         : 'lesser';
BOOL_TRUE       : 'true';
BOOL_FALSE      : 'false';
//> Boolean definitions

//< Math definitions
MUL             : 'times';
DIV             : 'divide';
ADD             : 'plus';
SUB             : 'minus';
//> Math definitions

//< Common
VARIABLE                : CHARSET ~(' '|'\r'|'\n')*;
NUMBER                  : '0' | INT (DEC_DELIMITER DIGIT+)?;
STRING                  : QUOTE ('""'|~'"')* QUOTE
                        | TEXT
                        ;
COMMENT                 : ';'  ~([\r\n])*;
TEXT                    : SAFECODEPOINT+;
QUOTE                   : '"';
fragment CHARSET        : [A-Z_] [A-Z_0-9]+;
fragment INT            : [1-9] ([0-9]+)?;
fragment SAFECODEPOINT  : ~([ "\r\n]);
fragment DIGIT          : ZERO | [1-9];
fragment DEC_DELIMITER  : '.';
fragment ZERO           : '0';
fragment SPACE          : ' ';
EOL                     : EOF | '\r'? '\n';
WS                      : [ \t]+ -> skip;
//> Common