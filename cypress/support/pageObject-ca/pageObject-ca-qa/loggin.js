// circuito para loggin en giep
const datos = require("../../../fixtures/datosCa/datos-usuario.json"); // json para pasar datos

class loggin{
    logginUsuario(){
        cy.visit("https://campoadentro-qa.web.app/")
        cy.log("Ingresamos con nuestros datos al sistema : ")
        // cy.wait(4000)
        // cy.get('[href="/login"] > .MuiButtonBase-root').click()
        // cy.get('#email').type(datos.username).debug()
        // cy.get('#password').type(datos.password).debug()
        // cy.get('.MuiButton-root').click().as("Ingresar")
        cy.wait(4000)
        
    }  
}
export default loggin; // exportamos clase a archivo de test