import loggin from "../../../support/pageObject-giep/loggin.js";
import fichasTecnicas from '../../../support/pageObject-giep/fichasTecnicas.js';

describe("Como usuario me logueo en el sistema y voy a fichas tecnicas", () => {
  const master = new loggin()
  const user_fichas_tecnicas = new fichasTecnicas()
    it("Como usuario deseo ingresar en el sistema y crear una fichas tecnicas ", ()=>{
      master.userLoggin()       
      user_fichas_tecnicas.userCreatFicha()
      user_fichas_tecnicas.changedEstados()
    })   
})