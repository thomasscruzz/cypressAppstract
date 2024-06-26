const data = require("../../fixtures/datosLandl/combos-productos.json");

class combosProductos{
    combosPro(){
        const tiempo = 4000
        cy.get('#menu-item-3').click().as("menuCombos")
        cy.wait(tiempo)
        cy.contains('Nuevo combo').click()
        cy.wait(tiempo)
        cy.get('#mat-select-value-3').click().as("tipoSolicitud")
        cy.contains('Producto Nuevo').click()
        cy.get('#cliente').click().type(data.cliente).tab()
        .type(data.nombreCombo).tab()
        .type(data.ingles).tab()
        .type(data.denominacion).tab()
        .type(data.calidadCombo)
        cy.get('#mat-select-value-5').click().as("conservacion")
        cy.contains("Enfriado").click()
        cy.get('#vencimiento').click().type(data.vencimineto)
        cy.get('#mat-select-value-7').click().as("etiquetaConsistente")
        cy.get('#mat-option-6').click({force: true})
        cy.get('#materiaprima').click({force: true}).type(data.materiaPrima)
        cy.get('.text-right > .mat-warn').click({force: true}).as("botonGuardar")

    }
    setAgregarPro(){
        cy.wait(8000)
        cy.log("Vamos a completar el formulario de set , agregando dos productos disponibles")
        cy.get('#mat-tab-label-0-1').click().as("Productos")
        cy.get('.offset-md-10 > .mat-focus-indicator').click().as("boton agregarProducto")
        cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(2)').click().as("seleccion producto")
        cy.wait(3000)
        cy.get('.offset-md-10 > .mat-focus-indicator').click().as("boton agregarProducto")
        cy.get(':nth-child(2) > .datatable-body-row > .datatable-row-center > :nth-child(2) > .datatable-body-cell-label').click().as("seleccion producto")
        cy.get('.offset-md-9 > .mat-warn').click().as("guardar")
    }
    setEliminarPro(){
        cy.wait(6000)
        cy.log("Vamos a eliminar un producto agregado de ellos")
        cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(10) > .datatable-body-cell-label > .mat-focus-indicator')
        .click().as("icono de eliminar")
        cy.wait(2000)
        cy.get('.offset-md-9 > .mat-warn').click()
    }
}
export default combosProductos;