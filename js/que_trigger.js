/*
* 函数触发器 trigger
* 2019.3.25
* by.Sunly
*
* 增加折线图、饼状图入口
* 2019.3.25 Sunly
* */

// 提取选择器名字
function getSelName(selName) {
    let nameArr = [];
    let selObjName = '';
    switch (selName) {
        case 'day':
            selObjName = daySelData;
            break;
        case 'month':
            selObjName = monthSelData;
            break;
        case 'year':
            selObjName = yearSelData;
            break;
        case 'dayC':
            selObjName = daySelDataConf;
            break;
        case 'monthC':
            selObjName = monthSelDataConf;
            break;
        case 'yearC':
            selObjName = yearSelDataConf;
            break;
        case 'waterPlant':
            selObjName = waterPlantNameData;
            break;
        default:
            console.log("未配置或配置错误！");
    }
    for (let name in selObjName) {
        nameArr.push(name);
    }
    return nameArr;
}

// 柱状图加载入口
function queryDayHistogram() {
    let dayHistogramSelData = getSelName('day');
    // 设定元素在页面数组中的位置
    let pageIndex = 0;
    console.log("日报表，当前在第" + pageIndex + "个页面，大表数据：" + dayHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(dayHistogramSelData, pageIndex, querytype);
}

function queryMonthHistogram() {
    let monthHistogramSelData = getSelName('month');
    // 设定元素在页面数组中的位置
    let pageIndex = 1;
    console.log("月报表，当前在第" + pageIndex + "个页面，大表数据：" + monthHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(monthHistogramSelData, pageIndex, querytype);
}

function queryYearHistogram() {
    let yearHistogramSelData = getSelName('year');
    // 设定元素在页面数组中的位置
    let pageIndex = 2;
    console.log("年报表，当前在第" + pageIndex + "个页面，大表数据：" + yearHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(yearHistogramSelData, pageIndex, querytype);
}

// 折线图加载入口
function queryDayLine() {
    let dayHistogramSelData = getSelName('day');
    // 设定元素在页面数组中的位置
    let pageIndex = 3;
    console.log("日报表，当前在第" + pageIndex + "个页面，大表数据：" + dayHistogramSelData);
    let querytype = 'line';
    createHistogramSel(dayHistogramSelData, pageIndex, querytype);
}

function queryMonthLine() {
    let monthHistogramSelData = getSelName('month');
    // 设定元素在页面数组中的位置
    let pageIndex = 4;
    console.log("月报表，当前在第" + pageIndex + "个页面，大表数据：" + monthHistogramSelData);
    let querytype = 'line';
    createHistogramSel(monthHistogramSelData, pageIndex, querytype);
}

function queryYearLine() {
    let yearHistogramSelData = getSelName('year');
    // 设定元素在页面数组中的位置
    let pageIndex = 5;
    console.log("年报表，当前在第" + pageIndex + "个页面，大表数据：" + yearHistogramSelData);
    let querytype = 'line';
    createHistogramSel(yearHistogramSelData, pageIndex, querytype);
}

// 饼状图入口
function queryDayPie() {
    let dayHistogramSelData = getSelName('day');
    // 设定元素在页面数组中的位置
    let pageIndex = 6;
    console.log("日报表，当前在第" + pageIndex + "个页面，大表数据：" + dayHistogramSelData);
    let querytype = 'pie';
    createHistogramSel(dayHistogramSelData, pageIndex, querytype);
}

function queryMonthPie() {
    let monthHistogramSelData = getSelName('month');
    // 设定元素在页面数组中的位置
    let pageIndex = 7;
    console.log("月报表，当前在第" + pageIndex + "个页面，大表数据：" + monthHistogramSelData);
    let querytype = 'pie';
    createHistogramSel(monthHistogramSelData, pageIndex, querytype);
}

function queryYearPie() {
    let yearHistogramSelData = getSelName('year');
    // 设定元素在页面数组中的位置
    let pageIndex = 8;
    console.log("年报表，当前在第" + pageIndex + "个页面，大表数据：" + yearHistogramSelData);
    let querytype = 'pie';
    createHistogramSel(yearHistogramSelData, pageIndex, querytype);
}

// 比较柱状图
function compareDayHistogram() {
    let dayHistogramSelData = getSelName('day');
    // 设定元素在页面数组中的位置
    let pageIndex = 9;
    console.log("日报表，当前在第" + pageIndex + "个页面，比较数据，大表数据：" + dayHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(dayHistogramSelData, pageIndex, querytype);
}

function compareMonthHistogram() {
    let monthHistogramSelData = getSelName('month');
    // 设定元素在页面数组中的位置
    let pageIndex = 10;
    console.log("月报表，当前在第" + pageIndex + "个页面，比较数据，大表数据：" + monthHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(monthHistogramSelData, pageIndex, querytype);
}

function compareYearHistogram() {
    let yearHistogramSelData = getSelName('year');
    // 设定元素在页面数组中的位置
    let pageIndex = 11;
    console.log("年报表，当前在第" + pageIndex + "个页面，比较数据，大表数据：" + yearHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(yearHistogramSelData, pageIndex, querytype);
}

// 比较折现图
function compareDayLine() {
    let dayHistogramSelData = getSelName('day');
    // 设定元素在页面数组中的位置
    let pageIndex = 12;
    console.log("日报表，当前在第" + pageIndex + "个页面，比较数据，大表数据：" + dayHistogramSelData);
    let querytype = 'line';
    createHistogramSel(dayHistogramSelData, pageIndex, querytype);
}

function compareMonthLine() {
    let monthHistogramSelData = getSelName('month');
    // 设定元素在页面数组中的位置
    let pageIndex = 13;
    console.log("月报表，当前在第" + pageIndex + "个页面，比较数据，大表数据：" + monthHistogramSelData);
    let querytype = 'line';
    createHistogramSel(monthHistogramSelData, pageIndex, querytype);
}

function compareYearLine() {
    let yearHistogramSelData = getSelName('year');
    // 设定元素在页面数组中的位置
    let pageIndex = 14;
    console.log("年报表，当前在第" + pageIndex + "个页面，比较数据，大表数据：" + yearHistogramSelData);
    let querytype = 'line';
    createHistogramSel(yearHistogramSelData, pageIndex, querytype);
}