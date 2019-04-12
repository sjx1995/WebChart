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
    console.log("生成新表格中...");
    console.log(data);
    console.log("=============");
    console.log(comNameArr);
    console.log("=============");
    console.log(com_date);
    console.log("=============");
    console.log(com_unit);
    console.log("=============");
    console.log(pageIndex);
    console.log("=============");
    console.log(querytype);
    console.log("=============");
    console.log(seriesVal);
    console.log("=============");


    let unitY = minAndMax(seriesVal, com_unit);
    for (let i = 0; i < seriesVal.length; i++) {
        for (let j = 0; j < unitY.length; j++) {
            if (j === 0) {
                unitY[j].min = (unitY[j].min * 0.85).toFixed(2);
                unitY[j].max = (unitY[j].max * 1.15).toFixed(2);
            }
            seriesVal[i].unit === unitY[j].name ? seriesVal[i].yAxisIndex = j : null;
        }
    }
    console.log(unitY);
    console.log(seriesVal);


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
                dataView: {
                    show: true,
                    readOnly: true,
                    optionToContent: function (opt) {
                        return createForm(opt);
                    }
                },
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
        yAxis: unitY,
        //     {
        //     name: com_unit,
        //     min: function (data) {
        //         return (data.min * 0.85).toFixed(4);
        //     },
        //     max: function (data) {
        //         return (data.max * 1.15).toFixed(4);
        //     },
        //     splitLine: {
        //         lineStyle: {
        //             color: ['rgba(50,50,50,0.7)'],
        //             type:
        //                 'dashed'
        //         }
        //     },
        //     axisLine: {
        //         lineStyle: {
        //             color: '#6e81ff'
        //         }
        //     }
        // },
        series: seriesVal,
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        },
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

// 定制y轴坐标
function minAndMax(data, unitArr) {
    let minMaxArr = [];
    // let minNum = mininArr(data[0].data);
    // let maxNum = maxinArr(data[0].data);
    // for (let i = 1; i < data.length; i++) {
    //     let comMin = mininArr(data[i].data);
    //     let comMax = maxinArr(data[i].data);
    //     comMin < minNum ? minNum = comMin : null;
    //     comMax > maxNum ? maxNum = comMax : null;
    // }
    // maxNum = (maxNum * 1.15).toFixed(0);
    // minNum > 0 ? (minNum * 0.85).toFixed(0) : null;
    // unitArr = unique(unitArr);
    // for (let i = 0; i < unitArr.length; i++) {
    //     let unitObj = {};
    //     unitObj.name = unitArr[i];
    //     unitObj.min = minNum;
    //     unitObj.max = maxNum;
    //     // unitObj.min = function (data) {
    //     //     return (data.min * 0.85).toFixed(2);
    //     // };
    //     // unitObj.max = function (data) {
    //     //     return (data.max * 1.15).toFixed(2);
    //     // };
    //     unitObj.splitLine = {
    //         lineStyle: {
    //             color: ['rgba(50,50,50,0.7)'],
    //             type:
    //                 'dashed'
    //         }
    //     };
    //     unitObj.axisLine = {
    //         lineStyle: {
    //             color: '#6e81ff'
    //         }
    //     };
    //     unitObj.position = 'left';
    //     if (i > 0) {
    //         unitObj.position = 'right';
    //         unitObj.offset = (i - 1) * 40;
    //     }
    //     unitObj.axisLabel = {
    //         formatter: '{value}'
    //     };
    //     minMaxArr.push(unitObj);
    // }
    // console.log(minMaxArr);
    // return minMaxArr;

    for (let i = 0; i < data.length; i++) {
        let flag = false;
        for (let j = 0; j < minMaxArr.length; j++) {
            console.log(data[i].unit + '===' + minMaxArr[j].name);
            if (data[i].unit === minMaxArr[j].name) {
                flag = true;
                var temp = j;
                break;
            }
        }
        console.log(flag);
        if (!flag) {
            var obj = {};
            obj.name = data[i].unit;
            obj.max = maxinArr(data[i].data);
            obj.min = mininArr(data[i].data);
            obj.splitLine = {
                lineStyle: {
                    color: ['rgba(50,50,50,0.7)'],
                    type:
                        'dashed'
                }
            };
            obj.axisLine = {
                lineStyle: {
                    color: '#6e81ff'
                }
            };
            // opj.yAxisIndex =
            obj.position = 'left';
            if (i > 0) {
                obj.position = 'right';
                obj.offset = (i - 1) * 40;
            }
            obj.axisLabel = {
                formatter: '{value}'
            };
            minMaxArr.push(obj);
        } else {
            minMaxArr[temp].max < maxinArr(data[i].data) ? minMaxArr[temp].max = maxinArr(data[i].data) : null;
            minMaxArr[temp].min > maxinArr(data[i].data) ? minMaxArr[temp].min = mininArr(data[i].data) : null;
        }
    }
    console.log(minMaxArr);
    return minMaxArr;
}

// 弃用，由minandMax()代替
// function createYaxis(unitArr) {
//     let YaxisArr = [];
//     unitArr = unique(unitArr);
//     for (let i = 0; i < unitArr.length; i++) {
//         let unitObj = {};
//         unitObj.name = unitArr[i];
//         unitObj.min = 0;
//         unitObj.max = 100;
//         // unitObj.min = function (data) {
//         //     return (data.min * 0.85).toFixed(2);
//         // };
//         // unitObj.max = function (data) {
//         //     return (data.max * 1.15).toFixed(2);
//         // };
//         unitObj.splitLine = {
//             lineStyle: {
//                 color: ['rgba(50,50,50,0.7)'],
//                 type:
//                     'dashed'
//             }
//         };
//         unitObj.axisLine = {
//             lineStyle: {
//                 color: '#6e81ff'
//             }
//         };
//         unitObj.position = 'left';
//         if (i > 0) {
//             unitObj.position = 'right';
//             unitObj.offset = (i - 1) * 40;
//         }
//         unitObj.axisLabel = {
//             formatter: '{value}'
//         };
//         YaxisArr.push(unitObj);
//     }
//     console.log(YaxisArr);
//     return YaxisArr;
//
// }

function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

function maxinArr(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i] > max ? max = arr[i] : null;
    }
    return max;
}

function mininArr(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i] < min ? min = arr[i] : null;
    }
    return min;
}