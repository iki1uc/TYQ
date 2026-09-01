// vector.flow.js
// Potender VECTOR (steigend) & Abfall VECTOR (fallend)
// 12d-Erweiterung: Achse, Räume, Zeichen, Signatur, Muster

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

// ENGINE = Kraft, die VECTOR antreibt
function ENGINE(qi, iqq) {
    try {
        return qi * 0.6 + iqq * 0.4;
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

// POTENDER VECTOR = steigende Bewegung
function potenderVector(qi, iqq) {
    try {
        const engine = ENGINE(qi, iqq);
        const richtung = engine + (qi - iqq);
        const ausgang = engine + richtung;

        return {
            typ: "potender",
            engine,
            richtung,
            ausgang,

            // 12d-Erweiterung
            achse: 9,
            signatur: "4-8",
            muster: "81mein81",
            raum: RAUM(ausgang),
            zeichen: ZEICHEN(ausgang)
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// ABFALL VECTOR = fallende Bewegung
function abfallVector(qi, iqq) {
    try {
        const engine = ENGINE
catch (error) {
    return FAIL_NEUTRAL(error);
}
