import loggin from "../../../support/pageObject-landl/loggin.js";
import reporteAuditoria from "../../../support/pageObject-landl/auditoria.js";

describe("Loggin de giep", () => {
    const master = new loggin()
    const reportAudit = new reporteAuditoria()
    it("Como usuario deseo ingresar en el sistema GIEP ", ()=>{
        master.userLoggin()       
        reportAudit.auditoria()
    })  
})