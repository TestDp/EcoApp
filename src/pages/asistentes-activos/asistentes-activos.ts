import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EcoticketsServiceProvider } from "../../providers/ecotickets-service/ecotickets-service";

/**
 * Generated class for the AsistentesActivosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asistentes-activos',
  templateUrl: 'asistentes-activos.html',
})
export class AsistentesActivosPage {
Evento;
ListaAsistentes;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public ecoticketsService: EcoticketsServiceProvider,
    public cargando: LoadingController) {
      this.Evento = navParams.get("Evento");
  }

  ionViewDidLoad() {
    let loaderAsistentes = this.cargando.create({
      content: 'Cargando Asistentes...',
    });   

    loaderAsistentes.present().then(() => {
      this.ecoticketsService.AsistentesActivos(this.Evento.id).subscribe(
        (data: any) => { // Success
          this.ListaAsistentes=JSON.parse(data._body);
         
          loaderAsistentes.dismiss();
        },
        (error) => {
          console.error(error);
          loaderAsistentes.dismiss();
        }
      );      
    });
  }

}
