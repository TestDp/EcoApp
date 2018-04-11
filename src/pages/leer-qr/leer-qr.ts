import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { EcoticketsServiceProvider } from "../../providers/ecotickets-service/ecotickets-service";
import { EstadisticasPage } from "../estadisticas/estadisticas";
import { AsistentesActivosPage } from "../asistentes-activos/asistentes-activos";
/**
 * Generated class for the LeerQrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leer-qr',
  templateUrl: 'leer-qr.html',
})
export class LeerQrPage {

  Evento;
  scanData: {};
  options: BarcodeScannerOptions;
  identificacion: string;
  usuarioAsistente;
  estadoUsuario;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public barcodeScanner: BarcodeScanner,
    public ecoticketsService: EcoticketsServiceProvider,
    public cargando: LoadingController) {
    this.Evento = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeerQrPage');
  }

  scan() {
    this.options = {
      prompt: "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {      
      var stringQR = barcodeData.text;
      var string1 = stringQR.split("CC - ");
      if (string1.length > 1) {
        this.identificacion = string1[1].split("ECO")[0];
        let loader = this.cargando.create({
          content: 'Validando QR...',
        });
        this.ecoticketsService.getInformacionQR(this.Evento.id, this.identificacion).subscribe(
          (data: any) => { // Success
            var informacionUsuarioA = JSON.parse(data._body);
            if (JSON.stringify(informacionUsuarioA).length > 2) {
              this.usuarioAsistente = informacionUsuarioA;
              if (this.usuarioAsistente.esActivo == 0) {
                this.estadoUsuario = '¡SI!,USUARIO PUEDE INGRESAR';
              } else {
                this.estadoUsuario = '¡NO!,USUARIO YA INGRESÓ';
              }
            } else {
              this.estadoUsuario = 'USUARIO NO REGISTRADO';
              this.usuarioAsistente = '';
            }
            loader.dismiss();
          },
          (error) => {
            loader.dismiss();
            console.error(error);
          }
        );
      } else {
        this.estadoUsuario = 'QR NO VALIDO';
        this.usuarioAsistente = '';
      }
    }, (err) => {
      console.log("Error occured : " + err);
    });
  }

  ActivarQR(idEvento, idAsistente) {
    this.ecoticketsService.ActivarQRUsuario(idEvento, idAsistente).subscribe(
      (data: any) => { // Success
        this.estadoUsuario = data._body;        
      },
      (error) => {
        console.error(error);
      }
    );
  }

  Estadisticas(Evento) {
    this.navCtrl.push(EstadisticasPage, {
      Evento: Evento
    });
  }

  UsuariosActivos(Evento) {
    this.navCtrl.push(AsistentesActivosPage, {
      Evento: Evento
    });
  }
}
