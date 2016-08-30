angular.module("dengue360").controller("initCtrl", function ($scope, $http) {
	$scope.app = "Dengue360";
	$scope.countries = $scope.countries = [{"value":"Cajazeiras - PB","data":"Cajazeiras"},{"value":"Santa Helena - PB","data":"Santa Helena"},{"value":"Poço de José de Moura - PB","data":"Poço de José de Moura"},
      {"value":"São José de Piranhas - PB","data":"São José de Piranhas"},{"value":"São João do Rio do Peixe - PB","data":"São João do Rio do Peixe"},{"value":"Serra Grande - PB","data":"Serra Grande"},{"value":"Cachoeira dos Índios - PB","data":"Cachoeira dos Índios"},{"value":"Itaporanga - PB","data":"Itaporanga"},{"value":"Monte Horebe - PB","data":"Monte Horebe"},{"value":"Triunfo - PB","data":"Triunfo"},{"value":"Coremas - PB","data":"Coremas"},
      {"value":"Uiraúna - PB","data":"Uiraúna"},{"value":"Bom Jesus - PB","data":"Bom Jesus"}];

      var carregarCidades = function () {
            $http.get("viacep.com.br/ws/01001000/json/").success(function (data) {
                  $scope.countries = data;
            });
      };

      $scope.redirecionar = function (cidade) {
            $scope.cidadeSelecionada = cidade;
            window.location.href = "test.html";
      }


});