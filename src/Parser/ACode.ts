import AArg, { HexArg, IdentifierArg } from "./AArg";
import Maps, { Unary, NonUnary1, NonUnary2, DotCommand, AddressingMode } from "./HashMaps";

export default abstract class ACode {
    abstract generateListing(): string;
    abstract generateCode(): string;
}

export class hiError extends ACode {
    private errorMessage: string;

    constructor(errMessage: string) {
        super();
        this.errorMessage = errMessage;
    }

    override generateListing(): string {
        return `ERROR: ${this.errorMessage}\n`
        
    }

    override generateCode(): string {
        return "";
    }

}

export class EmptyInstruction extends ACode {
    // for an empty source line

    override generateListing(): string {
        return '\n';
    }

    override generateCode(): string {
        return "";
    }

}

export class UnaryInstruction extends ACode {
    private mnemonic: Unary;

    constructor(mn: Unary) {
        super();
        this.mnemonic = mn;
    }

    override generateListing(): string {
        return `${Maps.mnemonStringTable.get(this.mnemonic)}\n`;
    }

    override generateCode(): string {
        return "";
    }

}

export class NonUnaryInstruction extends ACode {
    private mnemonic: NonUnary1 | NonUnary2;
    private opEspeci: AArg;
    private addrMode: AArg | undefined;

    constructor(mn: NonUnary1 | NonUnary2, operand: AArg, addrmode?: AArg) {
        super();
        this.mnemonic = mn;
        this.opEspeci = operand;
        this.addrMode = addrmode;
    }

    override generateListing(): string {
        if (this.mnemonic in NonUnary1) {
            return `${Maps.mnemonStringTable.get(this.mnemonic)}    ${this.opEspeci.generateCode()}`
        }

        if (this.opEspeci instanceof HexArg) {
            return`${Maps.mnemonStringTable.get(this.mnemonic)}    0x${this.opEspeci.generateCode()}, ${Maps.mnemonStringTable.get(this.addrMode)}`
        }
        
        return `${Maps.mnemonStringTable.get(this.mnemonic)}    ${this.opEspeci.generateCode()}, ${Maps.mnemonStringTable.get(this.addrMode)}`

    }

    override generateCode(): string {
        return ""; 
    }

}