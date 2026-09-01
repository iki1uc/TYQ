// vector.energie.js
// Reine VECTOR-Energie-Mechanik – 12d-Erweiterung

const FAIL_NEUTRAL = require("./fail.neutral.js");

// QI = Reinheit des Tatbestands
function QI(rolle, ort, home) {
    try {
        return rolle + ort + home;
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// IQQ = Reinheit des Vorgangs
function IQQ(suite, bildung) {
    try {
        return suite + bildung;
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// Raum-Zuweisung nach 387 / 420 / 489
function RAUM(wert) {
    if (wert < 387) return "Unterraum";
    if (wert < 420) return "Mittelraum";
    if (wert < 489) return "Überraum";
    return "Überraum+";
}

// Zeichen-Zuweisung
function ZEICHEN(wert) {
    if (wert < 387) return 387;
    if (wert < 420) return 420;
    return 489;
}

// VECTOR.ENERGIE = rohe Kraft vor der Bewegung
function VECTOR_ENERGIE(qi, iqq) {
    try {
        // 60% QI, 40% IQQ – Achsenlogik
        const energie = (qi * 0.6) + (iqq * 0.4);

        return {
            typ: "vector.energie",
            energie,
            ausgang: energie,

            // 12d-Erweiterung
            achse: 9,
            signatur: "4-8",
            muster: "81mein81",

            // Raum & Zeichen
            raum: RAUM(energie),
            zeichen: ZEICHEN(energie)
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// Export
module.exports = {
    QI,
    IQQ,
    VECTOR_ENERGIE
};
catch (error) {
    return FAIL_NEUTRAL(error);
}
