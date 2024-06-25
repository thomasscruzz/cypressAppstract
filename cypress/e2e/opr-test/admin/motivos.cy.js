import motivos from "../../../support/pageObject-opr/admin/motivos";

describe("Carga de motivos principales o secundarios", () => {
    const master = new motivos() 
    it("Como usuario deseo cargar un motivo", ()=>{
       master.logginUsuario()
       //master.motivosPrincipales()
       master.motivosSecundarios()
    })  
})