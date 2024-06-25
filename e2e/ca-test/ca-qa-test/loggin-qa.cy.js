import loggin from "../../../support/pageObject-ca/pageObject-ca-qa/loggin.js";

describe("Loggin de CA", () => {
    const usuario = new loggin()
    it("Como usuario deseo ingresar en el sistema campo adentro ", ()=>{
        usuario.logginUsuario()
    })  
})