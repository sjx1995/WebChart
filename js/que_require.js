/*
* 向服务请求数据 require
* 2019.3.25
* by.Sunly
*
* */

// 向服务器请求具体数据
// 参数
//  用户选择的大表，数组
//  查询时间，字符串
//  页面索引，数字
function ajaxHistogram(dataDate, tableType, pageIndex, querytype) {
    
    showProgress();

    $.ajax({
        'url': 'http://' + serverIP +'/'+ getWaterPlantName()+ '/' + tableType + "/" + dataDate,
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
                document.getElementsByName('tableName')[pageIndex].disabled = false;
            } else {
                document.getElementsByClassName('queryStatus')[pageIndex].innerHTML = "<b class='status-error'>查询出错，请联系管理员。</b><br>错误代码：" + data.code;
            }

            // 将子数据表名保存在数组中
            var nameArr = [];
            for (let nameArrKey in data.data) {
                nameArr.push(nameArrKey);
            }
            console.log("子数据表名：" + nameArr);

            // 创建子数据列表
            let mainSel = createHisLi(nameArr, pageIndex);

            // 获取饼状图类型
            let pieTypeSel = document.getElementsByName('pieType')[pageIndex - 6];
            // 获取柱状图折线图显示数字
            let showLabelSel = document.getElementsByName('showLabel')[pageIndex];

            // 子数据列表改变时，触发事件
            if (pieTypeSel) {
                pieTypeSel.onchange = paintTable;
            }
            if (showLabelSel) {
                showLabelSel.onchange = paintTable;
            }
            mainSel.onchange = paintTable;

            function paintTable() {

                // 当前索引
                let curIndex = mainSel[mainSel.selectedIndex].value;

                // 当前子数据名
                let name = nameArr[curIndex];

                // 横坐标数据
                // 时间，保存在数组中
                let date = [];
                for (let dateKey in data.data[name]) {
                    !isNaN(dateKey) ? date.push(dateKey) :
                        null;
                }
                console.log("横坐标数据：" + date);

                // 纵坐标数据
                // 数值，保存在数组中
                let tableVal = [];
                for (let valKey in data.data[name]) {
                    !isNaN(valKey) ? tableVal.push(data.data[name][valKey]) : null;
                }
                console.log("纵坐标数据：" + tableVal);

                // 单位
                // 字符串，键值名unit
                let unit = data.data[name]["unit"];
                console.log("单位：" + unit);

                //获取饼状图类型
                if (pieTypeSel) {
                    var pieType = getPieType(pieTypeSel, pageIndex);
                }

                // 获取柱状图、折线图是否显示数值
                if (showLabelSel) {
                    var isShowLabel = ShowLabel(showLabelSel, pageIndex);
                }
                console.log("isShowLabel: " + isShowLabel);

                // 若数据为空则报错，否则创建图表
                let dateisNull = false;
                let valueisNull = false;
                if (JSON.stringify(date) === '[]') {
                    dateisNull = true;
                }
                if (JSON.stringify(tableVal) === '[]') {
                    valueisNull = true;
                }
                if (dateisNull && valueisNull) {
                    document.getElementsByClassName('queryStatus')[pageIndex].innerHTML = "<b class='status-error'>数据库中无查询结果</b>";
                } else {
                    createHis(data, name, date, tableVal, unit, pageIndex, querytype, pieType, isShowLabel, dataDate);
                    console.log("创建成功第" + curIndex + "张表");
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