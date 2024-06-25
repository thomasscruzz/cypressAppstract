import loggin from "../../support/pageObject-ca/loggin.js";
import establecimiento from "../../support/pageObject-ca/establecimiento.js";

describe("Loggin de giep", () => {
    const usuario = new loggin()
    const usuario_establecimiento = new establecimiento()
    it("Como usuario deseo ingresar en el sistema campo adentro ", ()=>{
        usuario.logginUsuario()
        usuario_establecimiento.establecimiento_usuario()
    })  
})