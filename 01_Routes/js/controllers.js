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
//amigosControllers.controller('amigosCtrl', ['$scope','$rootScope','amigoSrv',
//********* BORRAMOS EL rootScope y añadimos amigosrv como parametro*******
//amigosControllers.controller('amigosCtrl', ['$scope','$rootScope',
amigosControllers.controller('amigosCtrl', ['$scope','amigoSrv',
  //**************AÑADIMOS EL SERVICIO A LA FUNCION y borramos el $rootScope***********
	//function($scope,$rootScope,amigoSrv) {
	function($scope,amigoSrv) {
    	//*****AÑADIMOS LA SIGUIENTE LINEA*******
    	$scope.amigos = amigoSrv.get();
		//$scope.amigos=$rootScope.amigos;
}]);

//**********AÑADIMOS amigoSrv como parametro de la funcion*********************
amigosControllers.controller('amigoEditCtrl', ['$scope','$rootScope', '$routeParams','amigoSrv',
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
  	
  	//*********************AÑADIMOS LA FUNCION DE GUARDAR********************
  	$scope.guardar=function(){
		$rootScope.amigos[$routeParams.amigoId]=$scope.amigo;
		
	}
	//******************AÑADIMOS LA FUNCION DE ELIMINAR*************
	$scope.eliminar=function(){
		$scope.amigo = amigoSrv.delete($routeParams.amigoId);
	}
}]);

//controlador de la vista nuevo amigo
amigosControllers.controller('amigoNewCtrl', ['$scope','$rootScope', '$routeParams','amigoSrv',
	function($scope,$rootScope,$routeParams,$location,amigoSrv) {
		$scope.amigo={nombre:"",tlfno:""};
		$scope.guardar=function(){
			if($scope.amigo.nombre!=""){
				//*********CAMBIAMOS ESTA LINEA POR LA SIGUIENTE PARA AÑADIR NUEVO AMIGO
				//$rootScope.amigos.push($scope.amigo);
				amigoSrv.add($scope.amigo);
			}
		}
}]);