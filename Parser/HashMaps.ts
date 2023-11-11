export enum Mnemon {
    STOP, ASLA, ASRA, BR, BRLT, BREQ, BRLE, CPWA, DECI, DECO, ADDA, SUBA, STWA, LDWA, dotBLOCK, dotEND
}

export default class Maps {
    static unaryMnemonTable: Map<string, Mnemon>;
    static nonUnaryMnemonTable: Map<string, Mnemon>;
    static mnemonStringTable: Map<Mnemon, string>;

    constructor() {
        Maps.unaryMnemonTable = new Map<string, Mnemon>();
        Maps.unaryMnemonTable.set("stop", Mnemon.STOP);
        Maps.unaryMnemonTable.set("asla", Mnemon.ASLA);
        Maps.unaryMnemonTable.set("asra", Mnemon.ASRA);

        Maps.nonUnaryMnemonTable = new Map<string, Mnemon>();
        Maps.nonUnaryMnemonTable.set("br", Mnemon.BR);
        Maps.nonUnaryMnemonTable.set("brlt", Mnemon.BRLT);
        Maps.nonUnaryMnemonTable.set("breq", Mnemon.BREQ);
        Maps.nonUnaryMnemonTable.set("brle", Mnemon.BRLE);
        Maps.nonUnaryMnemonTable.set("cpwa", Mnemon.CPWA);
        Maps.nonUnaryMnemonTable.set("deci", Mnemon.DECI);
        Maps.nonUnaryMnemonTable.set("deco", Mnemon.DECO);
        Maps.nonUnaryMnemonTable.set("adda", Mnemon.ADDA);
        Maps.nonUnaryMnemonTable.set("suba", Mnemon.SUBA);
        Maps.nonUnaryMnemonTable.set("stwa", Mnemon.STWA);
        Maps.nonUnaryMnemonTable.set("ldwa", Mnemon.LDWA);

        Maps.mnemonStringTable = new Map<Mnemon, string>();
        Maps.mnemonStringTable.set(Mnemon.STOP, "STOP");
        Maps.mnemonStringTable.set(Mnemon.ASLA, "ASLA");
        Maps.mnemonStringTable.set(Mnemon.ASRA, "ASRA");

        Maps.mnemonStringTable.set(Mnemon.BR, "BR");
        Maps.mnemonStringTable.set(Mnemon.BRLT, "BRLT");
        Maps.mnemonStringTable.set(Mnemon.BREQ, "BREQ");
        Maps.mnemonStringTable.set(Mnemon.BRLE, "BRLE");
        Maps.mnemonStringTable.set(Mnemon.CPWA, "CPWA");
        Maps.mnemonStringTable.set(Mnemon.DECI, "DECI");
        Maps.mnemonStringTable.set(Mnemon.DECO, "DECO");
        Maps.mnemonStringTable.set(Mnemon.ADDA, "ADDA");
        Maps.mnemonStringTable.set(Mnemon.SUBA, "SUBA");
        Maps.mnemonStringTable.set(Mnemon.STWA, "STWA");
        Maps.mnemonStringTable.set(Mnemon.LDWA, "LDWA");
    }

 
    

}