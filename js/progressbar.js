/*
* 显示查询进度条 progressBar 
* 2019.04.15
* by.Sunly
* 
* */


// 开始时显示进度条
function showProgress() {
    document.getElementById('mask').style.display = "block";
    document.getElementsByClassName('tab-pane fade in active')[0].getElementsByClassName('progress')[0].style.display = "block";
    move();
}

// 创建进度条
function move() {
    let progressBar = document.getElementsByClassName('tab-pane fade in active')[0].getElementsByClassName('progress-bar progress-bar-success')[0];

    let width = 0;
    intervalIdTemp = setInterval(go, 100);

    function go() {
        if (width >= 100){
            clearInterval(intervalIdTemp);
        }else if (width<=70) {
            width++;
            progressBar.style.width = width + '%';
        }else{
            width += (100-width)/30;
            progressBar.style.width = width + '%';
        }
    }
}

// 结束进度条
function finProgress(val) {
    let progressContainer = document.getElementsByClassName('tab-pane fade in active')[0].getElementsByClassName('progress')[0];
    let progressBar = document.getElementsByClassName('tab-pane fade in active')[0].getElementsByClassName('progress-bar progress-bar-success')[0];

    document.getElementById('mask').style.display = "none";

    clearInterval(intervalIdTemp);
    progressContainer.style.display = "block";
    progressBar.style.width = '100%';
    // progressBar.className='progress-bar progress-bar-waring'

    hideProgress();
    function hideProgress() {
        setTimeout(function () {
            progressContainer.style.display = 'none';
            progressBar.style.width=0;
        }, val);
    }

}