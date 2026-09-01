// vector.schlag.js
// Impuls-Vektor – der Moment-Schlag

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

// VECTOR.SCHLAG = Momentimpuls (QI * IQQ) / 9
function VECTOR_SCHLAG(qi, iqq) {
    try {
        const impuls = (qi * iqq) / 9;

        return {
            typ: "vector.schlag",
            impuls,
            ausgang: impuls,

            // Achse, Signatur, Muster integriert
            achse: 9,
            signatur: "4-8",
            muster: "81mein81",

            // Raum-Zuordnung
            raum: impuls < 387 ? "Unterraum"
                 : impuls < 420 ? "Mittelraum"
                 : impuls < 489 ? "Überraum"
                 : "Überraum+",

            // Zeichen-Zuordnung
            zeichen: impuls < 387 ? 387
                   : impuls < 420 ? 420
                   : 489
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// Export
module.exports = {
    QI,
    IQQ,
    VECTOR_SCHLAG
};
catch (error) {
    return FAIL_NEUTRAL(error);
}
