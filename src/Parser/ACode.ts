import AArg, { HexArg, IdentifierArg } from "./AArg";
import Maps, { Unary, NonUnary1, NonUnary2} from "./HashMaps";

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
    private mnemonic: Unary | undefined;

    constructor(mn: Unary | undefined) {
        super();
        this.mnemonic = mn;
    }

    override generateListing(): string {
        return `${Maps.unaryStringTable.get(this.mnemonic)}\n`;
    }

    override generateCode(): string {
        return "";
    }

}

export class NonUnaryInstruction extends ACode {
    private mnemonic: any;
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
            return `${Maps.nonUnary1StringTable.get(this.mnemonic)}    ${this.opEspeci.generateCode()}`
        }

        return`${Maps.nonUnary2StringTable.get(this.mnemonic)}    0x${this.opEspeci.generateCode()}, ${Maps.addrModeStringTable.get(this.addrMode)}`

    }

    override generateCode(): string {
        return ""; 
    }

}