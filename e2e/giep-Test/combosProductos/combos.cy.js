import loggin from "../../../support/pageObject-giep/loggin.js";
import combos_productos from "../../../support/pageObject-giep/combos.js";

describe("Como usuario me logueo en el sistema y voy a fichas tecnicas", () => {
  const master = new loggin()
  const combos = new combos_productos()
    it("Como usuario deseo ingresar en el sistema y ir a fichas tecnicas para crear una ficha ", ()=>{
      master.userLoggin()       
      combos.combo()
      combos.productos()
    })   
})