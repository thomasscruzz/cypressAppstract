

class controlFichas{
    control(){
        cy.get('#menu-item-5').click().as("menuControlFichas")        
        cy.get('#mat-input-2').click().type(123).as("searchFicha")
        cy.wait(5000)
        cy.get('.control-ficha-form > :nth-child(2) > .mat-focus-indicator').as("botonBuscar").click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 50px; height: 50px;"]')
        .click()
        .as("SelectionFicha")
        cy.wait(3000)
        cy.get('.control-ficha-form > :nth-child(5) > .mat-focus-indicator')
        .as("realizarAuditoria").click().debug()
        cy.wait(3000)
        cy.get('[type="checkbox"]').check({force: true})
        cy.get('.text-center > .mat-focus-indicator').click()
        cy.get('[cdkfocusinitial=""]').click()
    }
}
export default controlFichas;