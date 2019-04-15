/*
* 获取服务器ip和水厂名 serverIP
* 2019.3.28
* by.Sunly
* */


// 无需修改
// 若果需要添加，请使用以下格式：
// 'key': 'value'

var daySelDataConf = {
    '滤池报表一': 'r/lvchi',
    '中控室报表一': 'r/zks',
    'PAC投加系统报表': 'r/pac',
    '进出厂流量报表一': 'r/jccll',
    '进出厂水质报表一': 'r/jccsz',
    'KMnO4投加系统报表': 'r/kmn',
    '活性炭投加系统报表': 'r/hxt',
    '加氯系统报表': 'r/jl'
};

var monthSelDataConf = {
    '中控室报表二': 'y/zks',
    '进出厂流量报表二': 'y/ccll',
    '进出厂水质报表二': 'y/jccsz'
};

var yearSelDataConf = {
    '中控室报表三': 'n/zks',
    '进出厂流量报表三': 'n/jccll',
    '进出厂水质报表三': 'n/jccsz'
};

var waterPlantNameData = {
    '请选择水厂': '',
    '渭南北水厂': 'wnbsc'
}