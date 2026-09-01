// vector.ankunft.js
// Der Ankunfts-Vektor – Endpunkt der Bewegung (12d-Erweiterung)

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

// VECTOR.ENERGIE = rohe Kraft
function VECTOR_ENERGIE(qi, iqq) {
    try {
        return (qi * 0.6) + (iqq * 0.4);
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// VECTOR.POVER = Potenzkraft
function VECTOR_POVER(qi, iqq) {
    try {
        return ((qi * qi) + (iqq * iqq)) / 9;
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// VECTOR.SCHLAG = Momentimpuls
function VECTOR_SCHLAG(qi, iqq) {
    try {
        return (qi * iqq) / 9;
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

// VECTOR.ANKUNFT = Endpunkt der Bewegung
function VECTOR_ANKUNFT(qi, iqq) {
    try {
        const energie = VECTOR_ENERGIE(qi, iqq);
        const pover = VECTOR_POVER(qi, iqq);
        const schlag = VECTOR_SCHLAG(qi, iqq);

        // Endpunkt der Bewegung
        const ankunft = (qi + iqq + energie + pover + schlag) / 9;

        return {
            typ: "vector.ankunft",
            energie
catch (error) {
    return FAIL_NEUTRAL(error);
}
