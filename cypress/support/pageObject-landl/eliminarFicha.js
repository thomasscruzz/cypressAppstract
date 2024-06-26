

class eliminarFicha{
    eliminar(){
        cy.log("Vamos a ir a fichas eliminadas")
        cy.wait(7000)
        cy.contains('Fichas eliminadas').click() 
        cy.log("llegamos a fichas eliminadas")
        cy.wait(7000)
        cy.log("Seleccionamos un checkbox")
        cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 30px; height: auto;"] > .datatable-body-cell-label > .ng-star-inserted').check()
        cy.log("Click en restaurar parar devolver una ficha eliminada!!!")
        cy.get('.m-1').debug().click()
        cy.wait(4000)
        cy.log("Confirmamos la restauracion")
        cy.get('[cdkfocusinitial=""]').click()
    }
}
export default eliminarFicha;