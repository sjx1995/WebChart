/*
* 初始化页面 init
* 2019.3.25
* by.Sunly
*
* */


// 开始
window.onload = function () {
    isFirstLog = true;
    showSetting();
};

// 初始化时间控件
function initTime(pageIndex) {
    if (pageIndex === 0 || pageIndex === 3 || pageIndex === 6 || pageIndex === 9 || pageIndex === 12) {
        createDaySel();
    } else if (pageIndex === 1 || pageIndex === 4 || pageIndex === 7 || pageIndex === 10 || pageIndex === 13) {
        createMonthSel();
    } else if (pageIndex === 2 || pageIndex === 5 || pageIndex === 8 || pageIndex === 11 || pageIndex === 14) {
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
    queryStatus.innerHTML = "<b class='status-query'>请选择表和时间以查询</b>";

    let tableEle = document.getElementsByName('tableName')[pageIndex];
    if (tableEle) {
        tableEle.innerHTML = "";
        tableEle.innerHTML = "<option>请先选择表类型及时间</option>";
        tableEle.disabled = true;
    }
}

// 跳转第一页
function goDayHis() {
    document.getElementsByClassName('dropdown')[0].className='dropdown active';
    document.getElementsByClassName('active setting-li')[0].className='setting-li';
    document.getElementById('tabBar1').className='tab-pane fade in active';
    document.getElementById('setting').className='tab-pane fade';
    queryDayHistogram();
}