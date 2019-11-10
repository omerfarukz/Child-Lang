lexer grammar lang_tr;
import base;
 
//< Command names
COMMAND_WRITE   : 'yaz';
COMMAND_READ    : 'oku';
COMMAND_FUNC    : 'etiket';
COMMAND_CALL    : 'git';
COMMAND_IF      : 'eğer';
COMMAND_ELSE    : 'değilse';
COMMAND_WHILE   : 'döngü';
//> Command names

//<Boolean definitions
BOOL_OP         : 'eşitir'|'büyüktür'|'küçüktür';
BOOL_STR        : 'doğru' | 'yanlış';
//> Boolean definitions

//< Math definitions
MUL             : 'kere' | 'çarpı' | 'tane';
DIV             : 'bölü';
ADD             : 'artı' | 'ekle';
SUB             : 'eksi' | 'çıkart';
//> Math definitions

fragment DEC_DELIMITER:  ',';