// circuito para agregar imgs para la impresion de la ficha comercial
import 'cypress-file-upload';

class multimedia{
    uploadFile(){
        cy.wait(5000)
        cy.visit("https://giep-dev-44e61.web.app/editar-ficha/2SzDQMxmUSTRaKqdQdBl")
        cy.wait(9000)
        cy.get('#mat-tab-label-0-4').click({force: true}).as("formulario de multimedia")
        const productoTerminado = "productoTerminado.jpg"
        cy.get("[type=file]").attachFile(productoTerminado)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()
        cy.get('#mat-expansion-panel-header-8').click()
        cy.wait(5000)
        cy.get("[type=file]").attachFile(productoTerminado)
        cy.wait(3000)
        cy.get('[ng-reflect-dialog-result="true"] > .mat-button-wrapper > .mat-icon').click()

    }  
}
export default multimedia; // exportamos clase a archivo de test