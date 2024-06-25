describe("Como usuario me logueo en el sistema y voy a fichas eliminadas", () => {
  beforeEach(() => {
    cy.visit('https://giep-dev-44e61.web.app/login')
  })

  it("Como usuario deseo ingresar en el sistema y ir a fichas eliminadas, para restaurar una ficha eliminada! ", ()=>{
    cy.log("Ingresamos con nuestros datos al sistema : ")
    cy.get('#mat-input-0').type("thomas@appstractweb.com")
    cy.get('#mat-input-1').type("123456").debug()
    cy.get('.box-button').click().debug() // el metodo debug , nos muestra el contenido del elemento en consola de google.
    cy.log("Fin del login! ")
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
  })
})