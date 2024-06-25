import creatAccount from "../../../support/pageObject-giep/creatAccount.js";
describe("Loggin de giep", () => {
  const master_account = new creatAccount()

  it("Como usuario deseo ingresar en el sistema GIEP ", ()=>{
    master_account.userAccount();
  }) 

})