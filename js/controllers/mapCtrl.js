angular.module("dengue360").controller("mapCtrl", function ($scope, $http,$filter, NgMap) {
	$scope.cidadeSelecionada = JSON.parse(window.sessionStorage.getItem('cidadeS'));
  $scope.dataFormatada = $filter('date')(new Date(),'yyyy');

  //Map config
  $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyChZmr53ae-Rp57sXbnHgKw-H9L0FGyHbw";

  $scope.coordenadas = [];

  $scope.caso = {
    categoria: "todos"
  };

  //se for todos não passa a categoria
  
  $scope.gestanteOP = [{tipo:"1° Trimestre"}, {tipo:"2° Trimestre"}, {tipo:"3º Trimestre"}, 
  {tipo:"Idade gestacional ignorada"}, {tipo:"Não"}, {tipo:"Não se aplica"}, {tipo:"Ignorado"}];

  $scope.sexoOP = [{tipo:"Masculino"},{tipo:"Feminino"},{tipo:"Ignorado"}];


  $scope.gestante = "";
  $scope.sexo = "";

  var carregarCoordenadas = function (cidade, ano) {
    $http.get("http://localhost:8080/c/coor?cidade="+cidade+"&ano="+ano)
    .success(function (dat) {
          $scope.qtdeCoor = dat.length;
          $scope.coordenadas = dat;
    });
  };


  carregarCoordenadas($scope.cidadeSelecionada.data, $scope.dataFormatada);

});