angular.module("dengue360").controller("dashCtrl", function ($scope, $http, $rootScope,$filter) {
	$scope.cidadeSelecionada = JSON.parse(window.sessionStorage.getItem('cidadeS'));
  $scope.dataFormatada = $filter('date')(new Date(),'yyyy');

	var carregarInfos = function (cidade, ano) {
    $http.get("http://localhost:8080/c/info?cidade="+cidade+"&ano="+ano)
    .success(function (dat) {
          $scope.infos = dat;
    });
  };

  carregarInfos($scope.cidadeSelecionada.data, $scope.dataFormatada);
});