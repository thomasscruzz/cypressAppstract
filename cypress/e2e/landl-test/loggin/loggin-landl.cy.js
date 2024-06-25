import loggin from "../../../support/pageObject-landl/loggin.js";

describe("Loggin de giep", () => {
    const master = new loggin()
    it("Como usuario deseo ingresar en el sistema GIEP ", ()=>{
        master.userLoggin()       
    })  
})