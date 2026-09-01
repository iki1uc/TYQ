// vector.tiefe.js
// Entschluss-Axiom – Tiefen-Engine

const FAIL_NEUTRAL = require("./fail.neutral.js");

// VECTOR.TRIEB = Impuls-Axiom (Höhe-Achse)
function VECTOR_TRIEB(qi, iqq) {
    try {
        return qi - iqq;
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// VECTOR.ENGINE = Kraft-Axiom (Breite-Achse)
function VECTOR_ENGINE(qi, iqq) {
    try {
        return (qi * 0.6) + (iqq * 0.4);
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// VECTOR.TIEFE = Entschluss-Axiom (Tiefe-Achse)
function VECTOR_TIEFE(qi, iqq) {
    try {
        const trieb = VECTOR_TRIEB(qi, iqq);
        const engine = VECTOR_ENGINE(qi, iqq);

        // Tiefe = Entscheidung zwischen Höhe und Breite
        const tiefe = (trieb + engine) / 2;

        return {
            typ: "vector.tiefe",
            trieb,
            engine,
            tiefe,
            ausgang: tiefe,
            achse: "9",          // Achse integriert
            signatur: "4-8",     // Signatur integriert
            muster: "81mein81"   // Muster integriert
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// Export
module.exports = {
    VECTOR_TRIEB,
    VECTOR_ENGINE,
    VECTOR_TIE
catch (error) {
    return FAIL_NEUTRAL(error);
}
