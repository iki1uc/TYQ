// live.load.js
// Erster Zustand: EARN wird geladen (12d-Logik)

const FAIL_NEUTRAL = require("./fail.neutral.js");

// EARN = Tatbestand (Rolle, Ort, Home)
function EARN(rolle, ort, home) {
    try {
        return {
            rolle,
            ort,
            home,
            earn: rolle + ort + home,
            status: "geladen"
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// LIVE.LOAD = Zustand vor QI/IQQ
function LIVE_LOAD(rolle, ort, home) {
    try {
        const earn = EARN(rolle, ort, home);

        return {
            typ: "live.load",
            earn,

            // 12d-Achse
            achse: 9,
            signatur: "4-8",
            muster: "81mein81",

            // Zustand
            zustand: "bereit zum Messen",
            info: "EARN geladen, aber noch keine Reinheit (QI/IQQ)."
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

module.exports = {
    EARN,
    LIVE_LOAD
};
