var amigoApp = angular.module('amigoApp', [
  'ngRoute',
  'amigosControllers'  
]);

//creamos un servicio para acceder a los datos de los amigos
amigoApp.factory('amigoSrv', function () {
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
  	  },
  	  //funcion para añadir amigo nuevo
  	  add:function(amigo){
  	    lstAmigos.push(amigo);
  	  },
  	  //funcion para eliminar un amigo
  	  delete:function(id){
  	    //el 1 es para decirle el numero de elementos a eliminar
	  	  lstAmigos.splice(id,1);
	    }
  };
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
  }
]);
