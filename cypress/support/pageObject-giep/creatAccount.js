const dataCuenta = require("../../fixtures/datosGiep/datos-crear-cuenta.json");

class creatAccount{
    userAccount(){
        cy.visit('https://giep-dev-44e61.web.app/login')
        cy.log("Creemos esa cuenta ! ")
        cy.get('[routerlink="/register"] > .mat-button-wrapper').click()
        cy.get('#mat-input-2').click().type(dataCuenta.correo)
        cy.get('#mat-input-3').click().type(dataCuenta.password)
        cy.get('#mat-input-4').click().type(dataCuenta.password)
        cy.get('#mat-input-5').click().type(dataCuenta.nombre)
        cy.get('#mat-input-6').click().type(dataCuenta.apellido)
        cy.get('.mat-select-placeholder').click()
        cy.contains('Indistinto').click()
        cy.get('#mat-input-7').click().type(dataCuenta.sector)
        cy.contains('REGISTRARME').click().pause()
        cy.get('.box-button').click()
    }
}

export default creatAccount;