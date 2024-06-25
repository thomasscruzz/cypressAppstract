import dataLoggin from '../../../fixtures/datosGiep/datos-loggin.json';

describe("Como usuario me logueo en el sistema y voy a fichas tecnicas", () => {
    beforeEach(() => {
      cy.visit('https://giep-dev-44e61.web.app/login')
    })
    it("Como usuario deseo ingresar en el sistema y ir a fichas tecnicas ", ()=>{
      cy.log("Ingresamos con nuestros datos al sistema : ")
      cy.get('#mat-input-0').type(dataLoggin.username).debug()
      cy.get('#mat-input-1').type(dataLoggin.password).debug()
      cy.get('.box-button').click().debug()
      cy.wait(2000)
      cy.log("Vamos a ir a fichas Tecnicas")
      cy.wait(5000) 
      cy.get('#menu-item-3 > .mat-button-wrapper > .menu-title').click()
      cy.wait(3000)
      cy.visit("https://giep-dev-44e61.web.app/editar-ficha/2uxXg3MQTf9tmGa93eok")
      cy.wait(6000)
      cy.get('.text-right > .mat-accent').click().debug()
      cy.get('[cdkfocusinitial=""]').click().debug()
      
    })    
})      