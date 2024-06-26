const datos = require("../../../fixtures/datosOpr/admin.json");  

class loggin{
    logginUsuario(){
        cy.visit("https://operaciones-qa.web.app/")
        cy.viewport(1024, 768)
        // cy.log("Ingresamos con nuestros datos al sistema : ")
        //  cy.wait(4000)
        // cy.get('#Email').click().type(datos.username)
        //   cy.get("#Contraseña").click().type(datos.password)
        //   cy.get('.rounded-md').click().as("boton login")
          cy.wait(4000)
    }  
     cargaEstadoVerde(){
        cy.get(':nth-child(7) > .ml-5').click()
        cy.contains('Por Subsector').click()
        cy.wait(2000)
        cy.contains('Nuevo').click()
        cy.get('form > :nth-child(1) > :nth-child(2) > :nth-child(1) > .mb-6 > :nth-child(1) > .z-1 > .css-b62m3t-container > .css-xn095d-control > .css-hlgwow')
        .click().as("opciones de sector")
        cy.contains('Despostada').click()
        cy.get(':nth-child(2) > .z-1 > .css-b62m3t-container > .css-xn095d-control > .css-hlgwow')
        .click().as("subsector")
        cy.wait(1000)
        cy.contains('Prueba QA').click()
        cy.get('#Titulo').click().type("Hola soy cypress !")
        cy.get('[aria-label="green"] > img').click()
        cy.contains('Guardar').click()
     }
    // cargaEstadoRojo(){
    //     cy.get(':nth-child(7) > .ml-5').click()
    //     cy.contains('Por Subsector').click()
    //     cy.wait(2000)
    //     cy.contains('Nuevo').click()
    //     cy.get('form > :nth-child(1) > :nth-child(2) > :nth-child(1) > .mb-6 > :nth-child(1) > .z-1 > .css-b62m3t-container > .css-xn095d-control > .css-hlgwow')
    //     .click().as("opciones de sector")
    //     cy.contains('Despostada').click()
    //     cy.get(':nth-child(2) > .z-1 > .css-b62m3t-container > .css-xn095d-control > .css-hlgwow')
    //     .click().as("subsector")
    //     cy.wait(2000)
    //     cy.contains('Subsector Depostada').click()
    //     cy.wait(2000)
    //     cy.get("#Titulo").click().type("Hola soy cypress !")
    //     cy.wait(2000)
    //     cy.get('[aria-label="red"] > img').click()

    //     cy.get(':nth-child(2) > :nth-child(3) > .z-1 > .css-b62m3t-container > .css-xn095d-control > .css-hlgwow')
    //     .click().as("motivo principal")
    //     cy.contains('Seguridad alimentaria').click()

    //     cy.get(':nth-child(2) > :nth-child(4) > .z-1 > .css-b62m3t-container > .css-xn095d-control > .css-hlgwow')
    //     .click().as("motivo secundario")
    //     cy.contains('Seguridad y acceso restringido').click()

    //     cy.contains('Motivo detalle').click().type("motivo detalle")
    //     cy.contains('Solución propuesta').click().type("solucion propuesta")
    //     //cy.get('Fecha estimada solución').click().type("30/05/2024")
    //     cy.contains('Guardar').click()

    // }
    // cargaEstadoAmarillo(){
    //     cy.wait(5000)
    //     cy.get('.flex-grow > .rounded-md').click().as("agregar nuevo estado")
    //     cy.get('form > :nth-child(1) > :nth-child(2) > :nth-child(1) > .mb-6 > :nth-child(1) > .z-1 > .css-b62m3t-container > .css-xn095d-control > .css-hlgwow').click()
    //     .as("seleccionamos un sector")
    //     cy.get('#react-select-7-option-0').click().as("opcion de sector")
    //      //cy.contains('Cargas').click({force: true}).as("opcion de sector")
    //     cy.get("#Titulo").click().type(datos.titulo)
    //     cy.get('.mb-3 > .bg-customBlue').click().as("boton guardar")
    //     //cy.get('.gap-2 > .flex > :nth-child(2) > img').click().as("estado color amarillo")
    //     cy.get("#Motivo").click().type(datos.motivo).tab().type(datos.solucionPropuesta).tab().type("2023-12-31")
    //     cy.get('.mb-3 > .bg-customBlue').click().as("boton guardar")
    // }
}
export default loggin;  