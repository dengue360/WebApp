$(function () {
    // Create the chart
    var graphGravidez = JSON.parse(sessionStorage.getItem('resultGravidez'));
    var gravida = graphGravidez.primeiroTriQtde + graphGravidez.segundoTriQtde + 
    graphGravidez.terceiroTriQtde + graphGravidez.idadeIgnQtde;
    $('#container4').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Resumo do número de casos notificados de Dengue envolvendo grávidas'
        },
        subtitle: {
            text: 'Clique nas parte para especificar os resultados.'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> casos<br/>'
        },
        series: [{
            name: 'Número',
            colorByPoint: true,
            data: [{
                name: 'Grávidas',
                y: gravida,
                drilldown: 'Gravidas'
            }, {
                name: 'Não Grávidas',
                y: graphGravidez.notQtde,
                drilldown: null
            }, {
                name: 'Não se Aplica',
                y: graphGravidez.notAplQtde,
                drilldown: null
            }, {
                name: 'Ignorado',
                y: graphGravidez.ignQtde,
                drilldown: null
            }]
        }],
        drilldown: {
            series: [{
                name: 'Grávidas',
                id: 'Gravidas',
                data: [
                    ['1º Trimestre', graphGravidez.primeiroTriQtde],
                    ['2º Trimestre', graphGravidez.segundoTriQtde],
                    ['3º Trimestre', graphGravidez.terceiroTriQtde],
                    ['Idade Gestacional Ignorada', graphGravidez.idadeIgnQtde]
                ]
            }]
        }//drill
    });
});