import data from '../../../fixtures/datos-loggin.json';

describe("Como usuario me logueo en el sistema y voy a fichas tecnicas", () => {
    beforeEach(() => {
      cy.visit('https://giep-dev-44e61.web.app/login')
    })
    it("Como usuario deseo ingresar en el sistema y cambiar el estado de la ficha tecnica", () => {
      cy.log("Ingresamos con nuestros datos al sistema : ")
      cy.get('#mat-input-0').type(data.username).debug()
      cy.get('#mat-input-1').type(data.password).debug()
      cy.get('.box-button').click().debug()
      cy.wait(2000)     
      cy.log("------------------------")
      cy.log("Ingresamos a a la tabla de fichas tecnicas")
      cy.wait(3000)
      cy.get('#menu-item-3').click()
      cy.wait(4000)
      cy.contains("Fichas técnicas")
      cy.visit("https://giep-dev-44e61.web.app/editar-ficha/j1u1RPtmxZCZhVJtx22b") 
      cy.contains("Estados").click()
      cy.log("Estados")
      cy.get('#cdk-step-label-0-1').as("ingresar").click()
      cy.get('#mat-radio-19 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').as("ingresar: ").click({force: true}) 
      cy.get('#cdk-step-label-0-2').as("auditar").click() 
      cy.wait(2000)
      cy.get('#mat-select-value-13').as("tipos de estado").click()
      cy.contains("Para verificar").click()
      cy.get('#mat-radio-21 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').as("finaliza el estado").click({force: true}) 
      cy.get('.flex-p > .mat-accent').as("boton guardar").click() 
      cy.log("Finaliza el test dejando guardando el cambio de estado")
    })
    
})