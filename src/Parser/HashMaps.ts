export enum Unary {
    STOP, ASLA, ASRA
}

export enum NonUnary1 {
    BR, BRLT, BREQ, BRLE, CPWA, SUBA, STWA, LDWA
}

export enum NonUnary2 {
    DECI, DECO, ADDA,
}

export enum DotCommand {
    dotBLOCK, dotEND
}

export enum AddressingMode {
    addI, addD, addN, addS, addSF, addX, addSX, addSFX
}


export default class Maps {
    static unaryMnemonTable: Map<string, Unary>;
    static nonUnaryMnemonTable: Map<string, NonUnary1 | NonUnary2>;
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
        
        Maps.nonUnaryMnemonTable = new Map<string, NonUnary1 | NonUnary2>();
        Maps.nonUnaryMnemonTable.set("br", NonUnary1.BR);
        Maps.nonUnaryMnemonTable.set("brlt", NonUnary1.BRLT);
        Maps.nonUnaryMnemonTable.set("breq", NonUnary1.BREQ);
        Maps.nonUnaryMnemonTable.set("brle", NonUnary1.BRLE);
        Maps.nonUnaryMnemonTable.set("cpwa", NonUnary1.CPWA);
        Maps.nonUnaryMnemonTable.set("suba", NonUnary1.SUBA);
        Maps.nonUnaryMnemonTable.set("stwa", NonUnary1.STWA);
        Maps.nonUnaryMnemonTable.set("ldwa", NonUnary1.LDWA);

        Maps.nonUnaryMnemonTable.set("deci", NonUnary2.DECI);
        Maps.nonUnaryMnemonTable.set("deco", NonUnary2.DECO);
        Maps.nonUnaryMnemonTable.set("adda", NonUnary2.ADDA);

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

        Maps.mnemonStringTable.set(NonUnary1.BR, "BR");
        Maps.mnemonStringTable.set(NonUnary1.BRLT, "BRLT");
        Maps.mnemonStringTable.set(NonUnary1.BREQ, "BREQ");
        Maps.mnemonStringTable.set(NonUnary1.BRLE, "BRLE");
        Maps.mnemonStringTable.set(NonUnary1.CPWA, "CPWA");
        Maps.mnemonStringTable.set(NonUnary1.SUBA, "SUBA");
        Maps.mnemonStringTable.set(NonUnary1.STWA, "STWA");
        Maps.mnemonStringTable.set(NonUnary1.LDWA, "LDWA");

        Maps.mnemonStringTable.set(NonUnary2.DECI, "DECI");
        Maps.mnemonStringTable.set(NonUnary2.DECO, "DECO");
        Maps.mnemonStringTable.set(NonUnary2.ADDA, "ADDA");

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