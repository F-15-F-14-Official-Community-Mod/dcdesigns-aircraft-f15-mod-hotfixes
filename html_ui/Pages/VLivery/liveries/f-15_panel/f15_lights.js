class f15_lights extends TemplateElement {
    constructor() {
        super();
        this.location = "interior";
        this.curTime = 0.0;
        this.bNeedUpdate = false;
        this._isConnected = false;
    }
    get templateID() { return "f15_lights"; }
    connectedCallback() {
        super.connectedCallback();
        let parsedUrl = new URL(this.getAttribute("Url").toLowerCase());
        let updateLoop = () => {
            if (!this._isConnected)
                return;
            this.Update();
            requestAnimationFrame(updateLoop);
        };
        this._isConnected = true;
        requestAnimationFrame(updateLoop);
    }
    disconnectedCallback() {
    }
    Update() {
		this.updateInstruments();
    }
    /*playInstrumentSound(soundId) {
        if (this.isElectricityAvailable()) {
            Coherent.call("PLAY_INSTRUMENT_SOUND", soundId);
            return true;
        }
        return false;
    }	*/
    updateInstruments() {
           
       // TAXI LIGHTS CONTROL
       if (SimVar.GetSimVarValue("IS GEAR RETRACTABLE", "Boolean")) {
         var gears_extracted = SimVar.GetSimVarValue("GEAR CENTER POSITION", "Percent");

		 var ground = SimVar.GetSimVarValue("SIM ON GROUND", "Boolean");

		 
         if (SimVar.GetSimVarValue("LIGHT TAXI ON", "bool") && gears_extracted <= 99)
	     SimVar.SetSimVarValue("K:TOGGLE_TAXI_LIGHTS", "bool", false)
			
		
       }
	   

    
	}
    
}
registerLivery("f15_lights-element", f15_lights);
