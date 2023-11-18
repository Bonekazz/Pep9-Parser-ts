export enum Unary {
    STOP, ASLA, ASRA, dotEND
}

export enum NonUnary1 {
    BR = 4, BRLT, BREQ, BRLE, CPWA, SUBA, dotBLOCK
}

export enum NonUnary2 {
    DECI = 11, DECO, ADDA, STWA, LDWA
}

export enum AddressingMode {
    addI = 16, addD, addN, addS, addSF, addX, addSX, addSFX
}


export default class Maps {
    static unaryMnemonTable: Map<string, any>;
    static nonUnary1MnemonTable: Map<string, any>;
    static nonUnary2MnemonTable: Map<string, any>;
    static adressignModeTable: Map<string, any>
    static unaryStringTable: Map<any, string>;
    static nonUnary1StringTable: Map<any, string>;
    static nonUnary2StringTable: Map<any, string>;
    static addrModeStringTable: Map<any, string>;

    static {
        Maps.unaryMnemonTable = new Map<string, any>();
        Maps.nonUnary1MnemonTable = new Map<string, any>();
        Maps.nonUnary2MnemonTable = new Map<string, any>();
        Maps.adressignModeTable = new Map<string, any>();

        Maps.unaryStringTable = new Map<any, string>();
        Maps.nonUnary1StringTable = new Map<any, string>();
        Maps.nonUnary2StringTable = new Map<any, string>();
        Maps.addrModeStringTable = new Map<any, string>();
        
        Maps.unaryMnemonTable.set("stop", Unary.STOP);
        Maps.unaryMnemonTable.set("asla", Unary.ASLA);
        Maps.unaryMnemonTable.set("asra", Unary.ASRA);
        Maps.unaryMnemonTable.set(".end", Unary.dotEND);

        Maps.nonUnary1MnemonTable.set(".block", NonUnary1.dotBLOCK);
        Maps.nonUnary1MnemonTable.set("br", NonUnary1.BR);
        Maps.nonUnary1MnemonTable.set("brlt", NonUnary1.BRLT);
        Maps.nonUnary1MnemonTable.set("breq", NonUnary1.BREQ);
        Maps.nonUnary1MnemonTable.set("brle", NonUnary1.BRLE);
        Maps.nonUnary1MnemonTable.set("cpwa", NonUnary1.CPWA);
        Maps.nonUnary1MnemonTable.set("suba", NonUnary1.SUBA);
        

        Maps.nonUnary2MnemonTable.set("deci", NonUnary2.DECI);
        Maps.nonUnary2MnemonTable.set("deco", NonUnary2.DECO);
        Maps.nonUnary2MnemonTable.set("adda", NonUnary2.ADDA);
        Maps.nonUnary2MnemonTable.set("stwa", NonUnary2.STWA);
        Maps.nonUnary2MnemonTable.set("ldwa", NonUnary2.LDWA);

        Maps.adressignModeTable.set("i", AddressingMode.addI);
        Maps.adressignModeTable.set("d", AddressingMode.addD);
        Maps.adressignModeTable.set("n", AddressingMode.addN);
        Maps.adressignModeTable.set("s", AddressingMode.addS);
        Maps.adressignModeTable.set("sf", AddressingMode.addSF);
        Maps.adressignModeTable.set("x", AddressingMode.addX);
        Maps.adressignModeTable.set("sx", AddressingMode.addSX);
        Maps.adressignModeTable.set("sfx", AddressingMode.addSFX);

        Maps.unaryStringTable.set(Unary.STOP, "STOP");
        Maps.unaryStringTable.set(Unary.ASLA, "ASLA");
        Maps.unaryStringTable.set(Unary.ASRA, "ASRA"); 
        Maps.unaryStringTable.set(Unary.dotEND, ".END");


        Maps.nonUnary1StringTable.set(NonUnary1.dotBLOCK, ".BLOCK")
        Maps.nonUnary1StringTable.set(NonUnary1.BR, "BR");
        Maps.nonUnary1StringTable.set(NonUnary1.BRLT, "BRLT");
        Maps.nonUnary1StringTable.set(NonUnary1.BREQ, "BREQ");
        Maps.nonUnary1StringTable.set(NonUnary1.BRLE, "BRLE");
        Maps.nonUnary1StringTable.set(NonUnary1.CPWA, "CPWA");
        Maps.nonUnary1StringTable.set(NonUnary1.SUBA, "SUBA");
        
        Maps.nonUnary2StringTable.set(NonUnary2.LDWA, "LDWA");
        Maps.nonUnary2StringTable.set(NonUnary2.STWA, "STWA");
        Maps.nonUnary2StringTable.set(NonUnary2.DECI, "DECI");
        Maps.nonUnary2StringTable.set(NonUnary2.DECO, "DECO");
        Maps.nonUnary2StringTable.set(NonUnary2.ADDA, "ADDA");

        Maps.addrModeStringTable.set(AddressingMode.addI, "i");
        Maps.addrModeStringTable.set(AddressingMode.addD, "d");
        Maps.addrModeStringTable.set(AddressingMode.addN, "n");
        Maps.addrModeStringTable.set(AddressingMode.addS, "s");
        Maps.addrModeStringTable.set(AddressingMode.addSF, "sf");
        Maps.addrModeStringTable.set(AddressingMode.addX, "x");
        Maps.addrModeStringTable.set(AddressingMode.addSX, "sx");
        Maps.addrModeStringTable.set(AddressingMode.addSFX, "sfx");
    }

 
    

}