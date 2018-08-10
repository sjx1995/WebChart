# WebChart
A chart website 
一个基于Bootstrap和Highcharts的报表页面

---

- 折线图采用随即生成的数据
- 柱状图和饼形图使用chartNum.js中的内置数据
- 表格通过ActiveXObject控件直接读取数据库

---

问题：
- 表格生成采用document.write()方法，但是当信息流关闭后调用则会重新渲染页面，应尽量避免使用
- 数据库连接采用ActiveXObjext，只适用ie
- 直接连接数据库，会让连接信息直接暴露，应尽量避免使用
- 性能问题，数据量大太会卡死