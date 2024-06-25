import loggin from "../../../support/pageObject-landl/loggin.js";
import fichaTecnica from "../../../support/pageObject-landl/fichasTecnicas.js";

describe("Loggin de giep", () => {
    const master = new loggin()
    const ficha_tecnica = new fichaTecnica() // nombre de la clase
    
    it("Como usuario deseo ingresar en el sistema de LANDL y crear una ficha tecnica ", ()=>{
        master.userLoggin()      // funcion
        ficha_tecnica.crearFichaTecnica()
        ficha_tecnica.cambiarEstado()  
       
    })  
})