# WebChart
A chart website 
一个基于Bootstrap和Echarts的报表展示页面

---

- ~~折线图采用随即生成的数据~~
- ~~柱状图和饼形图使用chartNum.js中的内置数据~~
- 可以根据查询条件绘制柱状图、折线图、饼状图、南丁格尔图
- 折线图和柱状图可以在一张图上选择同一时间多项数据进行比较
- 数据使用json格式与后台交互
- 在子数据选项上，删除空选项带来的错误
- 在返回的数据中，对空数据进行判断并默并隐藏

---

2019.03.22

使用[Echarts](https://echarts.baidu.com)重构

---

使用说明：
- js/serverIP.js中使用服务器ip替换`serverIP`字段
- js/serverIP.js中使用水厂名替换`waterPlantName`字段，以显示在数据表头
- js/serverIP.js中可以**注释**掉不需要的选项，**不要删除多余选项**

---

浏览器要求：Chrome/Firefox/IE 11+/Edge
