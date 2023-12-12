export default abstract class AArg {
    constructor() { };
    abstract generateCode(): string;
}

export class IdentifierArg extends AArg {
    private identValue: string;
    constructor(str: string) {
        super();
        this.identValue = str;
    }

    override generateCode(): string {
        return this.identValue;
    }

}

export class IntArg extends AArg {
    private intValue: number;

    constructor(i: number) {
        super();
        this.intValue = i;
    }

    override generateCode(): string {
        return String(this.intValue);
    }
}

export class HexArg extends AArg {
    private hexValue: number;

    constructor(hexNum: number) {
        super();
        this.hexValue = hexNum;
    }

    override generateCode(): string {
        return String(this.hexValue)
    }
}

export class AddrModeArg extends AArg {
    private addrMode: string;

    constructor(mode: string) {
        super();
        this.addrMode = mode;
    }

    override generateCode(): string {
        return this.addrMode;    
    }
}