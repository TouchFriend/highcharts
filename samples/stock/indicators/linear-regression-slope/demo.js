$.getJSON('https://www.highcharts.com/samples/data/aapl-ohlc.json', function (data) {

    Highcharts.setOptions({
        yAxis: {
            lineWidth: 2,
            labels: {
                x: -2
            }
        }
    });

    Highcharts.stockChart('container', {
        yAxis: [{
            title: {
                text: 'OHLC'
            },
            height: '60%',
            resize: {
                enabled: true
            }
        }, {
            title: {
                text: 'Linear Regression Slope'
            },
            top: '65%',
            height: '35%',
            offset: 0
        }],
        rangeSelector: {
            selected: 2
        },
        title: {
            text: 'AAPL Stock Price'
        },
        legend: {
            enabled: true
        },
        plotOptions: {
            series: {
                showInLegend: true
            }
        },

        series: [{
            type: 'ohlc',
            data: data,
            id: 'base'
        }, {
            type: 'linearRegressionSlope',
            name: 'Linear Regression Slope: 5 points period',
            linkedTo: 'base',
            yAxis: 1,
            zIndex: -1,
            params: {
                period: 5
            }
        }, {
            type: 'linearRegressionSlope',
            name: 'Linear Regression Slope: 20 points period',
            linkedTo: 'base',
            yAxis: 1,
            zIndex: -1,
            params: {
                period: 20
            }
        }],

        tooltip: {
            shared: true,
            split: false
        }
    });
});
