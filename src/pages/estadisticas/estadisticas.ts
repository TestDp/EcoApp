import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EcoticketsServiceProvider } from "../../providers/ecotickets-service/ecotickets-service";
import { Chart } from 'chart.js';
/**
 * Generated class for the EstadisticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class EstadisticasPage {
  Evento;
  arrayColores = ["#000033", "#0000CC", "#003300", "#0033FF", "#006600", "#006699",
    "#0066CC", "#009966", "#009999", "#0099CC", "#0099FF", "#00CC99", "#00CCCC", "#00CCFF", "#00FF00", "#00FF33",
    "#00FF66", "#00FF99", "#330033", "#330066", "#330099", "#3300CC", "#3300FF", "#333300", "#333333", "#333366", "#333399", "#3333CC", "#3333FF",
    "#336600", "#336633", "#336666", "#336699", "#3366CC", "#3366FF", "#339900", "#339933", "#339966", "#339999", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99",
    "#66FF33", "#66FF66", "#66FF99", "#66FFCC", "#99CC00", "#99CC33", "#99CC66", "#99FF00", "#99FF33", "#99FF66",
    "#99FF99", "#99FFCC", "#99FFFF", "#CC0000", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600",
    "#CC6633", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF6666", "#FF6699", "#FF66CC",
    "#FF66FF", "#FF9900", "#FF9933", "#FF9966", "#FF9999"];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ecoticketsService: EcoticketsServiceProvider,            
              public cargando: LoadingController) {
    this.Evento = navParams.get("Evento");
  }

  ionViewDidLoad() {
    let loaderAsistentes = this.cargando.create({
      content: 'Cargando Estadísticas...',
    });   

    loaderAsistentes.present().then(() => {
      this.ecoticketsService.Estadisticas(this.Evento.id).subscribe(
        (data: any) => { // Success
          var result=JSON.parse(data._body);
          this.contruirGraficaAsistentesEsperadosRegistrado(result.cantidadAsistentes);
          this.contruirGraficaAsistentesXCiudad(result.cantidadAsistentesXciudad);
          this.contruirGraficaEdadesUsuarioRegistrados(result.rangoEdadAsistentes);
          this.contruirGraficaUsuarioRegistradosXFecha(result.numeroDeAsistentesXFecha);
          this.contruirGraficaJuntasAsistentes(result.cantidadJuntascomparar);
          loaderAsistentes.dismiss();
        },
        (error) => {
          console.error(error);
          loaderAsistentes.dismiss();
        }
      );      
    });

     }

  contruirGraficaAsistentesEsperadosRegistrado(jsonAEP) {
    var ctx = document.getElementById("canvasCantidadAsistentes");
    var data = {
      labels: [
        "Personas Esperadas",
        "Personas Registradas",
        "Asistentes"
      ],
      datasets: [
        {
          data: [jsonAEP.CantidadEsperada, jsonAEP.CantidadRegistrados, jsonAEP.CantidadAsistentes],
          backgroundColor: [
            "#E5E8E8",
            "#82E0AA",
            "#CC3300"
          ],
          hoverBackgroundColor: [
            "#E5E8E8",
            "#82E0AA",
            "#CC3300"
          ]
        }]
    }
     new Chart(ctx, {
      type: 'pie',
      data: data
    });
  }
  contruirGraficaAsistentesXCiudad(jsonAEP) {
    var ctx = document.getElementById("canvasCiudadesAsistens");
    var data = {
      labels: jsonAEP.nombreCiudades,
      datasets: [
        {
          data: jsonAEP.Cantidad,
          label: "Cantidad Asistentes",
          backgroundColor: this.arrayColores
        }]
    }
     new Chart(ctx, {
      type: 'horizontalBar',
      data: data,
      options: {
        title: {
          display: true,
          text: 'Cantidad de Inscritos por ciudad',
          top: 'bottom',
          fontSize: 12
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              min: 0,
              max: parseInt(jsonAEP.Maximo)
            },
            scaleLabel: {
              display: true,
              labelString: "Cantidad"
            }
          }],
          yAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
      }

    });
  }
  contruirGraficaEdadesUsuarioRegistrados(jsonAEP) {
    var ctx = document.getElementById("canvasEdadesAsistentes");
    var data = {
      labels: jsonAEP.LabelEdades,
      datasets: [
        {
          data: jsonAEP.Cantidad,
          label: "Edades Asistentes",
          backgroundColor: this.arrayColores
        }]
    }
    new Chart(ctx, {
      type: 'horizontalBar',
      data: data,
      options: {
        title: {
          display: true,
          text: 'Edades de los asistentes registrados',
          top: 'bottom',
          fontSize: 12
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              min: 0,
              max: parseInt(jsonAEP.Maximo)
            },
            scaleLabel: {
              display: true,
              labelString: "Cantidad"
            }
          }],
          yAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
      }

    });
  }

  contruirGraficaUsuarioRegistradosXFecha(jsonAEP) {
    var ctx = document.getElementById("canvasAsistentesXFecha");
    var data = {
      labels: jsonAEP.LabelFechas,
      datasets: [
        {
          data: jsonAEP.Cantidad,
          label: "fecha de Registro",
          backgroundColor: this.arrayColores
        }]
    }
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        title: {
          display: true,
          text: 'fechas de registros asistentes',
          top: 'bottom',
          fontSize: 12
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              min: 0,
              max: parseInt(jsonAEP.Maximo)
            },
            scaleLabel: {
              display: true,
              labelString: "Cantidad"
            }
          }],
          xAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
      }
    });

  }

  contruirGraficaJuntasAsistentes(jsonAEP) {
     var ctx = document.getElementById("canvasJuntAsistens");
                var data = {
                    labels: [
                        "Juntas Esperadas",
                        "Juntas Asistentes"
                    ],
                    datasets: [
                        {
                            data: [jsonAEP.Cantidadtotal, jsonAEP.CantidadAsistentes],
                            backgroundColor: [
                                "#E5E8E8",
                                "#82E0AA"
                            ],
                            hoverBackgroundColor: [
                                "#E5E8E8",
                                "#82E0AA"
                            ]
                        }]
                }
                new Chart(ctx, {
                    type: 'pie',
                    data: data
                });
  }
}
