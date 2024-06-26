const datos = require("../../../fixtures/datosOpr/admin.json");  

class unidadesMedida{
    logginUsuario(){
        cy.visit("https://operaciones-qa.web.app/")
        cy.viewport(1024, 768)
        // cy.log("Ingresamos con nuestros datos al sistema : ")
          cy.wait(4000)
        cy.get('#Email').click().type(datos.username)
          cy.get("#Contraseña").click().type(datos.password)
          cy.get('.rounded-md').click().as("boton login")
          cy.wait(4000)
    }  
    
    unidades(){
        cy.log("Unidades de medida ! ")
    }
   
}
export default unidadesMedida;  