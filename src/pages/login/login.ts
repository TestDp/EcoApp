import { ViewChild, Component } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HomePage } from "../home/home";
import 'rxjs/add/operator/map';
import { EcoticketsServiceProvider } from "../../providers/ecotickets-service/ecotickets-service";



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  users: any = [];
  usuario: any;
  password: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ecoticketsService: EcoticketsServiceProvider,
              public alertCtrl: AlertController,
              public cargando: LoadingController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let loader = this.cargando.create({
      content: 'Iniciando Sesión...',
    });

    loader.present().then(() => {
      this.ecoticketsService.loginUser(this.usuario, this.password).subscribe(
        (data: any) => { // Success       
          var usuario = JSON.parse(data._body)
          if (usuario.id) {
            localStorage.setItem('usuarioSesion', JSON.stringify(usuario));
            this.navCtrl.setRoot(HomePage, {
              usuario: usuario
            });
          } else {
            if (!usuario.respuesta) {
              this.alertCtrl.create({
                title: 'Información',
                subTitle: 'Valide el usuario o contraseña',
                buttons: ['Volver a intentar']
              }).present();
            }
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

}
