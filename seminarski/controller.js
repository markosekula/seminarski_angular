
app.controller ('controllerList', ["$scope", "$http", "$location", function($scope, $http,$location){
    $http.get ('http://localhost:8082/Seminarski/rest/proizvodi/ispis').success (function(data){
        
            $scope.items= data;
    });    
    
    
    $scope.detailKey = function (ix) {
        
        $location.path ("/item/"+ix);
    }
    
}]);


app.controller('controllerDetail',["$scope","$http", "$location", "$routeParams",function ($scope,$http ,$location, $routeParams){
        $http.get('http://localhost:8082/Seminarski/rest/proizvodi/'+$routeParams.index).success (function(data){
                        
            $scope.byId=data;           
                                   
            });
    
             console.log ("http")
                
             $scope.cancel= function () {
                 
                 $location.path ("/shop");
             }
               
}]);

app.controller('controllerService', ["$scope","$routeParams", "myService", "$location", function($scope, $routeParams, myService,$location){
    
    myService.find($routeParams.index, function(data){
        $scope.byId = data;
        
    });
    
    $scope.back= function () {
                 
                 $location.path ("/shop");
             }
    
}]);