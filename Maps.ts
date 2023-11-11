export enum Mnemon {
    STOP, ASLA, ASRA, BR, BRLT, BREQ, BRLE, CPWA, DECI, DECO, ADDA, SUBA, STWA, LDWA, dotBLOCK, dotEND
}

export default class Maps {
    static unaryMnemonTable: Map<string, Mnemon>;
    static nonUnaryMnemonTable: Map<string, Mnemon>;
    static mnemonStringTable: Map<Mnemon, string>;


    static {
        this.unaryMnemonTable = new Map<string, Mnemon>();
        this.unaryMnemonTable.set("stop", Mnemon.STOP);
        this.unaryMnemonTable.set("asla", Mnemon.ASLA);
        this.unaryMnemonTable.set("asra", Mnemon.ASRA);

        this.nonUnaryMnemonTable = new Map<string, Mnemon>();
        this.nonUnaryMnemonTable.set("br", Mnemon.BR);
        this.nonUnaryMnemonTable.set("brlt", Mnemon.BRLT);
        this.nonUnaryMnemonTable.set("breq", Mnemon.BREQ);
        this.nonUnaryMnemonTable.set("brle", Mnemon.BRLE);
        this.nonUnaryMnemonTable.set("cpwa", Mnemon.CPWA);
        this.nonUnaryMnemonTable.set("deci", Mnemon.DECI);
        this.nonUnaryMnemonTable.set("deco", Mnemon.DECO);
        this.nonUnaryMnemonTable.set("adda", Mnemon.ADDA);
        this.nonUnaryMnemonTable.set("suba", Mnemon.SUBA);
        this.nonUnaryMnemonTable.set("stwa", Mnemon.STWA);
        this.nonUnaryMnemonTable.set("ldwa", Mnemon.LDWA);

        this.mnemonStringTable = new Map<Mnemon, string>();
        this.mnemonStringTable.set(Mnemon.STOP, "stop");
        this.mnemonStringTable.set(Mnemon.ASLA, "asla");
        this.mnemonStringTable.set(Mnemon.ASRA, "stop");

        this.mnemonStringTable.set(Mnemon.BR, "br");
        this.mnemonStringTable.set(Mnemon.BRLT, "brlt");
        this.mnemonStringTable.set(Mnemon.BREQ, "breq");
        this.mnemonStringTable.set(Mnemon.BRLE, "brle");
        this.mnemonStringTable.set(Mnemon.CPWA, "cpwa");
        this.mnemonStringTable.set(Mnemon.DECI, "deci");
        this.mnemonStringTable.set(Mnemon.DECO, "deco");
        this.mnemonStringTable.set(Mnemon.ADDA, "adda");
        this.mnemonStringTable.set(Mnemon.SUBA, "suba");
        this.mnemonStringTable.set(Mnemon.STWA, "stwa");
        this.mnemonStringTable.set(Mnemon.LDWA, "ldwa");
    }
}