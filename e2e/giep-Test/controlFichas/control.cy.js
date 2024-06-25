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
        cy.get('#menu-item-6').click().debug().as("botonControlFichas")
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
        

    })  
})