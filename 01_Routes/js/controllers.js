var amigosControllers = angular.module('amigosControllers', ['mgcrea.ngStrap']);


//controlador para el index
amigosControllers.controller('appCtrl', function($scope,$rootScope,$location){
	$scope.isActive = function (viewLocation){
		var active = (viewLocation === $location.path());
		return active;
	};
});

//controlador de la vista lista de amigos
amigosControllers.controller('amigosCtrl', ['$scope','amigoSrv',
	function($scope,amigoSrv) {
       	$scope.amigos = amigoSrv.get();
}]);

//controlador de la vista editar amigos
amigosControllers.controller('amigoEditCtrl', ['$scope','$rootScope', '$routeParams','amigoSrv',
	function($scope,$rootScope,$routeParams,amigoSrv) {
  		$scope.amigo = amigoSrv.find($routeParams.amigoId);//muestra el indice en la url
  		//**************** FUNCION DE GUARDAR*************
  		$scope.guardar=function(){
			$rootScope.amigos[$routeParams.amigoId]=$scope.amigo;
		};
		//**************** FUNCION DE ELIMINAR*************
		$scope.eliminar=function(){
			$scope.amigo = amigoSrv.delete($routeParams.amigoId);
		};
		
		$scope.modal = {
  			"title": "Title",
  			"content": "Hello Modal<br />This is a multiline message!"
		};
		
	}
]);

//controlador de la vista nuevo amigo
amigosControllers.controller('amigoNewCtrl', ['$scope','$rootScope', '$routeParams','amigoSrv',
	function($scope,$rootScope,$routeParams,$location,amigoSrv) {
		$scope.amigo={nombre:"",tlfno:""};
		$scope.guardar=function(){
			if($scope.amigo.nombre!=""){
				amigoSrv.add($scope.amigo);
			}
		};
	}
]);