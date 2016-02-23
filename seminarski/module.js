var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.
    when('/shop', {
            templateUrl: 'item-list.html',
            controller: 'controllerList'
        })
        .when('/item/:index', {

                 templateUrl:'item-detail1.html',
                 controller: 'controllerService'

//            templateUrl: 'item-detail.html',
     //            controller: 'controllerDetail'

        })
        .otherwise({
            redirectTo: '/shop'
        });
});

app.factory('myService', ['$http', function ($http) {
    return {
        //        list: function (callback) {            
        //            $http.get ('http://localhost:8082/Seminarski/rest/proizvodi').success(callback);
        //        },
        //        
        find: function (index, callback) {
            $http.get('http://localhost:8082/Seminarski/rest/proizvodi/' + index).success(function (data) {
                /*  var key= data.filter(function(entry){
                   return entry.sifra === name;          
                  }) [0];*/
                callback(data);
            });
        }
    };

}]);