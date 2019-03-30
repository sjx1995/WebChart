/*
* 函数触发器 trigger
* 2019.3.25
* by.Sunly
*
* 增加折线图、饼状图入口
* 2019.3.25 Sunly
* */


/*
* 日报表
* 'lvchi': '滤池报表一',
* 'zks': '中控室报表一',
* 'pac': 'PAC投加系统报表',
* 'jccll': '进出厂流量报表一'
* 'jccsz': '进出厂水质报表一'
* 'kmn': 'KMnO4投加系统报表
* 'hxt': '活性炭投加系统报表',
* 'jl': '加氯系统报表'
* */
let daySelData = [
    '==请选择查看日报表的类型==',
    '中控室报表一',
    '滤池报表一',
    'PAC投加系统报表',
    '进出厂流量报表一',
    '进出厂水质报表一',
    'kMnO4投加系统报表',
    '活性炭投加系统报表',
    '加氯系统报表'
];

/*
* 月报表
* 'zks': '中控室报表二',
* 'jccll': '进出厂流量报表二',
* 'jccsz': '进出厂水质报表二'
*/
let monthSelData = [
    '==请选择查看月报表的类型==',
    '中控室报表二',
    '进出厂流量报表二',
    '进出厂水质报表二'
];

/*
* 年报表
* 'zks': '中控室报表三',
* 'jccll': '进出厂流量报表三',
* 'jccsz': '进出厂水质报表三'
* */
let yearSelData = [
    '==请选择查看年报表的类型==',
    '中控室报表三',
    '进出厂流量报表三',
    '进出厂水质报表三'
];

// 柱状图加载入口
function queryDayHistogram() {
    let dayHistogramSelData = daySelData;
    // 设定元素在页面数组中的位置
    let pageIndex = 0;
    console.log("日报表，当前在第" + pageIndex + "个页面，大表数据：" + dayHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(dayHistogramSelData, pageIndex, querytype);
}

function queryMonthHistogram() {
    let monthHistogramSelData = monthSelData;
    // 设定元素在页面数组中的位置
    let pageIndex = 1;
    console.log("月报表，当前在第" + pageIndex + "个页面，大表数据：" + monthHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(monthHistogramSelData, pageIndex, querytype);
}

function queryYearHistogram() {
    let yearHistogramSelData = yearSelData;
    // 设定元素在页面数组中的位置
    let pageIndex = 2;
    console.log("年报表，当前在第" + pageIndex + "个页面，大表数据：" + yearHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(yearHistogramSelData, pageIndex, querytype);
}

// 折线图加载入口
function queryDayLine() {
    let dayHistogramSelData = daySelData;
    // 设定元素在页面数组中的位置
    let pageIndex = 3;
    console.log("日报表，当前在第" + pageIndex + "个页面，大表数据：" + dayHistogramSelData);
    let querytype = 'line';
    createHistogramSel(dayHistogramSelData, pageIndex, querytype);
}

function queryMonthLine() {
    let monthHistogramSelData = monthSelData;
    // 设定元素在页面数组中的位置
    let pageIndex = 4;
    console.log("月报表，当前在第" + pageIndex + "个页面，大表数据：" + monthHistogramSelData);
    let querytype = 'line';
    createHistogramSel(monthHistogramSelData, pageIndex, querytype);
}

function queryYearLine() {
    let yearHistogramSelData = yearSelData;
    // 设定元素在页面数组中的位置
    let pageIndex = 5;
    console.log("年报表，当前在第" + pageIndex + "个页面，大表数据：" + yearHistogramSelData);
    let querytype = 'line';
    createHistogramSel(yearHistogramSelData, pageIndex, querytype);
}

// 饼状图入口
function queryDayPie() {
    let dayHistogramSelData = daySelData;
    // 设定元素在页面数组中的位置
    let pageIndex = 6;
    console.log("日报表，当前在第" + pageIndex + "个页面，大表数据：" + dayHistogramSelData);
    let querytype = 'pie';
    createHistogramSel(dayHistogramSelData, pageIndex, querytype);
}

function queryMonthPie() {
    let monthHistogramSelData = monthSelData;
    // 设定元素在页面数组中的位置
    let pageIndex = 7;
    console.log("月报表，当前在第" + pageIndex + "个页面，大表数据：" + monthHistogramSelData);
    let querytype = 'pie';
    createHistogramSel(monthHistogramSelData, pageIndex, querytype);
}

function queryYearPie() {
    let yearHistogramSelData = yearSelData;
    // 设定元素在页面数组中的位置
    let pageIndex = 8;
    console.log("年报表，当前在第" + pageIndex + "个页面，大表数据：" + yearHistogramSelData);
    let querytype = 'pie';
    createHistogramSel(yearHistogramSelData, pageIndex, querytype);
}

// 比较柱状图
function compareDayHistogram() {
    let dayHistogramSelData = daySelData;
    // 设定元素在页面数组中的位置
    let pageIndex = 9;
    console.log("日报表，当前在第" + pageIndex + "个页面，比较数据，大表数据：" + dayHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(dayHistogramSelData, pageIndex, querytype);
}

function compareMonthHistogram() {
    let monthHistogramSelData = monthSelData;
    // 设定元素在页面数组中的位置
    let pageIndex = 10;
    console.log("月报表，当前在第" + pageIndex + "个页面，比较数据，大表数据：" + monthHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(monthHistogramSelData, pageIndex, querytype);
}

function compareYearHistogram() {
    let yearHistogramSelData = yearSelData;
    // 设定元素在页面数组中的位置
    let pageIndex = 11;
    console.log("年报表，当前在第" + pageIndex + "个页面，比较数据，大表数据：" + yearHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(yearHistogramSelData, pageIndex, querytype);
}