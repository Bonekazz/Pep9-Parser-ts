import ACode, { EmptyInstruction } from "./ACode";
import InBuffer from "../Lex-Analyzer/src/InBuffer";
import Tokenizer from "../Lex-Analyzer/src/Tokenizer";
import AArg, { IntArg } from "./AArg";
import { DotCommand } from "./HashMaps";
import AToken from "../Lex-Analyzer/src/Tokens";

export enum ParseState{
    START,
}

export default class Translator {
    private buffer: InBuffer;
    private tokenizer: Tokenizer;
    private aCode = new EmptyInstruction();

    constructor(inbuffer: InBuffer) {
        this.buffer = inbuffer;
        this.tokenizer = new Tokenizer(this.buffer)
    }

    private parseLine(): boolean {
        let terminate = false;
        let localFirstArg = new IntArg(0);
        let localSecondArg: AArg;
        // Compiler requires following useless initialization.
        let localMnemon = DotCommand.dotEND;
        let aToken: AToken;
        this.aCode = new EmptyInstruction();
        let state = ParseState.START;


        return terminate;
    }

}