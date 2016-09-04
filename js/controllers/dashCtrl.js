angular.module("dengue360").controller("dashCtrl", function ($scope, $http, $rootScope,$filter, NgMap) {
	$scope.cidadeSelecionada = JSON.parse(window.sessionStorage.getItem('cidadeS'));
  $scope.dataFormatada = $filter('date')(new Date(),'yyyy');

  //Map config
  $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyChZmr53ae-Rp57sXbnHgKw-H9L0FGyHbw";

  $scope.coordenadas = [];


  var carregarCoordenadas = function (cidade, ano) {
    $http.get("http://localhost:8080/c/coor?cidade="+cidade+"&ano="+ano)
    .success(function (dat) {
          $scope.coordenadas = dat;
    });
  };

	var carregarInfos = function (cidade, ano) {
    $http.get("http://localhost:8080/c/info?cidade="+cidade+"&ano="+ano)
    .success(function (dat) {
          $scope.infos = dat;
    });
  };


  carregarInfos($scope.cidadeSelecionada.data, $scope.dataFormatada);
  carregarCoordenadas($scope.cidadeSelecionada.data, $scope.dataFormatada);
});