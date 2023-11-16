import ACode, { EmptyInstruction, NonUnaryInstruction, UnaryInstruction, hiError } from "./ACode";
import InBuffer from "../Lex-Analyzer/src/InBuffer";
import Tokenizer from "../Lex-Analyzer/src/Tokenizer";
import AArg, { IntArg } from "./AArg";
import { AddressingMode, NonUnary1, NonUnary2, Unary } from "./HashMaps";
import AToken, { TEmpty, TIdentifier } from "../Lex-Analyzer/src/Tokens";
import Maps from "./HashMaps"

export enum ParseState{
    START, UNARY, NONUNARY1, NONUNARY2, PARAM1, PARAM2, FINISH
}

type MnemonTypes = Unary | NonUnary1 | NonUnary2 | AddressingMode | undefined;

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
        let localMnemon: MnemonTypes = Unary.dotEND;
        let aToken: AToken;
        this.aCode = new EmptyInstruction();
        let state = ParseState.START;

        do {
            aToken = this.tokenizer.getToken();
            switch (state) {
                case ParseState.START:
                    if (aToken instanceof TIdentifier) {
                        let tempString = aToken.getStringValue().toLowerCase();

                        if (Maps.unaryMnemonTable.has(tempString)) {
                            localMnemon = Maps.unaryMnemonTable.get(tempString);
                            this.aCode = new UnaryInstruction(localMnemon);
                            terminate = localMnemon === Unary.dotEND;
                            state = ParseState.UNARY;
                            break;
                        }

                        if (Maps.nonUnary1MnemonTable.has(tempString)) {
                            localMnemon = Maps.nonUnary1MnemonTable.get(tempString);
                            state = ParseState.NONUNARY1;
                            break;
                        }

                        if (Maps.nonUnary2MnemonTable.has(tempString)) {
                            localMnemon = Maps.nonUnary2MnemonTable.get(tempString);
                            state = ParseState.NONUNARY2;
                            break;
                        }

                        this.aCode = new hiError("Line must begin with an valid instruction identifier.");
                        break;

                    }

                    if (aToken instanceof TEmpty) {
                        this.aCode = new EmptyInstruction();
                        state = ParseState.FINISH;
                        break;
                    }

                    this.aCode = new hiError("Line must begin with an instruction identifier.");
                    break;
                
                case ParseState.UNARY:
                    if (aToken instanceof TEmpty) {
                        state = ParseState.FINISH;
                        break;
                    }

                    this.aCode = new hiError("Unary instructions cannot have arguments.")
                    break;
                
                case ParseState.NONUNARY1:
                    break;
                
                default:
                    state = ParseState.FINISH;
                    this.aCode = new hiError("something went wrong");

            }
            
            
            
        } while (state !== ParseState.FINISH && !(this.aCode instanceof hiError));

        return terminate;
    }

}