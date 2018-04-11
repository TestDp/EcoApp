//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the EcoticketsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EcoticketsServiceProvider {
  url:string = 'http://pruebas.ecotickets.co';
  constructor(public http: Http) {
    console.log('Hello EcoticketsServiceProvider Provider');
  }

   getCiudades(){    
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+'/CiudadesWS/1',options);
  }

  loginUser(email,contrasena)
  {
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+'/loginApp/'+email+'/'+contrasena,options);
  }

  logoutUser()
  {
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+'/logoutApp',options);
  }

  getEventos(idUser)
  {
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+'/EventosApp/'+idUser,options);
  }

  getInformacionQR(idEvento,cc)
  {
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+'/InformacionQRApp/'+idEvento+'/'+cc,options);
  }

  ActivarQRUsuario(idEvento,idAsistente)
  {
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+'/ActivarQRApp/'+idEvento+'/'+idAsistente,options);
  }

  CantidadAsistentesEsperadosRegistrados(idEvento)
  {
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+'/CantidadAsistentesApp/'+idEvento,options);
  }

   AsistentesXCiudad(idEvento)
  {
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+'/AsistentesXCiudadApp/'+idEvento,options);
  }
   EdadesAsistentes(idEvento)
  {
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+'/EdadesAsistentesApp/'+idEvento,options);
  }

  AsistentesXFecha(idEvento)
  {
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+'/AsistentesXFechaApp/'+idEvento,options);
  }

  JuntasAsistentes(idEvento)
  {
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+'/JuntasAsistentesApp/'+idEvento,options);
  }

  Estadisticas(idEvento)
  {
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+'/EstadisticasApp/'+idEvento,options);
  }
  AsistentesActivos(idEvento)
  {
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+'/AsistentesActivosApp/'+idEvento,options);
  }
}
