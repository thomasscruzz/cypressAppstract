import dataLoggin from '../../../fixtures/datosGiep/datos-loggin.json';


describe("Como usuario me logueo en el sistema y voy a fichas tecnicas", () => {
    beforeEach(() => {
      cy.visit('https://giep-dev-44e61.web.app/login')
    })
    it("Como usuario deseo agregar un idioma nuevo a una ficha tecnica", ()=>{
      cy.log("Ingresamos con nuestros datos al sistema : ")
      cy.get('#mat-input-0').type(dataLoggin.username).debug()
      cy.get('#mat-input-1').type(dataLoggin.password).debug()
      cy.get('.box-button').click().debug()
      cy.wait(9000)
      cy.log("Vamos a ir a fichas Tecnicas")
      cy.get('#menu-item-3 > .mat-button-wrapper > .menu-title').click().debug()
      cy.wait(3000)
      cy.visit("https://giep-dev-44e61.web.app/editar-ficha/0DJExiAWvJ2dTDmjUb5s")
      cy.wait(6000)
      cy.get('.text-right > :nth-child(2)').as("botonIdioma").click()
      cy.get('#mat-select-value-37').click()  
      cy.get('#mat-option-55 > .mat-option-text').click() // si ponemos el 56 , es el aleman
      cy.get('[cdkfocusinitial=""]').click().as("boton de ingresar")
    })    
})     