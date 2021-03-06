angular.module("dengue360").controller("dashCtrl", function ($scope, $http, $rootScope,$filter, NgMap) {
	$scope.cidadeSelecionada = JSON.parse(window.sessionStorage.getItem('cidadeS'));
  $scope.dataFormatada = $filter('date')(new Date(),'yyyy');

  //Map config
  $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyChZmr53ae-Rp57sXbnHgKw-H9L0FGyHbw";

  $scope.coordenadas = [];

  var carregarCoordenadas = function (cidade, ano) {
    $http.get("http://localhost:8080/c/coor?cidade="+cidade+"&ano="+ano)
    .success(function (dat) {
          $scope.qtdeCoor = dat.length;
          $scope.coordenadas = dat;
    });
  };

	var carregarInfos = function (cidade, ano) {
    $http.get("http://localhost:8080/c/info?cidade="+cidade+"&ano="+ano)
    .success(function (dat) {
          $scope.infos = dat;
    });
  };

var carregarInfoGraph = function (cidade, ano) {
    $http.get("http://localhost:8080/c/graph/info?cidade="+cidade+"&ano="+ano)
    .success(function (dat) {
          sessionStorage.setItem('resultInfo',JSON.stringify(dat));
    });
  };

  var carregarSexGraph = function (cidade, ano) {
    $http.get("http://localhost:8080/c/graph/sex?cidade="+cidade+"&ano="+ano)
    .success(function (dat) {
          sessionStorage.setItem('resultSex',JSON.stringify(dat));
    });
  };

  var carregarFaixaGraph = function (cidade, ano) {
    $http.get("http://localhost:8080/c/graph/faixa?cidade="+cidade+"&ano="+ano)
    .success(function (dat) {
          sessionStorage.setItem('resultFaixa',JSON.stringify(dat));
    });
  };

  var carregarGravidezGraph = function (cidade, ano) {
    $http.get("http://localhost:8080/c/graph/gravidez?cidade="+cidade+"&ano="+ano)
    .success(function (dat) {
          sessionStorage.setItem('resultGravidez',JSON.stringify(dat));
    });
  };
  

  carregarInfos($scope.cidadeSelecionada.data, $scope.dataFormatada);
  carregarCoordenadas($scope.cidadeSelecionada.data, $scope.dataFormatada);
  carregarInfoGraph($scope.cidadeSelecionada.data, $scope.dataFormatada);
  carregarSexGraph($scope.cidadeSelecionada.data, $scope.dataFormatada);
  carregarFaixaGraph($scope.cidadeSelecionada.data, $scope.dataFormatada);
  carregarGravidezGraph($scope.cidadeSelecionada.data, $scope.dataFormatada);
});