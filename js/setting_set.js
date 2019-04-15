/*
* 保存用户默认设置 setting_set
* 2019.04.15
* By.Sunly
*
* */


// 设置cookie
function setCookie(dayStatus, monthStatus, yearStatus) {
    console.log('设置cookie');
    document.cookie = 'ip=' + serverIP;
    document.cookie = 'waterName=' + waterPlantSelVal;
    document.cookie = 'dayStatus=' + dayStatus;
    document.cookie = 'monthStatus=' + monthStatus;
    document.cookie = 'yearStatus=' + yearStatus;
}

// 清除cookie
function clearCookie() {
    console.log('清除cookie');
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
    showSetting();
}

// 读取cookie
function readCookie() {
    let cookieObj = dealCookie();
    console.log(cookieObj);

    document.getElementById('setting-ip').value = cookieObj.ip;

    showWaterPlantSel();
    let opts = document.getElementById('setting-waterPlant').childNodes;
    for (let i = 0; i < opts.length; i++) {
        opts[i].innerText === cookieObj.waterName ? opts[i].setAttribute('selected', 'selected') : null;
    }

    showDayQuery();
    showMonthQuery();
    showYearQuery();

    let days = document.getElementsByName('dayDataSel');
    let dayStatusArr = cookieObj.dayStatus.split(',');
    for (let i = 0; i < days.length; i++) {
        dayStatusArr[i] === '1' ? days[i].checked = true : null;
    }

    let months = document.getElementsByName('monthDataSel');
    let monthStatusArr = cookieObj.monthStatus.split(',');
    for (let i = 0; i < months.length; i++) {
        monthStatusArr[i] === '1' ? months[i].checked = true : null;
    }

    let years = document.getElementsByName('yearDataSel');
    let yearStatusArr = cookieObj.yearStatus.split(',');
    for (let i = 0; i < years.length; i++) {
        yearStatusArr[i] === '1' ? years[i].checked = true : null;
    }
}

//处理cookie
function dealCookie() {
    let cookieArr = document.cookie.split(/;|=/);
    let obj = {};
    for (let i = 0; i < cookieArr.length; i += 2) {
        obj[cookieArr[i].trim()] = cookieArr[i + 1];
    }
    return obj;
}