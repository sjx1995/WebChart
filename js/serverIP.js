/*
* 获取服务器ip和水厂名 serverIP
* 2019.3.28
* by.Sunly
* */


function getServerIP() {
    // 格式 'ip地址:端口' ，使用引号将字符串括起来
    let serverIP = '192.168.0.127:5000';
    return serverIP;
}

function getWaterPlantName() {
    let waterPlantName = 'XX水厂';
    return waterPlantName;
}

// 不需要的选项可以注释
// **** 不要删除 ****
var daySelData = {
    '==请选择查看日报表的类型==': '',
    '滤池报表一': 'r/lvchi',
    '中控室报表一': 'r/zks',
    'PAC投加系统报表': 'r/pac',
    '进出厂流量报表一': 'r/jccll',
    '进出厂水质报表一': 'r/jccsz',
    'KMnO4投加系统报表': 'r/kmn',
    '活性炭投加系统报表': 'r/hxt',
    '加氯系统报表': 'r/jl'
};

var monthSelData = {
    '==请选择查看月报表的类型==': '',
    '中控室报表二': 'y/zks',
    '进出厂流量报表二': 'y/ccll',
    '进出厂水质报表二': 'y/jccsz'
};

var yearSelData = {
    '==请选择查看年报表的类型==': '',
    '中控室报表三': 'n/zks',
    '进出厂流量报表三': 'n/jccll',
    '进出厂水质报表三': 'n/jccsz'
};