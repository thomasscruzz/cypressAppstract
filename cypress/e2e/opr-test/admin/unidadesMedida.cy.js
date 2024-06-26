import unidadesMedida from "../../../support/pageObject-opr/admin/unidadesMedida";
describe("Loggin de OPR y carga de unidades de medida", () => {
    const master = new unidadesMedida() 
    it("Como usuario deseo ingresar en el sistema OPR ", ()=>{
        master.logginUsuario()       
        master.unidades()
    })  
})