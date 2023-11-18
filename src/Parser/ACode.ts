import AArg, { HexArg, IdentifierArg, IntArg } from "./AArg";
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
    private stringMnemonic: any;

    constructor(mn: Unary | undefined) {
        super();
        this.mnemonic = mn;
        this.stringMnemonic = Maps.unaryStringTable.get(this.mnemonic);
    }

    override generateListing(): string {
        return `${Maps.unaryStringTable.get(this.mnemonic)}`;
    }

    override generateCode(): string {
        return "";
    }

}

export class NonUnaryInstruction extends ACode {
    private mnemonic: any;
    private stringMnemonic: any;
    private opEspeci: AArg;
    private addrMode: any;

    constructor(mn: NonUnary1 | NonUnary2, operand: AArg, addrmode?: AArg) {
        super();
        this.mnemonic = mn;
        this.stringMnemonic = Maps.nonUnary1StringTable.get(this.mnemonic) || Maps.nonUnary2StringTable.get(this.mnemonic);        
        this.opEspeci = operand;
        this.addrMode = addrmode;
        
    }

    override generateListing(): string {
        if (this.mnemonic in NonUnary1) {
            if (this.opEspeci instanceof IntArg) {
                return `${Maps.nonUnary1StringTable.get(this.mnemonic)}    ${this.opEspeci.generateCode()}`
            }
            return `${Maps.nonUnary1StringTable.get(this.mnemonic)}    0x${this.opEspeci.generateCode()}`
        }

        if (this.opEspeci instanceof IntArg) {
            return `${Maps.nonUnary2StringTable.get(this.mnemonic)}    ${this.opEspeci.generateCode()}, ${this.addrMode.generateCode()}`
        }

        return `${Maps.nonUnary2StringTable.get(this.mnemonic)}    0x${this.opEspeci.generateCode()}, ${this.addrMode.generateCode()}`
        

    }

    override generateCode(): string {
        return ""; 
    }

}