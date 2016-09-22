$(function () {

    $(document).ready(function () {
      var sexRes = JSON.parse(sessionStorage.getItem('resultSex'));
        // Build the chart
        $('#container2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Resumo do número de casos notificados de Dengue quanto ao Sexo'
            },
            subtitle: {
                text: 'Clique nas opções da legenda para filtrar os resultados.'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b> do total'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Quantidade de Casos',
                colorByPoint: true,
                data: [{
                    name: 'Masculino (' + sexRes.qtdeMasc + ')' ,
                    y: sexRes.qtdeMasc, 
                    sliced: true,
                    selected: true
                }, {
                    name: 'Feminino (' + sexRes.qtdeFem + ')',
                    y: sexRes.qtdeFem                   
                }, {
                    name: 'Ignorado (' +sexRes.qtdeIg+')',
                    y: sexRes.qtdeIg
                }]
            }]
        });
    });
});