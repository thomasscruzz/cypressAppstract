import loggin from "../../../support/pageObject-fmn/loggin.js";
describe("Loggin de FMN", () => {
    const master = new loggin()
    it("Como usuario deseo ingresar en el sistema FMN ", ()=>{
        master.userLoggin()       
    })  
})