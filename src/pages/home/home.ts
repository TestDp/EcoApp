import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { LeerQrPage } from "../leer-qr/leer-qr";
import { EcoticketsServiceProvider } from "../../providers/ecotickets-service/ecotickets-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string, fechaEvento: string }>;
  usuario;
  ListaEventos: Array<{ id: string, Nombre_Evento: string, Lugar_Evento: string, icon: string, Fecha_Evento: string,UrlflayerEvento:string }>;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ecoticketsService: EcoticketsServiceProvider,
              public cargando: LoadingController) {

    var usuarioSesion: any = JSON.parse(localStorage.getItem("usuarioSesion"));
    if (usuarioSesion) {
      this.usuario = usuarioSesion;
    } else {
      this.usuario = navParams.get('usuario');
    }
    let loader = this.cargando.create({
      content: 'Cargando Eventos...',
    });

    loader.present().then(() => {
      this.ecoticketsService.getEventos(this.usuario.id).subscribe(
        (data: any) => { // Success
          var eventos = JSON.parse(data._body)
          if (eventos) {
            this.ListaEventos = [];
            eventos.ListaEventos.eventos.forEach(element => {
              this.ListaEventos.push({
                id: element.id,
                Nombre_Evento: element.Nombre_Evento,
                Lugar_Evento: element.Lugar_Evento,
                icon: 'people',
                Fecha_Evento: element.Fecha_Evento,
                UrlflayerEvento:'http://ecotickets.co/storage/FlyerDeEventos/'+ element.FlyerEvento
              });
            });

          }
          loader.dismiss();
        },
        (error) => {
          console.error(error);
          loader.dismiss();
        }
      );
      
    });

  }

  LeerQR(event, item) {
    this.navCtrl.push(LeerQrPage, {
      item: item
    });
  }
}
