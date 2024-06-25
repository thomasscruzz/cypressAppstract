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
        cy.get('#menu-item-1').click()     
    })  
})