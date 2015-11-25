var amigoApp = angular.module('amigoApp', [
  'ngRoute',
  'amigosControllers'  
]);
//*****************DESDE AQUI*********************

//creamos un nuevo servicio para acceder a los datos de los amigos
amigoApp.service('amigoSrv', function () {
  //movemos el contenido del controlador que estaba en el controllers.js a esta funcion
  //controlador para el index
  var lstAmigos = [
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
  	return {
  	  //funcion para recuperar toda la lista de amigos
  	  get:function(){
  	    return lstAmigos;
  	  },
  	  //funcion para BUSCAR un amigo en concreto
  	  find:function(id){
  	    return lstAmigos[id];
  	  }
  }
});


amigoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/amigos', {
        templateUrl: 'amigos.html',
        controller: 'amigosCtrl'
      }).
      when('/amigo/:amigoId', {
        templateUrl: 'amigoEdit.html',
        controller: 'amigoEditCtrl'
      }).
      when('/nuevo', {
        templateUrl: 'amigoEdit.html',
        controller: 'amigoNewCtrl'
      }).
      otherwise({
        redirectTo: '/amigos'
      });
      
  }]);
