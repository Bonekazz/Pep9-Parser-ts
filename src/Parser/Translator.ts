import ACode from "./ACode";
import InBuffer from "../LexAnalyzer/InBuffer";
import Tokenizer from "../LexAnalyzer/Tokenizer";
import AArg, { IntArg } from "./AArg";
import { Mnemon } from "./HashMaps";
import AToken from "../LexAnalyzer/Tokens";

export enum ParseState{
    START,
}

export default class Translator {
    private buffer: InBuffer;
    private tokenizer: Tokenizer;
    // private aCode: ACode;

    constructor(inbuffer: InBuffer) {
        this.buffer = inbuffer;
        this.tokenizer = new Tokenizer(this.buffer)
    }

    private parseLine(): boolean {
        let terminate = false;
        let localFirstArg = new IntArg(0);
        let localSecondArg: AArg;
        // Compiler requires following useless initialization.
        let localMnemon = Mnemon.dotEND;
        let aToken: AToken;
        // this.aCode = new EmptyInStr();
        let state = ParseState.START;


        return terminate;
    }

}