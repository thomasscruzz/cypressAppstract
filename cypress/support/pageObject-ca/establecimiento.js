// circuito para loggin en giep
const datos = require("../../fixtures/datosCa/datos-establecimiento.json"); // json para pasar datos

class establecimiento{
    establecimiento_usuario(){
        cy.get('.MuiIconButton-colorSecondary').click()
        cy.contains("Establecimiento").click()
        cy.get('a > .MuiButtonBase-root').click()
        cy.get('#ProductorId').click()
        cy.get('#menu-ProductorId > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click().as("opcionProductor")
        cy.get('#Renspa').type(datos.renspa)
        cy.get('#Establecimiento').type(datos.establecimiento)
        cy.get('#Provincia').click()
        cy.get('[data-value="7"]').click().as("seleccionProvincia")
        cy.get('#LocalidadId').click().as("localidad")
        cy.get('[data-value="693"]').click().as("SeleccionLocalidad")
        cy.get('#Calle').type(datos.calle)
        cy.get('#Numero').type(datos.numero)
        cy.get('#EntreCalles').type(datos.entreCalle)
        cy.get('#Email').type(datos.email)
        cy.get('#Telefono').type(datos.telefono)
        cy.get('#Celular').type(datos.celular)
        cy.get('#AnosNegocio').type(datos.aniosNegocio)
        cy.get('#Observaciones').type(datos.observaciones)
        cy.get('.css-n7o1jj-MuiButtonBase-root-MuiButton-root').click().as("boton registrar")
    }  
}
export default establecimiento; // exportamos clase a archivo de test