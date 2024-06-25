describe("Loggin de giep", () => {
    it("Como usuario deseo ingresar en el sistema GIEP ", ()=>{
          cy.visit('https://giep-dev-44e61.web.app/login')
          cy.log("Ingresamos con nuestros datos al sistema : ")
          let usuario  = cy.get('#mat-input-0') 
          let password = cy.get('#mat-input-1')
          let boton_ingresar = cy.get('.box-button')
          cy.log("---------------------------------------")
          usuario.type("thomascruz699@gmail.com").debug()
          password.type("thomascruz").debug()
          cy.wait(2000)
          boton_ingresar.click().debug()
          cy.log("Fin !")
          cy.wait(4000)
          cy.get('.w-100 > button.mat-focus-indicator').debug().click()
          cy.log("entramos en la edicion de perfil")  
          cy.get('input[type="text"]').debug()
          
    })  
  
})