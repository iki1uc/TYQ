// pipeline.js
// 12d-Pipeline-Logik: 9 → 4 → 12 → 0/1/2

const FAIL_NEUTRAL = require("./fail.neutral.js");

// Pipeline 9 = Ursprung / Order
function PIPELINE_9(order) {
    try {
        return {
            typ: "pipeline.9",
            order,
            achse: 9,
            info: "Ursprung gibt Order an Pipeline 4"
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// Pipeline 12 = Reinheit / Qualität
function PIPELINE_12(qi, iqq) {
    try {
        const qual = qi + iqq;
        return {
            typ: "pipeline.12",
            qual,
            status: qual > 0 ? "rein" : "unsicher",
            info: "Reinheit bestätigt oder verweigert"
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// Pipeline 4 = Bewegung / VECTOR
function PIPELINE_4(order, qual) {
    try {
        return {
            typ: "pipeline.4",
            engine: order * 0.6 + qual * 0.4,
            richtung: order - qual,
            info: "Bewegung entsteht nach Reinheit"
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// Pipeline 0/1/2 = Bildung / Runtime
function PIPELINE_RUNTIME(vector) {
    try {
        return {
            typ: "pipeline.runtime",
            basis: vector.engine,
            vorgang: vector.richtung,
            bewegung: vector.engine + vector.richtung,
            info: "Runtime erzeugt Bildung 0/1/2"
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

module.exports = {
    PIPELINE_9,
    PIPELINE_12,
    PIPELINE_4,
    PIPELINE_RUNTIME
};
