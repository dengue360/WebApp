$(function () {
    // Create the chart
    var graphFaixa = JSON.parse(sessionStorage.getItem('resultFaixa'));
    $('#container3').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Resumo do número de casos notificados de Dengue quanto a Faixa Etária'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Quantidade de Casos'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> casos<br/>'
        },

        series: [{
            name: 'Faixa Etária',
            colorByPoint: true,
            data: [{
                name: 'De 0 a 12 Anos',
                y: graphFaixa.de0a12,
                drilldown: null
            }, {
                name: 'De 13 a 24 Anos',
                y: graphFaixa.de13a24,
                drilldown: null
            }, {
                name: 'De 25 a 36 Anos',
                y: graphFaixa.de25a36,
                drilldown: null
            }, {
                name: 'De 37 a 48 Anos',
                y: graphFaixa.de37a48,
                drilldown: null
            }, {
                name: 'De 49 a 60 Anos',
                y: graphFaixa.de49a60,
                drilldown: null
            }, {
                name: 'Acima de 60',
                y: graphFaixa.acimaDe60,
                drilldown: null
            }]
        }]
    });
});