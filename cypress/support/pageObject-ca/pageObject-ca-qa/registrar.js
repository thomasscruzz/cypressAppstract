// circuito para loggin en giep
const datos = require("../../../fixtures/datosCa/datos-registrar-usuario.json"); // json para pasar datos

class registrar{
    registrarUsuario(){
        cy.log("Vamos a registrar un nuevo usuario !");
        cy.get('.MuiIconButton-colorSecondary').click()
        cy.wait(4000)
        cy.contains('Usuarios').click()
        cy.get('a > .MuiButtonBase-root').click().as("nuevoUsuario")
        cy.get('#surname').click().type(datos.apellido).tab()
        .type(datos.nombre).tab().type(datos.username)
        cy.get('#rol').click()
        cy.get('#menu-rol > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click().as("responsable general")
        cy.get('#password').click().type(datos.password).tab().type(datos.password)
        cy.get('.css-n7o1jj-MuiButtonBase-root-MuiButton-root').click().as("boton registrar")
    }  
}
export default registrar; // exportamos clase a archivo de test