/**
 * Declaro la base de datos para guardar las facturas, en mongo siempre declaro en camelCase
 * 
 */



var app = angular.module('cuentas', ['angular-meteor', 'ui.router', 'ngMaterial'])
          .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $stateProvider
            .state('egresos', {
                url: '/egresos',
                template: '<facturas-list></facturas-list>'
            })  
            .state('factura', {
                url: '/factura',
                template: "<factura-new></factura-new>"
            })  
            .state('facturaEdit', {
                url: '/factura/:facturaId',
                template: "<factura-edit></factura-edit>"
            })  
            .state('ingresos', {
                url: '/ingresos',
                template: 'aca ira ingresos'
            });  
 
            $urlRouterProvider.otherwise("/egresos");
    });
    app.directive('facturaNew', function() {
        
      return {
          restrict: 'E',
          templateUrl: 'form.html',
          controllerAs: 'ctrl',
          controller:  function($scope, $reactive){
                $reactive(this).attach($scope);
                this.titulo = 'ANEXO DE LA R.G. Nº 83'  ;  
                this.subTitulo = 'LIBRO DE EGRESOS O DE COMPRAS'  ;  
                this.newFactura = {};
                this.addFactura = function() {
                    this.newFactura.createdOn = new Date();
                    Facturas.insert(this.newFactura);
                    this.newFactura = {};
            
                };
        }
      };
    });
    
    //Directiva para ver las facturas
    app.directive('facturasList', function() {
        return {
            restrict: 'E',
            templateUrl: 'facturas-list.html',
            controllerAs: 'facturasList',
            controller: function($scope, $reactive, $mdDialog) {
                $reactive(this).attach($scope);
                
                this.titulo = 'ANEXO DE LA R.G. Nº 83'  ;  
                this.config = {
                    simbolo: 'Gs.', decimales: 2
                };
                this.helpers({
                    facturas: function() {
                        return Facturas.find({});
                    }
                });
                this.remove = function (fact)  {
                    Facturas.remove({_id: fact._id});
                };
                
                this.edit = function (fact)  {
                    Facturas.update(fact);
                };
                
                this.abrirFactuNew = function() {
                    $mdDialog.show({
                        template: '<factura-new></factura-new>',
                        clickOutsideToClose: true
                    });
                };
                
            }
        };
    });
    /**
     * Directiva para crear un formulario de facturas
     */
    app.directive('facturaEdit', function(){
        return {
            restrict: 'E',
            templateUrl: 'factEdit.html',
            //Para Acortar el nombre
            controllerAs: 'ctrl',
            controller: function($scope, $stateParams, $reactive){
                $reactive(this).attach($scope);
                this.titulo='Editar la factura';
                this.helpers({
                    factura: function(){ return Facturas.findOne({_id: $stateParams.facturaId});}
                });
                
                
            }
        };
    });
    
    
    

/**
*Funciones propias del servidor
*
*/
