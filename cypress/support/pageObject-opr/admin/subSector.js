
class subsector{
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
    sector(){
        cy.contains('Administración').click()
        cy.get(':nth-child(12) > .ml-8 > .h-7 > .h-9').click().as("menu de sub sector")
        cy.wait(2000)
        cy.contains('Nuevo').click()
        // seleccionamos nosotros el sector
        cy.get(':nth-child(1) > .z-1 > .css-b62m3t-container > .css-xn095d-control').click()
        cy.contains('faena').click()
        cy.get('#Nombre').click().type("Hola soy cypress !")
        cy.get('#Descripción').click().type("Hola soy cypress !")
        cy.wait(2000)
        
        cy.contains('Guardar').click()
     }
    
    
}
export default subsector;  