
import loggin from "../../../support/pageObject-landl/loggin.js";
import eliminarFicha from "../../../support/pageObject-landl/eliminarFicha.js";

describe("Loggin de giep", () => {
    const master = new loggin()
    const eliminar  = new eliminarFicha()

    it("Como usuario deseo ingresar en el sistema GIEP ", ()=>{
        master.userLoggin()      
        eliminar.eliminar() 
    })  
})