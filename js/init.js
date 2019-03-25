/*
* 初始化页面 init
* 2019.3.25
* by.Sunly
*
* */


// 初始化时间控件
function initTime(pageIndex) {
    if (pageIndex === 0) {
        createDaySel();
    } else if (pageIndex === 1) {
        createMonthSel();
    } else if (pageIndex === 2) {
        createYearSel();
    }
    console.log("时间初始化完成");
}

function createDaySel() {
    $('.day_sel').datetimepicker({
        language: 'zh-CN',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 4,
        minView: 2,
        forceParse: 1
    });
}

function createMonthSel() {
    $('.month_sel').datetimepicker({
        language: 'zh-CN',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 4,
        minView: 3,
        forceParse: 1
    });
}

function createYearSel() {
    $('.year_sel').datetimepicker({
        language: 'zh-CN',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 4,
        minView: 4,
        forceParse: 1
    });
}

// 初始化查询状态
function initQueryStatus(pageIndex) {
    let queryStatus = document.getElementsByClassName('queryStatus')[pageIndex];
    queryStatus.innerHTML = "<b style='color: orange'>请选择表和时间以查询</b>";
    document.getElementsByName('tableName')[pageIndex].innerHTML = "";
    document.getElementsByName('tableName')[pageIndex].innerHTML = "<option>请先选择表类型及时间</option>";
    document.getElementsByName('tableName')[pageIndex].disabled = true;
}