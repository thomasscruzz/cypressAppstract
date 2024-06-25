import loggin from "../../../support/pageObject-landl/loggin.js";
import dashboard from "../../../support/pageObject-landl/dashboard.js";

describe("Loggin de Land y visualizar dashboard", () => {
    const master = new loggin()
    const stats = new dashboard()
    it("Como usuario deseo ingresar en el sistema de LANDL y ver las estadisticas del dashboard", ()=>{
        master.userLoggin()      // funcion
        stats.estadisitcas()
    })  
})