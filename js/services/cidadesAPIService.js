angular.module('dengue360').service('propriedadesCompartilhadas', function () {
    var cidadeSelecionada = 'cidade';

    return {
        getCidade: function () {
            return cidadeSelecionada;
        },
        setCidade: function(value) {
            cidadeSelecionada = value;
        }
    };
});