/*
* 为比较图表初始化元素 com_init
* 2019.3.30
* by.Sunly
*
* */

// 为添加按钮注册点击事件
function initAddBtn(nameArr,pageIndex) {
    let comAddBtn = document.getElementsByClassName('com-add');

    for (let i = 0; i < comAddBtn.length; i++) {
        comAddBtn[i].onclick = function () {
            createComSel(nameArr,pageIndex);
        }
    }
}