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
  indexInfiniteScroll = 10;
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
          this.ListaAsistentes.usuariosRegistrados = this.ListaAsistentes.usuariosRegistrados.slice(0, this.indexInfiniteScroll);
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
      });
    }
    else {
      this.indexInfiniteScroll = 10;
      this.ListaAsistentes.usuariosRegistrados = this.ListaAsistentesFiltro.usuariosRegistrados.slice(0, this.indexInfiniteScroll);
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

  ActivarODesactivarUsuario(Asistente) {
    if (Asistente.esActivo)
      this.DesactivarUsuario(Asistente);
    else
      this.ActivarUsuario(Asistente);
  }

  ActivarUsuario(Asistente) {
    this.ecoticketsService.ActivarQRUsuario(this.Evento.id, Asistente.id).subscribe(
      (data: any) => { // Success
        Asistente.esActivo = true;
        this.ListaAsistentes.Asistentes.push(Asistente);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  DesactivarUsuario(Asistente) {
    this.ecoticketsService.DesactivarQRUsuario(this.Evento.id, Asistente.id).subscribe(
      (data: any) => { // Success
        Asistente.esActivo = false;
        var i = 0;
        var index = 0;
        this.ListaAsistentes.Asistentes.forEach(function (asistenteArray) {
          if (asistenteArray.id == Asistente.id) {
            index = i;
          }
          i++;
        });
        this.ListaAsistentes.Asistentes.splice(index, 1);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  doInfinite(infiniteScroll) {

    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        if (this.ListaAsistentesFiltro.usuariosRegistrados.length <= this.indexInfiniteScroll)
          break
        this.ListaAsistentes.usuariosRegistrados.push(this.ListaAsistentesFiltro.usuariosRegistrados[this.indexInfiniteScroll]);
        this.indexInfiniteScroll++;
      }
      infiniteScroll.complete();
    }, 500);
  }

}
