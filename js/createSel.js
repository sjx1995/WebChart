/*
* 创建菜单选项 createSel
* 2019.3.25
* by.Sunly
*
* */


// 创建柱状图大表数据
function createHistogramSel(histogramSelData, pageIndex,querytype) {
    // 初始化查询状态
    document.getElementsByClassName('queryStatus')[pageIndex].innerHTML = "<b style='color: black'>请选择表和时间以查询</b>";
    // 初始化时间控件
    initTime(pageIndex);
    // 创建大表
    let histogramSel = document.getElementsByName('bigTable')[pageIndex];
    // 检测时间或大表，有数据改动冻结小表数据选择器
    histogramSel.onchange = function () {
        initQueryStatus(pageIndex);
    };
    document.getElementsByClassName('form_date')[pageIndex].onchange = function () {
        initQueryStatus(pageIndex);
    };
    // 初始化大表
    histogramSel.innerHTML = "";
    for (let i = 0; i < histogramSelData.length; i++) {
        let opts = document.createElement('option');
        opts.innerText = histogramSelData[i];
        histogramSel.options.add(opts);
    }
    console.log("子数据第一项为：" + histogramSel.options[0].innerText);
    // 判断大表类型，添加索引
    if (histogramSel.options[0].innerText.indexOf('日报表') >= 0) {
        histogramSel.options[0].value = "";
        histogramSel.options[1].value = "r/lvchi";
        histogramSel.options[2].value = "r/zks";
        histogramSel.options[3].value = "r/pac";
        histogramSel.options[4].value = "r/jccll";
        histogramSel.options[5].value = "r/jccsz";
        histogramSel.options[6].value = "r/kmn";
        histogramSel.options[7].value = "r/hxt";
        histogramSel.options[8].value = "r/jl";
    } else if (histogramSel.options[0].innerText.indexOf('月报表') >= 0) {
        histogramSel.options[0].value = "";
        histogramSel.options[1].value = "y/zks";
        histogramSel.options[2].value = "y/jccll";
        histogramSel.options[3].value = "y/jccsz";
    } else if (histogramSel.options[0].innerText.indexOf('年报表') >= 0) {
        histogramSel.options[0].value = "";
        histogramSel.options[1].value = "n/zks";
        histogramSel.options[2].value = "n/jccll";
        histogramSel.options[3].value = "n/jccsz";
    } else {
        document.getElementsByClassName('queryStatus')[pageIndex].innerHTML = "<b style='color: red'>读取报表类型出错</b>";
    }

    // $.parser.parse($(".selectpicker").parent());
    console.log("页面加载中...");

    // 获取并格式化时间
    let queryButton = document.getElementsByClassName('query')[pageIndex];
    queryButton.onclick = function () {
        let dataDate = document.getElementsByClassName('form_date')[pageIndex].getElementsByClassName('form-control')[0].value;
        if (dataDate.indexOf("一月") >= 0) {
            dataDate = dataDate.replace(" 一月", "-01");
        } else if (dataDate.indexOf("二月") >= 0) {
            dataDate = dataDate.replace(" 二月", "-02");
        } else if (dataDate.indexOf("三月") >= 0) {
            dataDate = dataDate.replace(" 三月", "-03");
        } else if (dataDate.indexOf("四月") >= 0) {
            dataDate = dataDate.replace(" 四月", "-04");
        } else if (dataDate.indexOf("五月") >= 0) {
            dataDate = dataDate.replace(" 五月", "-05");
        } else if (dataDate.indexOf("六月") >= 0) {
            dataDate = dataDate.replace(" 六月", "-06");
        } else if (dataDate.indexOf("七月") >= 0) {
            dataDate = dataDate.replace(" 七月", "-07");
        } else if (dataDate.indexOf("八月") >= 0) {
            dataDate = dataDate.replace(" 八月", "-08");
        } else if (dataDate.indexOf("九月") >= 0) {
            dataDate = dataDate.replace(" 九月", "-09");
        } else if (dataDate.indexOf("十月") >= 0) {
            dataDate = dataDate.replace(" 十月", "-10");
        } else if (dataDate.indexOf("十一月") >= 0) {
            dataDate = dataDate.replace(" 十一月 ", "-11");
        } else if (dataDate.indexOf("十二月") >= 0) {
            dataDate = dataDate.replace(" 十二月", "-12");
        }
        if (pageIndex === 0) {
            dataDate = dataDate.replace(" ", "-");
        }
        console.log("查询时间：" + dataDate);

        // 获取大表序列
        let tableType = histogramSel[histogramSel.selectedIndex].value;

        // 查询状态显示
        let queryStatus = document.getElementsByClassName('queryStatus')[pageIndex];
        queryStatus.innerHTML = "<b style='color: orange'>子数据读取中...</b>";
        document.getElementsByName('tableName')[pageIndex].innerHTML = "";
        document.getElementsByName('tableName')[pageIndex].innerHTML = "<option>查询中...</option>";
        document.getElementsByName('tableName')[pageIndex].disabled = true;

        // 向服务器请求子数据
        // 判断减少无效请求
        if (dataDate && tableType) {
            ajaxHistogram(dataDate, tableType, pageIndex,querytype);
        } else {
            document.getElementsByClassName('queryStatus')[pageIndex].innerHTML = "<b style='color: red'>查询条件不足</b>";
        }
    };
}


// 创建子数据列表
// 参数
//  表名，数组类型
//  页面索引
function createHisLi(nameArr, pageIndex) {
    let mainSel = document.getElementsByName('tableName')[pageIndex];

    // 初始化列表项
    mainSel.innerHTML = "";
    mainSel.innerHTML = "<option>==请选择要查看的子数据==</option>";

    // 创建列表项，并添加索引
    for (let i = 0; i < nameArr.length; i++) {
        var opts = document.createElement('option');
        opts.setAttribute("value", i);
        opts.innerText = nameArr[i];
        mainSel.options.add(opts);
    }

    return mainSel;
}