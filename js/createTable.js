/*
* 创建图表 createTable
* 2019.3.25
* by.Sunly
*
* 判断图表类型进行修改
* 2019.3.25 Sunly
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
function createHis(data, name, date, tableValue, unit, pageIndex, querytype, pieType) {
    var myChart = echarts.init(document.getElementsByClassName('Histogram')[pageIndex], 'walden');
    var tableSubtext = document.getElementsByTagName("h3")[pageIndex].innerText;

    var option = null;

    // 根据页面索引判断单位
    let xUnit = null;
    if (pageIndex === 0 || pageIndex === 3 || pageIndex === 6) {
        xUnit = "时";
    } else if (pageIndex === 1 || pageIndex === 4 || pageIndex === 7) {
        xUnit = "天";
    } else if (pageIndex === 2 || pageIndex === 5 || pageIndex === 8) {
        xUnit = "月";
    }

    // 柱状图、折线图默认样式
    if (querytype === 'bar' || querytype === 'line') {
        option = {
            title: {
                text: name,
                subtext: tableSubtext,
                x: 'center'
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
                name: unit,
                min: function (data) {
                    return data.min - data.min * 0.15;
                },
                max: function (data) {
                    return data.max + data.max * 0.15;
                }
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
    } else if (querytype === 'pie') {
        // 设定数据
        let pieDataArr = [];
        let pieDateArr = [];
        for (let i = 0; i < date.length; i++) {
            let pieDataArrObj = {};
            pieDataArrObj.name = "第" + date[i] + xUnit;
            pieDataArrObj.value = tableValue[i];
            pieDataArr.push(pieDataArrObj);
            pieDateArr.push("第" + date[i] + xUnit);
        }

        // 设定默认显示
        let pieDataDefaultDis = {};
        for (let i = 0; i < pieDateArr.length; i++) {
            if (tableValue[i] && tableValue[i] !== 0) {
                pieDataDefaultDis[pieDateArr[i]] = true;
            } else {
                pieDataDefaultDis[pieDateArr[i]] = false;
            }
        }

        option = {
            title: {
                text: name,
                subtext: tableSubtext,
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a}<br/>{b} : {c} ({d}%)"
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data: pieDateArr,
                selected: pieDataDefaultDis
            },
            series: [
                {
                    name: name,
                    type: 'pie',
                    radius:  [30, 200],
                    center: 'center',
                    roseType: pieType,
                    data: pieDataArr,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

    }


// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


// 获取饼状图类型
function getPieType(pieTypeSel, pageIndex) {
    let pieType = null;
    if (pieTypeSel.value === 1 || pieTypeSel.value === '1') {
        pieType = 'area';
    }
    return pieType;

}