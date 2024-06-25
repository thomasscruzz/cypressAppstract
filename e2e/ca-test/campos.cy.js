import loggin from "../../support/pageObject-ca/loggin.js";
import campos from "../../support/pageObject-ca/campo.js";

describe("Loggin de giep", () => {
    const usuario = new loggin()
    const usuario_campos = new campos()
    it("Como usuario deseo ingresar en el sistema campo adentro ", ()=>{
        usuario.logginUsuario()
        usuario_campos.campos_usuario()
    })  
})