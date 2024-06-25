import loggin from "../../../support/pageObject-landl/loggin.js";
import combos from '../../../support/pageObject-landl/combos.js';
describe("Loggin de landl", () => {
    const master = new loggin()
    const combos_productos = new combos()
    it("Como usuario deseo ingresar en el sistema landl y cargar una ficha de combos de productos", ()=>{
        master.userLoggin()       
        combos_productos.combosPro()
        combos_productos.setAgregarPro()
        combos_productos.setEliminarPro()
    })  
})