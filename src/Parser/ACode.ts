import decToHex from "../utils/hexParser";
import twoComplement, { halfTwoComplement } from "../utils/twoComplement";
import AArg, { AddrModeArg, HexArg, IntArg } from "./AArg";
import Maps, { Unary, NonUnary, AddressingMode} from "./HashMaps";

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
        return `[ERROR]--> ${this.errorMessage}\n`
        
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
        if (this.mnemonic === Unary.dotEND) {
            return `${Maps.unaryCodeTable.get(this.mnemonic)}`
        }

        return `${halfTwoComplement((Maps.unaryCodeTable.get(this.mnemonic).toString(16)))}`
    }

}

export class NonUnaryInstruction extends ACode {
    private mnemonic: any;
    private stringMnemonic: any;
    private opEspeci: AArg;
    private addrMode: any;

    constructor(mn: NonUnary, operand: AArg, addrmode?: AArg) {
        super();
        this.mnemonic = mn;
        this.stringMnemonic = Maps.nonUnaryStringTable.get(this.mnemonic);      
        this.opEspeci = operand;
        this.addrMode = addrmode || new AddrModeArg("i");
        
    }

    override generateListing(): string {

        let text = `${Maps.nonUnaryStringTable.get(this.mnemonic)}`;
        if (this.opEspeci instanceof IntArg) {
            text += `   ${this.opEspeci.generateCode()}`
        }

        if (this.opEspeci instanceof HexArg) {
            text += `   0x${twoComplement(decToHex(Number(this.opEspeci.generateCode())))}`
        }

        if (this.mnemonic !== NonUnary.dotBLOCK && this.mnemonic !== NonUnary.BR) {
            text += `, ${this.addrMode.generateCode()}`
        }

        return text;
        

    }

    override generateCode(): string {
        const opNum = Number(this.opEspeci.generateCode())
        if (this.mnemonic === NonUnary.dotBLOCK) {
            let blockCode = "";
            for (let i = 0; i < opNum; i++){
                if (i === (opNum - 1)) {
                    blockCode += "00"
                } else {
                    blockCode += "00 "
                }
            }
            return blockCode;
        }
        const hexString = decToHex(opNum)
        let leftSide = halfTwoComplement(Math.floor(Number(`0x${hexString}`) / 256).toString(16))
        let rightSide = halfTwoComplement(Math.floor(Number(`0x${hexString}`) % 256).toString(16))

        return `${(Maps.nonUnaryCodeTable.get(this.mnemonic) + Maps.adressignModeTable.get(this.addrMode.generateCode())).toString(16).toUpperCase()} ${leftSide} ${rightSide}` 
    }

}