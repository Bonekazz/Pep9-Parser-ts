export enum Unary {
    STOP, ASLA, ASRA, dotBLOCK, dotEND
}

export enum NonUnary1 {
    BR, BRLT, BREQ, BRLE, CPWA, SUBA, STWA, LDWA
}

export enum NonUnary2 {
    DECI, DECO, ADDA,
}

export enum AddressingMode {
    addI, addD, addN, addS, addSF, addX, addSX, addSFX
}


export default class Maps {
    static unaryMnemonTable: Map<string, Unary>;
    static nonUnary1MnemonTable: Map<string, NonUnary1>;
    static nonUnary2MnemonTable: Map<string, NonUnary2>;
    static adressignModeTable: Map<string, AddressingMode>
    static mnemonStringTable: Map<any, string>;

    constructor() {
        Maps.unaryMnemonTable = new Map<string, Unary>();
        Maps.unaryMnemonTable.set("stop", Unary.STOP);
        Maps.unaryMnemonTable.set("asla", Unary.ASLA);
        Maps.unaryMnemonTable.set("asra", Unary.ASRA);
        Maps.unaryMnemonTable.set(".block", Unary.dotBLOCK);
        Maps.unaryMnemonTable.set(".end", Unary.dotEND);
        
        Maps.nonUnary1MnemonTable = new Map<string, NonUnary1>();
        Maps.nonUnary1MnemonTable.set("br", NonUnary1.BR);
        Maps.nonUnary1MnemonTable.set("brlt", NonUnary1.BRLT);
        Maps.nonUnary1MnemonTable.set("breq", NonUnary1.BREQ);
        Maps.nonUnary1MnemonTable.set("brle", NonUnary1.BRLE);
        Maps.nonUnary1MnemonTable.set("cpwa", NonUnary1.CPWA);
        Maps.nonUnary1MnemonTable.set("suba", NonUnary1.SUBA);
        Maps.nonUnary1MnemonTable.set("stwa", NonUnary1.STWA);
        Maps.nonUnary1MnemonTable.set("ldwa", NonUnary1.LDWA);

        Maps.nonUnary2MnemonTable = new Map<string, NonUnary2>();
        Maps.nonUnary2MnemonTable.set("deci", NonUnary2.DECI);
        Maps.nonUnary2MnemonTable.set("deco", NonUnary2.DECO);
        Maps.nonUnary2MnemonTable.set("adda", NonUnary2.ADDA);

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
        Maps.mnemonStringTable.set(Unary.dotBLOCK, ".BLOCK");
        Maps.mnemonStringTable.set(Unary.dotEND, ".END");

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