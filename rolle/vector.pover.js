// vector.pover.js
// Potenzkraft des VECTOR – reine Mechanik

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

// VECTOR.POVER = Potenzkraft (QI² + IQQ²) / 9
function VECTOR_POVER(qi, iqq) {
    try {
        const potenz = (qi * qi) + (iqq * iqq);
        const pover = potenz / 9; // Achsen-Normierung

        // Raum-Zuordnung
        const raum =
            pover < 387 ? "Unterraum" :
            pover < 420 ? "Mittelraum" :
            pover < 489 ? "Überraum" :
            "Überraum+";

        // Zeichen-Zuordnung
        const zeichen =
            pover < 387 ? 387 :
            pover < 420 ? 420 :
            489;

        return {
            typ: "vector.pover",
            potenz,
            pover,
            ausgang: pover,

            // Achse, Signatur, Muster integriert
            achse: 9,
            signatur: "4-8",
            muster: "81mein81",

            // Raum & Zeichen
            raum,
            zeichen
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// Export
module.exports = {
    QI,
    IQQ,
    VECTOR_POVER
};
catch (error) {
    return FAIL_NEUTRAL(error);
}
