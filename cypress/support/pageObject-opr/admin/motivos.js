const datos = require("../../../fixtures/datosOpr/admin.json");  

class motivos{
    logginUsuario(){
        cy.visit("https://operaciones-dev-655d1.web.app/")
        cy.viewport(1024, 768)
        // cy.log("Ingresamos con nuestros datos al sistema : ")
         cy.wait(4000)
        //  cy.get('#Email').click().type(datos.username)
        //  cy.get("#Contraseña").click().type(datos.password)
        //  cy.get('.rounded-md').click().as("boton login")
        //  cy.wait(4000)
    }  
     motivosPrincipales(){
        cy.log("hola mundo")
        cy.contains('Administración').click()
        cy.contains('Motivos principales').click()
        cy.wait(3000)
        cy.contains('Nuevo').click()
        cy.get('#Nombre').click().type("hola soy cypress !")
        cy.contains('Guardar').click()

    }
    motivosSecundarios(){
        
        cy.contains('Administración').click()
        cy.contains('Motivos secundarios').click()
        cy.wait(3000)
        cy.contains('Nuevo').click()
        cy.get('#Nombre').click().type("soy cypress")
        cy.get('.css-hlgwow').click().as("m-principal")
        cy.contains('hola soy cypress !').click()
        cy.contains('Guardar').click()

    }
    
}
export default motivos;  