import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { LoginPageModule } from "../pages/login/login.module";
import { ListPageModule } from "../pages/list/list.module";
import { HomePageModule } from "../pages/home/home.module";
//import { LeerQrPage } from "../pages/leer-qr/leer-qr";
import { HttpModule } from '@angular/http';
import { EcoticketsServiceProvider } from '../providers/ecotickets-service/ecotickets-service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AsistentesActivosPageModule } from "../pages/asistentes-activos/asistentes-activos.module";
import { EstadisticasPageModule } from "../pages/estadisticas/estadisticas.module";
import { LeerQrPageModule } from "../pages/leer-qr/leer-qr.module";
//import { EstadisticasPage } from "../pages/estadisticas/estadisticas";
//import { AsistentesActivosPage } from "../pages/asistentes-activos/asistentes-activos";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    //LeerQrPage,
   // EstadisticasPage,
    //AsistentesActivosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    ListPageModule,
    HomePageModule,
    HttpModule,
    AsistentesActivosPageModule,
    EstadisticasPageModule,
    LeerQrPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    //LeerQrPage,
    //EstadisticasPage,
    //AsistentesActivosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EcoticketsServiceProvider
  ]
})
export class AppModule {}
