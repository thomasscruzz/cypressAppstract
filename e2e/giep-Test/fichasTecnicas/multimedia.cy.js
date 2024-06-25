import 'cypress-file-upload';
import loggin from "../../../support/pageObject-giep/loggin.js";
import fichasTecnicas from "../../../support/pageObject-giep/fichasTecnicas.js";
import multimedia from '../../../support/pageObject-giep/multimedia.js';

describe("Como usuario me logueo en el sistema y voy a fichas tecnicas", () => {
  const master = new loggin()
  const ficha = new fichasTecnicas()
  const subir_archivos = new multimedia()
    it("Como usuario deseo cargar imagenes para la impresion de fichas comerciales", ()=>{
      master.userLoggin()     
      //ficha.userCreatFicha()
      //ficha.changedEstados()
      subir_archivos.uploadFile()

    })   
})