class reporteAuditoria{
    auditoria(){
        cy.get('#menu-item-6').click().as("menuReporteAuditoria")
        cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(7) > .datatable-body-cell-label > .mat-icon').click()
        cy.wait(3000)
        cy.get('.text-center > .mat-focus-indicator').click()
    }
}
export default reporteAuditoria;