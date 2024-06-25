import loggin from "../../../support/pageObject-giep/loggin.js";
describe("Loggin de giep", () => {
    const master = new loggin()
    it("Como usuario deseo ingresar en el sistema GIEP ", ()=>{
        master.userLoggin()       
    })  
})