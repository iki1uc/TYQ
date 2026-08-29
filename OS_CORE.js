// ─── sortComplex · TMP-Engine ───────────────────────────────
function sortComplex(values, config = {}) {

  // 1) TMP-Reset
  const TMP = { raw: [...values], sorted: {} };

  // 2) Numerische Grundsortierung
  const numeric = [...values]
    .map(Number)
    .filter(n => !isNaN(n))
    .sort((a, b) => a - b);

  TMP.sorted.numeric = numeric;

  // 3) Achsen-Parsing
  const axis = config.axis
    ? config.axis.split(",").map(Number)
    : numeric;

  TMP.sorted.axis = axis;

  // 4) Matrix-Sortierung (TMP)
  TMP.sorted.matrix = numeric.map(n => ({
    value: n,
    axisIndex: axis.indexOf(n),
    delta: axis.indexOf(n) === -1 ? null : Math.abs(axis.indexOf(n) - numeric.indexOf(n))
  }));

  // 5) RITH-Modus
  if (config.mode === "RITH") {
    TMP.sorted.rith = numeric.map(n => ({
      value: n,
      percent: n + "%",
      degree: n + "°"
    }));
  }

  // 6) EVO-Modus
  if (config.mode === "EVO") {
    TMP.sorted.evo = numeric.map((n, i) => ({
      stage: i + 1,
      value: n,
      power: Math.pow(2, i)
    }));
  }

  // 7) TMP-Pump-Modus
  if (config.mode === "TMP" && config.pump) {
    TMP.pump = {
      used: 2048,
      free: 8192 - 2048,
      axis: axis,
      numeric: numeric
    };
  }

  return TMP;
}
