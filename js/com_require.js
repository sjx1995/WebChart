/*
* 向服务请求比较数据 com_require
* 2019.3.30
* by.Sunly
*
* */

// 向服务器请求具体数据
// 参数
//  用户选择的大表，数组
//  查询时间，字符串
//  页面索引，数字
function com_ajaxHistogram(dataDate, tableType, pageIndex, querytype) {
    showProgress(2000);
    // 初始化图表显示区域
    var self = document.getElementsByClassName('Histogram')[pageIndex];
    var parent = self.parentElement;
    parent.removeChild(self);
    let hisDivEle = document.createElement('div');
    hisDivEle.className = "Histogram";
    parent.appendChild(hisDivEle);

    // let serverIP = getServerIP();
    // console.log("通信ip：" + serverIP);

    $.ajax({
        'url': 'http://' + serverIP + '/' + getWaterPlantName() + '/' + tableType + "/" + dataDate,
        'data': {},
        'success': function (data) {
            finProgress(2000);
            // 把tableType格式化
            tableType = tableType.slice(2);

            // 获取数据
            var data = data[tableType];
            console.log(data);

            // 显示查询状态
            if (data.code === 'success') {
                document.getElementsByClassName('queryStatus')[pageIndex].innerHTML = "<b class='status-success' '>子数据查询成功</b>";
            } else {
                document.getElementsByClassName('queryStatus')[pageIndex].innerHTML = "<b class='status-error'>查询出错，请联系管理员。</b><br>错误代码：" + data.code;
            }

            // 将子数据表名保存在数组中
            var nameArr = [];
            for (let nameArrKey in data.data) {
                nameArr.push(nameArrKey);
            }
            console.log("子数据表名：" + nameArr);

            // 初始化比较项
            let rowChild = document.getElementsByClassName('row-com')[pageIndex - 9].children;
            const rowChildLength = rowChild.length;
            for (let i = 0; i < rowChildLength; i++) {
                document.getElementsByClassName('row-com')[pageIndex - 9].removeChild(rowChild[0]);
            }
            createComSel(nameArr, pageIndex);
            createComSel(nameArr, pageIndex);

            // 创建子数据列表
            com_createHisLi(nameArr, pageIndex);

            initAddBtn(nameArr, pageIndex);

            // 为生成图表注册点击事件
            let com_draw = document.getElementsByClassName('com-draw')[pageIndex - 9];
            com_draw.onclick = drawComTable;

            function drawComTable() {
                let com_mainSel = document.getElementsByClassName('tab-pane fade active in')[0].getElementsByClassName('comMainSel');

                // 初始化数据选项
                // 如果选项没有选择，则删除
                for (let i = 0; i < com_mainSel.length; i++) {
                    if (com_mainSel[i].selectedIndex === 0) {
                        let self = com_mainSel[i];
                        let parent = self.parentElement;
                        let gParent = parent.parentElement;
                        gParent.removeChild(parent);
                        i--;
                    }
                }

                // 遍历每一个子数据项 {
                //     获取当前子数据项的值
                //     生成一个对象，传入绘制表格的函数
                // }

                let seriesVal = [];
                let comNameArr = [];
                let unitArr = [];

                for (let i = 0; i < com_mainSel.length; i++) {
                    console.log("当前是" + i + "个子元素");

                    var com_curIndex = document.getElementsByClassName('tab-pane fade active in')[0].getElementsByClassName('comDayHis')[i].value;

                    // 当前子数据名
                    var com_name = nameArr[com_curIndex];
                    comNameArr.push(com_name);
                    console.log("当前子数据名:" + com_name);

                    // 横坐标数据
                    // 时间，保存在数组中
                    var com_date = [];
                    for (let dateKey in data.data[com_name]) {
                        !isNaN(dateKey) ? com_date.push(dateKey) : null;
                    }
                    console.log("横坐标数据：" + com_date);

                    // 纵坐标数据
                    // 数值，保存在数组中
                    var com_tableVal = [];
                    for (let valKey in data.data[com_name]) {
                        !isNaN(valKey) ? com_tableVal.push(data.data[com_name][valKey]) : null;
                    }
                    console.log("纵坐标数据：" + com_tableVal);

                    // 如果结果为空，则跳出本轮循坏
                    let dateisNull = false;
                    let valueisNull = false;
                    if (JSON.stringify(com_date) === '[]') {
                        dateisNull = true;
                    }
                    if (JSON.stringify(com_tableVal) === '[]') {
                        valueisNull = true;
                    }
                    if (dateisNull && valueisNull) {
                        continue;
                    }

                    // 单位
                    // 字符串，键值名unit
                    let com_unit = data.data[com_name]["unit"];
                    unitArr.push(com_unit);
                    console.log("单位：" + com_unit);

                    console.log("=====================循环完毕=====================");

                    // 检测是否需要显示数字
                    let showLabelSel = document.getElementsByName('showLabel')[pageIndex - 3];
                    showLabelSel.onchange = drawComTable;
                    if (showLabelSel) {
                        var isShowLabel = ShowLabel(showLabelSel, pageIndex);
                    }

                    // 判断图表类型
                    let isComHis = 'bar';
                    if (pageIndex >= 12 && pageIndex <= 14) {
                        isComHis = 'line';
                    }

                    // 创建数值对象
                    let obj = {};
                    obj.name = com_name;
                    obj.type = isComHis;
                    obj.data = com_tableVal;
                    obj.unit = com_unit;
                    obj.label = {normal: {show: isShowLabel, position: 'top'}};
                    obj.smooth = true;

                    seriesVal.push(obj);
                }
                console.log(seriesVal);

                if (seriesVal.length === 0) {
                    document.getElementsByClassName('queryStatus')[pageIndex].innerHTML = "<b class='status-error'>数据库中无查询结果</b>";
                } else {
                    // 初始化图表显示区域
                    let self = document.getElementsByClassName('Histogram')[pageIndex];
                    let parent = self.parentElement;
                    parent.removeChild(self);
                    let hisDivEle = document.createElement('div');
                    hisDivEle.className = "Histogram";
                    parent.appendChild(hisDivEle);

                    com_createHis(data, comNameArr, com_date, com_tableVal, unitArr, pageIndex, querytype, seriesVal, dataDate);
                }

            }
        },
        'error': function () {
            // 错误提示
            finProgress(0);
            document.getElementsByClassName('queryStatus')[pageIndex].innerHTML = "<b class='status-error'>子数据读取失败</b>";
        },
        'type': 'get',
        'dataType': 'json'
    })
}

