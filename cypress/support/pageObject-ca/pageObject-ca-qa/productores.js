// circuito para loggin en giep
const datos = require("../../../fixtures/datosCa/datos-productores.json"); // json para pasar datos

class productores{
    productores_usuario(){
        cy.get('.MuiIconButton-colorSecondary').click()
        cy.contains("Productores").click()
        cy.get('a > .MuiButtonBase-root').click()
        cy.get('#Cuit').click().type(datos.cuit)
        cy.get('#RazonSocial').click().type(datos.razonSocial)
        cy.get("#Nombre").click().type(datos.nombre)
        cy.get("#Apellido").click().type(datos.apellido)
        cy.get('#Provincia').click()
        cy.get('[data-value="3"]').click().as("opcionProvincia")
        cy.get('#LocalidadId').click().as("localidad")
        cy.wait(2000)
        cy.get('[data-value="233"]').click().as("SeleccionLocalidad")
        cy.get('#Calle').type(datos.calle)
        cy.get('#Numero').type(datos.numero)
        cy.get('#EntreCalles').type(datos.entreCalle)
        cy.get('#Email').type(datos.email)
        cy.get('#Telefono').type(datos.telefono)
        cy.get('#Celular').type(datos.celular)
        cy.get('#Observaciones').type(datos.observaciones)
        cy.get('.MuiButton-fullWidth').click().as("boton registrar")
    }  
}
export default productores; // exportamos clase a archivo de test