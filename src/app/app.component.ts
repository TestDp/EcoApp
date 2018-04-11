import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";
import { EcoticketsServiceProvider } from "../providers/ecotickets-service/ecotickets-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = LoginPage;
  rootPage: any;
  pages: Array<{ title: string, component: any }>;
  pagesCerrarSesion: Array<{ title: string, component: any }>;
  

  constructor(public platform: Platform
    , public statusBar: StatusBar
    , public splashScreen: SplashScreen
    , public ecoticketsService: EcoticketsServiceProvider
    , public cargando: LoadingController) {
    this.initializeApp();
    var usuario: any = JSON.parse(localStorage.getItem("usuarioSesion"));
    if (usuario) {
      this.rootPage = HomePage;      
    } else {
      this.rootPage = LoginPage;      
    }
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Estadísticas', component: ListPage },
    ];
    this.pagesCerrarSesion = [{ title: 'Cerrar Sesión', component: LoginPage }];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  cerrarSesion(page) {
    let loader = this.cargando.create({
      content: 'Cerrando Sesión...',
    });
    loader.present().then(() => {
      this.ecoticketsService.logoutUser().subscribe(
        (data: any) => { // Success         
          var respuesta = JSON.parse(data._body);
          if (respuesta.cerrasSesion) {
            localStorage.setItem('usuarioSesion', JSON.stringify(null));
            this.nav.setRoot(page.component);
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
