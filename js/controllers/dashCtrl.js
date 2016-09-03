angular.module("dengue360").controller("dashCtrl", function ($scope, $http, $rootScope) {
	$scope.cidadeSelecionada = JSON.parse(window.sessionStorage.getItem('cidadeS'));
	$scope.countries = [];
	var carregarCidades = function () {
            $http.get("http://localhost:8080/l/cidades").success(function (data) {
                  $scope.countries = data;
            });
    };

    $scope.redirecionar = function (cidade) {
            window.sessionStorage.setItem('cidadeS',JSON.stringify(cidade));
            window.location.href = "views/dashboard.html";
      }

      carregarCidades();
});