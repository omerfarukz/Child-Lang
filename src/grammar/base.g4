lexer grammar base;
import common;

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
BOOL_OP         : BOOL_EQ | BOOL_GT | BOOL_LS;
BOOL_EQ         : 'equals';
BOOL_GT         : 'grater';
BOOL_LS         : 'lesser';
BOOL_STR        : BOOL_TRUE | BOOL_FALSE;
BOOL_TRUE       : 'true';
BOOL_FALSE      : 'false';
//> Boolean definitions

//< Math definitions
MUL             : 'times';
DIV             : 'divide';
ADD             : 'plus';
SUB             : 'minus';
//> Math definitions