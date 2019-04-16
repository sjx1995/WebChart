/*
* 用户配置 page_setting
* 2019.04.13
* by.Sunly
*
* */


// 入口
function showSetting() {
    window.scroll(0, 0);
    if (document.getElementById('meun1').getAttribute('aria-expanded')){
        document.getElementsByClassName('navbar-toggle')[0].click();
    }

    document.getElementById('setting-ip').value = '';

    if (isFirstLog) {
        // 初始化存储对象
        daySelData = {
            '==请选择查看日报表的类型==': ''
        };

        monthSelData = {
            '==请选择查看月报表的类型==': ''
        };

        yearSelData = {
            '==请选择查看年报表的类型==': ''
        };
        isFirstLog = false;
    }

    if (document.cookie) {
        readCookie();
    } else {
        showWaterPlantSel();
        showDayQuery();
        showMonthQuery();
        showYearQuery();
    }
}

// 提交用户选项
function putSetting() {
    serverIP = document.getElementById('setting-ip').value;

    let WaterPlantSel = document.getElementById('setting-waterPlant');
    waterPlantSelVal = WaterPlantSel[WaterPlantSel.selectedIndex].value;

    let daySel = document.getElementsByName('dayDataSel');
    let dayStatus = [];
    for (let i = 0; i < daySel.length; i++) {
        if (daySel[i].checked) {
            let key = daySel[i].nextElementSibling.childNodes[0].data;
            let value = daySelDataConf[key];
            daySelData[key] = value;
            dayStatus.push(1);
        } else {
            dayStatus.push(0);
        }
    }
    console.log(daySelData);

    let monthSel = document.getElementsByName('monthDataSel');
    let monthStatus = [];
    for (let i = 0; i < monthSel.length; i++) {
        if (monthSel[i].checked) {
            let key = monthSel[i].nextElementSibling.childNodes[0].data;
            let value = monthSelDataConf[key];
            monthSelData[key] = value;
            monthStatus.push(1);
        } else {
            monthStatus.push(0);
        }
    }

    let yearSel = document.getElementsByName('yearDataSel');
    let yearStatus = [];
    for (let i = 0; i < yearSel.length; i++) {
        if (yearSel[i].checked) {
            let key = yearSel[i].nextElementSibling.childNodes[0].data;
            let value = yearSelDataConf[key];
            yearSelData[key] = value;
            yearStatus.push(1);
        } else {
            yearStatus.push(0);
        }
    }
    setCookie(dayStatus, monthStatus, yearStatus);
    console.log(daySelData);
    goDayHis();
}


// 渲染水厂选项
function showWaterPlantSel() {
    let waterPlantData = getSelName('waterPlant');

    let selEle = document.getElementById('setting-waterPlant');
    selEle.innerHTML = '';

    let opts = '';
    for (let i = 0; i < waterPlantData.length; i++) {
        opts += '<option>' + waterPlantData[i] + '</option>';
    }
    selEle.innerHTML = opts;
}

// 渲染报表查询项
function showDayQuery() {
    let daySelData = getSelName('dayC');
    let parentNode = document.getElementById('setting-day-query');
    showQuerySel(daySelData, parentNode, 'dayDataSel');
}

function showMonthQuery() {
    let daySelData = getSelName('monthC');
    let parentNode = document.getElementById('setting-month-query');
    showQuerySel(daySelData, parentNode, 'monthDataSel');
}

function showYearQuery() {
    let yearSelData = getSelName('yearC');
    let parentNode = document.getElementById('setting-year-query');
    showQuerySel(yearSelData, parentNode, 'yearDataSel');
}

function showQuerySel(selData, parentNode, nameVal) {
    let radioEle = '';
    for (let i = 0; i < selData.length; i++) {
        radioEle += '<div class="checkbox"><input class="query-checkbox" type="checkbox" id="' + nameVal + i + '" name="' + nameVal + '">' + '<label for="' + nameVal + i + '">' + selData[i] + '</label></div>';
    }
    parentNode.innerHTML = radioEle;
}


// 获取水厂名字
function getWaterPlantName() {
    return waterPlantNameData[waterPlantSelVal];
}

