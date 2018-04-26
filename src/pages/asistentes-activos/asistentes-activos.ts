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
  ListaAsistentesFiltro;
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
          this.ListaAsistentes = JSON.parse(data._body);
          this.ListaAsistentesFiltro = JSON.parse(data._body);
          loaderAsistentes.dismiss();
        },
        (error) => {
          console.error(error);
          loaderAsistentes.dismiss();
        }
      );
    });
  }

  getUsuariosRegistrados(ev) {
    this.ListaAsistentes.usuariosRegistrados = this.ListaAsistentesFiltro.usuariosRegistrados;
    // se obtiene el valor ingresado
    var val = ev.target.value;
    //si el valor es vacio no se hace el filtro
    if (val && val.trim() != '') {
      this.ListaAsistentes.usuariosRegistrados = this.ListaAsistentes.usuariosRegistrados.filter((item) => {
        return (item.Nombres.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getAsistentes(ev) {
    this.ListaAsistentes.Asistentes = this.ListaAsistentesFiltro.Asistentes;
    // se obtiene el valor ingresado
    var val = ev.target.value;
    //si el valor es vacio no se hace el filtro
    if (val && val.trim() != '') {
      this.ListaAsistentes.Asistentes = this.ListaAsistentes.Asistentes.filter((item) => {
        return (item.Nombres.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
