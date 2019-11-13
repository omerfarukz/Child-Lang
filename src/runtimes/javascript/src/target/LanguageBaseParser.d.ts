import { ATN } from "antlr4ts/atn/ATN";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { LanguageBaseListener } from "./LanguageBaseListener";
export declare class LanguageBaseParser extends Parser {
    static readonly COMMAND_WRITE: number;
    static readonly COMMAND_READ: number;
    static readonly COMMAND_FUNC: number;
    static readonly COMMAND_CALL: number;
    static readonly COMMAND_IF: number;
    static readonly COMMAND_ELSE: number;
    static readonly COMMAND_WHILE: number;
    static readonly BOOL_EQ: number;
    static readonly BOOL_GT: number;
    static readonly BOOL_LT: number;
    static readonly BOOL_TRUE: number;
    static readonly BOOL_FALSE: number;
    static readonly MUL: number;
    static readonly DIV: number;
    static readonly ADD: number;
    static readonly SUB: number;
    static readonly VARIABLE: number;
    static readonly NUMBER: number;
    static readonly STRING: number;
    static readonly COMMENT: number;
    static readonly TEXT: number;
    static readonly QUOTE: number;
    static readonly EOL: number;
    static readonly WS: number;
    static readonly RULE_lang: number;
    static readonly RULE_block: number;
    static readonly RULE_command: number;
    static readonly RULE_command_print: number;
    static readonly RULE_command_read: number;
    static readonly RULE_command_assign: number;
    static readonly RULE_command_block_func: number;
    static readonly RULE_command_call: number;
    static readonly RULE_command_block_if: number;
    static readonly RULE_command_block_else: number;
    static readonly RULE_command_block_while: number;
    static readonly RULE_math_arg: number;
    static readonly RULE_bool_arg: number;
    static readonly RULE_command_arg: number;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
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
    static readonly _ATN: ATN;
}
export declare class LangContext extends ParserRuleContext {
    block(): BlockContext[];
    block(i: number): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
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
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
}
export declare class CommandContext extends ParserRuleContext {
    COMMENT(): TerminalNode | undefined;
    command_call(): Command_callContext | undefined;
    command_print(): Command_printContext | undefined;
    command_read(): Command_readContext | undefined;
    command_assign(): Command_assignContext | undefined;
    EOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
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
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
}
export declare class Command_readContext extends ParserRuleContext {
    COMMAND_READ(): TerminalNode;
    VARIABLE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
}
export declare class Command_assignContext extends ParserRuleContext {
    VARIABLE(): TerminalNode;
    command_arg(): Command_argContext | undefined;
    bool_arg(): Bool_argContext | undefined;
    math_arg(): Math_argContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
}
export declare class Command_block_funcContext extends ParserRuleContext {
    COMMAND_FUNC(): TerminalNode;
    VARIABLE(): TerminalNode;
    EOL(): TerminalNode;
    block(): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
}
export declare class Command_callContext extends ParserRuleContext {
    COMMAND_CALL(): TerminalNode;
    VARIABLE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
}
export declare class Command_block_ifContext extends ParserRuleContext {
    COMMAND_IF(): TerminalNode;
    bool_arg(): Bool_argContext;
    EOL(): TerminalNode;
    block(): BlockContext;
    command_block_else(): Command_block_elseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
}
export declare class Command_block_elseContext extends ParserRuleContext {
    COMMAND_ELSE(): TerminalNode;
    EOL(): TerminalNode;
    block(): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
}
export declare class Command_block_whileContext extends ParserRuleContext {
    COMMAND_WHILE(): TerminalNode;
    bool_arg(): Bool_argContext;
    EOL(): TerminalNode;
    block(): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
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
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
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
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
}
export declare class Command_argContext extends ParserRuleContext {
    VARIABLE(): TerminalNode | undefined;
    STRING(): TerminalNode | undefined;
    NUMBER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: LanguageBaseListener): void;
    exitRule(listener: LanguageBaseListener): void;
}
