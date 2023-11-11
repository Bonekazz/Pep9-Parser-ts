export default abstract class AArg {
    constructor() { };
    abstract generateCode(): string;
}

export class IdentArg extends AArg {
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