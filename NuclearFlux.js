class NuclearFluxClass {
    
    constructor() {
        this.contextManager = new Map()
    }
    
    send(contextKey,prototype) {
        if(this.contextManager.has(contextKey)) {
            try {
                this.contextManager.get(contextKey).setState(prototype)
            } catch (error) {
                console.warn("NuclearFlux: Error register send state")
            }
        } else {
            console.warn("NuclearFlux: Context key is undefined")
        }
    }

    get(contextKey,dataKey) {
        if(this.contextManager.has(contextKey)) {
            try {
                return this.contextManager.get(contextKey).state[dataKey]
            } catch (error) {
                console.warn("NuclearFlux: Error register send state")
            }
        } else {
            console.warn("NuclearFlux: Context key is undefined")
        }
    }

    register(contextKey,context) {
        if(!contextKey) {
            console.warn("NuclearFlux: Context key is undefined")
        } else if(!context) {
            console.warn("NuclearFlux: Context is undefined")
        } else {
            this.contextManager.set(contextKey,context)
        }
    }
    
    getContext(contextKey) {
      if(this.contextManager.has(contextKey)) {
            return this.contextManager.get(contextKey)
        } else {
            console.warn("NuclearFlux: Context key is undefined")
        }  
    }
}

const NuclearFlux = new NuclearFluxClass()
export default NuclearFlux
