<script>
// TYQ - Minimal Net-Loader & Bootblock
const TYQ = {
    name: "TYQ",
    version: "0.1",
    RAM: 8192, // 8GB Limit
    allocated: 0,
    boot() {
        // 1. Minimal Boot: System init
        this.allocated = 4096; // 4GB für Chromium + Knoppix
        console.log("🌀 TYQ BOOT: ONLINE");
        console.log("🌀 RAM: " + this.allocated + "MB / " + this.RAM + "MB");
        
        // 2. Net-Loader: Prüft ob externes Modul geladen werden muss
        if (window.localStorage.getItem("tyq_module") === null) {
            // Lädt das eigentliche OS (OS_CORE.js)
            import("./OS_CORE.js").then(mod => {
                mod.ALL4ALL.init();
                console.log("🌀 TYQ Net-Loader: OS_CORE geladen");
                // Speicher freigeben für OS
                this.allocated = 2048;
            });
        }
    },
    status() {
        return {
            boot: "online",
            ram: this.RAM,
            allocated: this.allocated,
            free: this.RAM - this.allocated
        };
    }
};

// TYQ Boot ausführen
TYQ.boot();
</script>
 
