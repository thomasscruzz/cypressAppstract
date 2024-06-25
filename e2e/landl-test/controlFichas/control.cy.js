import loggin from "../../../support/pageObject-landl/loggin.js";
import controlFichas from "../../../support/pageObject-landl/controlFichas.js";

describe("Loggin de giep", () => {
    const master = new loggin()
    const control = new controlFichas()
    it("Como usuario deseo ingresar en el sistema de landl y hacer un control de fichas ", ()=>{
        master.userLoggin()       
        control.control()
    })  
})