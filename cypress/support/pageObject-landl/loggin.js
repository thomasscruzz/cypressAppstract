// circuito para loggin en giep
const testData = require("../../fixtures/datosLandl/loggin-landl.json"); // json para pasar datos

class loggin{
    userLoggin(){
        cy.visit("https://gieplandl-dev.web.app/login")
        cy.log("Ingresamos con nuestros datos al sistema : ")
        cy.get('#mat-input-0').type(testData.username).debug()
        cy.get('#mat-input-1').type(testData.password).debug()
        cy.get('.box-button').click().as("Ingresar").debug()
        cy.wait(4000)
        
    }  
}
export default loggin; // exportamos clase a archivo de test