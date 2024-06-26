// circuito para crear una ficha tecnicas en giep

const dataFicha = require("../../fixtures/datosGiep/datos-combos-productos.json");

class combos_productos{
    combo(){
        cy.log("Vamos a ir a combos de productos")
        cy.wait(2000) 
        cy.contains("Combos de productos").click()
        cy.get('[fxlayout="column"] > .flex-p > .mat-focus-indicator').as("Nuevo combo").click()
        cy.log("Comenzamos a escribir el producto, finaliza haciendo click en guardar! ")
        cy.get('#mat-select-value-3').click().as("tipo solicitud")
        cy.get('#mat-option-1').click().as("seleccion tipo solicitud")
        cy.get("#cliente").type(dataFicha.cliente).debug()
        cy.get('#nombredelProducto').type(dataFicha.producto).debug()
        cy.get('#nombreingles').type(dataFicha.ingles).debug()
        cy.get("#denominacion").type(dataFicha.denominacion).debug()
        cy.get('#vencimiento').type(dataFicha.vencimineto).debug()
        cy.get('#calidadCorte').type(dataFicha.calidadCorte)
        cy.get('#materiaprima').type(dataFicha.materiaPrima).debug()
        cy.get('#observaciones').type(dataFicha.observaciones).debug()
        cy.get('#mat-select-value-5').click().as("conservacion")
        cy.get('#mat-option-4').click().as("tipo conservacion")
        cy.get('#mat-select-value-7').click().as("etiqueta consistente")
        cy.get('#mat-option-7').click().as("tipo de etiqueta")
        cy.get('.mat-expansion-panel.ng-tns-c249-74').click().as("Datos generales")
        cy.wait(4000)
        cy.get('#codigoarticulo').click().type(dataFicha.codigoArticulo)
        cy.get('#codigoarticulogastro').click().type(dataFicha.codigoArticuloRegistro)
        cy.get('#setnro').click().type(dataFicha.setNro)
        cy.get('#epnro').click().type(dataFicha.epnNro)
        cy.get('#registrocapa').click().type(dataFicha.registroCapa)
        cy.get('#familia').click().type(dataFicha.familia)
        cy.log("Pasamos a elegir nuestas fechas !!!")
        cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator')
        .click().as("selecciona fecha validez")
        cy.get(':nth-child(5) > [data-mat-col="5"]').click().as("Elegimos una fecha !")
        cy.log("-------------------------------------------")
        cy.get(':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator')
        .click().as("selecciona fecha emision")
        cy.get(':nth-child(5) > [data-mat-col="2"]').click().as("Elegimos una fecha !")
        cy.log("-------------------------------------------")
        cy.get(':nth-child(6) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator')
        .click().as("selecciona fecha vigencia")
        cy.get(':nth-child(5) > [data-mat-col="4"]').click().as("seleccionamos una fecha")
        cy.get('#destino').type(dataFicha.destino)
        cy.get('#marca').type(dataFicha.marca)
        cy.log("Finalizamos la carga del producto de fichas tecnicas")
        cy.get('.text-right > .mat-warn').click().as("guardar")
    }  
    productos(){
        cy.wait(6000)
        cy.get('#mat-tab-label-0-1').click().as("formulario de productos")
        cy.get('.offset-md-10 > .mat-focus-indicator').click().as("agregar productos")
        cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 30px; height: auto;"]')
        .click().as("seleccionamos")
        cy.get('.offset-md-9 > .mat-warn').click().as("guardar")
    }
  
}
export default combos_productos;