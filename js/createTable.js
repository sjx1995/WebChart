/*
* 创建图表 createTable
* 2019.3.25
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
//  页面索引
function createHis(data, name, date, tableValue, unit, pageIndex,querytype) {
    var myChart = echarts.init(document.getElementsByClassName('Histogram')[pageIndex]);

    // 根据页面索引判断单位
    let xUnit = null;
    if (pageIndex === 0) {
        xUnit = "时间/小时";
    } else if (pageIndex === 1) {
        xUnit = "时间/天";
    } else if (pageIndex === 2) {
        xUnit = "时间/月";
    }
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: name
        },
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#000000'
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
        legend: {
            data: ['单位']
        },
        xAxis: {
            name: xUnit,
            data: date
        },
        yAxis: {
            name: unit
        },
        series: [
            {
                name: name,
                type: querytype,
                data: tableValue,
                // 平均值
                // markLine: {
                //     data: [
                //         {type: 'average', name: '平均值'}
                //     ]
                // },
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                },
            }
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        },
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}