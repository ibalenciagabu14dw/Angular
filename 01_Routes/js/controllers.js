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

//controlador de la vista lista de amigos
amigosControllers.controller('amigosCtrl', ['$scope','$rootScope', 
  //**************AÑADIMOS EL SERVICIO A LA FUNCION***********
	function($scope,$rootScope,amigoSrv) {
    	//*****AÑADIMOS LA SIGUIENTE LINEA*******
    	$scope.amigos = amigoSrv.get();
		//$scope.amigos=$rootScope.amigos;
}]);
amigosControllers.controller('amigoEditCtrl', ['$scope','$rootScope', '$routeParams',
  //************AÑADIMOS amigoSrv a la funcion
  function($scope,$rootScope,$routeParams,amigoSrv) {
  	/*for(i=0;i<$rootScope.amigos.length;i++){
  		if ($rootScope.amigos[i].nombre == $routeParams.amigoId) {
  			$scope.amigo=$rootScope.amigos[i];
  		}
  	}*/
  		//*********************CAMBIAMOS EL SCOPE DE AMIGO PARA BUSCAR POR EL METODO FIND CREADO EN EL SERVICIO
  		//$scope.amigo = $rootScope.amigos[$routeParams.amigoId];//muestra el indice en la url
  		$scope.amigo = amigoSrv.find($routeParams.amigoId);//muestra el indice en la url
  }]);

//controlador de la vista nuevo amigo
amigosControllers.controller('amigoNewCtrl', ['$scope','$rootScope', '$routeParams',
	function($scope,$rootScope,$routeParams) {
		$scope.amigo={nombre:"",tlfno:""};
		$scope.guardar=function(){
			if($scope.amigo.nombre!=""){
			$rootScope.amigos.push($scope.amigo);
			}
		}
}]);