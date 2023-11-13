export enum Unary {
    STOP, ASLA, ASRA
}

export enum NonUnary {
    BR, BRLT, BREQ, BRLE, CPWA, DECI, DECO, ADDA, SUBA, STWA, LDWA
}

export enum DotCommand {
    dotBLOCK, dotEND
}

export enum AddressingMode {
    addI, addD, addN, addS, addSF, addX, addSX, addSFX
}


export default class Maps {
    static unaryMnemonTable: Map<string, Unary>;
    static nonUnaryMnemonTable: Map<string, NonUnary>;
    static dotCommandsTable: Map<string, DotCommand>;
    static adressignModeTable: Map<string, AddressingMode>
    static mnemonStringTable: Map<any, string>;

    constructor() {
        Maps.unaryMnemonTable = new Map<string, Unary>();
        Maps.unaryMnemonTable.set("stop", Unary.STOP);
        Maps.unaryMnemonTable.set("asla", Unary.ASLA);
        Maps.unaryMnemonTable.set("asra", Unary.ASRA);

        Maps.dotCommandsTable = new Map<string, DotCommand>();
        Maps.dotCommandsTable.set(".block", DotCommand.dotBLOCK);
        Maps.dotCommandsTable.set(".end", DotCommand.dotEND);
        
        Maps.nonUnaryMnemonTable = new Map<string, NonUnary>();
        Maps.nonUnaryMnemonTable.set("br", NonUnary.BR);
        Maps.nonUnaryMnemonTable.set("brlt", NonUnary.BRLT);
        Maps.nonUnaryMnemonTable.set("breq", NonUnary.BREQ);
        Maps.nonUnaryMnemonTable.set("brle", NonUnary.BRLE);
        Maps.nonUnaryMnemonTable.set("cpwa", NonUnary.CPWA);
        Maps.nonUnaryMnemonTable.set("deci", NonUnary.DECI);
        Maps.nonUnaryMnemonTable.set("deco", NonUnary.DECO);
        Maps.nonUnaryMnemonTable.set("adda", NonUnary.ADDA);
        Maps.nonUnaryMnemonTable.set("suba", NonUnary.SUBA);
        Maps.nonUnaryMnemonTable.set("stwa", NonUnary.STWA);
        Maps.nonUnaryMnemonTable.set("ldwa", NonUnary.LDWA);

        Maps.adressignModeTable = new Map<string, AddressingMode>();
        Maps.adressignModeTable.set("i", AddressingMode.addI);
        Maps.adressignModeTable.set("d", AddressingMode.addD);
        Maps.adressignModeTable.set("n", AddressingMode.addN);
        Maps.adressignModeTable.set("s", AddressingMode.addS);
        Maps.adressignModeTable.set("sf", AddressingMode.addSF);
        Maps.adressignModeTable.set("x", AddressingMode.addX);
        Maps.adressignModeTable.set("sx", AddressingMode.addSX);
        Maps.adressignModeTable.set("sfx", AddressingMode.addSFX);

        Maps.mnemonStringTable = new Map<any, string>();
        Maps.mnemonStringTable.set(Unary.STOP, "STOP");
        Maps.mnemonStringTable.set(Unary.ASLA, "ASLA");
        Maps.mnemonStringTable.set(Unary.ASRA, "ASRA");

        Maps.mnemonStringTable.set(DotCommand.dotBLOCK, ".BLOCK");
        Maps.mnemonStringTable.set(DotCommand.dotEND, ".END");

        Maps.mnemonStringTable.set(NonUnary.BR, "BR");
        Maps.mnemonStringTable.set(NonUnary.BRLT, "BRLT");
        Maps.mnemonStringTable.set(NonUnary.BREQ, "BREQ");
        Maps.mnemonStringTable.set(NonUnary.BRLE, "BRLE");
        Maps.mnemonStringTable.set(NonUnary.CPWA, "CPWA");
        Maps.mnemonStringTable.set(NonUnary.DECI, "DECI");
        Maps.mnemonStringTable.set(NonUnary.DECO, "DECO");
        Maps.mnemonStringTable.set(NonUnary.ADDA, "ADDA");
        Maps.mnemonStringTable.set(NonUnary.SUBA, "SUBA");
        Maps.mnemonStringTable.set(NonUnary.STWA, "STWA");
        Maps.mnemonStringTable.set(NonUnary.LDWA, "LDWA");

        Maps.mnemonStringTable.set(AddressingMode.addI, "i");
        Maps.mnemonStringTable.set(AddressingMode.addD, "d");
        Maps.mnemonStringTable.set(AddressingMode.addN, "n");
        Maps.mnemonStringTable.set(AddressingMode.addS, "s");
        Maps.mnemonStringTable.set(AddressingMode.addSF, "sf");
        Maps.mnemonStringTable.set(AddressingMode.addX, "x");
        Maps.mnemonStringTable.set(AddressingMode.addSX, "sx");
        Maps.mnemonStringTable.set(AddressingMode.addSFX, "sfx");
    }

 
    

}