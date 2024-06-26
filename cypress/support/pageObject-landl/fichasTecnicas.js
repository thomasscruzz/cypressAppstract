// circuito para loggin en giep
const testData = require("../../fixtures/datosLandl/fichaTecnica-landl.json"); // json para pasar datos

class fichaTecnica{
    crearFichaTecnica(){
        cy.wait(4000)
        cy.get('#menu-item-2').click().as("menuFichaTecnica")
        cy.wait(4000)
        cy.get('.m-1').click().as("botonCrear")
        cy.wait(4000)
        cy.log("completamos el formulario de producto! ")
        cy.get('#cliente').type(testData.cliente)
        .tab().type(testData.producto)
        .tab().type(testData.ingles)
        .tab().type(testData.francia)
        .tab().type(testData.italiano)
        .tab().type(testData.rusia)
        cy.get('#mat-select-value-51').click().as("conversion")
        cy.wait(4000)
        cy.contains('Enfriado').click().as("opcionConversion")
        cy.get('#vencimiento').click().type(testData.vencimineto)
        cy.get('#mat-select-value-53').click().as("tipoProducto")
        cy.contains('Recorte').click().as("opcionTipoProducto")
        cy.get('#codigoarticulo').click().type(testData.codigoArticulo)
        cy.get('.text-right > .mat-warn').click().as("botonGuardar")
        cy.log("finalizamos la carga del formulario de producto")
        cy.wait(4000)
    }  
   cambiarEstado(){
        cy.contains("Estados").click().should("be.visible")
        cy.wait(4000)
        cy.get('#cdk-step-label-0-1').click().should("be.visible")
        cy.wait(2000)
        cy.get('#mat-radio-16 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle')
        .click({force: true}).as("estadoIngresarFinalizado")
        cy.contains('Guardar Estado').click().as("boton")
        cy.log("Completamos el estado con finalizado")
   }
}
export default fichaTecnica; // exportamos clase a archivo de test