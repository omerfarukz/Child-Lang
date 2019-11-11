# Child-Lang
New programming language designed for children who can read and write

## Motivation
Children who can read and write in their language can learn to code. Visual programming references like code.org supports coding without typing. So, after code.org experiments child will be ready for coding. But, there is no programming language designed for children to the very first experiment. Considered non-alphanumeric characters, indention and other tokens are needed for lexing or parsing purposes.

This language goals to train children for a print and read variables, math operations with a simple if while, function implementations. "print hello" is very simple instead of "std::getline(std::cin, str);". Sure, they are able to learn python, ruby, c++ and the other modern languages and all they are lovely. But learning a logic of coding is more important learn a language designed to solve all problems.

## Design rules
- Variables only be uppercase characters or numeric with leading uppercase character
- Block bodies must be separated with a single empty line
- Commands and parameters must be separated with one or more space. Like print 1, print  2
- No inner or sub commands are supported in body.

## Before a training
- Language must be experimented by trainer before the child.
- TODO: Read how to train a child with Child Lang.

## Types
- String    : All characters supported by UTF-8. All nodes not parsed as other type is considered as string.
- Number    : Considered like double ( 1, 2, 3, 4.56, 0.67 )
- Boolean   : true, false or expression in natural language like 1 equals 1, 3 greater 2

### Variable
Any upper case string without space and leading uppercase character ( AGE, NAME1)

## Commands with args
### print ( string, number, math expression, bool expression)
    print hello
    print hello world
    print Remember remember the fifth of November
    print -- Heading --
    print Today is the 3rd day of week
    print "what is your name"
    print 1 plus 2
    print 4 equals 5
    
### read ( variable )
    read LINE
    read NAME
    
### assign
    YEAR        2019
    MONTH       11
    PI          3.14
    TOTAL       123 plus 456
    GREATER     2 greater 1
    SAME        3 equal 3
    NAME        John Smith
    ADDRESS     123 4rd Ave 5th Floor, New York, NY 12345, United States of America

### boolean argument
    1 equals 2
    3 greater 4
    5 less 5
    VAR1 equals 6
    VAR2 equals VAR3
    
### math argument // one op per line.
    1 plus 1
    2 minus 1
    3 times 5
    
### block (if, else, while, func): lines seperated with empty line

## if (bool [new line] block)
    if      1 equals 1
    print   they are equals
    [new line]
    
    if      1 equals 1
    print   they
    print   are equals
    [new line]
    
    if      VAR1
    print   condition is true

### if with else block
    if      1 equals 2
    print   they are equals
    else
    print   they are not equals
    
## while (bool [newline] block)
    while   CONDITION
    print   loop
    [new line]
    
    COUNTER 5
    while   COUNTER greater 1
    print   COUNTER
    COUNTER COUNTER minus 1
    [new line]
    
## func (variable)
    func    GREETINGS
    write   hello
    [new    line]
    
    NUM1    0
    NUM2    0
    
    func    SUM_AND_PRINT
    SUM     NUM1 plus NUM2
    write   Total is SUM
    
    func    RESET
    NUM1    0
    NUM2    0
    
# call (variable:function)
    call    GREETINGS
    NUM1    5
    NUM2    10
    call    SUM_AND_PRINT
    
    func    SUB_CALL
    print   the SUM_AND_PRINT func is calling
    call    SUM_AND_PRINT
    print   resetting all values
    call    RESET
    [new line]

## Design goals
- No non alfanumeric chars will be used. Characters like & ( ) – [ { } ] : ', ? / * ^> are considered as string.
- No sepetor will be used for any reason
- Tokens must be in natural language like a "print".

## Other Examples
TODO: see examples directory
