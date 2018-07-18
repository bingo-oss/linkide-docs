## 程序包

IDE中支持创建4种类型的程序包工程，如下图：

![](assets/10_programmodel.png)

* BUI工程：基于 web 技术构建移动轻应用
* 小程序工程：基于 weex 框架构建移动轻应用
* MVue工程：基于Vue.js 框架构建 PC web应用
* JMMS工程：基于动态语言(java)和脚本(js,sql)进行开发标准的 `Restfull API`

### 创建程序包

* 程序包名称：通常使用中文或者英文，不带符号，部署程序包的时候会显示出来
* 程序包编码：
	* BUI 和 小程序工程 ：要求格式 `com.xx.xx`
	* MVue 和 JMMS工程 ：要求格式 `todoservice` 不带标点
* 选择模版：每种类型程序包将会提供多种模版

![](assets/11_createprogram.png)

程序包的详细信息会记录在 `*.linkspace`中。