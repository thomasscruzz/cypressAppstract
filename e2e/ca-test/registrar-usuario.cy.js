import loggin from "../../support/pageObject-ca/loggin.js";
import registrar from "../../support/pageObject-ca/registrar.js";

describe("Loggin de giep", () => {
    const usuario = new loggin()
    const usuarioRegistrar = new registrar()
    it("Como usuario deseo ingresar en el sistema campo adentro ", ()=>{
        usuario.logginUsuario()
        usuarioRegistrar.registrarUsuario()
    })  
})