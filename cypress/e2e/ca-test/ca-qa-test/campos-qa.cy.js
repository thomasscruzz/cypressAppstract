import loggin from "../../../support/pageObject-ca/pageObject-ca-qa/loggin.js";
import campos from "../../../support/pageObject-ca/pageObject-ca-qa/campo.js";

describe("Loggin de giep", () => {
    const usuario = new loggin()
    const usuario_campos = new campos()
    it("Como usuario deseo ingresar en el sistema campo adentro ", ()=>{
        usuario.logginUsuario()
        usuario_campos.campos_usuario()
    })  
})