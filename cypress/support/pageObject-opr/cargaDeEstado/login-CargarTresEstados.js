//Usuario con rol de carga de estado

const datos = require("../../../fixtures/datosOpr/loginCargaDeDatos.json");  

class loggin{
    logginUsuario(){
        cy.visit("https://operaciones-dev-655d1.web.app/")
        // cy.log("Ingresamos con nuestros datos al sistema : ")
        //  cy.wait(4000)
        //   cy.get('#Email').click().type(datos.username)
        //   cy.get("#Contraseña").click().type(datos.password)
        //   cy.get('.rounded-md').click().as("boton login")
        //  cy.wait(4000)
    }  
     cargaEstadoVerde(){
        cy.get(':nth-child(2) > .h-9').click().as("modulo de carga de estado usuario carga de estado")
         //cy.get(':nth-child(5) > .h-9').click().as("modulo de carga de estado")
         cy.get('.flex-grow > .rounded-md').click().as("agregar nuevo estado")
         cy.get('form > :nth-child(1) > :nth-child(2) > :nth-child(1) > .mb-6 > :nth-child(1) > .z-1 > .css-b62m3t-container > .css-xn095d-control > .css-hlgwow').click()
         .as("seleccionamos un sector")
          cy.get('#react-select-5-option-0').click().as("opcion de sector")
         //cy.contains('Cargas').click({force: true}).as("opcion de sector")
         cy.get("#Titulo").click().type(datos.titulo)
         cy.get('.gap-2 > .flex > :nth-child(1) > img').click().as("estado color verde")
         cy.get('.mb-3 > .bg-customBlue').click().as("boton guardar")
     }
    cargaEstadoRojo(){
        cy.wait(9000)
        cy.get('.flex-grow > .rounded-md').click().as("agregar nuevo estado")
        cy.get('form > :nth-child(1) > :nth-child(2) > :nth-child(1) > .mb-6 > :nth-child(1) > .z-1 > .css-b62m3t-container > .css-xn095d-control > .css-hlgwow').click()
        .as("seleccionamos un sector")
        
        //cy.contains('Cargas').click({force:true}).as("opcion de sector")
        cy.get('#react-select-6-option-0').click().as("opcion de sector")
        cy.get("#Titulo").click().type(datos.titulo)
        cy.get('.gap-2 > .flex > :nth-child(3) > img').click().as("estado color rojo")
        cy.get("#Motivo").click().type(datos.motivo).tab().type(datos.solucionPropuesta).tab().type("2023-12-31")
        cy.get('.mb-3 > .bg-customBlue').click().as("boton guardar")
    }
    cargaEstadoAmarillo(){
        cy.wait(5000)
        cy.get('.flex-grow > .rounded-md').click().as("agregar nuevo estado")
        cy.get('form > :nth-child(1) > :nth-child(2) > :nth-child(1) > .mb-6 > :nth-child(1) > .z-1 > .css-b62m3t-container > .css-xn095d-control > .css-hlgwow').click()
        .as("seleccionamos un sector")
        cy.get('#react-select-7-option-0').click().as("opcion de sector")
         //cy.contains('Cargas').click({force: true}).as("opcion de sector")
        cy.get("#Titulo").click().type(datos.titulo)
        cy.get('.mb-3 > .bg-customBlue').click().as("boton guardar")
        cy.get('.gap-2 > .flex > :nth-child(2) > img').click().as("estado color amarillo")
        cy.get("#Motivo").click().type(datos.motivo).tab().type(datos.solucionPropuesta).tab().type("2023-12-31")
        cy.get('.mb-3 > .bg-customBlue').click().as("boton guardar")
    }
}
export default loggin;  