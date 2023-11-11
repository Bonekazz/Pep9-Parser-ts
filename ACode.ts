export default abstract class ACode {
    abstract generateCode(): string;
    abstract generateListing(): string;
}

export class hieError extends ACode {
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