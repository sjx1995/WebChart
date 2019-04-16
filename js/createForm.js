/*
* 打印表格 createForm
* 2019.4.11
* by.Sunly
* */


// 显示表格
function createForm(opt, dataDate, dataName, pageIndexNum) {
    console.info(opt);
    if (opt.xAxis) {
        let axisData = opt.xAxis[0].data;
        let series = opt.series;
        //表头
        let tdHeaders = '<td>时间/' + opt.xAxis[0].name + '</td>';
        series.forEach(function (item) {
            //组装表头
            tdHeaders += '<td>' + item.name + '/' + opt.yAxis[0].name + '</td>';
        });
        let spanNum = series.length + 1;
        let table = '<div class="table-responsive"><table id="dataTable' + pageIndexNum + '" class="table ex-table table-bordered table-striped table-hover" style="text-align:center"><tbody><tr><td colspan="' + spanNum + '">' + waterPlantSelVal + '</td></tr><tr><td colspan="' + spanNum + '">' + dataName + '</td></tr><tr><td colspan="' + spanNum + '">' + dataDate + '</td></tr></tr><tr>' + tdHeaders + '</tr>';
        //数据
        let tdBodys = '';
        for (let i = 0, l = axisData.length; i < l; i++) {
            for (let j = 0; j < series.length; j++) {
                //组装表数据
                tdBodys += '<td>' + series[j].data[i] + '</td>';
            }
            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
            tdBodys = '';
        }

        table += '</tbody></table></div><button onclick="method5(\'dataTable\',' + pageIndexNum + ')" class="btn btn-primary btn-xs p-btn">导出为Excel</button>';
        return table;
    } else {
        let axisDataTemp = opt.series[0].data;
        let axisData = [];
        let seriesArr = [];
        for (let i = 0; i < axisDataTemp.length; i++) {
            axisData.push(axisDataTemp[i].name);
            seriesArr.push(axisDataTemp[i].value);
        }
        let series = [{data: seriesArr}];
        //表头
        let tdHeaders = '<td>时间</td>';
        tdHeaders += '<td>' + opt.series[0].name + '</td>';
        // series.forEach(function (item) {
        //     //组装表头
        //     console.log(item);
        //     tdHeaders += '<td>' + item.name+'</td>';
        // });
        let table = '<div class="table-responsive"><table id="dataTable' + pageIndexNum + '" class="table ex-table table-bordered table-striped table-hover" style="text-align:center"><tbody><tr><td colspan="2">' + waterPlantSelVal + '</td></tr><tr><td colspan="2">' + dataName + '</td></tr><tr><td colspan="2">' + dataDate + '</td></tr><tr>' + tdHeaders + '</tr>';
        //数据
        let tdBodys = '';
        for (let i = 0, l = axisData.length; i < l; i++) {
            for (let j = 0; j < series.length; j++) {
                //组装表数据
                tdBodys += '<td>' + series[j].data[i] + '</td>';
            }
            table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
            tdBodys = '';
        }

        table += '</tbody></table></div><button onclick="method5(\'dataTable\',' + pageIndexNum + ')" class="btn btn-primary btn-xs p-btn">导出为Excel</button>';
        return table;
    }

}

//打印表格
var idTmr;

function getExplorer() {
    var explorer = window.navigator.userAgent;
    //ie
    if (explorer.indexOf("MSIE") >= 0) {
        return 'ie';
    }
    //firefox
    else if (explorer.indexOf("Firefox") >= 0) {
        return 'Firefox';
    }
    //Chrome
    else if (explorer.indexOf("Chrome") >= 0) {
        return 'Chrome';
    }
    //Opera
    else if (explorer.indexOf("Opera") >= 0) {
        return 'Opera';
    }
    //Safari
    else if (explorer.indexOf("Safari") >= 0) {
        return 'Safari';
    }
}

function method5(tableid, pageIndex) {
    if (getExplorer() == 'ie') {
        tableid = tableid + pageIndex;
        var curTbl = document.getElementById(tableid);
        var oXL = new ActiveXObject("Excel.Application");
        var oWB = oXL.Workbooks.Add();
        var xlsheet = oWB.Worksheets(1);
        var sel = document.body.createTextRange();
        sel.moveToElementText(curTbl);
        sel.select();
        sel.execCommand("Copy");
        xlsheet.Paste();
        oXL.Visible = true;

        try {
            var fname = oXL.Application.GetSaveAsFilename("Excel.xls",
                "Excel Spreadsheets (*.xls), *.xls");
        } catch (e) {
            print("Nested catch caught " + e);
        } finally {
            oWB.SaveAs(fname);
            oWB.Close(savechanges = false);
            oXL.Quit();
            oXL = null;
            idTmr = window.setInterval("Cleanup();", 1);
        }

    } else {
        tableToExcel(tableid, pageIndex)
    }
}

function Cleanup() {
    window.clearInterval(idTmr);
    CollectGarbage();
}

var tableToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel;base64,',
        template = '<html><head><meta charset="UTF-8"></head><body><table  border="1">{table}</table></body></html>',
        base64 = function (s) {
            return window.btoa(unescape(encodeURIComponent(s)))
        },
        format = function (s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) {
                return c[p];
            })
        };
    return function (table, pageIndex, name) {
        console.log(table);
        console.log(pageIndex);
        if (!table.nodeType) {
            table = table + pageIndex;
            console.log(table);
            table = document.getElementById(table);
        }
        console.log(table);
        console.log(document.getElementById(table));
        var ctx = {
            worksheet: name || 'Worksheet',
            table: table.innerHTML
        };
        window.location.href = uri + base64(format(template, ctx))
    }
})()