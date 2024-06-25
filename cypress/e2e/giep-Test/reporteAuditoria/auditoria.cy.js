import data from '../../../fixtures/datosGiep/datos-loggin.json';

describe("Loggin de giep", () => {
    beforeEach(() => {
        cy.visit('https://giep-dev-44e61.web.app/login')
      })
    it("Como usuario deseo ingresar en el sistema GIEP ", ()=>{
        cy.log("Ingresamos con nuestros datos al sistema : ")
        cy.get('#mat-input-0').type(data.username).debug()
        cy.get('#mat-input-1').type(data.password).debug()
        cy.get('.box-button').click().debug()
        cy.wait(2000)   
        cy.get('#menu-item-7').click()     
        cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(7) > .datatable-body-cell-label > .mat-icon').click()
        cy.wait(3000)
        cy.get('.text-center > .mat-focus-indicator').click()
    })  
})