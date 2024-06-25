import sectores from "../../../support/pageObject-opr/admin/sectores";

describe("Carga de motivos principales o secundarios", () => {
    const master = new sectores() 
    it("Como usuario deseo cargar un motivo", ()=>{
       master.logginUsuario()
       master.sectores()
    })  
})