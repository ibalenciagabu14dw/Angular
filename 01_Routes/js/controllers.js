var amigosControllers = angular.module('amigosControllers', []);



//controlador para el index
//**********MODIFICAMOS LA LINEA DE amigosControllers.controller()
//amigosControllers.controller('appCtrl', [ '$scope','$rootScope','$location', function($scope,$rootScope,$location){
amigosControllers.controller('appCtrl', function($scope,$rootScope,$location){
/*********************MOVEMOS EL CONTENIDO DEL CONTROLADOR AL NUEVO SERVICIO DE app.js*******************
	$rootScope.amigos = [
	{
		nombre:"juan",
		tlfno:"123456789"
	},
	{
		nombre:"pedro",
		tlfno:"123456789"
	},	
	{
		nombre:"luis",
		tlfno:"123456789"
	}
	];
	$scope.isActive = function(viewLocation){
		return viewLocation === $location.path();
	}*/
//***************************************************
	
	//************AÑADIMOS ESTAS LINEAS
	$scope.isActive = function (viewLocation){
		var active = (viewLocation === $location.path());
		return active;
	};
});

//controlador para la lista de amigos
amigosControllers.controller('amigosCtrl', ['$scope','$rootScope', 
  //**************AÑADIMOS EL SERVICIO A LA FUNCION***********
	function($scope,$rootScope,amigoSrv) {
    	//*****AÑADIMOS LA SIGUIENTE LINEA*******
    	$scope.amigos = amigoSrv.get();
		//$scope.amigos=$rootScope.amigos;
}]);
amigosControllers.controller('amigoEditCtrl', ['$scope','$rootScope', '$routeParams',
  function($scope,$rootScope,$routeParams) {
  	/*for(i=0;i<$rootScope.amigos.length;i++){
  		if ($rootScope.amigos[i].nombre == $routeParams.amigoId) {
  			$scope.amigo=$rootScope.amigos[i];
  		}
  	}*/
  		$scope.amigo = $rootScope.amigos[$routeParams.amigoId];//muestra el indice en la url
  }]);

//controlador para nuevo amigo
amigosControllers.controller('amigoNewCtrl', ['$scope','$rootScope', '$routeParams',
	function($scope,$rootScope,$routeParams) {
		$scope.amigo={nombre:"",tlfno:""};
		$scope.guardar=function(){
			if($scope.amigo.nombre!=""){
			$rootScope.amigos.push($scope.amigo);
			}
		}
}]);