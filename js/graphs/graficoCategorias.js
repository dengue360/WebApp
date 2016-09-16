$(function () {
   $(document).ready(function () {
  	var graphResult = JSON.parse(sessionStorage.getItem('resultInfo'));
	$('#container').highcharts({
		title: {
			text: 'Resumo do número de casos de Dengue quanto a sua Classificação',
			x: -20 //center
		},
		 subtitle: {
            text: 'Clique nas opções da legenda para filtrar os resultados.',
            x: -20 //center
        },
		xAxis: {
			categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
				'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec']
		},
		yAxis: {
			title: {
				text: 'Numeros de casos'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0
		},
		series: [{
			name: 'Notificados',
			data: graphResult.notificados
		}, {
			name: 'Confirmados',
			data: graphResult.confirmados
		}, {
			name: 'Graves',
			data: graphResult.graves
		}, {
			name: 'Obitos',
			data: graphResult.obitos
		}]
	});
	});
});