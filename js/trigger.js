/*
* 函数触发器 trigger
* 2019.3.25
* by.Sunly
*
* */


function queryDayHistogram() {
    // 'lvchi': '滤池报表一',
    // 'zks': '中控室报表一',
    // 'pac': 'PAC投加系统报表',
    // 'jccll': '进出厂流量报表一',
    // 'jccsz': '进出厂水质报表一',
    // 'kmn': 'KMnO4投加系统报表',
    // 'hxt': '活性炭投加系统报表',
    // 'jl': '加氯系统报表'
    var dayHistogramSelData = [
        '==请选择查看日报表的类型==',
        '滤池报表一',
        '中控室报表一',
        'PAC投加系统报表',
        '进出厂流量报表一',
        '进出厂水质报表一',
        'kMnO4投加系统报表',
        '活性炭投加系统报表',
        '加氯系统报表'];
    // 设定元素在页面数组中的位置
    let pageIndex = 0;
    console.log("日报表，当前在第" + pageIndex + "个页面，大表数据：" + dayHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(dayHistogramSelData, pageIndex,querytype);
}

function queryMonthHistogram() {
    // 'zks': '中控室报表二',
    // 'jccll': '进出厂流量报表二',
    // 'jccsz': '进出厂水质报表二'
    var monthHistogramSelData = [
        '==请选择查看月报表的类型==',
        '中控室报表二',
        '进出厂流量报表二',
        '进出厂水质报表二'];
    // 设定元素在页面数组中的位置
    let pageIndex = 1;
    console.log("月报表，当前在第" + pageIndex + "个页面，大表数据：" + monthHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(monthHistogramSelData, pageIndex,querytype);
}

function queryYearHistogram() {
    // 'zks': '中控室报表三',
    // 'jccll': '进出厂流量报表三',
    // 'jccsz': '进出厂水质报表三'
    var yearHistogramSelData = [
        '==请选择查看年报表的类型==',
        '中控室报表三',
        '进出厂流量报表三',
        '进出厂水质报表三'
    ];
    // 设定元素在页面数组中的位置
    let pageIndex = 2;
    console.log("年报表，当前在第" + pageIndex + "个页面，大表数据：" + yearHistogramSelData);
    let querytype = 'bar';
    createHistogramSel(yearHistogramSelData, pageIndex,querytype);
}