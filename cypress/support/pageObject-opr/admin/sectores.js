const datos = require("../../../fixtures/datosOpr/admin.json");  

class motivos{
    logginUsuario(){
        cy.visit("https://operaciones-qa.web.app/")
        cy.viewport(1024, 768)
        // cy.log("Ingresamos con nuestros datos al sistema : ")
         cy.wait(4000)
        //  cy.get('#Email').click().type(datos.username)
        //  cy.get("#Contraseña").click().type(datos.password)
        //  cy.get('.rounded-md').click().as("boton login")
        //  cy.wait(4000)
    }  
    sectores(){
        cy.log("hola mundo")
        cy.contains('Administración').click()
        cy.contains('Sectores').click()
        cy.wait(3000)
        cy.contains('Nuevo').click()
        cy.get('#Sector').click().type("hola soy cypress QA!")
        cy.get('#Descripción').click().type("sector creado por cypress")
        cy.get('.css-19bb58m').click().as("referente")
        cy.wait(2000)
        cy.contains('Franco Qa').click({force: true})
    }
}
export default motivos;  