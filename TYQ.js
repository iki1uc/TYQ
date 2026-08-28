const TYQ = {
  NAME: "TYQ", VER: 1,
  RAM: 8192, // 8 GB Limit
  CPU: 1,
  MEM: { USED: 0, FREE: 0 },
  BOOT_STATUS: false,
  init() { this.MEM.FREE = this.RAM; console.log("TYQ: KERN LOADED"); },
  alloc(size){ this.MEM.USED = size; this.MEM.FREE = this.RAM - size; },
  status(){ return { NAME: this.NAME, CPU: this.CPU, USED: this.MEM.USED, FREE: this.MEM.FREE, BOOT: this.BOOT_STATUS } }
};
TYQ.init();
