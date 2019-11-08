lexer grammar en;
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
BOOL_OP         : 'equal'|'greater'|'less';
BOOL_STR        : 'true' | 'false';
//> Boolean definitions

//< Math definitions
MUL             : 'times';
DIV             : 'divide';
ADD             : 'plus';
SUB             : 'minus';
//> Math definitions

//< Localization
NUMBER: INT ('.' DIGIT+)?;
//> Localization