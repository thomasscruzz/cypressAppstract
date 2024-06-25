import loggin from "../../../support/pageObject-opr/admin/loggin";
describe("Loggin de OPR", () => {
    const master = new loggin() 
    it("Como usuario deseo ingresar en el sistema OPR ", ()=>{
        master.logginUsuario()       
        master.cargaEstadoVerde()
        //master.cargaEstadoRojo()
        // master.cargaEstadoAmarillo()
    })  
})