import ACode, { EmptyInstruction, NonUnaryInstruction, UnaryInstruction, hiError } from "./ACode";
import InBuffer from "../Lex-Analyzer/src/InBuffer";
import Tokenizer from "../Lex-Analyzer/src/Tokenizer";
import AArg, { AddrModeArg, HexArg, IdentifierArg, IntArg } from "./AArg";
import { AddressingMode, NonUnary1, NonUnary2, Unary } from "./HashMaps";
import AToken, { TAddress, TDotCommand, TEmpty, THex, TIdentifier, TInteger } from "../Lex-Analyzer/src/Tokens";
import Maps from "./HashMaps"

export enum ParseState{
    START, UNARY, NONUNARY, PARAM1, PARAM2, FINISH
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
        let localFirstArg: any = new HexArg(0);
        let localSecondArg: any = new IdentifierArg("");
        // Compiler requires following useless initialization.
        let localMnemon: any = Unary.dotEND;
        let aToken: AToken;
        this.aCode = new EmptyInstruction();
        let state = ParseState.START;

        do {
            aToken = this.tokenizer.getToken();
            switch (state) {
                case ParseState.START:
                    if (aToken instanceof TIdentifier || aToken instanceof TDotCommand) {
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
                            state = ParseState.NONUNARY;
                            break;
                        }

                        if (Maps.nonUnary2MnemonTable.has(tempString)) {
                            localMnemon = Maps.nonUnary2MnemonTable.get(tempString);
                            state = ParseState.NONUNARY;
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
                
                case ParseState.NONUNARY:
                    if (aToken instanceof THex) {
                        localFirstArg = new HexArg(aToken.getIntValue());
                        state = ParseState.PARAM1;
                        break;
                    }

                    if (aToken instanceof TInteger) {
                        localFirstArg = new IntArg(aToken.getIntValue());
                        state = ParseState.PARAM1;
                        break;
                    }
                    
                    this.aCode = new hiError("invalid parameter");
                    break;
                
                case ParseState.PARAM1:
                    if (aToken instanceof TEmpty && localMnemon in NonUnary1) {
                        this.aCode = new NonUnaryInstruction(localMnemon, localFirstArg);
                        state = ParseState.FINISH;
                        break;
                    }

                    if (aToken instanceof TAddress && localMnemon in NonUnary2) {
                        if (Maps.adressignModeTable.has(aToken.getStringValue())) {
                            localSecondArg = new AddrModeArg(aToken.getStringValue());
                            state = ParseState.PARAM2;
                            break;
                        }

                        this.aCode = new hiError("invalid addressing mode");
                        break; 
                    }
                    
                    if (aToken instanceof TAddress && localMnemon in NonUnary1) {
                        this.aCode = new hiError("this instruction does not accept addressing modes")
                        break;
                    }

                    this.aCode = new hiError("missing an valid argument")
                    break;
                
                case ParseState.PARAM2:
                    if (aToken instanceof TEmpty) {
                        this.aCode = new NonUnaryInstruction(localMnemon, localFirstArg, localSecondArg);
                        state = ParseState.FINISH;
                        break;
                    }

                    this.aCode = new hiError("this instruction doesn't accept an extra argument")
                    break;

                default:
                    state = ParseState.FINISH;
                    this.aCode = new hiError("something went wrong");

            }
            
            
            
        } while (state !== ParseState.FINISH && !(this.aCode instanceof hiError));

        return terminate;
    }

    translate(): void {
        const codeTable: ACode[] = [];
        let numErrors = 0;
        let hasEnd = false;
        this.buffer.cutFirstLine();

        while (this.buffer.inputRemains() && !hasEnd) {
            hasEnd = this.parseLine(); // sets ACode and returns boolean;
            codeTable.push(this.aCode);
            if (this.aCode instanceof hiError) {
                numErrors++
            }
            this.buffer.cutFirstLine();
        }

        if (!hasEnd) {
            this.aCode = new hiError("Missing .END sentinel");
            codeTable.push(this.aCode);
            numErrors++;
        }

        // if (numErrors == 0) {
        //     console.log("Object code:\n");
        //     for (let i = 0; i < codeTable.length; i++) {
        //         console.log(`${codeTable[ i ].generateCode()}`);
        //     }
        // }

        if (numErrors == 1) {
            console.log("One error was detected.\n");
        }

        if (numErrors > 1) {
            console.log(`${numErrors} errors were detected.\n`);
        }

        console.log("> Program listing:\n");
        for (let i = 0; i < codeTable.length; i++) {
            console.log(`${codeTable[ i ].generateListing()}`);
        }

        console.log(codeTable)
    }

}