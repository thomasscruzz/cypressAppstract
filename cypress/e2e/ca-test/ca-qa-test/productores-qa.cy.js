import loggin from "../../../support/pageObject-ca/pageObject-ca-qa/loggin.js";
import productores from "../../../support/pageObject-ca/pageObject-ca-qa/productores.js";

describe("Loggin de CA y creacion de un nuevo productor", () => {
    const usuario = new loggin()
    const usuario_prod = new productores()
    it("Como usuario deseo ingresar en el sistema campo adentro y agregar un nuevo productor", ()=>{
        usuario.logginUsuario()
        usuario_prod.productores_usuario()
    })  
})