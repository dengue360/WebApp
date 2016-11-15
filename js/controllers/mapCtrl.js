angular.module("dengue360").controller("mapCtrl", function ($scope, $http,$filter, NgMap) {
	$scope.cidadeSelecionada = JSON.parse(window.sessionStorage.getItem('cidadeS'));
  $scope.dataFormatada = $filter('date')(new Date(),'yyyy');

  //Map config
  $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyChZmr53ae-Rp57sXbnHgKw-H9L0FGyHbw";

  $scope.coordenadas = [];  

  $scope.coordenadasMap = null; 
 

  $scope.caso = {
    categoria: "todos"
  };

  //se for todos não passa a categoria
  
  $scope.gestanteOP = [{tipo:"1° Trimestre"}, {tipo:"2° Trimestre"}, {tipo:"3º Trimestre"}, 
  {tipo:"Idade gestacional ignorada"}, {tipo:"Não"}, {tipo:"Não se aplica"}, {tipo:"Ignorado"}];

  $scope.sexoOP = [{tipo:"Masculino"},{tipo:"Feminino"},{tipo:"Ignorado"}];

  $scope.faixaOP = [{tipo:"De 0 a 12 anos", init:0, end:12},{tipo:"De 13 a 24 anos", init:13, end:24},
  {tipo:"De 25 a 36 anos", init:25, end:36},{tipo:"De 37 a 48 anos", init:37, end:48},
  {tipo:"De 49 a 60 anos", init:49, end:60},{tipo:"Acima de 60 anos", init:61, end:100}];

  $scope.faixa = "";
  $scope.gestante = "";
  $scope.sexo = "";
  $scope.dtInicio= "";
  $scope.dtFim= "";

  

  var carregarCoordenadas = function (cidade, ano) {
    $http.get("http://localhost:8080/c/coor?cidade="+cidade+"&ano="+ano)
    .success(function (dat) {
          $scope.qtdeCoor = dat.length;
          $scope.coordenadas = dat;
          sessionStorage.setItem('coorMap',JSON.stringify(dat));
    });
  };

  var verificarCoorMap = function (coor) {
    if ($scope.coordenadasMap == null) {
      $scope.coordenadasMap = coor;
    }
  };

  var clearMapFilter = function () {
    $scope.coordenadasMap = null;
  }

  $scope.filtrar = function () {
    var filterValues = {cidade:$scope.cidadeSelecionada.data,
                        ano:$scope.dataFormatada,
                        dtInicio: $scope.dtInicio,
                        dtFim: $scope.dtFim,
                        categoria:$scope.caso.categoria,
                        gestante:$scope.gestante.tipo, 
                        sexo:$scope.sexo.tipo, 
                        faixaInit:$scope.faixa.init,
                        faixaEnd:$scope.faixa.end};
    $http.get("http://localhost:8080/c/coor/filter?cidade="+filterValues.cidade
      +"&ano="+filterValues.ano
      +"&categoria="+filterValues.categoria
      +"&dtInicio="+filterValues.dtInicio
      +"&dtFim="+filterValues.dtFim
      +"&gestante="+filterValues.gestante
      +"&faixaInit="+filterValues.faixaInit
      +"&faixaEnd="+filterValues.faixaEnd
      +"&sexo="+filterValues.sexo)
    .success(function (dat) {
          $scope.coordenadasMap = dat;
    });
    //$scope.coordenadasMap = [{"pos":["-7.212970899999999","-38.584512"]},
    //{"pos":["-7.215025199999999","-38.5853211"]}];
    
    console.log(filterValues);
  }

  carregarCoordenadas($scope.cidadeSelecionada.data, $scope.dataFormatada);
  verificarCoorMap(JSON.parse(sessionStorage.getItem('coorMap')));
});