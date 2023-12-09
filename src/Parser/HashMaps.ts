export enum Unary {
    STOP, ASLA, ASRA, dotEND
}

export enum NonUnary {
    BR, BRLT, BREQ, BRLE, CPWA, SUBA, dotBLOCK, DECI, DECO, ADDA, STWA, LDWA
}

export enum AddressingMode {
    addI, addD, addN, addS, addSF, addX, addSX, addSFX
}


export default class Maps {
    static unaryMnemonTable: Map<string, any>;
    static nonUnaryMnemonTable: Map<string, any>;
    static unaryStringTable: Map<any, string>;
    static nonUnaryStringTable: Map<any, string>;

    static adressignModeTable: Map<string, any>
    static addrModeStringTable: Map<any, string>;

    static unaryCodeTable: Map<any, string>;
    static nonUnaryCodeTable: Map<any, string>;

    static {
        Maps.unaryMnemonTable = new Map<string, any>();
        Maps.nonUnaryMnemonTable = new Map<string, any>();
        Maps.unaryStringTable = new Map<any, string>();
        Maps.nonUnaryStringTable = new Map<any, string>();

        Maps.adressignModeTable = new Map<string, any>();
        Maps.addrModeStringTable = new Map<any, string>();

        Maps.unaryCodeTable = new Map<any, string>();
        Maps.nonUnaryCodeTable = new Map<any, string>();

        // UNARIES CODE TABLE SETS
        Maps.unaryCodeTable.set(Unary.STOP, "00");
        Maps.unaryCodeTable.set(Unary.ASLA, "0A");
        Maps.unaryCodeTable.set(Unary.ASRA, "0C");
        Maps.unaryCodeTable.set(Unary.dotEND, "zz");

        // NON UNARIES CODE TABLE SETS
        Maps.nonUnaryCodeTable.set(NonUnary.BR, "12");
        Maps.nonUnaryCodeTable.set(NonUnary.BRLT, "16");
        Maps.nonUnaryCodeTable.set(NonUnary.BREQ, "18");
        Maps.nonUnaryCodeTable.set(NonUnary.BRLE, "14");
        Maps.nonUnaryCodeTable.set(NonUnary.CPWA, "A0");
        Maps.nonUnaryCodeTable.set(NonUnary.SUBA, "70");
        // .block?
        Maps.nonUnaryCodeTable.set(NonUnary.DECI, "31");
        Maps.nonUnaryCodeTable.set(NonUnary.DECO, "39");
        Maps.nonUnaryCodeTable.set(NonUnary.ADDA, "60");
        Maps.nonUnaryCodeTable.set(NonUnary.STWA, "E1");
        Maps.nonUnaryCodeTable.set(NonUnary.LDWA, "C0");
        
        // UNARY MNEMONS TABLE SETS
        Maps.unaryMnemonTable.set("stop", Unary.STOP);
        Maps.unaryMnemonTable.set("asla", Unary.ASLA);
        Maps.unaryMnemonTable.set("asra", Unary.ASRA);
        Maps.unaryMnemonTable.set(".end", Unary.dotEND);

        // NON UNARY MNEMONS TABLE SETS
        Maps.nonUnaryMnemonTable.set(".block", NonUnary.dotBLOCK);
        Maps.nonUnaryMnemonTable.set("br", NonUnary.BR);
        Maps.nonUnaryMnemonTable.set("brlt", NonUnary.BRLT);
        Maps.nonUnaryMnemonTable.set("breq", NonUnary.BREQ);
        Maps.nonUnaryMnemonTable.set("brle", NonUnary.BRLE);
        Maps.nonUnaryMnemonTable.set("cpwa", NonUnary.CPWA);
        Maps.nonUnaryMnemonTable.set("suba", NonUnary.SUBA);
        Maps.nonUnaryMnemonTable.set("deci", NonUnary.DECI);
        Maps.nonUnaryMnemonTable.set("deco", NonUnary.DECO);
        Maps.nonUnaryMnemonTable.set("adda", NonUnary.ADDA);
        Maps.nonUnaryMnemonTable.set("stwa", NonUnary.STWA);
        Maps.nonUnaryMnemonTable.set("ldwa", NonUnary.LDWA);

        // ADDRESSING TABLE SETS
        Maps.adressignModeTable.set("i", AddressingMode.addI);
        Maps.adressignModeTable.set("d", AddressingMode.addD);
        Maps.adressignModeTable.set("n", AddressingMode.addN);
        Maps.adressignModeTable.set("s", AddressingMode.addS);
        Maps.adressignModeTable.set("sf", AddressingMode.addSF);
        Maps.adressignModeTable.set("x", AddressingMode.addX);
        Maps.adressignModeTable.set("sx", AddressingMode.addSX);
        Maps.adressignModeTable.set("sfx", AddressingMode.addSFX);

        // UNARIES STRING TABLE
        Maps.unaryStringTable.set(Unary.STOP, "STOP");
        Maps.unaryStringTable.set(Unary.ASLA, "ASLA");
        Maps.unaryStringTable.set(Unary.ASRA, "ASRA"); 
        Maps.unaryStringTable.set(Unary.dotEND, ".END");

        // NON UNARIES STRING TABLE
        Maps.nonUnaryStringTable.set(NonUnary.dotBLOCK, ".BLOCK")
        Maps.nonUnaryStringTable.set(NonUnary.BR, "BR");
        Maps.nonUnaryStringTable.set(NonUnary.BRLT, "BRLT");
        Maps.nonUnaryStringTable.set(NonUnary.BREQ, "BREQ");
        Maps.nonUnaryStringTable.set(NonUnary.BRLE, "BRLE");
        Maps.nonUnaryStringTable.set(NonUnary.CPWA, "CPWA");
        Maps.nonUnaryStringTable.set(NonUnary.SUBA, "SUBA");
        
        Maps.nonUnaryStringTable.set(NonUnary.LDWA, "LDWA");
        Maps.nonUnaryStringTable.set(NonUnary.STWA, "STWA");
        Maps.nonUnaryStringTable.set(NonUnary.DECI, "DECI");
        Maps.nonUnaryStringTable.set(NonUnary.DECO, "DECO");
        Maps.nonUnaryStringTable.set(NonUnary.ADDA, "ADDA");

        // ADDRESSINGS STRING TABLE
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