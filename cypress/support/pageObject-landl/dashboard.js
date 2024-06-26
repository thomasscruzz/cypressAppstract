// circuito para loggin en giep

class dashboard{
    estadisitcas(){
        cy.get('#menu-item-1').click().should("be.visible").as("menuDashboard")
        cy.wait(9000)
    }  
}
export default dashboard; // exportamos clase a archivo de test


