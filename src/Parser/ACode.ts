import AArg, { IdentifierArg } from "./AArg";
import Maps, { Unary, NonUnary, DotCommand, AddressingMode } from "./HashMaps";

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

export class OneArgInstruction extends ACode {
    private mnemonic: NonUnary;
    private aArg: AArg;

    constructor(mn: NonUnary, aArg: AArg) {
        super();
        this.mnemonic = mn;
        this.aArg = aArg;
    }

    override generateListing(): string {
       return `${Maps.mnemonStringTable.get(this.mnemonic)} ${this.aArg.generateCode()}` 
    }

    override generateCode(): string {
        return "";
    }

}

export class TwoArgInstruction extends ACode {
    private mnemonic: NonUnary;
    private firstArg: AArg;
    private secondArg: AArg;

    constructor(mn: NonUnary, fArg: AArg, sArg: AArg) {
        super();
        this.mnemonic = mn;
        this.firstArg = fArg;
        this.secondArg = sArg;
    }

    override generateListing(): string {
        return `${Maps.mnemonStringTable.get(this.mnemonic)} ${this.firstArg.generateCode()}, ${this.secondArg.generateCode()}`;
    }

    override generateCode(): string {
        return "";
    }

}