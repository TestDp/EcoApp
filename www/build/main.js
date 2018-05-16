webpackJsonp([3],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        // for (let i = 1; i < 11; i++) {
        //   this.items.push({
        //     title: 'Item ' + i,
        //     note: 'This is item #' + i,
        //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        //   });
        // }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="background-image: url(\'assets/images/favicon.png\') !important; background-repeat: no-repeat; background-position-x: 30%;\n    background-position-y: 8px; background-size: 25px;">Estadísticas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsistentesActivosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ecotickets_service_ecotickets_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AsistentesActivosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AsistentesActivosPage = (function () {
    function AsistentesActivosPage(navCtrl, navParams, ecoticketsService, cargando) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ecoticketsService = ecoticketsService;
        this.cargando = cargando;
        this.Evento = navParams.get("Evento");
    }
    AsistentesActivosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loaderAsistentes = this.cargando.create({
            content: 'Cargando Asistentes...',
        });
        loaderAsistentes.present().then(function () {
            _this.ecoticketsService.AsistentesActivos(_this.Evento.id).subscribe(function (data) {
                _this.ListaAsistentes = JSON.parse(data._body);
                _this.ListaAsistentesFiltro = JSON.parse(data._body);
                loaderAsistentes.dismiss();
            }, function (error) {
                console.error(error);
                loaderAsistentes.dismiss();
            });
        });
    };
    AsistentesActivosPage.prototype.getUsuariosRegistrados = function (ev) {
        this.ListaAsistentes.usuariosRegistrados = this.ListaAsistentesFiltro.usuariosRegistrados;
        // se obtiene el valor ingresado
        var val = ev.target.value;
        //si el valor es vacio no se hace el filtro
        if (val && val.trim() != '') {
            this.ListaAsistentes.usuariosRegistrados = this.ListaAsistentes.usuariosRegistrados.filter(function (item) {
                return (item.Nombres.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    AsistentesActivosPage.prototype.getAsistentes = function (ev) {
        this.ListaAsistentes.Asistentes = this.ListaAsistentesFiltro.Asistentes;
        // se obtiene el valor ingresado
        var val = ev.target.value;
        //si el valor es vacio no se hace el filtro
        if (val && val.trim() != '') {
            this.ListaAsistentes.Asistentes = this.ListaAsistentes.Asistentes.filter(function (item) {
                return (item.Nombres.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    AsistentesActivosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-asistentes-activos',template:/*ion-inline-start:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\pages\asistentes-activos\asistentes-activos.html"*/'<!--\n  Generated template for the AsistentesActivosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="background-image: url(\'assets/images/favicon.png\') !important; background-repeat: no-repeat; background-position-x: 23%;\n    background-position-y: 8px; background-size: 25px;">Usuarios Ingresados</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="Usuarios">\n      <ion-segment-button value="UsuariosRegistrados">\n        Usarios Registrados\n      </ion-segment-button>\n      <ion-segment-button value="Asistentes">\n        Asistentes\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div [ngSwitch]="Usuarios">\n    <ion-list *ngSwitchCase="\'UsuariosRegistrados\'">\n      <ion-searchbar (ionInput)="getUsuariosRegistrados($event)"></ion-searchbar>\n      <ion-grid>\n        <ion-row *ngFor="let asistente of ListaAsistentes.usuariosRegistrados"> \n          <ion-col col-4>{{asistente.Identificacion}}</ion-col>\n          <ion-col col-8>{{asistente.Nombres}} {{asistente.Apellidos}}</ion-col>\n        </ion-row>        \n      </ion-grid>     \n    </ion-list>\n    <ion-list *ngSwitchCase="\'Asistentes\'">\n      <ion-searchbar (ionInput)="getAsistentes($event)"></ion-searchbar>\n       <ion-grid>\n        <ion-row *ngFor="let asistente of ListaAsistentes.Asistentes"> \n          <ion-col col-4>{{asistente.Identificacion}}</ion-col>\n          <ion-col col-8>{{asistente.Nombres}} {{asistente.Apellidos}}</ion-col>\n        </ion-row>        \n      </ion-grid> \n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\pages\asistentes-activos\asistentes-activos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ecotickets_service_ecotickets_service__["a" /* EcoticketsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AsistentesActivosPage);
    return AsistentesActivosPage;
}());

//# sourceMappingURL=asistentes-activos.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ecotickets_service_ecotickets_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EstadisticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstadisticasPage = (function () {
    function EstadisticasPage(navCtrl, navParams, ecoticketsService, cargando) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ecoticketsService = ecoticketsService;
        this.cargando = cargando;
        this.arrayColores = ["#000033", "#0000CC", "#003300", "#0033FF", "#006600", "#006699",
            "#0066CC", "#009966", "#009999", "#0099CC", "#0099FF", "#00CC99", "#00CCCC", "#00CCFF", "#00FF00", "#00FF33",
            "#00FF66", "#00FF99", "#330033", "#330066", "#330099", "#3300CC", "#3300FF", "#333300", "#333333", "#333366", "#333399", "#3333CC", "#3333FF",
            "#336600", "#336633", "#336666", "#336699", "#3366CC", "#3366FF", "#339900", "#339933", "#339966", "#339999", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99",
            "#66FF33", "#66FF66", "#66FF99", "#66FFCC", "#99CC00", "#99CC33", "#99CC66", "#99FF00", "#99FF33", "#99FF66",
            "#99FF99", "#99FFCC", "#99FFFF", "#CC0000", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600",
            "#CC6633", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF6666", "#FF6699", "#FF66CC",
            "#FF66FF", "#FF9900", "#FF9933", "#FF9966", "#FF9999"];
        this.Evento = navParams.get("Evento");
    }
    EstadisticasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loaderAsistentes = this.cargando.create({
            content: 'Cargando Estadísticas...',
        });
        loaderAsistentes.present().then(function () {
            _this.ecoticketsService.Estadisticas(_this.Evento.id).subscribe(function (data) {
                var result = JSON.parse(data._body);
                _this.contruirGraficaAsistentesEsperadosRegistrado(result.cantidadAsistentes);
                _this.contruirGraficaAsistentesXCiudad(result.cantidadAsistentesXciudad);
                _this.contruirGraficaEdadesUsuarioRegistrados(result.rangoEdadAsistentes);
                _this.contruirGraficaUsuarioRegistradosXFecha(result.numeroDeAsistentesXFecha);
                _this.contruirGraficaJuntasAsistentes(result.cantidadJuntascomparar);
                loaderAsistentes.dismiss();
            }, function (error) {
                console.error(error);
                loaderAsistentes.dismiss();
            });
        });
    };
    EstadisticasPage.prototype.contruirGraficaAsistentesEsperadosRegistrado = function (jsonAEP) {
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
                }
            ]
        };
        new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](ctx, {
            type: 'pie',
            data: data
        });
    };
    EstadisticasPage.prototype.contruirGraficaAsistentesXCiudad = function (jsonAEP) {
        var ctx = document.getElementById("canvasCiudadesAsistens");
        var data = {
            labels: jsonAEP.nombreCiudades,
            datasets: [
                {
                    data: jsonAEP.Cantidad,
                    label: "Cantidad Asistentes",
                    backgroundColor: this.arrayColores
                }
            ]
        };
        new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](ctx, {
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
    };
    EstadisticasPage.prototype.contruirGraficaEdadesUsuarioRegistrados = function (jsonAEP) {
        var ctx = document.getElementById("canvasEdadesAsistentes");
        var data = {
            labels: jsonAEP.LabelEdades,
            datasets: [
                {
                    data: jsonAEP.Cantidad,
                    label: "Edades Asistentes",
                    backgroundColor: this.arrayColores
                }
            ]
        };
        new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](ctx, {
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
    };
    EstadisticasPage.prototype.contruirGraficaUsuarioRegistradosXFecha = function (jsonAEP) {
        var ctx = document.getElementById("canvasAsistentesXFecha");
        var data = {
            labels: jsonAEP.LabelFechas,
            datasets: [
                {
                    data: jsonAEP.Cantidad,
                    label: "fecha de Registro",
                    backgroundColor: this.arrayColores
                }
            ]
        };
        new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](ctx, {
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
    };
    EstadisticasPage.prototype.contruirGraficaJuntasAsistentes = function (jsonAEP) {
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
                }
            ]
        };
        new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](ctx, {
            type: 'pie',
            data: data
        });
    };
    EstadisticasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estadisticas',template:/*ion-inline-start:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\pages\estadisticas\estadisticas.html"*/'<!--\n  Generated template for the EstadisticasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="background-image: url(\'assets/images/favicon.png\') !important; background-repeat: no-repeat; background-position-x: 30%;\n    background-position-y: 8px; background-size: 25px;">Estadísticas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <canvas id="canvasCantidadAsistentes"></canvas>\n        </ion-item>\n      </ion-col>\n    </ion-row> -->\n  <ion-card item-height="100%" >      \n      <ion-card-content>\n        <canvas id="canvasCantidadAsistentes" style="height:500px;width:100%"></canvas>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>      \n      <ion-card-content>\n        <canvas id="canvasCiudadesAsistens" style="height:500px;width:100%"></canvas>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>     \n      <ion-card-content>\n        <canvas id="canvasEdadesAsistentes" style="height:500px;width:100%"></canvas>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>     \n      <ion-card-content>\n        <canvas id="canvasAsistentesXFecha" style="height:500px;width:100%"></canvas>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>      \n      <ion-card-content>\n        <canvas id="canvasJuntAsistens" style="height:550px;width:100%"></canvas>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\pages\estadisticas\estadisticas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ecotickets_service_ecotickets_service__["a" /* EcoticketsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EstadisticasPage);
    return EstadisticasPage;
}());

//# sourceMappingURL=estadisticas.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeerQrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ecotickets_service_ecotickets_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__estadisticas_estadisticas__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__asistentes_activos_asistentes_activos__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LeerQrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeerQrPage = (function () {
    function LeerQrPage(navCtrl, navParams, barcodeScanner, ecoticketsService, cargando) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.ecoticketsService = ecoticketsService;
        this.cargando = cargando;
        this.Evento = navParams.get("item");
    }
    LeerQrPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeerQrPage');
    };
    LeerQrPage.prototype.scan = function () {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode "
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            var stringQR = barcodeData.text;
            var string1 = stringQR.split("CC - ");
            if (string1.length > 1) {
                _this.identificacion = string1[1].split("ECO")[0];
                var loader_1 = _this.cargando.create({
                    content: 'Validando QR...',
                });
                _this.ecoticketsService.getInformacionQR(_this.Evento.id, _this.identificacion).subscribe(function (data) {
                    var informacionUsuarioA = JSON.parse(data._body);
                    if (JSON.stringify(informacionUsuarioA).length > 2) {
                        _this.usuarioAsistente = informacionUsuarioA;
                        if (_this.usuarioAsistente.esActivo == 0) {
                            _this.estadoUsuario = '¡SI!,USUARIO PUEDE INGRESAR';
                        }
                        else {
                            _this.estadoUsuario = '¡NO!,USUARIO YA INGRESÓ';
                        }
                    }
                    else {
                        _this.estadoUsuario = 'USUARIO NO REGISTRADO';
                        _this.usuarioAsistente = '';
                    }
                    loader_1.dismiss();
                }, function (error) {
                    loader_1.dismiss();
                    console.error(error);
                });
            }
            else {
                _this.estadoUsuario = 'QR NO VALIDO';
                _this.usuarioAsistente = '';
            }
        }, function (err) {
            console.log("Error occured : " + err);
        });
    };
    LeerQrPage.prototype.ActivarQR = function (idEvento, idAsistente) {
        var _this = this;
        this.ecoticketsService.ActivarQRUsuario(idEvento, idAsistente).subscribe(function (data) {
            _this.estadoUsuario = data._body;
        }, function (error) {
            console.error(error);
        });
    };
    LeerQrPage.prototype.Estadisticas = function (Evento) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__estadisticas_estadisticas__["a" /* EstadisticasPage */], {
            Evento: Evento
        });
    };
    LeerQrPage.prototype.UsuariosActivos = function (Evento) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__asistentes_activos_asistentes_activos__["a" /* AsistentesActivosPage */], {
            Evento: Evento
        });
    };
    LeerQrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leer-qr',template:/*ion-inline-start:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\pages\leer-qr\leer-qr.html"*/'<!--\n  Generated template for the LeerQrPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="background-image: url(\'assets/images/favicon.png\') !important; background-repeat: no-repeat; background-position-x: 20%;\n    background-position-y: 8px; background-size: 25px;">Información del Evento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n   <ion-card>\n    <img src="{{Evento.UrlflayerEvento}}"/>  \n      <ion-card-title>\n      {{Evento.Nombre_Evento}}\n      </ion-card-title>\n    <div class="card-subtitle">Lugar:{{Evento.Lugar_Evento }}</div>\n    <div class="card-subtitle">fecha:{{Evento.Fecha_Evento }}</div>\n    <ion-grid *ngIf="usuarioAsistente">\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label>Nombre: {{usuarioAsistente.Nombres}} </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label>Apellidos: {{usuarioAsistente.Apellidos}} </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label>Identificación: {{usuarioAsistente.Identificacion}} </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label>Estado: {{estadoUsuario}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <button ion-button (click)="ActivarQR(Evento.id,usuarioAsistente.id)">Activar QR</button>\n  </ion-grid>\n  <ion-grid *ngIf="!usuarioAsistente && estadoUsuario">\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label>{{estadoUsuario}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-card>\n  <!-- <ion-row>\n    <ion-col col-12>\n      <ion-item>\n        <ion-label>Evento:{{Evento.Nombre_Evento}} </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <ion-item>\n        <ion-label>Lugar:{{Evento.Lugar_Evento }} </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <ion-item>\n        <ion-label>fecha:{{Evento.Fecha_Evento }} </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row> -->\n  <!-- <ion-grid *ngIf="usuarioAsistente">\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label>Nombre: {{usuarioAsistente.Nombres}} </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label>Apellidos: {{usuarioAsistente.Apellidos}} </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label>Identificación: {{usuarioAsistente.Identificacion}} </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label>Estado: {{estadoUsuario}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <button ion-button (click)="ActivarQR(Evento.id,usuarioAsistente.id)">Activar QR</button>\n  </ion-grid>\n  <ion-grid *ngIf="!usuarioAsistente && estadoUsuario">\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label>{{estadoUsuario}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar>\n    <ion-segment>\n      <ion-segment-button style="color: black;" (click)="UsuariosActivos(Evento)" value="ingresos">\n        <ion-icon name="list-box"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button style="color: black;" (click)="scan()" value="esccanear">\n        <ion-icon name="qr-scanner"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button style="color: black;" (click)="Estadisticas(Evento)" value="estadisticas">\n        <ion-icon name="stats"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\pages\leer-qr\leer-qr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ecotickets_service_ecotickets_service__["a" /* EcoticketsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LeerQrPage);
    return LeerQrPage;
}());

//# sourceMappingURL=leer-qr.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/asistentes-activos/asistentes-activos.module": [
		466,
		2
	],
	"../pages/estadisticas/estadisticas.module": [
		467,
		1
	],
	"../pages/leer-qr/leer-qr.module": [
		468,
		0
	],
	"../pages/login/login.module": [
		298
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: []
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcoticketsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


/*
  Generated class for the EcoticketsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EcoticketsServiceProvider = (function () {
    function EcoticketsServiceProvider(http) {
        this.http = http;
        this.url = 'http://pruebas.ecotickets.co';
        console.log('Hello EcoticketsServiceProvider Provider');
    }
    EcoticketsServiceProvider.prototype.getCiudades = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/CiudadesWS/1', options);
    };
    EcoticketsServiceProvider.prototype.loginUser = function (email, contrasena) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/loginApp/' + email + '/' + contrasena, options);
    };
    EcoticketsServiceProvider.prototype.logoutUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/logoutApp', options);
    };
    EcoticketsServiceProvider.prototype.getEventos = function (idUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/EventosApp/' + idUser, options);
    };
    EcoticketsServiceProvider.prototype.getInformacionQR = function (idEvento, cc) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/InformacionQRApp/' + idEvento + '/' + cc, options);
    };
    EcoticketsServiceProvider.prototype.ActivarQRUsuario = function (idEvento, idAsistente) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/ActivarQRApp/' + idEvento + '/' + idAsistente, options);
    };
    EcoticketsServiceProvider.prototype.CantidadAsistentesEsperadosRegistrados = function (idEvento) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/CantidadAsistentesApp/' + idEvento, options);
    };
    EcoticketsServiceProvider.prototype.AsistentesXCiudad = function (idEvento) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/AsistentesXCiudadApp/' + idEvento, options);
    };
    EcoticketsServiceProvider.prototype.EdadesAsistentes = function (idEvento) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/EdadesAsistentesApp/' + idEvento, options);
    };
    EcoticketsServiceProvider.prototype.AsistentesXFecha = function (idEvento) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/AsistentesXFechaApp/' + idEvento, options);
    };
    EcoticketsServiceProvider.prototype.JuntasAsistentes = function (idEvento) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/JuntasAsistentesApp/' + idEvento, options);
    };
    EcoticketsServiceProvider.prototype.Estadisticas = function (idEvento) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/EstadisticasApp/' + idEvento, options);
    };
    EcoticketsServiceProvider.prototype.AsistentesActivos = function (idEvento) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + '/AsistentesActivosApp/' + idEvento, options);
    };
    EcoticketsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EcoticketsServiceProvider);
    return EcoticketsServiceProvider;
}());

//# sourceMappingURL=ecotickets-service.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_module__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home_module__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_leer_qr_leer_qr__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_ecotickets_service_ecotickets_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_barcode_scanner__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_estadisticas_estadisticas__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_asistentes_activos_asistentes_activos__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_leer_qr_leer_qr__["a" /* LeerQrPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_estadisticas_estadisticas__["a" /* EstadisticasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_asistentes_activos_asistentes_activos__["a" /* AsistentesActivosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/asistentes-activos/asistentes-activos.module#AsistentesActivosPageModule', name: 'AsistentesActivosPage', segment: 'asistentes-activos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estadisticas/estadisticas.module#EstadisticasPageModule', name: 'EstadisticasPage', segment: 'estadisticas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leer-qr/leer-qr.module#LeerQrPageModule', name: 'LeerQrPage', segment: 'leer-qr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_list_module__["a" /* ListPageModule */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home_module__["a" /* HomePageModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_leer_qr_leer_qr__["a" /* LeerQrPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_estadisticas_estadisticas__["a" /* EstadisticasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_asistentes_activos_asistentes_activos__["a" /* AsistentesActivosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_ecotickets_service_ecotickets_service__["a" /* EcoticketsServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 173,
	"./af.js": 173,
	"./ar": 174,
	"./ar-dz": 175,
	"./ar-dz.js": 175,
	"./ar-kw": 176,
	"./ar-kw.js": 176,
	"./ar-ly": 177,
	"./ar-ly.js": 177,
	"./ar-ma": 178,
	"./ar-ma.js": 178,
	"./ar-sa": 179,
	"./ar-sa.js": 179,
	"./ar-tn": 180,
	"./ar-tn.js": 180,
	"./ar.js": 174,
	"./az": 181,
	"./az.js": 181,
	"./be": 182,
	"./be.js": 182,
	"./bg": 183,
	"./bg.js": 183,
	"./bm": 184,
	"./bm.js": 184,
	"./bn": 185,
	"./bn.js": 185,
	"./bo": 186,
	"./bo.js": 186,
	"./br": 187,
	"./br.js": 187,
	"./bs": 188,
	"./bs.js": 188,
	"./ca": 189,
	"./ca.js": 189,
	"./cs": 190,
	"./cs.js": 190,
	"./cv": 191,
	"./cv.js": 191,
	"./cy": 192,
	"./cy.js": 192,
	"./da": 193,
	"./da.js": 193,
	"./de": 194,
	"./de-at": 195,
	"./de-at.js": 195,
	"./de-ch": 196,
	"./de-ch.js": 196,
	"./de.js": 194,
	"./dv": 197,
	"./dv.js": 197,
	"./el": 198,
	"./el.js": 198,
	"./en-au": 199,
	"./en-au.js": 199,
	"./en-ca": 200,
	"./en-ca.js": 200,
	"./en-gb": 201,
	"./en-gb.js": 201,
	"./en-ie": 202,
	"./en-ie.js": 202,
	"./en-il": 203,
	"./en-il.js": 203,
	"./en-nz": 204,
	"./en-nz.js": 204,
	"./eo": 205,
	"./eo.js": 205,
	"./es": 206,
	"./es-do": 207,
	"./es-do.js": 207,
	"./es-us": 208,
	"./es-us.js": 208,
	"./es.js": 206,
	"./et": 209,
	"./et.js": 209,
	"./eu": 210,
	"./eu.js": 210,
	"./fa": 211,
	"./fa.js": 211,
	"./fi": 212,
	"./fi.js": 212,
	"./fo": 213,
	"./fo.js": 213,
	"./fr": 214,
	"./fr-ca": 215,
	"./fr-ca.js": 215,
	"./fr-ch": 216,
	"./fr-ch.js": 216,
	"./fr.js": 214,
	"./fy": 217,
	"./fy.js": 217,
	"./gd": 218,
	"./gd.js": 218,
	"./gl": 219,
	"./gl.js": 219,
	"./gom-latn": 220,
	"./gom-latn.js": 220,
	"./gu": 221,
	"./gu.js": 221,
	"./he": 222,
	"./he.js": 222,
	"./hi": 223,
	"./hi.js": 223,
	"./hr": 224,
	"./hr.js": 224,
	"./hu": 225,
	"./hu.js": 225,
	"./hy-am": 226,
	"./hy-am.js": 226,
	"./id": 227,
	"./id.js": 227,
	"./is": 228,
	"./is.js": 228,
	"./it": 229,
	"./it.js": 229,
	"./ja": 230,
	"./ja.js": 230,
	"./jv": 231,
	"./jv.js": 231,
	"./ka": 232,
	"./ka.js": 232,
	"./kk": 233,
	"./kk.js": 233,
	"./km": 234,
	"./km.js": 234,
	"./kn": 235,
	"./kn.js": 235,
	"./ko": 236,
	"./ko.js": 236,
	"./ky": 237,
	"./ky.js": 237,
	"./lb": 238,
	"./lb.js": 238,
	"./lo": 239,
	"./lo.js": 239,
	"./lt": 240,
	"./lt.js": 240,
	"./lv": 241,
	"./lv.js": 241,
	"./me": 242,
	"./me.js": 242,
	"./mi": 243,
	"./mi.js": 243,
	"./mk": 244,
	"./mk.js": 244,
	"./ml": 245,
	"./ml.js": 245,
	"./mn": 246,
	"./mn.js": 246,
	"./mr": 247,
	"./mr.js": 247,
	"./ms": 248,
	"./ms-my": 249,
	"./ms-my.js": 249,
	"./ms.js": 248,
	"./mt": 250,
	"./mt.js": 250,
	"./my": 251,
	"./my.js": 251,
	"./nb": 252,
	"./nb.js": 252,
	"./ne": 253,
	"./ne.js": 253,
	"./nl": 254,
	"./nl-be": 255,
	"./nl-be.js": 255,
	"./nl.js": 254,
	"./nn": 256,
	"./nn.js": 256,
	"./pa-in": 257,
	"./pa-in.js": 257,
	"./pl": 258,
	"./pl.js": 258,
	"./pt": 259,
	"./pt-br": 260,
	"./pt-br.js": 260,
	"./pt.js": 259,
	"./ro": 261,
	"./ro.js": 261,
	"./ru": 262,
	"./ru.js": 262,
	"./sd": 263,
	"./sd.js": 263,
	"./se": 264,
	"./se.js": 264,
	"./si": 265,
	"./si.js": 265,
	"./sk": 266,
	"./sk.js": 266,
	"./sl": 267,
	"./sl.js": 267,
	"./sq": 268,
	"./sq.js": 268,
	"./sr": 269,
	"./sr-cyrl": 270,
	"./sr-cyrl.js": 270,
	"./sr.js": 269,
	"./ss": 271,
	"./ss.js": 271,
	"./sv": 272,
	"./sv.js": 272,
	"./sw": 273,
	"./sw.js": 273,
	"./ta": 274,
	"./ta.js": 274,
	"./te": 275,
	"./te.js": 275,
	"./tet": 276,
	"./tet.js": 276,
	"./tg": 277,
	"./tg.js": 277,
	"./th": 278,
	"./th.js": 278,
	"./tl-ph": 279,
	"./tl-ph.js": 279,
	"./tlh": 280,
	"./tlh.js": 280,
	"./tr": 281,
	"./tr.js": 281,
	"./tzl": 282,
	"./tzl.js": 282,
	"./tzm": 283,
	"./tzm-latn": 284,
	"./tzm-latn.js": 284,
	"./tzm.js": 283,
	"./ug-cn": 285,
	"./ug-cn.js": 285,
	"./uk": 286,
	"./uk.js": 286,
	"./ur": 287,
	"./ur.js": 287,
	"./uz": 288,
	"./uz-latn": 289,
	"./uz-latn.js": 289,
	"./uz.js": 288,
	"./vi": 290,
	"./vi.js": 290,
	"./x-pseudo": 291,
	"./x-pseudo.js": 291,
	"./yo": 292,
	"./yo.js": 292,
	"./zh-cn": 293,
	"./zh-cn.js": 293,
	"./zh-hk": 294,
	"./zh-hk.js": 294,
	"./zh-tw": 295,
	"./zh-tw.js": 295
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 418;

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_ecotickets_service_ecotickets_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, ecoticketsService, cargando) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.ecoticketsService = ecoticketsService;
        this.cargando = cargando;
        this.initializeApp();
        var usuario = JSON.parse(localStorage.getItem("usuarioSesion"));
        if (usuario) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        }
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Estadísticas', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
        ];
        this.pagesCerrarSesion = [{ title: 'Cerrar Sesión', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] }];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.cerrarSesion = function (page) {
        var _this = this;
        var loader = this.cargando.create({
            content: 'Cerrando Sesión...',
        });
        loader.present().then(function () {
            _this.ecoticketsService.logoutUser().subscribe(function (data) {
                var respuesta = JSON.parse(data._body);
                if (respuesta.cerrasSesion) {
                    localStorage.setItem('usuarioSesion', JSON.stringify(null));
                    _this.nav.setRoot(page.component);
                }
                loader.dismiss();
            }, function (error) {
                console.error(error);
                loader.dismiss();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button menuClose ion-item *ngFor="let p of pagesCerrarSesion" (click)="cerrarSesion(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_ecotickets_service_ecotickets_service__["a" /* EcoticketsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListPageModule = (function () {
    function ListPageModule() {
    }
    ListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list__["a" /* ListPage */]),
            ],
            exports: []
        })
    ], ListPageModule);
    return ListPageModule;
}());

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            exports: []
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leer_qr_leer_qr__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ecotickets_service_ecotickets_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, navParams, ecoticketsService, cargando) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ecoticketsService = ecoticketsService;
        this.cargando = cargando;
        var usuarioSesion = JSON.parse(localStorage.getItem("usuarioSesion"));
        if (usuarioSesion) {
            this.usuario = usuarioSesion;
        }
        else {
            this.usuario = navParams.get('usuario');
        }
        var loader = this.cargando.create({
            content: 'Cargando Eventos...',
        });
        loader.present().then(function () {
            _this.ecoticketsService.getEventos(_this.usuario.id).subscribe(function (data) {
                var eventos = JSON.parse(data._body);
                if (eventos) {
                    _this.ListaEventos = [];
                    eventos.ListaEventos.eventos.forEach(function (element) {
                        _this.ListaEventos.push({
                            id: element.id,
                            Nombre_Evento: element.Nombre_Evento,
                            Lugar_Evento: element.Lugar_Evento,
                            icon: 'people',
                            Fecha_Evento: element.Fecha_Evento,
                            UrlflayerEvento: 'http://ecotickets.co/storage/FlyerDeEventos/' + element.FlyerEvento
                        });
                    });
                }
                loader.dismiss();
            }, function (error) {
                console.error(error);
                loader.dismiss();
            });
        });
    }
    HomePage.prototype.LeerQR = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__leer_qr_leer_qr__["a" /* LeerQrPage */], {
            item: item
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>      \n    <ion-title style="background-image: url(\'assets/images/favicon.png\') !important; background-repeat: no-repeat; background-position-x: 30%;\n    background-position-y: 8px; background-size: 25px;">{{usuario.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-col col-12>\n	<ion-img width="170" height="75"  style="background-color:#fff; margin-left:20%;" src="assets/images/logo.png"></ion-img>\n	 </ion-col>\n  <ion-list>\n    <button ion-item *ngFor="let item of ListaEventos" (click)="LeerQR($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>      \n      <div class="item-note" item-end>\n        {{item.Nombre_Evento}}\n      </div>\n       \n    </button>\n  </ion-list>\n\n <!-- <button ion-button secondary menuToggle>Toggle Menu</button>-->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ecotickets_service_ecotickets_service__["a" /* EcoticketsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ecotickets_service_ecotickets_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, ecoticketsService, alertCtrl, cargando) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ecoticketsService = ecoticketsService;
        this.alertCtrl = alertCtrl;
        this.cargando = cargando;
        this.users = [];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loader = this.cargando.create({
            content: 'Iniciando Sesión...',
        });
        loader.present().then(function () {
            _this.ecoticketsService.loginUser(_this.usuario, _this.password).subscribe(function (data) {
                var usuario = JSON.parse(data._body);
                if (usuario.id) {
                    localStorage.setItem('usuarioSesion', JSON.stringify(usuario));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
                        usuario: usuario
                    });
                }
                else {
                    if (!usuario.respuesta) {
                        _this.alertCtrl.create({
                            title: 'Información',
                            subTitle: 'Valide el usuario o contraseña',
                            buttons: ['Volver a intentar']
                        }).present();
                    }
                }
                loader.dismiss();
            }, function (error) {
                console.error(error);
                loader.dismiss();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], LoginPage.prototype, "nav", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n     <ion-title style="background-image: url(\'assets/images/favicon.png\') !important; background-repeat: no-repeat; background-position-x: 30%;\n    background-position-y: 8px; background-size: 25px;">\n      Iniciar Sesión\n\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n	<ion-col col-12>\n	<ion-img width="170" height="75"  style="background-color:#fff; margin-left:20%;" src="assets/images/logo.png"></ion-img>\n	 </ion-col>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label>Usuario</ion-label>\n          <ion-input [(ngModel)]="usuario" type="text" value=""></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label>Contraseña</ion-label>\n          <ion-input [(ngModel)]="password" type="password"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>        \n    <button ion-button (click)="login()">Ingresar</button>    \n  </ion-grid>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Diego\Documents\DPSoluciones\Proyectos\Ecotickets\EcoticketsAPP\trunk\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ecotickets_service_ecotickets_service__["a" /* EcoticketsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[340]);
//# sourceMappingURL=main.js.map