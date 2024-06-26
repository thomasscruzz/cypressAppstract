// circuito para loggin en giep
const testData = require("../../fixtures/datosFmn/loggin.json"); // json para pasar datos

class loggin{
    userLoggin(){
        cy.visit('https://dev.farmanager.com.ar/auth/login')
        cy.log("Ingresamos con nuestros datos al sistema : ")
        cy.get(':nth-child(2) > .p-float-label > .p-inputtext').type(testData.username).as("usuario").debug()
        cy.get(':nth-child(3) > .p-float-label > .p-inputtext').type(testData.password).as("clave").debug()
        cy.get('.p-mb-3').click().as("ingresar").debug()
    }  
}
export default loggin; // exportamos clase a archivo de test