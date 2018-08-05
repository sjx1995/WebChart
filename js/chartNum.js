/*折线图*/
Highcharts.setOptions({
    global: {
        useUTC: false
    }
});
function activeLastPointToolip(chart) {
    var points = chart.series[0].points;
    chart.tooltip.refresh(points[points.length -1]);
}
var chart = Highcharts.chart('tableContainerLine', {
    chart: {
        type: 'spline',
        marginRight: 10,
        events: {
            load: function () {
                var series = this.series[0],
                    chart = this;
                activeLastPointToolip(chart);
                setInterval(function () {
                    var x = (new Date()).getTime(), // 当前时间
                        y = Math.random();          // 随机值
                    series.addPoint([x, y], true, true);
                    activeLastPointToolip(chart);
                }, 1000);
            }
        }
    },
    title: {
        text: '折线数据（间隔1秒）'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: null
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: '随机数据',
        data: (function () {
            // 生成随机值
            var data = [],
                time = (new Date()).getTime(),
                i;
            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
});

/*柱状图1*/
var chart = Highcharts.chart('tableContainerBar1',{
    chart: {
        type: 'column'
    },
    title: {
        text: '月平均数据'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: '净水量 (吨)'
        }
    },
    tooltip: {
// head + 每个 point + footer 拼接成完整的 table
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            borderWidth: 0
        }
    },
    series: [{
        name: '净水池#1',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }, {
        name: '净水池#2',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
    }, {
        name: '净水池#3',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    }, {
        name: '净水池#4',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    }]
});

/*柱状图2*/
var chart = Highcharts.chart('tableContainerBar2', {
    chart: {
        type: 'column'
    },
    title: {
        text: '净水池净水比例'
    },
    xAxis: {
        categories: ['第一季度', '第二季度', '第三季度', '第四季度']
    },
    yAxis: {
        min: 0,
        title: {
            text: '净水量/(吨)'
        },
        stackLabels: {  // 堆叠数据标签
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                '总量: ' + this.point.stackTotal;
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                style: {
                    // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
                    textOutline: '1px 1px black'
                }
            }
        }
    },
    series: [{
        name: '净水池#1',
        data: [9.7, 3.3, 4.5, 7]
    }, {
        name: '净水池#2',
        data: [4.8, 8.2, 5.2, 10.7]
    }, {
        name: '净水池#3',
        data: [3.2, 7.9, 4.2, 10.6]
    }]
});

/*饼状图*/
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });
var data = [{
    'id': '0.0',
    'parent': '',
    'name': '2017年'
}, {
    'id': '1.1',
    'parent': '0.0',
    'name': '第一季度'
}, {
    'id': '1.2',
    'parent': '0.0',
    'name': '第二季度'
}, {
    'id': '1.3',
    'parent': '0.0',
    'name': '第三季度'
}, {
    'id': '1.4',
    'parent': '0.0',
    'name': '第四季度'
},
    /* 一公司&第一季度*/
    {
        'id': '2.1',
        'parent': '1.1',
        'name': '一公司'
    },

    {
        'id': '3.1',
        'parent': '2.1',
        'name': '净水池#1',
        'value': 10.6
    }, {
        'id': '3.2',
        'parent': '2.1',
        'name': '净水池#2',
        'value': 14.2
    }, {
        'id': '3.3',
        'parent': '2.1',
        'name': '净水池#3',
        'value': 9.6
    },
    /*二公司&第一季度*/
    {
        'id': '2.2',
        'parent': '1.1',
        'name': '二公司',
    }, {
        'id': '3.4',
        'parent': '2.2',
        'name': '净水池#1',
        'value': 23.5
    }, {
        'id': '3.5',
        'parent': '2.2',
        'name': '净水池#2',
        'value': 25.3
    },
    /*三公司&第一季度*/
    {
        'id': '2.3',
        'parent': '1.1',
        'name': '三公司',
    },
    {
        'id': '3.6',
        'parent': '2.3',
        'name': '净水池#1',
        'value': 17.5
    },
    {
        'id': '3.7',
        'parent': '2.3',
        'name': '净水池#2',
        'value': 19.6
    },
    {
        'id': '3.8',
        'parent': '2.3',
        'name': '净水池#3',
        'value': 5.2
    },
    /*一公司&第二季度*/
    {
        'id': '2.4',
        'parent': '1.2',
        'name': '一公司',
    },
    {
        'id': '3.9',
        'parent': '2.4',
        'name': '净水池#1',
        'value': 5.3
    },
    {
        'id': '3.10',
        'parent': '2.4',
        'name': '净水池#2',
        'value': 25.1
    },
    {
        'id': '3.11',
        'parent': '2.4',
        'name': '净水池',
        'value': 6.2
    },
    /*二公司&第二季度*/
    {
        'id': '2.5',
        'parent': '1.2',
        'name': '二公司',
    },
    {
        'id': '3.12',
        'parent': '2.5',
        'name': '净水池#1',
        'value': 8.2
    },
    {
        'id': '3.13',
        'parent': '2.5',
        'name': '净水池#2',
        'value': 12.3
    },
    {
        'id': '3.14',
        'parent': '2.5',
        'name': '净水池#3',
        'value': 16.3
    },
    /*三公司&第二季度*/
    {
        'id': '2.6',
        'parent': '1.2',
        'name': '三公司',
    },
    {
        'id': '3.15',
        'parent': '2.6',
        'name': '净水池#1',
        'value': 8.2
    },
    {
        'id': '3.16',
        'parent': '2.6',
        'name': '净水池#2',
        'value': 14.6
    },
    /*一公司&第三季度*/
    {
        'id': '2.7',
        'parent': '1.3',
        'name': '一公司',
    },
    {
        'id': '3.17',
        'parent': '2.7',
        'name': '净水池#1',
        'value': 5.6
    },
    {
        'id': '3.18',
        'parent': '2.7',
        'name': '净水池#2',
        'value': 17.2
    },
    {
        'id': '3.19',
        'parent': '2.7',
        'name': '净水池#3',
        'value': 9.6
    },
    /*二公司&第三季度*/
    {
        'id': '2.8',
        'parent': '1.3',
        'name': '二公司',
    },
    {
        'id': '3.20',
        'parent': '2.8',
        'name': '净水池#1',
        'value': 6.3
    },
    {
        'id': '3.21',
        'parent': '2.8',
        'name': '净水池#2',
        'value': 4.2
    },
    {
        'id': '3.22',
        'parent': '2.8',
        'name': '净水池#3',
        'value': 4.1
    },
    /*一公司&第四季度*/
    {
        'id': '2.9',
        'parent': '1.4',
        'name': '一公司',
    },
    {
        'id': '3.23',
        'parent': '2.9',
        'name': '净水池#1',
        'value': 15.6
    },
    {
        'id': '3.24',
        'parent': '2.9',
        'name': '净水池#2',
        'value': 5.2
    },
    {
        'id': '3.25',
        'parent': '2.9',
        'name': '净水池#3',
        'value': 16.3
    },
    /*二公司&第四季度*/
    {
        'id': '2.10',
        'parent': '1.4',
        'name': '二公司',
    },
    {
        'id': '3.26',
        'parent': '2.10',
        'name': '净水池#1',
        'value': 16.2
    },
    {
        'id': '3.27',
        'parent': '2.10',
        'name': '净水池#2',
        'value': 21.5
    },
    {
        'id': '3.28',
        'parent': '2.10',
        'name': '净水池#3',
        'value': 20.9
    },
    /*三公司&第四季度*/
    {
        'id': '2.11',
        'parent': '1.4',
        'name': '三公司',
    },
    {
        'id': '3.29',
        'parent': '2.11',
        'name': '净水池#1',
        'value': 6.1
    },
    {
        'id': '3.30',
        'parent': '2.11',
        'name': '净水池#2',
        'value': 16.3
    }];

// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, 'transparent');


Highcharts.chart('tableContainerPie', {

    chart: {
        height: '100%'
    },

    title: {
        text: '净水比例图'
    },
    subtitle: {
        text: ''
    },
    series: [{
        type: "sunburst",
        data: data,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
            /**
             * A custom formatter that returns the name only if the inner arc
             * is longer than a certain pixel size, so the shape has place for
             * the label.
             */
            formatter: function () {
                var shape = this.point.node.shapeArgs;

                var innerArcFraction = (shape.end - shape.start) / (2 * Math.PI);
                var perimeter = 2 * Math.PI * shape.innerR;

                var innerArcPixels = innerArcFraction * perimeter;

                if (innerArcPixels > 16) {
                    return this.point.name;
                }
            }
        },
        levels: [{
            level: 2,
            colorByPoint: true,
            dataLabels: {
                rotationMode: 'parallel'
            }
        },
            {
                level: 3,
                colorVariation: {
                    key: 'brightness',
                    to: -0.5
                }
            }, {
                level: 4,
                colorVariation: {
                    key: 'brightness',
                    to: 0.5
                }
            }]

    }],
    tooltip: {
        headerFormat: "",
        pointFormat: '<b>{point.name}</b>的净水量是：<b>{point.value}</b>'
    }
});