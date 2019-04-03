/*
* 为比较图表创建元素 com_createSel
* 2019.3.30
* by.Sunly
*
* */


// 创建子数据列表
// 参数
//  表名，数组类型
//  页面索引
function com_createHisLi(nameArr, pageIndex) {
    let mainSel = document.getElementsByClassName('comMainSel');

    for (let i = 0; i < mainSel.length; i++) {
        // 初始化列表项
        mainSel[i].innerHTML = "";
        mainSel[i].innerHTML = "<option>==请选择要查看的子数据==</option>";

        // 创建列表项，并添加索引
        for (let j = 0; j < nameArr.length; j++) {
            var opts = document.createElement('option');
            opts.setAttribute("value", j);
            opts.innerText = nameArr[j];
            mainSel[i].options.add(opts);
        }
    }
}


// 创建子数据选择框
function createComSel(nameArr, pageIndex) {
    let rowEle = document.getElementsByClassName('row-com')[pageIndex - 9];
    let divEle = document.createElement('div');
    divEle.className = "col-sm-6 form-group";
    rowEle.appendChild(divEle);

    let selectEle = document.createElement('select');
    selectEle.className = "com-selectpicker comMainSel comDayHis";
    selectEle.setAttribute("name", "tableName");
    selectEle.innerHTML = "<option>==请选择要查看的子数据==</option>";
    divEle.appendChild(selectEle);
    for (let j = 0; j < nameArr.length; j++) {
        var opts = document.createElement('option');
        opts.setAttribute("value", j);
        opts.innerText = nameArr[j];
        selectEle.options.add(opts);
    }

    let delBtnEle = document.createElement("button");
    delBtnEle.className = "btn btn-default com-del-btn";
    delBtnEle.innerText = "删除";
    divEle.appendChild(delBtnEle);

    delBtnEle.onclick = delFatherEle;
}


// 删除父节点元素
function delFatherEle() {
    let parentEle = this.parentElement;
    let gParent = parentEle.parentElement;
    gParent.removeChild(parentEle.children[0].parentElement)

}