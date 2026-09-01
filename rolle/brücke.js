// brücke.js
// Continuum-Brücke – Zugang zwischen QI und IQQ (12d-Erweiterung)

const FAIL_NEUTRAL = require("./fail.neutral.js");

// QI = Erkenntnis (Rolle, Ort, Home)
function QI(rolle, ort, home) {
    try {
        return rolle + ort + home;
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// IQQ = Weis (Suite, Bildung)
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

// Continuum = Zugang durch Qualität
function continuumZugang(qi, iqq) {
    try {
        const summe = qi + iqq;

        const geöffnet = summe > 0 ? true : false;

        return {
            typ: "continuum",
            summe,
            status: geöffnet ? "Continuum geöffnet" : "Continuum geschlossen",

            // 12d-Erweiterung
            achse: 9,
            signatur: "4-8",
            muster: "81mein81",

            // Raum & Zeichen
            raum: RAUM(summe),
            zeichen: ZEICHEN(summe)
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

module.exports = {
    QI,
    IQQ,
    continuumZugang
};
