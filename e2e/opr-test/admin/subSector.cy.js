import subsector from "../../../support/pageObject-opr/admin/subSector";

describe("Carga de motivos principales o secundarios", () => {
    const master = new subsector() 
    it("Como usuario deseo cargar un motivo", ()=>{
       master.logginUsuario()
       master.sector()
    })  
})