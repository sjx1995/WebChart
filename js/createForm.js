/*
* 打印表格 createForm
* 2019.4.11
* by.Sunly
* */


function createForm(opt) {
    console.info(opt);
    var axisData = opt.xAxis[0].data;
    var series = opt.series;
    //表头
    var tdHeaders = '<td>时间/' + opt.xAxis[0].name + '</td>';
    series.forEach(function (item) {
        //组装表头
        tdHeaders += '<td>' + item.name + '/' + opt.yAxis[0].name + '</td>';
    });
    var table = '<div class="table-responsive"><table id="dataTable" class="table ex-table table-bordered table-striped table-hover" style="text-align:center"><tbody><tr>' + tdHeaders + '</tr>';
    //数据
    var tdBodys = '';
    for (let i = 0, l = axisData.length; i < l; i++) {
        for (let j = 0; j < series.length; j++) {
            //组装表数据
            tdBodys += '<td>' + series[j].data[i] + '</td>';
        }
        table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
        tdBodys = '';
    }

    table += '</tbody></table></div><button onclick="method5(\'dataTable\')" class="btn btn-primary btn-xs p-btn">导出为Excel</button>';
    return table;
}

//打印表格
var idTmr;

function getExplorer() {
    var explorer = window.navigator.userAgent;
    //ie
    if(explorer.indexOf("MSIE") >= 0) {
        return 'ie';
    }
    //firefox
    else if(explorer.indexOf("Firefox") >= 0) {
        return 'Firefox';
    }
    //Chrome
    else if(explorer.indexOf("Chrome") >= 0) {
        return 'Chrome';
    }
    //Opera
    else if(explorer.indexOf("Opera") >= 0) {
        return 'Opera';
    }
    //Safari
    else if(explorer.indexOf("Safari") >= 0) {
        return 'Safari';
    }
}

function method5(tableid) {
    if(getExplorer() == 'ie') {
        var curTbl = document.getElementsByClassName('active')[0].getElementById(tableid);
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
        } catch(e) {
            print("Nested catch caught " + e);
        } finally {
            oWB.SaveAs(fname);
            oWB.Close(savechanges = false);
            oXL.Quit();
            oXL = null;
            idTmr = window.setInterval("Cleanup();", 1);
        }

    } else {
        tableToExcel(tableid)
    }
}

function Cleanup() {
    window.clearInterval(idTmr);
    CollectGarbage();
}
var tableToExcel = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,',
        template = '<html><head><meta charset="UTF-8"></head><body><table  border="1">{table}</table></body></html>',
        base64 = function(
            s) {
            return window.btoa(unescape(encodeURIComponent(s)))
        },
        format = function(s, c) {
            return s.replace(/{(\w+)}/g, function(m, p) {
                return c[p];
            })
        }
    return function(table, name) {
        if(!table.nodeType)
            table = document.getElementById(table)
        var ctx = {
            worksheet: name || 'Worksheet',
            table: table.innerHTML
        }
        window.location.href = uri + base64(format(template, ctx))
    }
})()