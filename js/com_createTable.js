/*
* 为比较图表创建图表 com_createTable
* 2019.3.30
* by.Sunly
*
* */


// 创建表
// 参数：
//  数据（json格式）
//  表名（字符串）
//  时间（数组）
//  纵坐标值（数组）
//  单位（字符串）
//  页面索引（数字）
//  子数据名（字符串）
//  饼状图类型（字符串||null）
//  柱状图、线形图是否显示数值（布尔）
function com_createHis(data, comNameArr, com_date, com_tableVal, com_unit, pageIndex, querytype, seriesVal, dataDate) {
//     console.log("生成新表格中...");
//     console.log("=============");
//     console.log(com_name);
//     console.log("=============");
//     console.log(com_date);
//     console.log("=============");
//     console.log(com_unit);
//     console.log("=============");
//     console.log(pageIndex);
//     console.log("=============");
//     console.log(querytype);
//     console.log("=============");
//     console.log(seriesVal);
//     console.log("=============");
    var myChart = echarts.init(document.getElementsByClassName('Histogram')[pageIndex], 'walden');
    var tableSubtext = document.getElementsByTagName("h3")[pageIndex].innerText;

    var option = null;

// 根据页面索引判断单位
    let xUnit = null;
    if (pageIndex === 0 || pageIndex === 3 || pageIndex === 6 || pageIndex === 9 || pageIndex === 12) {
        xUnit = "时";
    } else if (pageIndex === 1 || pageIndex === 4 || pageIndex === 7 || pageIndex === 10 || pageIndex === 13) {
        xUnit = "天";
    } else if (pageIndex === 2 || pageIndex === 5 || pageIndex === 8 || pageIndex === 11 || pageIndex === 14) {
        xUnit = "月";
    }

// 柱状图、折线图默认样式
    option = {
        title: {
            text: getWaterPlantName() + " " + tableSubtext,
            subtext: dataDate + " " + comNameArr,
            x: 'center',
            textStyle: {
                color: '#87e6fa'
            },
            subtextStyle: {
                color: '#87e6fa'
            }
        },
        legend: {
            x: 'center',
            y: 'bottom',
            data: comNameArr
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    type: 'solid',
                    color: '#fff'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        xAxis: {
            name: xUnit,
            data: com_date,
            // axisLine: {
            //     onZero: false,
            //     lineStyle: {
            //         color: ['#f00']
            //     }
            // },
            splitLine: {
                lineStyle: {
                    color: ['rgba(50,50,50,0.7)'],
                    type: 'dashed'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#6e81ff'
                }
            }
        },
        yAxis: {
            name: com_unit,
            min: function (data) {
                return (data.min * 0.85).toFixed(4);
            },
            max: function (data) {
                return (data.max * 1.15).toFixed(4);
            },
            splitLine: {
                lineStyle: {
                    color: ['rgba(50,50,50,0.7)'],
                    type:
                        'dashed'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#6e81ff'
                }
            }
        },
        series: seriesVal,
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        },
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}