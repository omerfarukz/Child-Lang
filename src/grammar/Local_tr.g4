grammar Local_tr;
import LanguageBase;

//< Command names
COMMAND_WRITE   : 'yaz';
COMMAND_READ    : 'oku';
COMMAND_FUNC    : 'metot';
COMMAND_CALL    : 'git';
COMMAND_IF      : 'eğer';
COMMAND_ELSE    : 'değilse';
COMMAND_WHILE   : 'döngü';
//> Command names

//<Boolean definitions
BOOL_EQ         : 'eşittir';
BOOL_GT         : 'büyüktür';
BOOL_LT         : 'küçüktür';
BOOL_TRUE       : 'evet';
BOOL_FALSE      : 'hayır';
//> Boolean definitions

//< Math definitions
MUL             : 'kere' | 'çarpı' | 'tane';
DIV             : 'bölü';
ADD             : 'artı' | 'ekle';
SUB             : 'eksi' | 'çıkart';
//> Math definitions

fragment DEC_DELIMITER:  ',';