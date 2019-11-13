import { ATN } from "antlr4ts/atn/ATN";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { Local_enVisitor } from "./Local_enVisitor";
export declare class Local_enParser extends Parser {
    static readonly COMMAND_WRITE = 1;
    static readonly COMMAND_READ = 2;
    static readonly COMMAND_FUNC = 3;
    static readonly COMMAND_CALL = 4;
    static readonly COMMAND_IF = 5;
    static readonly COMMAND_ELSE = 6;
    static readonly COMMAND_WHILE = 7;
    static readonly BOOL_EQ = 8;
    static readonly BOOL_GT = 9;
    static readonly BOOL_LT = 10;
    static readonly BOOL_TRUE = 11;
    static readonly BOOL_FALSE = 12;
    static readonly MUL = 13;
    static readonly DIV = 14;
    static readonly ADD = 15;
    static readonly SUB = 16;
    static readonly VARIABLE = 17;
    static readonly NUMBER = 18;
    static readonly STRING = 19;
    static readonly COMMENT = 20;
    static readonly TEXT = 21;
    static readonly QUOTE = 22;
    static readonly EOL = 23;
    static readonly WS = 24;
    static readonly RULE_lang = 0;
    static readonly RULE_block = 1;
    static readonly RULE_command = 2;
    static readonly RULE_command_print = 3;
    static readonly RULE_command_read = 4;
    static readonly RULE_command_assign = 5;
    static readonly RULE_command_block_func = 6;
    static readonly RULE_command_call = 7;
    static readonly RULE_command_block_if = 8;
    static readonly RULE_command_block_else = 9;
    static readonly RULE_command_block_while = 10;
    static readonly RULE_math_arg = 11;
    static readonly RULE_bool_arg = 12;
    static readonly RULE_command_arg = 13;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    constructor(input: TokenStream);
    lang(): LangContext;
    block(): BlockContext;
    command(): CommandContext;
    command_print(): Command_printContext;
    command_read(): Command_readContext;
    command_assign(): Command_assignContext;
    command_block_func(): Command_block_funcContext;
    command_call(): Command_callContext;
    command_block_if(): Command_block_ifContext;
    command_block_else(): Command_block_elseContext;
    command_block_while(): Command_block_whileContext;
    math_arg(): Math_argContext;
    math_arg(_p: number): Math_argContext;
    bool_arg(): Bool_argContext;
    command_arg(): Command_argContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private math_arg_sempred;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class LangContext extends ParserRuleContext {
    block(): BlockContext[];
    block(i: number): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
export declare class BlockContext extends ParserRuleContext {
    command_block_func(): Command_block_funcContext | undefined;
    command_block_if(): Command_block_ifContext | undefined;
    command_block_while(): Command_block_whileContext | undefined;
    command(): CommandContext[];
    command(i: number): CommandContext;
    EOL(): TerminalNode[];
    EOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
export declare class CommandContext extends ParserRuleContext {
    COMMENT(): TerminalNode | undefined;
    command_call(): Command_callContext | undefined;
    command_print(): Command_printContext | undefined;
    command_read(): Command_readContext | undefined;
    command_assign(): Command_assignContext | undefined;
    EOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
export declare class Command_printContext extends ParserRuleContext {
    COMMAND_WRITE(): TerminalNode;
    command_arg(): Command_argContext[];
    command_arg(i: number): Command_argContext;
    math_arg(): Math_argContext[];
    math_arg(i: number): Math_argContext;
    bool_arg(): Bool_argContext[];
    bool_arg(i: number): Bool_argContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
export declare class Command_readContext extends ParserRuleContext {
    COMMAND_READ(): TerminalNode;
    VARIABLE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
export declare class Command_assignContext extends ParserRuleContext {
    VARIABLE(): TerminalNode;
    command_arg(): Command_argContext | undefined;
    bool_arg(): Bool_argContext | undefined;
    math_arg(): Math_argContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
export declare class Command_block_funcContext extends ParserRuleContext {
    COMMAND_FUNC(): TerminalNode;
    VARIABLE(): TerminalNode;
    EOL(): TerminalNode;
    block(): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
export declare class Command_callContext extends ParserRuleContext {
    COMMAND_CALL(): TerminalNode;
    VARIABLE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
export declare class Command_block_ifContext extends ParserRuleContext {
    COMMAND_IF(): TerminalNode;
    bool_arg(): Bool_argContext;
    EOL(): TerminalNode;
    block(): BlockContext;
    command_block_else(): Command_block_elseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
export declare class Command_block_elseContext extends ParserRuleContext {
    COMMAND_ELSE(): TerminalNode;
    EOL(): TerminalNode;
    block(): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
export declare class Command_block_whileContext extends ParserRuleContext {
    COMMAND_WHILE(): TerminalNode;
    bool_arg(): Bool_argContext;
    EOL(): TerminalNode;
    block(): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
export declare class Math_argContext extends ParserRuleContext {
    math_arg(): Math_argContext[];
    math_arg(i: number): Math_argContext;
    MUL(): TerminalNode | undefined;
    DIV(): TerminalNode | undefined;
    ADD(): TerminalNode | undefined;
    SUB(): TerminalNode | undefined;
    NUMBER(): TerminalNode | undefined;
    VARIABLE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
export declare class Bool_argContext extends ParserRuleContext {
    NUMBER(): TerminalNode[];
    NUMBER(i: number): TerminalNode;
    VARIABLE(): TerminalNode[];
    VARIABLE(i: number): TerminalNode;
    BOOL_EQ(): TerminalNode | undefined;
    BOOL_GT(): TerminalNode | undefined;
    BOOL_LT(): TerminalNode | undefined;
    BOOL_TRUE(): TerminalNode | undefined;
    BOOL_FALSE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
export declare class Command_argContext extends ParserRuleContext {
    VARIABLE(): TerminalNode | undefined;
    STRING(): TerminalNode | undefined;
    NUMBER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    accept<Result>(visitor: Local_enVisitor<Result>): Result;
}
