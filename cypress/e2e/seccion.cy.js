import data from '../../../fixtures/datosGiep/datos-loggin.json';
import seccion from '../../../fixtures/datosGiep/datos-solicitud-muestra.json';

describe("Loggin de giep", () => {
    beforeEach(() => {
        cy.visit('https://giep-dev-44e61.web.app/login')
      })
    it("Como usuario deseo ingresar en el sistema GIEP ", ()=>{
        cy.wait(2000)
        cy.log("Ingresamos con nuestros datos al sistema : ")
        cy.get('#mat-input-0').type(data.username)
        cy.get('#mat-input-1').type(data.password)
        cy.get('.box-button').click()
        cy.wait(2000)
        cy.log("Vamos a ingresar a solicitud de muestra y completar la seccion 1")
        cy.wait(6000)
        cy.contains('Solicitud muestra').click()
        cy.wait(2000)
        cy.get('[fxlayout="column"] > .flex-p > .mat-focus-indicator').click()
        cy.get('#mat-input-43').click().type(seccion.cliente).debug()
        cy.get('#mat-input-44').click().type(seccion.rubro).debug()
        cy.get('#mat-input-45').click().type(seccion.razonSocial).debug()
        cy.get('#mat-input-46').click().type(seccion.direccion).debug()
        cy.get('#mat-input-47').click().type(seccion.codigoPostal).debug()
        cy.get('#mat-input-48').click().type(seccion.lineaTransporte).debug()
        cy.get('#mat-input-49').click().type(seccion.contacto).debug()
        cy.get('#mat-input-50').click().type(seccion.telefono).debug()
        cy.get('#mat-input-51').click().type(seccion.correo).debug()
        
        cy.wait(3000)
        cy.log("Seleccionamos el select!!!")
        cy.get('#mat-select-value-9').click()
        cy.get('#mat-option-21 > .mat-option-text').click().as("Argentina") //linea de dev
        //cy.get('#mat-option-13').click() //linea qa
        cy.log("Seleccionamos la fecha")
        cy.get('#mat-input-52').click( {force: true} ).type(seccion.fecha)
        cy.get('#mat-expansion-panel-header-0').click().as("detalle de la muestra")
        cy.get('#mat-input-5').click().type(seccion.cortes).debug()
        cy.get('#mat-input-6').click().type(seccion.calidad).debug()
        cy.get('#mat-input-7').click().type(seccion.dreassing).debug()
        cy.get('#mat-input-8').click().type(seccion.tipoPresentacion).debug()
        cy.get('#mat-input-9').click().type(seccion.observaciones).debug()
        cy.log("Pasamos a elegir los select")
        cy.get('#mat-select-value-3 > .mat-select-placeholder').click()
        cy.get('#mat-option-10 > .mat-option-text').click().debug()
        cy.get('#mat-select-value-5').click()
        cy.get('#mat-option-16 > .mat-option-text').click()
        cy.get('.text-right > .mat-focus-indicator').click().debug().as("botonGuardarSeccion1")
        cy.wait(9000)
        cy.wait(9000)
        cy.contains('Sección 2').click().debug()
        cy.log("Vamos a completar la seccion 2")
        cy.wait(3000)
        cy.log("---------------------------------------")
        cy.get('#mat-input-7').click().type(seccion.vendedor).debug()
        cy.get('#mat-input-8').click().type(seccion.tropa).debug()
        cy.get('#mat-input-9').click().type(seccion.procedencia).debug()
        cy.get('#mat-input-10').click().type(seccion.kilos).debug()
        cy.get('#mat-input-11').click().type(seccion.razaAnimal).debug()
        cy.get('#mat-input-12').click().type(seccion.especie).debug()
        cy.get('#mat-input-13').click().type(seccion.dentincion).debug()
        cy.get('#mat-input-14').click().type(seccion.osificacion).debug()
        cy.get('#mat-input-15').click().type(seccion.peso).debug()
        cy.get('#mat-input-16').click().type(seccion.puntajePalco).debug()
        cy.get('#mat-input-17').click().type(seccion.cobertura).debug()
        cy.get('#mat-input-18').click().type(seccion.colorCarne).debug()
        cy.get('#mat-input-19').click().type(seccion.colorGrasa).debug()
        cy.get('#mat-input-20').click().type(seccion.minimoGi).debug()
        cy.get('#mat-input-21').click().type(seccion.marmoleo).debug()
        cy.get('#mat-input-22').click().type(seccion.ojoBife).debug()
        cy.get('.text-right > .mat-focus-indicator').click().debug().as("botonGuardarSeccion2")
        cy.wait(3000)
        cy.contains('Sección 3').click({force: true}).debug()

        //imagenes sacadas de la carpeta fixture
        const productoTerminado = "productoTerminado.jpg"
        const origen = "origen.jpg"
        const etiqueta_primaria = "etiquetaprimaria1.jpg"
        const preparacion_corte_uno = "preparacioncorte1.jpg"
        const preparacion_corte_dos = "preparacioncorte2.jpg"
        const presentacion_final = "presentacionfinal.jpg"
        const produt_envasado = "productoenvasado1.jpg"
        const produt_envasado_dos = "productoenvasado2.jpg"
        const produt_esperado_uno = "productoesperado1.jpg"
        const produt_esperado_dos = "productoesperado2.jpg"
        const ubicacion_cortes_uno = "ubicaciondecortes1.jpg"

        cy.wait(3000)
        cy.get("[type=file]").attachFile(productoTerminado)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(etiqueta_primaria)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(preparacion_corte_uno)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(presentacion_final)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(preparacion_corte_dos)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(produt_envasado)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(produt_envasado_dos)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(produt_esperado_uno)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(produt_esperado_dos)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(ubicacion_cortes_uno)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(etiqueta_primaria)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(preparacion_corte_dos)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(preparacion_corte_uno)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(etiqueta_primaria)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(presentacion_final)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(preparacion_corte_dos)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(preparacion_corte_uno)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get("[type=file]").attachFile(origen)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.wait(3000)
        cy.get('.mat-warn').click().as("botonGuardar")
        cy.wait(3000)
        cy.get('#mat-tab-label-0-3').click()
        cy.log("PASAMOS AL FORMULARIO DE ESTADOS !!!!")
        cy.wait(5000)
        cy.get('#mat-select-value-5').click().as("Select estados")
        cy.wait(2000)
        cy.get('#mat-option-0 > .mat-option-text').click()
        cy.wait(2000)
        cy.get('.my-4 > :nth-child(2) > .col-md-12 > .text-right > .mat-focus-indicator').click().as("botonGuardar")
        cy.wait(2000)
        cy.get('#mat-tab-label-0-4').click({force: true})
        cy.log("finalizamos la carga !!!!! ")
    })  
})