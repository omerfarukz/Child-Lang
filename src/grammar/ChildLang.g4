grammar ChildLang;
import en;

lang: (block)+;

block                   : command_block_func
                        | command_block_if
                        | command_block_while
                        | command+ EOL? EOL?
                        ;

//< Command expressions
command                 : (COMMENT | command_call | command_print | command_read | command_assign) EOL?;
command_print           : COMMAND_WRITE (command_arg | math_arg | bool_arg)+;
command_read            : COMMAND_READ command_arg+;
command_assign          : VARIABLE (command_arg | math_arg | bool_arg);
command_block_func      : COMMAND_FUNC VARIABLE block;
command_call            : COMMAND_CALL VARIABLE;
command_block_if        : COMMAND_IF bool_arg EOL block command_block_else?;
command_block_else      : COMMAND_ELSE EOL block;
command_block_while     : COMMAND_WHILE bool_arg EOL block;
command_arg             : VARIABLE
                        | STRING
                        | NUMBER
                        ;
//> Command expressions

bool_arg                : bool_arg BOOL_OP bool_arg
                        | NUMBER
                        | VARIABLE
                        | BOOL_STR
                        ;

math_arg                : math_arg (MUL|DIV) math_arg
                        | math_arg (ADD|SUB) math_arg
                        | VARIABLE
                        | NUMBER
                        ;