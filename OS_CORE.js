// ─── BEISPIEL 1: TMP-Modus ──────────────────────────────────
const result = sortComplex([3, 27, 81, 5, 243, 9, 756, 100], {
  mode: "TMP",
  axis: "3,9,27,81,243,756",
  pump: true
});
console.log(result.sorted.numeric);
console.log(result.sorted.axis);
console.log(result.sorted.matrix);

// ─── BEISPIEL 2: RITH-Modus ──────────────────────────────────
const rithResult = sortComplex([3, 9, 27, 81, 243], {
  mode: "RITH",
  axis: "3,9,27,81,243",
  format: "percent"
});
console.log(rithResult.sorted.rith);
console.log(rithResult.sorted.percent);

// ─── BEISPIEL 3: EVO-Modus ──────────────────────────────────
const evoResult = sortComplex([1, 4, 16, 64, 256], {
  mode: "EVO",
  axis: "3,9,27,81,243"
});
console.log(evoResult.sorted.evo);
