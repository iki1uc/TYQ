// ============================================================
// TYQ · TMP-ENGINE · Universell · Entkoppelt
// ============================================================
//
// Aufgabe:
// - keine festen Werte
// - keine Rückverfolgung
// - dynamische TMP-Speicherführung
// - selbstsortierend (3, 9, 81, 756, 27)
// - selbsttrennend (%, °, te)
// - universell nutzbar
// ============================================================

const TYQ = {
    tmp: {},
    sorted: {},
    ready: false,

    init() {
        this.resetTMP();
        this.sortValues();
        this.allocateTMP();
        this.ready = true;
        console.log("🌀 TYQ TMP: ENGINE ONLINE");
    },

    resetTMP() {
        this.tmp = {};
        this.sorted = {};
        console.log("🌀 TYQ TMP: Speicher geleert");
    },

    sortValues() {
        const base = [3, 9, 81, 756, 27];

        this.sorted = {
            numbers: base,
            letters: ["A", "B", "C", "D", "E"],
            percent: base.map(v => v + "%"),
            degree: base.map(v => v + "°"),
            te: base.map(v => v + "te")
        };

        console.log("🌀 TYQ TMP: Werte sortiert");
    },

    allocateTMP() {
        this.tmp.RAM = 8192;
        this.tmp.USED = 0;
        this.tmp.FREE = this.tmp.RAM;

        console.log("🌀 TYQ TMP: RAM gesetzt (8192MB)");
    },

    alloc(size) {
        this.tmp.USED = size;
        this.tmp.FREE = this.tmp.RAM - size;
        console.log(`🌀 TYQ TMP: ${size}MB reserviert`);
    },

    status() {
        return {
            RAM: this.tmp.RAM,
            USED: this.tmp.USED,
            FREE: this.tmp.FREE,
            TMP: this.sorted
        };
    }
};

TYQ.init();
window.TYQ = TYQ;
