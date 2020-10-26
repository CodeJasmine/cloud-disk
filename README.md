# 网盘



# 1、项目功能介绍

![](https://cdn.nlark.com/yuque/0/2020/png/297164/1603621534475-918736e2-9cdd-466b-9ef3-2ec5b50ca949.png)# 2、环境搭建和项目创建

> HBuilderX，创建uni-app项目，默认模版即可

# 3、项目分析和全局配置

## 引入全局样式（一）

在App.vue中引入hello-uni-app脚手架项目的uni.css官方样式库，common目录在项目根路径

```css
/* 引入官方样式库 */
@import url('/common/uni.css');
```

## 引入全局样式（二）

引入通用的自定义样式库free.css、本项目的全局样式库common.css

```css
/* 引入本项目公共样式库 */
@import url('/common/common.css');
/* 引入通用free样式库 */
@import url('/common/free.css');
```

## 引入自定义图标库

iconfont官网找到项目需要的图标，一起添加到购物车，添加到项目，然后下载得到zip包，解压，将其中的icon.css放到项目中

## 配置全局导航样式和底部导航

```css
"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "uni-app",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8"
	},
	"tabBar": {
		"backgroundColor": "#FFFFFF",
		"borderStyle": "black",
		"color": "#BDBDBD",
		"selectedColor": "#009CFF",
		"list": [{
			"iconPath": "static/tabbar/index.png",
			"selectedIconPath": "static/tabbar/index-selected.png",
			"pagePath": "pages/index/index",
			"text": "首页"
		}, {
			"iconPath": "static/tabbar/list.png",
			"selectedIconPath": "static/tabbar/list-selected.png",
			"pagePath": "pages/list/list",
			"text": "传输"
		}, {
			"iconPath": "static/tabbar/my.png",
			"selectedIconPath": "static/tabbar/my-selected.png",
			"pagePath": "pages/my/my",
			"text": "我的"
		}]
	}
```

# 4、首页开发

## 自定义导航栏（一）

   取消index页面的导航配置
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603244553518-e14f44fa-2599-4d47-997e-3e67511276e4.png#align=left&display=inline&height=185&margin=%5Bobject%20Object%5D&name=image.png&originHeight=370&originWidth=886&size=38940&status=done&style=none&width=443)
components建立uni-ui目录，放入uni-status-bar状态栏组件,common目录一会使用
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603244619563-9d95de1b-4874-4777-ab74-a72eb3386fbe.png#align=left&display=inline&height=156&margin=%5Bobject%20Object%5D&name=image.png&originHeight=312&originWidth=618&size=29551&status=done&style=none&width=309)
修改index页面代码，写入自定义导航栏的代码
![1.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603244696646-60523add-a6c7-4b22-a795-6adc7459daec.png#align=left&display=inline&height=608&margin=%5Bobject%20Object%5D&name=1.png&originHeight=1396&originWidth=1588&size=286199&status=done&style=none&width=692)

## 自定义导航栏（二）

         将自定义导航栏封装成组件，使用slot插槽来传递自定义元素
         common目录建立nav-bar.vue组件
**注意：**
     封装的自定义导航，一定要用fix固定在顶部，要不然屏幕滑动，那个区域就被顶上去了。又因为用了fixed，下面内容会被挡住，所以要离顶部空出位置，44px
![2.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603244784922-0eeac766-5091-4cfc-a256-580fbd10d62a.png#align=left&display=inline&height=465&margin=%5Bobject%20Object%5D&name=2.png&originHeight=1410&originWidth=2160&size=371628&status=done&style=none&width=712)

  修改index.vue，引入组件
![3.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603244904872-423a2570-f3a3-4a04-be39-0f55235dd3a1.png#align=left&display=inline&height=592&margin=%5Bobject%20Object%5D&name=3.png&originHeight=1546&originWidth=1854&size=328677&status=done&style=none&width=710)
目前运行效果：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603244943455-0330eebf-b3de-4dd8-b802-f7e201c50a27.png#align=left&display=inline&height=854&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1708&originWidth=834&size=231795&status=done&style=none&width=417)

## 搜索组件美化

在导航栏下面加入搜索框，用style的目的是方便区分哪些是公共样式，哪些是这个文件自己写的
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603245586358-5160a476-8684-49ab-9142-a6a6cfeebfaa.png#align=left&display=inline&height=524&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1166&originWidth=1872&size=205169&status=done&style=none&width=842)
现在效果如图
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603245651981-909a7206-61a7-4b75-b9f4-f3f84345fba5.png#align=left&display=inline&height=791&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1708&originWidth=834&size=235352&status=done&style=none&width=386)

# 5、封装通用列表组件

## 通用列表组件开发（一）

先看一下首页的预期效果
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603246065304-adf9b577-56e9-4543-8093-0fca610ad966.png#align=left&display=inline&height=776&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1708&originWidth=834&size=287217&status=done&style=none&width=379)
通过对列表数据的类型、结构的分析，来封装列表组件
在common目录创建f-list.vue组件
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603246284891-b12c8fe8-6bb5-4bf5-8160-28b8c7b2b6ec.png#align=left&display=inline&height=382&margin=%5Bobject%20Object%5D&name=image.png&originHeight=764&originWidth=442&size=102693&status=done&style=none&width=221)
模版部分代码，用来封装列表
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603246301992-ebb29b13-26d0-4def-830a-e7f2a6b6b0bf.png#align=left&display=inline&height=260&margin=%5Bobject%20Object%5D&name=image.png&originHeight=520&originWidth=1574&size=263335&status=done&style=none&width=787)
script起始处定义一个数组

```javascript
const icons = {
	dir: {
		icon: 'icon-file-b-2',
		color: 'text-warning'
	},
	image: {
		icon: 'icon-file-b-6',
		color: 'text-success'
	},
	video: {
		icon: 'icon-file-b-9',
		color: 'text-primary'
	},
	text: {
		icon: 'icon-file-s-7',
		color: 'text-info'
	},
	none: {
		icon: 'icon-file-b-8',
		color: 'text-muted'
	}
};
```

js部分代码，接收props为接收的对象，index为索引，思考下这里的计算属性实现了什么功能？
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603246455669-cff5e786-4ac9-4d19-9339-8dc77fa12bc8.png#align=left&display=inline&height=336&margin=%5Bobject%20Object%5D&name=image.png&originHeight=672&originWidth=1074&size=82463&status=done&style=none&width=537)
index页面中data定义一个数组

```javascript
list: [
				{
					type: 'dir',
					name: '我的笔记',
					create_time: '2020-10-21 08:00',
					checked: false
				},
				{
					type: 'image',
					name: '风景.jpg',
					create_time: '2020-10-21 08:00',
					checked: false
				},
				{
					type: 'video',
					name: 'uniapp实战教程.mp4',
					create_time: '2020-10-21 08:00',
					checked: false
				},
				{
					type: 'text',
					name: '记事本.txt',
					create_time: '2020-10-21 08:00',
					checked: false
				},
				{
					type: 'none',
					name: '压缩包.rar',
					create_time: '2020-10-21 08:00',
					checked: false
				}
			]
```

# 6、自定义多选操作开发

## 多选操作开发

- 先在封装的flist组件中，添加点击事件，用click.stop阻止事件冒泡，另外，把未选中的改了下明显的颜色和大小

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603343345185-e3b11115-8a6f-4747-9a5f-8c0a438aabe1.png#align=left&display=inline&height=258&margin=%5Bobject%20Object%5D&name=image.png&originHeight=662&originWidth=2386&size=208937&status=done&style=none&width=929)

为它绑定方法，**用来把当前的点击事件传给父组件，并将这个item的索引和是否选中的状态传过去**
**![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603342915446-7404d17d-cb73-4314-bdaa-4e59f56b4ae4.png#align=left&display=inline&height=429&margin=%5Bobject%20Object%5D&name=image.png&originHeight=948&originWidth=1384&size=137098&status=done&style=none&width=626)**

父组件index.vue中

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603343005441-cbdcc8eb-476d-49a9-9bc4-84ec697bb47c.png#align=left&display=inline&height=101&margin=%5Bobject%20Object%5D&name=image.png&originHeight=202&originWidth=2104&size=45227&status=done&style=none&width=1052)

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603343082766-a5f4c855-5139-44bc-ab1e-1e0047e94368.png#align=left&display=inline&height=204&margin=%5Bobject%20Object%5D&name=image.png&originHeight=408&originWidth=1364&size=60128&status=done&style=none&width=682)
**运行，现在点击右侧可以切换状态**

## ![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603343468748-8a80d81e-82f1-4a37-b61b-9e665a21cfca.png#align=left&display=inline&height=645&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1650&originWidth=1994&size=778084&status=done&style=none&width=779)

现在要改进为：根据是否有元素被选中，动态切换顶部导航的样式
[![iShot2020-10-22 13.13.09.mov (110.39KB)](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)]()## 
**我们需要通过过滤数组，得到数组中已经选中的元素个数，然后根据数量来切换两个不同的顶部导航栏模版**

**我们来写两个计算属性**

- 根据数组元素是否被选中，过滤出所有元素被选中的列表结果
- 得到这个列表的长度

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603344834965-ca6a097d-c629-4d93-9862-567d6e8799f8.png#align=left&display=inline&height=262&margin=%5Bobject%20Object%5D&name=image.png&originHeight=524&originWidth=1154&size=64834&status=done&style=none&width=577)
我们给顶部自定义导航写两个模版，根据选中列表的元素个数是否为0来切换，这里充分**验证了slot的灵活性**。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603345022704-739369c6-5fb9-4a89-ad0f-bbc1fa0b94c8.png#align=left&display=inline&height=478&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1102&originWidth=1922&size=237615&status=done&style=none&width=833)
**
**有选中元素的效果**
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603345170094-6081ca80-d2de-4b2a-b5e7-fdb8a80c8094.png#align=left&display=inline&height=700&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1716&originWidth=838&size=293928&status=done&style=none&width=342)
**推送！**

------

**
**接下来，我们实现全选和取消全选操作**

对顶部导航的第二个模版改造，点击事件都是调用handleCheckAll（），但是传不同的不同的值过去，实现互为逆操作
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603345417907-ecbc74e9-7f46-489c-b835-8b561cfd2b20.png#align=left&display=inline&height=153&margin=%5Bobject%20Object%5D&name=image.png&originHeight=306&originWidth=1900&size=98174&status=done&style=none&width=950)

methods中具体方法，遍历数组，将所有元素置为入参的值
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603345505735-8a0d630c-5e89-4a3e-aa9b-cacdbf23eb2c.png#align=left&display=inline&height=174&margin=%5Bobject%20Object%5D&name=image.png&originHeight=348&originWidth=942&size=43361&status=done&style=none&width=471)
效果
[![iShot2020-10-22 13.47.35.mov (106.48KB)](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)]()**   **
**推送！**

------

## 底部操作条

我们根据选中元素个数，决定是否要弹出底部操作条

底部操作条有两种情况，请理解以下思路

- **如果只有1个元素被选中，那么就有四个选项：下载、删除、分享、重命名**
- **如果超过1个，那么就只有两个选项：下载、删除，因为只有这两个操作可以批量**



为了不写死的代码，我们定义一个计算属性，来根据checkCount的数值，得到不同的操作菜单
在index页面增加一个计算属性
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603346612422-2e111482-2093-4fe8-a042-6e4ebb6f5c1e.png#align=left&display=inline&height=646&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1454&originWidth=1080&size=271086&status=done&style=none&width=480)
然后在页面中去增加底部操作条的代码，注意：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603346918778-526f18ea-fd23-4bc3-998f-2fe393897608.png#align=left&display=inline&height=423&margin=%5Bobject%20Object%5D&name=image.png&originHeight=966&originWidth=2432&size=262984&status=done&style=none&width=1066)

**效果**
[![1.mp4 (1.27MB)](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)]()

**推送！**

------

# 7、重命名和批量删除功能

## 全局弹出层组件封装

> 我们引用下uni的popup弹出组件uni-popup和简单的过渡动画组件 uni-transition



点击这里下载

解压后这样放
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603348371930-2e1e85b4-a5ea-4c43-a17b-3ae7eac226a2.png#align=left&display=inline&height=553&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1106&originWidth=746&size=92589&status=done&style=none&width=373)

然后我们封装自己的全局弹出层组件**f-dialog.vue，和f-list.vue放一个层级**
**
布局部分
**![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603349598950-3d477583-4e14-47a8-965b-5c86289500b3.png#align=left&display=inline&height=494&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1096&originWidth=2328&size=317825&status=done&style=none&width=1050)**
**
脚本部分
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603349866505-f62b3651-8e76-4319-92ac-196a52d3c004.png#align=left&display=inline&height=551&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1362&originWidth=1598&size=210486&status=done&style=none&width=647)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603349910635-a30110e9-9069-4efd-bb22-ed22502147e1.png#align=left&display=inline&height=592&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1184&originWidth=1302&size=175898&status=done&style=none&width=651)

**然后我们就可以在需要使用的地方这样使用**
**这里在index页面需要执行删除功能的时候，弹出对话框进行确认**

- 引入

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603350037509-1122aa49-62c1-4e80-8d2f-7f0817570b6e.png#align=left&display=inline&height=284&margin=%5Bobject%20Object%5D&name=image.png&originHeight=568&originWidth=1262&size=87435&status=done&style=none&width=631)
## 

- 为底部操作条的每个item绑定处理事件，**添加红框标注代码**

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603350117730-eb47a491-ef5a-494a-99f7-2f18a9e7edf6.png#align=left&display=inline&height=395&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1022&originWidth=2460&size=275355&status=done&style=none&width=951)

- 具体处理事件，在methods中添加代码

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603350219703-733d5cfa-07ef-483c-91e3-62731f8ee162.png#align=left&display=inline&height=595&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1270&originWidth=1914&size=223577&status=done&style=none&width=897)

- 然后在页面中使用f-dialog组件

## ![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603350299499-714354e8-0c20-4902-990b-5bb8e6d84f0e.png#align=left&display=inline&height=208&margin=%5Bobject%20Object%5D&name=image.png&originHeight=416&originWidth=1492&size=73747&status=done&style=none&width=746)



------

**效果演示**
[![2.mp4 (5.36MB)](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)]()

推送！

------



## 删除和重命名功能实现

- 删除功能

**注意先要为删除操作的弹出层通过ref指定**，因为页面中还有其他如重命名的对话框出现
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603352666351-9fe80726-8f63-4b05-bc21-0f4d1020d66f.png#align=left&display=inline&height=114&margin=%5Bobject%20Object%5D&name=image.png&originHeight=228&originWidth=1184&size=44782&status=done&style=none&width=592)

然后去之前没写完的删除操作代码，补全，这里主要是使用**数组的filter过滤**，只留下没有被选中的
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603352814921-35eb2dfc-0c1e-4ca0-9d13-870f09e7e173.png#align=left&display=inline&height=344&margin=%5Bobject%20Object%5D&name=image.png&originHeight=688&originWidth=1552&size=117692&status=done&style=none&width=776)

**现在，去试试效果**，看是不是实时可以删除一个或多个了？

- 重命名功能

先在页面中增加一个重命名对话框组件，通过ref的值和删除对话框区分，并且为它中间的slot插槽（输入框）使用v-model绑定重命名的值，注意红框代码
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603352480159-371c44c5-9cdc-418f-b7b6-2db05d86d23a.png#align=left&display=inline&height=608&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1282&originWidth=1750&size=231453&status=done&style=none&width=830)
到底部操作条事件中增加“重命名”的case分支
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603353064139-7b111dba-89f4-44e9-b958-222fc3239618.png#align=left&display=inline&height=644&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1394&originWidth=1768&size=254595&status=done&style=none&width=817)

------

运行效果
[![3.mp4 (3.72MB)](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)]()

**推送！**

------



# 8、新建文件夹功能

## 弹出添加操作条

- 首先定义一个弹出操作的菜单列表，因为可以添加各种类型的文件，在data中，和list并列

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603353791480-e9d90fa4-0dd2-4913-9b08-a10874d23f49.png#align=left&display=inline&height=553&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1244&originWidth=1338&size=142134&status=done&style=none&width=595)
复制粘贴即可

```javascript
addList:[{
					icon:"icon-file-b-6",
					color:"text-success",
					name:"上传图片"
				},{
					icon:"icon-file-b-9",
					color:"text-primary",
					name:"上传视频"
				},{
					icon:"icon-file-b-8",
					color:"text-muted",
					name:"上传文件"
				},{
					icon:"icon-file-b-2",
					color:"text-warning",
					name:"新建文件夹",
				}]
```

- 然后引入基础的弹出组件uni-popup

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603353530994-cabac9a3-a431-4494-ac5e-1574614394b9.png#align=left&display=inline&height=341&margin=%5Bobject%20Object%5D&name=image.png&originHeight=682&originWidth=1686&size=126728&status=done&style=none&width=843)

- 然后在页面中使用它

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603354020784-f9bc0399-5a13-4549-8880-aca2f499f0e4.png#align=left&display=inline&height=537&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1236&originWidth=1966&size=276077&status=done&style=none&width=854)

- 在methods中添加打开操作条的方法

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603354173913-6e1dcd1c-1988-4b68-a774-d86daebe0b18.png#align=left&display=inline&height=438&margin=%5Bobject%20Object%5D&name=image.png&originHeight=908&originWidth=1352&size=128251&status=done&style=none&width=652)

- 最后给导航条右边的“+”图标绑定这个方法

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603354307198-b647f98d-1662-4016-bea5-c6bb599c243e.png#align=left&display=inline&height=255&margin=%5Bobject%20Object%5D&name=image.png&originHeight=614&originWidth=2010&size=124742&status=done&style=none&width=835)
点击导航条“+”的图标，弹出效果还不错～
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603354364921-03f76d08-f839-44fa-9084-3d48b517db93.png#align=left&display=inline&height=786&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1716&originWidth=838&size=301344&status=done&style=none&width=384)
**推送！**

------

## 新建文件夹功能实现

- 新建文件夹对话框和操作条事件绑定

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603355099141-5ce4d29f-e83d-4057-9523-00f8848e632a.png#align=left&display=inline&height=549&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1268&originWidth=2048&size=332566&status=done&style=none&width=886)
别忘了在data中增加变量
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603355140838-9f7fd504-13f7-41e5-aaa1-463a042afca8.png#align=left&display=inline&height=285&margin=%5Bobject%20Object%5D&name=image.png&originHeight=570&originWidth=1300&size=67705&status=done&style=none&width=650)
现在，去methods中添加handleAddEvent()方法，处理各种添加操作
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603355231952-90b79c3d-c01d-4d3f-8db7-320b47bc507c.png#align=left&display=inline&height=701&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1584&originWidth=1560&size=254943&status=done&style=none&width=690)

效果，注：模拟器不能输入中文的，想看中文请真机调试
[![4.mp4 (1.05MB)](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)]()[![RPReplay_Final1603355539.mov (3.16MB)](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)]()**
**推送！**

------



# 9、图片预览和视频播放功能

## 图片预览功能

- 首先我们需要给flist组件添加点击事件，通过emit回传给父组件

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603369669611-47662d38-438b-41f3-bf76-a213f25c51e8.png#align=left&display=inline&height=196&margin=%5Bobject%20Object%5D&name=image.png&originHeight=472&originWidth=2164&size=124577&status=done&style=none&width=900)

- 父组件index.vue接收到之后，调用doEvent(item)方法来处理，根据点击的item元素是什么类型文件，进行具体处理

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603369722020-aca9fe89-72f3-4300-bf2a-4fecbc1c0d4d.png#align=left&display=inline&height=251&margin=%5Bobject%20Object%5D&name=image.png&originHeight=502&originWidth=1140&size=64468&status=done&style=none&width=570)

- **对于item的类型是图片的，使用预览功能**（因为列表中可能有多个图片文件，所以要过滤出所有图片文件，可以切换查看



注意：运行之前，我们需要去修改下list的数据，让图片类型的文件具有可访问的data属性值
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603370733149-2f8fdc15-e9a6-4b5d-aefa-9d9ac5f5dd7b.png#align=left&display=inline&height=170&margin=%5Bobject%20Object%5D&name=image.png&originHeight=340&originWidth=1490&size=51812&status=done&style=none&width=745)

------

运行，查看效果

[![5.mp4 (2.16MB)](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)]()

**推送**

------

## 视频播放功能

- 先给list中的视频文件数据添加可访问的data属性，自行准备
- 新建video.vue页面
- 处理点击事件，判断如果类型为video的文件，则跳转到 video页面，**并把视频的地址和名称带过去**

**![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603371136147-cffbd980-17db-45ee-a78f-2f1df4e7560d.png#align=left&display=inline&height=482&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1102&originWidth=1632&size=163311&status=done&style=none&width=714)**

**video页面**
**![carbon (1).png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603372731812-12640b8e-ae98-4542-b5a4-89205d27c45f.png#align=left&display=inline&height=876&margin=%5Bobject%20Object%5D&name=carbon%20%281%29.png&originHeight=2066&originWidth=1668&size=341318&status=done&style=none&width=707)**

------

运行效果
[![6.mp4 (12.16MB)](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)]()

**推送！**

------



# 10、文件排序功能

## 文件排序弹框

- 先定义排序类型和默认选中索引

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603374508364-4fdf0b4b-efef-4806-ae88-eacb4f5679c3.png#align=left&display=inline&height=255&margin=%5Bobject%20Object%5D&name=image.png&originHeight=558&originWidth=1218&size=62483&status=done&style=none&width=556)

- 页面中加入排序对话框

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603374640261-65ff1caf-b03b-4f07-b5f8-ba7e2d11461c.png#align=left&display=inline&height=321&margin=%5Bobject%20Object%5D&name=image.png&originHeight=770&originWidth=1980&size=157129&status=done&style=none&width=825)

- methods中添加changeSort(index)方法，根据排序类型的索引切换不同的排序（功能等前后端联调再实现）

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603374896632-18418c00-31c2-4817-a82b-7d810af2fe2d.png#align=left&display=inline&height=145&margin=%5Bobject%20Object%5D&name=image.png&originHeight=290&originWidth=738&size=38428&status=done&style=none&width=369)

- 为导航栏的“更多”图标绑定点击事件

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603374347042-6d1cb195-5ceb-468d-b49d-62a4d8b5d6b4.png#align=left&display=inline&height=407&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1024&originWidth=1732&size=189375&status=done&style=none&width=688)

methods中的openSortDialog方法
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603374812963-30971ce3-dbf0-4c44-8f6a-1100d58b4c26.png#align=left&display=inline&height=101&margin=%5Bobject%20Object%5D&name=image.png&originHeight=202&originWidth=618&size=25487&status=done&style=none&width=309)

运行效果，点击导航栏最右边的图标，下面弹出排序对话框
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603374946968-93f129f1-fd2c-4e2c-816f-ec95ea581d3d.png#align=left&display=inline&height=704&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1716&originWidth=838&size=303824&status=done&style=none&width=344)
**
**推送**



------

# 11、下载和上传状态列表

> 就是第二个tab页



- 先到pages.json配置一下传输列表页面的顶部导航

```javascript
"path": "pages/list/list",
			"style": {
				"navigationBarTitleText": "传输列表",
				"app-plus": {
					"titleNView": {
						"buttons": [{
							"color": "#333333",
							"colorPressed": "#009CFF",
							"float": "right",
							"fontSize": "22px",
							"fontSrc": "/static/iconfont.ttf",
							"text": "\ue64a"
						}]
					}
				}
			}
```

- 接着去编写list.vue 页面， 这个页面目前就是原生实现了一下tab切换，理解上没任何难度



![carbon (2).png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603380657798-390abcae-c14c-4557-95c0-e526eaad7dc2.png#align=left&display=inline&height=866&margin=%5Bobject%20Object%5D&name=carbon%20%282%29.png&originHeight=1051&originWidth=790&size=145252&status=done&style=none&width=651)



------

运行效果

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603380718789-b0ec5ab2-2dfc-48f3-b5d3-6d0cb3533fc5.png#align=left&display=inline&height=739&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1716&originWidth=838&size=233368&status=done&style=none&width=361)

然后准备list数据，要改造一下，类似这样，加入download的数值，用来显示下载百分比，文件夹目录的数据不需要
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603400670207-a06601e9-e18c-4d0d-b737-2f179e827b58.png#align=left&display=inline&height=322&margin=%5Bobject%20Object%5D&name=image.png&originHeight=698&originWidth=1538&size=108049&status=done&style=none&width=709)

改造下f-list组件，增加右侧暂停和下方进度条插槽

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603433296439-a2d23c61-7e6e-49e2-90f7-40d0cf7f0015.png#align=left&display=inline&height=750&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1500&originWidth=2278&size=311976&status=done&style=none&width=1139)



用计算属性来区分下载中和下载完成的两种数据，引入自定义list组件
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603401052392-1f0c7271-84e0-49d7-b83d-0698c3985aa9.png#align=left&display=inline&height=502&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1310&originWidth=1354&size=182280&status=done&style=none&width=519)

完整页面内容参考
![carbon (1).png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603401511794-1e4ef706-1bfb-4b1b-91a0-44a7ea089e31.png#align=left&display=inline&height=1107&margin=%5Bobject%20Object%5D&name=carbon%20%281%29.png&originHeight=1272&originWidth=1024&size=301860&status=done&style=none&width=891)



运行效果
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603401768118-8d60b442-c446-4493-8182-78d7969f817b.png#align=left&display=inline&height=739&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1716&originWidth=838&size=305269&status=done&style=none&width=361)
**推送**

------

# 12、个人中心页

纯静态页面，可复制粘贴参考代码。右箭头图标自己找一个

```html
<template>
	<view>
		<view class="p-3 flex align-center">
			<image
				src="/static/me.jpg"
				style="width: 120rpx;height: 120rpx;"
				class="rounded-circle flex-shrink mr-3"
			></image>
			<view class="flex-1 flex flex-column text-muted font">
				<view class="flex align-end">
					<text class="font-lg text-dark mr-2">陶然然</text>
					女 江苏
				</view>
				<text class="text-ellipsis">软件工程师</text>
			</view>
		</view>
		<view class="bg-light" style="height: 20rpx;"></view>
		<view class="p-3">
			<progress class="mb-3" percent="40" active stroke-width="3" />
			<view class="flex align-center justify-between font">
				<text class="text-light-muted">总：100GB</text>
				<text class="text-warning">已用：80GB</text>
			</view>
		</view>
		<view class="bg-light" style="height: 20rpx;"></view>
		<view class="flex justify-between p-3">
			<text class="text-muted font">设置</text>
			<image src="../../static/arrow-right.png" mode="" style="width:40rpx;height: 40rpx;"></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style></style>

```

------

运行效果
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603403276227-23b6f377-0f62-467d-9f01-07cd94934aab.png#align=left&display=inline&height=680&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1716&originWidth=838&size=258479&status=done&style=none&width=332)
**推送**

------

# 13、注册登录页

新建login页面，配置pages.json
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603404014808-438451c3-7c73-40fd-8710-e9aa16aa6f70.png#align=left&display=inline&height=372&margin=%5Bobject%20Object%5D&name=image.png&originHeight=882&originWidth=1414&size=111814&status=done&style=none&width=597)

纯静态页面，可复制粘贴参考代码

```html
<template>
	<view>
		<view style="height: 44px;"></view>
		<view
			class="flex align-center justify-center font-lg text-muted"
			style="margin-top: 100rpx;margin-bottom: 80rpx;"
		>
			欢迎回来
		</view>

		<view class="px-4">
			<input
				type="text"
				v-model="form.username"
				class="uni-input bg-light rounded mb-4"
				placeholder="手机号/用户名/邮箱"
			/>
			<input
				type="text"
				v-model="form.password"
				class="uni-input bg-light rounded mb-4"
				placeholder="请输入密码"
			/>
			<input
				v-if="type === 'reg'"
				type="text"
				v-model="form.repassword"
				class="uni-input bg-light rounded mb-4"
				placeholder="请输入确认密码"
			/>

			<view
				class="bg-main text-white flex align-center justify-center font-md py-2 rounded-circle"
				hover-class="bg-main-hover"
				@click="handleClick"
			>
				{{ type === 'login' ? '登 录' : '注 册' }}
			</view>
		</view>

		<view class="flex align-center justify-center pt-5">
			<view class="text-muted mx-2 font-sm" @click="changeType">
				{{ type === 'login' ? '注册账号' : '去登录' }}
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			type: 'login',
			form: {
				username: '',
				password: '',
				repassword: ''
			}
		};
	},
	methods: {
		changeType() {
			this.type = this.type === 'login' ? 'reg' : 'login';
		},
		handleClick() {
			if (this.type === 'login') {
				uni.switchTab({
					url: '../index/index'
				});
			}
		}
	}
};
</script>

<style></style>


```

------

运行效果
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603403540743-b836397a-b26b-414d-861d-78c2addf011e.png#align=left&display=inline&height=633&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1698&originWidth=1598&size=904002&status=done&style=none&width=596)
**
**推送**



------

# 14、Egg.js基础入门

## 1. 创建项目

安装egg.js，先全局切换镜像： 

```shell
npm config set registry https://registry.npm.taobao.org

```

   使用脚手架快速生成项目

```shell
mkdir egg-example && cd egg-example
npm init egg --type=simple --registry https://registry.npm.taobao.org
npm i

```

启动项目

```shell
npm run dev
open http://localhost:7001

```

## 2. 关闭csrf，开启跨域

[

](https://study.163.com/provider/480000001892585/index.htm?share=2&shareId=480000001892585)

- 安装跨域插件

```shell
npm i egg-cors --save

```

- 配置插件，目录文件看注释

```javascript
// {app_root}/config/plugin.js
cors:{
  enable: true,
  package: 'egg-cors',
},

```

- config / config.default.js 目录下配置，在这个文件里找个空地儿粘贴就行了

```javascript
  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
    },
    // 跨域白名单
    domainWhiteList: [ 'http://localhost:3000' ],
  };
   // 允许跨域的方法
  config.cors = {
    origin: '*',
    allowMethods: 'GET, PUT, POST, DELETE, PATCH'
  };


```

## 3. 写一个简单的接口

在app的controller目录下，home.js

```javascript
"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hello world";
  }


  async list() {
    this.ctx.body = {
      msg: "ok",
      data: [
        {
          name: "微服务",
          price: 100,
        },
        {
          name: "Java",
          price: 88,
        },
        {
          name: "JavaScript",
          price: 77,
        },
      ],
    };
  }
}

module.exports = HomeController;


```

router.js配置路由，把刚才写的/list端点挂在上去

```javascript
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/list", controller.home.list);
};

```

浏览器中访问该接口，成功～
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603251230169-7e3a2b32-3290-425b-8dc3-6e841d44a37d.png#align=left&display=inline&height=536&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1166&originWidth=1826&size=110048&status=done&style=none&width=839)

现在在我们的uniapp项目首页去请求一下这个接口
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603251407243-296e69ea-4a82-4638-89ab-41deab1b1190.png#align=left&display=inline&height=239&margin=%5Bobject%20Object%5D&name=image.png&originHeight=478&originWidth=970&size=52818&status=done&style=none&width=485)
可以在控制台看到结果
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603251469704-6a2330f2-8f61-482a-95f6-77b43cdcfe67.png#align=left&display=inline&height=122&margin=%5Bobject%20Object%5D&name=image.png&originHeight=244&originWidth=1880&size=140109&status=done&style=none&width=940)

## 4.全局相关设置

- 封装api返回格式扩展

> **看注释，在app目录新建extend目录，新建context.js文件**

```javascript
// app/extend/context.js
module.exports = {
  // 成功提示
  apiSuccess(data = '', msg = 'ok', code = 200) {
    this.body = { msg, data };
    this.status = code;
  },
  // 失败提示
  apiFail(data = '', msg = 'fail', code = 400) {
    this.body = { msg, data };
    this.status = code;
  },
};

```

- 全局异常处理

> app目录新建middleware目录，然后新建error_handler.js

```javascript
module.exports = (option, app) => {
    return async function errorHandler(ctx, next) {
      try {
        await next(); 
        // 404 处理
        if(ctx.status === 404 && !ctx.body){
           ctx.body = { 
               msg:"fail",
               data:'404 错误'
           };
        }
      } catch (err) {
        // 记录一条错误日志
        app.emit('error', err, ctx);

        const status = err.status || 500;
        // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
        const error = status === 500 && app.config.env === 'prod'
          ? 'Internal Server Error'
          : err.message;

        // 从 error 对象上读出各个属性，设置到响应中
        ctx.body = { 
            msg:"fail",
            data:error
        };
        ctx.status = status;
      }
    };
  };


```

 然后到 config目录到config.default.js配置文件中，将这个错误处理到js文件放到middleware中间件配置中，如图，找对地方
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603278411211-bdeadd8a-e0a3-461f-a99b-b18bc4760566.png#align=left&display=inline&height=624&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1248&originWidth=1580&size=205222&status=done&style=none&width=790)

- sequelize数据库配置



安装并配置egg-sequelize插件（它会辅助我们将定义好到Model对象加载到app和ctx上）和mysql2模块

```shell
npm install --save egg-sequelize mysql2

```

然后在**config/plugin.js**中引入 egg-sequelize 插件

```javascript
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};


```

然后在**config/config.default.js**中加入sequelize的配置，注意**数据库链接信息的修改**

```javascript
config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: "root",
    password: 'root',
    port: 3306,
    database: 'test_egg',
    // 中国时区
    timezone: '+08:00',
    define: {
      // 取消数据表名复数
      freezeTableName: true,
      // 自动写入时间戳 created_at updated_at
      timestamps: true,
      // 字段生成软删除时间戳 deleted_at
      // paranoid: true,
      createdAt: 'created_time',
      updatedAt: 'updated_time',
      // deletedAt: 'deleted_time',
      // 所有驼峰命名格式化
      underscored: true
    }
  };

```

- 数据库迁移配置

1. sequelize 提供了[sequelize-cli](https://github.com/sequelize/cli)工具来实现[Migrations](http://docs.sequelizejs.com/manual/tutorial/migrations.html)，我们也可以在 egg 项目中引入 sequelize-cli

```shell
npm install --save-dev sequelize-cli

```

1. egg 项目中，我们希望将所有数据库 Migrations 相关的内容都放在`database`目录下，所以我们在项目根目录下新建一个`.sequelizerc`配置文件:

```javascript
'use strict';

const path = require('path');

module.exports = {
  config: path.join(__dirname, 'database/config.json'),
  'migrations-path': path.join(__dirname, 'database/migrations'),
  'seeders-path': path.join(__dirname, 'database/seeders'),
  'models-path': path.join(__dirname, 'app/model'),
};

```

1. 初始化 Migrations 配置文件和目录



根目录分别运行以下命令

```shell
npx sequelize init:config
npx sequelize init:migrations

```

运行结果如图：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603280471510-21b8a109-17a2-4cc8-9209-209c14ae1f1d.png#align=left&display=inline&height=203&margin=%5Bobject%20Object%5D&name=image.png&originHeight=406&originWidth=1846&size=82605&status=done&style=none&width=923)

1. 然后会生成`database/config.json`文件和`database/migrations`目录，我们修改一下`database/config.json`中**development**开发环境配置的内容，将其改成我们项目中使用的数据库配置：

```javascript
{
  "development": {
    "username": "root",
    "password": "root",
    "database": "test_egg",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "timezone": "+08:00"
  }
}

```

1. 创建数据库

```shell
npx sequelize db:create

```

**创建成功～**
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603280948716-942590c8-52b2-474c-890f-286616c7c5d9.png#align=left&display=inline&height=198&margin=%5Bobject%20Object%5D&name=image.png&originHeight=396&originWidth=1062&size=60308&status=done&style=none&width=531)
navicat刷新可见
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603281007246-ad576d8e-f56e-4d18-a2da-36fedeb9db72.png#align=left&display=inline&height=372&margin=%5Bobject%20Object%5D&name=image.png&originHeight=744&originWidth=564&size=360603&status=done&style=none&width=282)

1. 升级一下数据库

```shell
npx sequelize db:migrate

```

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603281067389-5496ca9c-4eb6-417a-8d4c-c3da58f9dfd3.png#align=left&display=inline&height=167&margin=%5Bobject%20Object%5D&name=image.png&originHeight=334&originWidth=1108&size=58473&status=done&style=none&width=554)

- 模型关联
  - 就是后面会用到对象之间一对一、一对多、多对多啥的才需要
- 判断是否是移动端

在扩展文件：app/extend/context.js，顺着前面内容加入，注意每组配置之间的逗号

```javascript
ismobile(ctx){
    let userAgent = this.request.header['user-agent'].toLowerCase();
    let pat_phone = /ipad|iphone os|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/;
    return pat_phone.test(userAgent);
}

```

# ![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603281241969-52b76412-3fa6-425b-b282-d9e90f6a7219.png#align=left&display=inline&height=389&margin=%5Bobject%20Object%5D&name=image.png&originHeight=906&originWidth=1958&size=172219&status=done&style=none&width=841)

## ![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603251444593-71e55e43-27b7-4cb8-9849-927ccc3372a8.png#align=left&display=inline&height=165&margin=%5Bobject%20Object%5D&name=image.png&originHeight=330&originWidth=2630&size=110904&status=done&style=none&width=1315)

## 

# 15、后端API开发和部署

## 1. 用户相关API

### 数据表设计

  创建数据迁移表，user为表名

```javascript
npx sequelize migration:generate --name=user

```

然后就会在database的migrations下面生成数据表的迁移文件
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603283037504-9f167709-cb8e-4a67-9cb8-5565ef53e813.png#align=left&display=inline&height=574&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1722&originWidth=2810&size=467130&status=done&style=none&width=936)

我们对它进行定义

```javascript
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, ENUM, TEXT } = Sequelize;
    return queryInterface.createTable('user', {
      id: {
        type: INTEGER(20),
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: STRING(30),
        allowNull: false,
        defaultValue: '',
        comment: '用户名',
        unique: true
      },
      nickname: {
        type: STRING(30),
        allowNull: false,
        defaultValue: '',
        comment: '昵称',
      },
      email: {
        type: STRING(50),
        allowNull: false,
        defaultValue: '',
        comment: '邮箱'
      },
      password: {
        type: STRING(20),
        allowNull: false,
        defaultValue: '',
        comment: "密码"
      },
      avatar: {
        type: STRING(255),
        allowNull: true,
        defaultValue: '',
        comment: '头像'
      },
      phone: {
        type: STRING(11),
        allowNull: false,
        defaultValue: '',
        comment: '手机'
      },
      sex: {
        type: ENUM,
        values: ["男", '女', '保密'],
        allowNull: false,
        defaultValue: '男',
        comment: '性别'
      },
      desc: {
        type: TEXT,
        allowNull: false,
        defaultValue: '',
        comment: '个性签名',
      },
      total_size: {
        type: INTEGER,
        defaultValue: 0,
        comment: '网盘总大小，单位:kb',
      },
      used_size: {
        type: INTEGER,
        defaultValue: 0,
        comment: '网盘已使用大小，单位:kb',
      },
      created_time: DATE,
      updated_time: DATE,

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};

```

执行 migrate 进行数据库变更

```javascript
npx sequelize db:migrate

```

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603283385469-ac1ca067-7b37-4a64-a91a-3e819721a514.png#align=left&display=inline&height=201&margin=%5Bobject%20Object%5D&name=image.png&originHeight=402&originWidth=1148&size=60893&status=done&style=none&width=574)
**navicat刷新：**
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603283622733-81d6a9f9-bb76-459e-b84e-36e39f1e7947.png#align=left&display=inline&height=237&margin=%5Bobject%20Object%5D&name=image.png&originHeight=546&originWidth=2454&size=368229&status=done&style=none&width=1066)

然后，我们到app目录，新建一个model文件夹，用来存放**数据模型**，新建一个user.js，类似Java的实体类

```javascript
'use strict';
module.exports = (app) => {
  const { STRING, INTEGER, DATE, ENUM, TEXT } = app.Sequelize;

  const User = app.model.define("user", {
    id: {
      type: INTEGER(20),
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "用户名",
      unique: true,
    },
    nickname: {
      type: STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "昵称",
    },
    email: {
      type: STRING(160),
      allowNull: false,
      defaultValue: "",
      comment: "邮箱",
    },
    password: {
      type: STRING,
      allowNull: false,
      defaultValue: "",
      comment: "密码",
    },
    avatar: {
      type: STRING,
      allowNull: true,
      defaultValue: "",
      comment: "头像",
    },
    phone: {
      type: STRING(11),
      allowNull: false,
      defaultValue: "",
      comment: "手机",
    },
    sex: {
      type: ENUM,
      values: ["男", "女", "保密"],
      allowNull: false,
      defaultValue: "男",
      comment: "性别",
    },
    desc: {
      type: TEXT,
      allowNull: false,
      defaultValue: "",
      comment: "个性签名",
    },
    total_size: {
      type: INTEGER,
      defaultValue: 10485760,
      comment: "网盘总大小，单位:kb",
    },
    used_size: {
      type: INTEGER,
      defaultValue: 0,
      comment: "网盘已使用大小，单位:kb",
    },
    created_time: DATE,
    updated_time: DATE,
  });
  return User;
};

```

现在，用户数据表和数据对象都已经准备好了，就可以对用户进行各种功能接口的开发啦！

### 注册功能

我们到controller新建一个user.js，用来当user的控制器
自带async异步真是好用，基本的语法应该都能看懂的哈，和JPA很像啊，直接从数据模型查询操作，不走数据库SQL

```javascript
'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
  // 注册
  async reg() {
    const { ctx, app } = this;
    // 请求体参数
    const { username, password } = ctx.request.body;

    // 用户名是否存在
    if (
      await app.model.User.findOne({
        where: {
          username,
        },
      })
    ) {
      ctx.throw(400, '用户名已存在');
    }

    // 创建用户
    let user = await app.model.User.create({
      username,
      password,
    });

    if (!user) {
      ctx.throw(400, '注册失败');
    }

    //返回结果的时候把密码去掉
    user = JSON.parse(JSON.stringify(user));
    delete user.password;

    ctx.apiSuccess(user);
  }
}

module.exports = UserController;


```

路由 app/router.js，加入注册的路由

```javascript
  // 用户注册
  router.post("/reg", controller.user.reg);

```

现在，在postman来测试一下，ok了。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603287936319-da52762f-942e-489a-b70b-8d5f0a66d899.png#align=left&display=inline&height=581&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1316&originWidth=2174&size=180803&status=done&style=none&width=960)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603288084554-3ee08edb-9b8a-47ec-8ede-0eb07a958f3a.png#align=left&display=inline&height=289&margin=%5Bobject%20Object%5D&name=image.png&originHeight=890&originWidth=2790&size=900113&status=done&style=none&width=906)

### 参数验证

我们可以为请求加入参数验证的功能
安装校验插件

```shell
npm i egg-valparams --save

```

在config/plugin.js配置

```javascript
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  valparams: {
    enable: true,
    package: 'egg-valparams',
  },
};

```

在config/config.default.js配置
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603289586380-8dacf4a1-e503-4ed2-813b-a6520986102e.png#align=left&display=inline&height=474&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1154&originWidth=998&size=131503&status=done&style=none&width=410)

在中间件：app/middleware/error_handler.js配置增加参数校验相关的内容

```javascript
'use strict';

module.exports = (option, app) => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
      // 404 处理
      if (ctx.status === 404 && !ctx.body) {
        ctx.body = {
          msg: 'fail',
          data: '404 错误',
        };
      }
    } catch (err) {
      // 记录一条错误日志
      app.emit('error', err, ctx);

      const status = err.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      let error =
        status === 500 && app.config.env === 'prod'
          ? 'Internal Server Error'
          : err.message;

      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = {
        msg: 'fail',
        data: error,
      };

      // 参数验证异常
      if (status === 422 && err.message === 'Validation Failed') {
        if (err.errors && Array.isArray(err.errors)) {
          error = err.errors[0].err[0]
            ? err.errors[0].err[0]
            : err.errors[0].err[1];
        }
        ctx.body = {
          msg: 'fail',
          data: error,
        };
      }

      ctx.status = status;
    }
  };
};

```

**

------

**在控制器里的使用方法**

```javascript
class XXXController extends app.Controller {
  // ...
  async XXX() {
    const {ctx} = this;
    ctx.validate({
      system  : {type: 'string', required: false, defValue: 'account', desc: '系统名称'},
      token   : {type: 'string', required: true, desc: 'token 验证'},
      redirect: {type: 'string', required: false, desc: '登录跳转'}
    });
    // if (config.throwError === false)
    if(ctx.paramErrors) {
      // get error infos from `ctx.paramErrors`;
    }
    let params = ctx.params;
    let {query, body} = ctx.request;
    // ctx.params        = validater.ret.params;
    // ctx.request.query = validater.ret.query;
    // ctx.request.body  = validater.ret.body;
    // ...
    ctx.body = query;
  }
  // ...
}

```

**



------

现在，我们把参数校验加入用户注册功能

```javascript
'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
    // 注册
    async reg() {
        const { ctx, app } = this;
        // 参数验证，用户名至少5个字符，最长20个字符，密码和确认密码必须一致
        ctx.validate({
            username: {
                required: true,
                type: "string",
                desc: "用户名",
                range: {
                    min: 5,
                    max: 20
                },
            },
            password: {
                required: true,
                type: "string",
                desc: "密码"
            },
            repassword: {
                required: true,
                type: "string",
                desc: "确认密码"
            }
        });

        let { username, password, repassword } = ctx.request.body;

        if (password !== repassword) {
            return ctx.throw(400, '密码和确认密码不相同');
        }

        // 用户名是否存在
        if (await app.model.User.findOne({
            where: {
                username
            }
        })) {
            ctx.throw(400, '用户名已存在');
        }

        // 创建用户
        let user = await app.model.User.create({
            username,
            password
        });

        if (!user) {
            ctx.throw(400, '注册失败');
        }

        user = JSON.parse(JSON.stringify(user));
        delete user.password;

        ctx.apiSuccess(user);
    }
}

module.exports = UserController;


```

Postman测试，已经生效～
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603290457649-3bb688a6-0273-4d2e-9353-5218268e74e2.png#align=left&display=inline&height=382&margin=%5Bobject%20Object%5D&name=image.png&originHeight=958&originWidth=1896&size=128083&status=done&style=none&width=757)

![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603290514711-e0ce5950-574a-42c6-9972-5a1cb009391a.png#align=left&display=inline&height=381&margin=%5Bobject%20Object%5D&name=image.png&originHeight=976&originWidth=1948&size=133219&status=done&style=none&width=760)

### crypto数据加密

> nodejs 中的 crypto 模块提供了各种各样加密算法的 API，几类常用算法：
>
> - 散列(Hash)算法
> - HMac 算法
> - 对称加密(AES)与非对称加密解密(RSA)
> - 签名和验证算法





crypto 模块目的是提供加密功能，包含对 OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装。
Nodejs用C/C++实现这些算法后，通过cypto这个模块暴露为JavaScript接口，这样用起来方便，运行速度也较直接使用JavaScript快。

我们先安装

```shell
npm install crypto --save

```

在config.default.js配置，加个很随机的密钥

```javascript
config.crypto = {
    secret:  'qhdgw@45ncashdaksh2!#@3nxjdas*_672'
};

```

使用方法：

```javascript
// 引入
const crypto = require('crypto');

// 加密
async createPassword(password) {
    const hmac = crypto.createHash("sha256", this.app.config.crypto.secret);
    hmac.update(password);
    return hmac.digest("hex");
}

// 验证密码
async checkPassword(password, hash_password) {
    // 先对需要验证的密码进行加密
    password = await this.createPassword(password);
    return password === hash_password;
}

```

现在，来为注册时的密码加密，修改model包中user数据模型的password属性，给它进行hmac加密
**一定不要忘记头部引入crypto模块**
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603291307631-6cfc2e6c-e37c-4037-8d48-bb4eb5df344f.png#align=left&display=inline&height=510&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1360&originWidth=1934&size=232872&status=done&style=none&width=725)

```javascript
 password: {
            type: STRING,
            allowNull: false,
            defaultValue: '',
            comment: "密码",
            set(val) {
                const hmac = crypto.createHash("sha256", app.config.crypto.secret);
                hmac.update(val);
                this.setDataValue('password', hmac.digest("hex"));
            }
        },

```

现在在Postman再注册一次，看下数据库的密码字段
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603291481506-689ef845-5222-462b-92ea-d4ed229d0ab3.png#align=left&display=inline&height=337&margin=%5Bobject%20Object%5D&name=image.png&originHeight=966&originWidth=2192&size=149885&status=done&style=none&width=765)

看来密码字段设置得太短了，改大点
**![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603291843631-ae7e1b5d-3146-4b54-91fc-ba5cd291f774.png#align=left&display=inline&height=381&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1060&originWidth=1716&size=226112&status=done&style=none&width=616)**
然后**把user表删掉，执行变更，重新生成表**

```shell
npx sequelize db:migrate

```

再测试，成功
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603291919664-07b4439d-6e6e-4c3b-bf64-c64a734fa2b2.png#align=left&display=inline&height=444&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1318&originWidth=2192&size=209912&status=done&style=none&width=738)
数据库查看下密码字段，已经成功加密
![image.png](https://cdn.nlark.com/yuque/0/2020/png/228333/1603292012349-eef58e9e-f8d1-4401-95f6-5fc6d852a535.png#align=left&display=inline&height=96&margin=%5Bobject%20Object%5D&name=image.png&originHeight=192&originWidth=2266&size=89957&status=done&style=none&width=1133)
### 

------

### redis缓存插件和封装

- 安装

```shell
npm i egg-redis --save

```

- plugin.js

```javascript
 redis: {
    enable: true,
    package: 'egg-redis',
  },

```

- config.default.js

```javascript
 // redis存储
  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 1,
    },
  };

```

app目录新建service目录，创建cache.js 缓存服务文件，用来做redis的写入和读取等

```javascript
'use strict'
const Service = require('egg').Service

class CacheService extends Service {
  /**
   * 获取列表
   * @param {string} key 键
   * @param {boolean} isChildObject 元素是否为对象
   * @return { array } 返回数组
   */
  async getList(key, isChildObject = false) {
    const { redis } = this.app
    let data = await redis.lrange(key, 0, -1)
    if (isChildObject) {
      data = data.map((item) => {
        return JSON.parse(item)
      })
    }
    return data
  }
  /**
   * 设置列表
   * @param {string} key 键
   * @param {object|string} value 值
   * @param {string} type 类型：push和unshift
   * @param {Number} expir 过期时间 单位秒
   * @return { Number } 返回索引
   */
  async setList(key, value, type = 'push', expir = 0) {
    const { redis } = this.app
    if (expir > 0) {
      await redis.expire(key, expir)
    }
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    if (type === 'push') {
      return await redis.rpush(key, value)
    }
    return await redis.lpush(key, value)
  }

  /**
   * 设置 redis 缓存
   * @param { String } key 键
   * @param {String | Object | array} value 值
   * @param { Number } expir 过期时间 单位秒
   * @return { String } 返回成功字符串OK
   */
  async set(key, value, expir = 0) {
    const { redis } = this.app
    if (expir === 0) {
      return await redis.set(key, JSON.stringify(value))
    }
    return await redis.set(key, JSON.stringify(value), 'EX', expir)
  }

  /**
   * 获取 redis 缓存
   * @param { String } key 键
   * @return { String | array | Object } 返回获取的数据
   */
  async get(key) {
    const { redis } = this.app
    const result = await redis.get(key)
    return JSON.parse(result)
  }

  /**
   * redis 自增
   * @param { String } key 键
   * @param { Number } value 自增的值
   * @return { Number } 返回递增值
   */
  async incr(key, number = 1) {
    const { redis } = this.app
    if (number === 1) {
      return await redis.incr(key)
    }
    return await redis.incrby(key, number)
  }

  /**
   * 查询长度
   * @param { String } key
   * @return { Number } 返回数据长度
   */
  async strlen(key) {
    const { redis } = this.app
    return await redis.strlen(key)
  }

  /**
   * 删除指定key
   * @param {String} key
   */
  async remove(key) {
    const { redis } = this.app
    return await redis.del(key)
  }

  /**
   * 清空缓存
   */
  async clear() {
    return await this.app.redis.flushall()
  }
}

module.exports = CacheService


```

**推送**



------

### jwt加密鉴权

安装jwt

```shell
npm i egg-jwt --save

```

在plugin.js配置

```javascript
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  valparams: {
    enable: true,
    package: 'egg-valparams',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};


```

在config.default.js配置

```javascript
config.jwt = {
    secret: 'qhdgw@45ncashdaksh2!#@3nxjdas*_672',
  };

```

```javascript
'use strict';

module.exports = (option, app) => {
  return async (ctx, next) => {
    // 1. 获取 header 头token
    const { token } = ctx.header;
    if (!token) {
      ctx.throw(400, '没有权限访问该接口!');
    }

    // 2. 根据token解密，换取用户信息
    let user = {};
    try {
      user = app.jwt.verify(token, app.config.jwt.secret);
    } catch (err) {
      const fail =
        err.name === 'TokenExpiredError'
          ? 'token 已过期! 请重新获取令牌'
          : 'Token 令牌不合法!';
      ctx.throw(400, fail);
    }

    // 3. 判断当前用户是否登录
    const t = await ctx.service.cache.get('user_' + user.id);
    if (!t || t !== token) {
      ctx.throw(400, 'Token 令牌不合法!');
    }

    // 4. 获取当前用户，验证当前用户是否存在
    user = await app.model.User.findOne({
      where: {
        id: user.id,
      },
    });

    if (!user) {
      ctx.throw(400, '当前用户不存在！');
    }

    // 5. 把 user 信息挂载到全局ctx上
    ctx.authUser = user;

    await next();
  };
};

```

extend目录context.js生成token

```javascript
'use strict';
module.exports = {
  // 成功提示
  apiSuccess(data = '', msg = 'ok', code = 200) {
    this.body = { msg, data };
    this.status = code;
  },
  // 失败提示
  apiFail(data = '', msg = 'fail', code = 400) {
    this.body = { msg, data };
    this.status = code;
  },
  // 生成token
  getToken(value) {
    return this.app.jwt.sign(value, this.app.config.jwt.secret);
  },
  // 生成唯一ID
  genID(length) {
    return Number(
      Math.random().toString().substr(3, length) + Date.now()
    ).toString(36);
  },
  // 是否是移动端访问
  ismobile() {
    const userAgent = this.request.header['user-agent'].toLowerCase();
    const pat_phone = /ipad|iphone os|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/;
    return pat_phone.test(userAgent);
  },
};


```

app目录新建service目录，新建cache.js缓存服务文件

```javascript
'use strict';
const Service = require('egg').Service;

class CacheService extends Service {
  /**
   * 获取列表
   * @param {string} key 键
   * @param {boolean} isChildObject 元素是否为对象
   * @return { array } 返回数组
   */
  async getList(key, isChildObject = false) {
    const { redis } = this.app;
    let data = await redis.lrange(key, 0, -1);
    if (isChildObject) {
      data = data.map(item => {
        return JSON.parse(item);
      });
    }
    return data;
  }
  /**
   * 设置列表
   * @param {string} key 键
   * @param {object|string} value 值
   * @param {string} type 类型：push和unshift
   * @param {Number} expir 过期时间 单位秒
   * @return { Number } 返回索引
   */
  async setList(key, value, type = 'push', expir = 0) {
    const { redis } = this.app;
    if (expir > 0) {
      await redis.expire(key, expir);
    }
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    if (type === 'push') {
      return await redis.rpush(key, value);
    }
    return await redis.lpush(key, value);
  }

  /**
   * 设置 redis 缓存
   * @param { String } key 键
   * @param {String | Object | array} value 值
   * @param { Number } expir 过期时间 单位秒
   * @return { String } 返回成功字符串OK
   */
  async set(key, value, expir = 0) {
    const { redis } = this.app;
    if (expir === 0) {
      return await redis.set(key, JSON.stringify(value));
    }
    return await redis.set(key, JSON.stringify(value), 'EX', expir);

  }

  /**
   * 获取 redis 缓存
   * @param { String } key 键
   * @return { String | array | Object } 返回获取的数据
   */
  async get(key) {
    const { redis } = this.app;
    const result = await redis.get(key);
    return JSON.parse(result);
  }

  /**
   * redis 自增
   * @param { String } key 键
   * @param { Number } value 自增的值
   * @return { Number } 返回递增值
   */
  async incr(key, number = 1) {
    const { redis } = this.app;
    if (number === 1) {
      return await redis.incr(key);
    }
    return await redis.incrby(key, number);

  }

  /**
   * 查询长度
   * @param { String } key
   * @return { Number } 返回数据长度
   */
  async strlen(key) {
    const { redis } = this.app;
    return await redis.strlen(key);
  }

  /**
   * 删除指定key
   * @param {String} key
   */
  async remove(key) {
    const { redis } = this.app;
    return await redis.del(key);
  }

  /**
   * 清空缓存
   */
  async clear() {
    return await this.app.redis.flushall();
  }
}

module.exports = CacheService;


```





------

### 登录功能实现

controller下user.js控制器，增加登录和密码验证方法

```javascript
'use strict';

const Controller = require('egg').Controller;
const crypto = require('crypto');
class UserController extends Controller {
  // 注册
  async reg() {
    const { ctx, app } = this;
    // 参数验证，用户名至少5个字符，最长20个字符，密码和确认密码必须一致
    ctx.validate({
      username: {
        required: true,
        type: 'string',
        desc: '用户名',
        range: {
          min: 5,
          max: 20,
        },
      },
      password: {
        required: true,
        type: 'string',
        desc: '密码',
      },
      repassword: {
        required: true,
        type: 'string',
        desc: '确认密码',
      },
    });

    const { username, password, repassword } = ctx.request.body;

    if (password !== repassword) {
      return ctx.throw(400, '密码和确认密码不相同');
    }

    // 用户名是否存在
    if (
      await app.model.User.findOne({
        where: {
          username,
        },
      })
    ) {
      ctx.throw(400, '用户名已存在');
    }

    // 创建用户
    let user = await app.model.User.create({
      username,
      password,
    });

    if (!user) {
      ctx.throw(400, '注册失败');
    }

    user = JSON.parse(JSON.stringify(user));
    delete user.password;

    ctx.apiSuccess(user);
  }

  // 登录
  async login() {
    const { ctx, app } = this;
    // 参数验证
    ctx.validate({
      username: {
        required: true,
        type: 'string',
        desc: '用户名',
      },
      password: {
        required: true,
        type: 'string',
        desc: '密码',
      },
    });
    // 获取到数据
    const { username, password } = ctx.request.body;
    // 验证用户是否存在
    let user = await app.model.User.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      return ctx.apiFail('当前用户不存在');
    }
    // 验证密码
    this.checkPassword(password, user.password);

    user = JSON.parse(JSON.stringify(user));

    // 生成token
    user.token = ctx.getToken(user);
    delete user.password;

    // 加入缓存中
    if (!(await this.service.cache.set('user_' + user.id, user.token))) {
      ctx.throw(400, '登录失败');
    }

    ctx.apiSuccess(user);
  }

  // 验证密码
  checkPassword(password, hash_password) {
    const hmac = crypto.createHash('sha256', this.app.config.crypto.secret);
    hmac.update(password);
    if (hmac.digest('hex') !== hash_password) {
      this.ctx.throw(400, '密码错误');
    }
    return true;
  }
}

module.exports = UserController;


```

**测试登录功能，一定先开启本地的redis服务！！！**
**
[![7.mp4 (12.64MB)](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)]()



------

### 全局权限验证中间件的实现

在middleware目录新建auth.js文件，统一实现全局权限验证

```javascript
'use strict';

module.exports = (option, app) => {
  return async (ctx, next) => {
    // 1. 获取 header 头token
    const { token } = ctx.header;
    if (!token) {
      ctx.throw(400, '没有权限访问该接口!');
    }

    // 2. 根据token解密，换取用户信息
    let user = {};
    try {
      user = app.jwt.verify(token, app.config.jwt.secret);
    } catch (err) {
      const fail =
        err.name === 'TokenExpiredError'
          ? 'token 已过期! 请重新获取令牌'
          : 'Token 令牌不合法!';
      ctx.throw(400, fail);
    }

    // 3. 判断当前用户是否登录
    const t = await ctx.service.cache.get('user_' + user.id);
    if (!t || t !== token) {
      ctx.throw(400, 'Token 令牌不合法!');
    }

    // 4. 获取当前用户，验证当前用户是否存在
    user = await app.model.User.findOne({
      where: {
        id: user.id,
      },
    });

    if (!user) {
      ctx.throw(400, '当前用户不存在！');
    }

    // 5. 把 user 信息挂载到全局ctx上
    ctx.authUser = user;

    await next();
  };
};

```

在config.default.js配置一下中间件
![image.png](https://cdn.nlark.com/yuque/0/2020/png/297164/1603616302596-f1d2236b-f21a-41e4-84f9-fd651278bb6c.png#align=left&display=inline&height=1154&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1154&originWidth=1468&size=172363&status=done&style=none&width=1468)





------

### 退出登录

user控制器

```
// 退出登录
  async logout() {
    const { ctx, service } = this;
    const currentUserId = ctx.authUser.id;
    if (!await service.cache.remove('user_' + currentUserId)) {
      ctx.throw(400, '退出登录失败');
    }
    ctx.apiSuccess('退出登录成功');
  }

```

路由

```
// 退出登录
  router.post('/logout', controller.user.logout);

```



------

## 2. 文件相关API

### 上传文件

[egg-oss文档](https://www.npmjs.com/package/egg-oss)

- 安装egg-oss插件

npm i egg-oss --save

- 配置 config/plugin.js

oss: {
    enable: true,
    package: 'egg-oss',
  }

- 创建数据迁移表file
  项目根目录执行

npx sequelize migration:generate --name=file

- 配置database / migrations / 目录下生成的数据表迁移文件

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, ENUM, TEXT } = Sequelize;
    return queryInterface.createTable('file', {
      id: {
        type: INTEGER(20),
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: STRING(100),
        allowNull: false,
        defaultValue: '',
        comment: '文件名'
      },
      ext: {
        type: STRING(50),
        allowNull: true,
        defaultValue: '',
        comment: '文件扩展名'
      },
      md: {
        type: STRING,
        allowNull: true,
        defaultValue: '',
        comment: '文件MD5'
      },
      file_id: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '父级id'
      },
      user_id: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '用户id',
        references: {
          model: 'user',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'restrict', // 更新时操作
      },
      size: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '文件大小'
      },
      url: {
        type: STRING,
        allowNull: true,
        defaultValue: '',
        comment: '文件url'
      },
      isdir: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '是否为文件夹',
      },
      created_time: DATE,
      updated_time: DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('file');
  }
};

- 定义数据模型: app/model/file.js

'use strict'
module.exports = (app) => {
  const { STRING, INTEGER, DATE, ENUM, TEXT } = app.Sequelize

  const File = app.model.define('file', {
    id: {
      type: INTEGER(20),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(100),
      allowNull: false,
      defaultValue: '',
      comment: '文件名',
    },
    ext: {
      type: STRING(50),
      allowNull: true,
      defaultValue: '',
      comment: '文件扩展名',
    },
    md: {
      type: STRING,
      allowNull: true,
      defaultValue: '',
      comment: '文件MD5',
    },
    file_id: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '父级id',
    },
    user_id: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '用户id',
      references: {
        model: 'user',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'restrict', // 更新时操作
    },
    size: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '文件大小',
    },
    url: {
      type: STRING,
      allowNull: true,
      defaultValue: '',
      comment: '文件url',
    },
    isdir: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '是否为文件夹',
    },
    created_time: DATE,
    updated_time: DATE,
  })

  // 删除后
  File.afterBulkDestroy(async (data, option) => {
    console.log('删除后', data.where)

    let files = await app.model.File.findAll({
      where: {
        file_id: data.where.id,
        user_id: data.where.user_id,
        isdir: 1,
      },
    })

    let ids = files.map((item) => item.id)

    if (ids.length > 0) {
      app.model.File.destroy({
        where: {
          id: ids,
          user_id: data.where.user_id,
        },
      })
    }
  })

  return File
}

- 控制器：app/controller/file.js

'use strict'
const Controller = require('egg').Controller
const fs = require('fs')
const path = require('path')
class FileController extends Controller {
  // 上传
  async upload() {
    const { ctx, app, service } = this
    const currentUser = ctx.authUser
    console.log(ctx.request.files)
    if (!ctx.request.files) {
      return ctx.apiFail('请先选择上传文件')
    }
    ctx.validate({
      file_id: {
        required: true,
        type: 'int',
        defValue: 0,
        desc: '目录id',
      },
    })
    const file_id = ctx.query.file_id
    console.log(file_id + '&&&&&&&&&')
    let f
    // 目录id是否存在
    if (file_id > 0) {
      // 目录是否存在,存在就返回目录对象，从而取得目录名字，不存在直接在service就出错返回了
      await service.file.isDirExist(file_id).then((res) => {
        console.log(res + '>>>>>>>>>>')
        f = res
      })
    }
    //取得上传的文件对象
    const file = ctx.request.files[0]
    //动态将目录名称作为前缀和文件名拼接
    const name = f.name + '/' + ctx.genID(10) + path.extname(file.filename)
    // 判断用户网盘内存是否不足
    let s = await new Promise((resolve, reject) => {
      fs.stat(file.filepath, (err, stats) => {
        resolve((stats.size / 1024).toFixed(1))
      })
    })
    if (currentUser.total_size - currentUser.used_size < s) {
      return ctx.apiFail('你的可用内存不足')
    }
    // 上传到oss
    let result
    try {
      result = await ctx.oss.put(name, file.filepath)
    } catch (err) {
      console.log(err)
    }
    //得到文件url
    console.log(result.url)
    // 写入到数据表
    if (result) {
      let addData = {
        name: file.filename,
        ext: file.mimeType,
        md: result.name,
        file_id,
        user_id: currentUser.id,
        size: parseInt(s),
        isdir: 0,
        url: result.url,
      }
      let res = await app.model.File.create(addData)
      // 更新用户的网盘内存使用情况
      currentUser.used_size = currentUser.used_size + parseInt(s)
      currentUser.save()
      return ctx.apiSuccess(res)
    }
    ctx.apiFail('上传失败')
  }
}
module.exports = FileController

- 服务：app/service/file.js

'use strict'

const Service = require('egg').Service

class FileService extends Service {
  // 目录是否存在
  async isDirExist(id) {
    let f = await this.app.model.File.findOne({
      where: {
        id,
        user_id: this.ctx.authUser.id,
        isdir: 1,
      },
    })
    if (!f) {
      return this.ctx.throw(404, '目录不存在')
    }
    return f
  }

  // 文件是否存在
  async isExist(id) {
    let f = await this.app.model.File.findOne({
      where: {
        id,
        user_id: this.ctx.authUser.id,
      },
    })
    if (!f) {
      return this.ctx.throw(404, '文件不存在')
    }
    return f
  }
}

module.exports = FileService

- 扩展：app/extend/context.js

// 生成唯一id
genID(length) {
 return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}

- 路由：app/router.js

router.post('/upload', controller.file.upload);

- 执行 migrate 进行数据库变更

npx sequelize db:migrate

- 配置 config/config.default.js

  // oss配置
  config.oss = {
    client: {
      accessKeyId: '************',
      accessKeySecret: '************',
      bucket: 'my-egg-oss',
      endpoint: 'oss-cn-hangzhou.aliyuncs.com',
      timeout: '60s',
    },
  }

  // 上传格式和大小限制
  config.multipart = {
    // fileSize: '50mb',
    fileSize: 1048576000,
    // mode: 'stream',
    mode: 'file',
    fileExtensions: [
      // 允许上传的图片类型
      '.jpg',
      '.jpeg',
      '.png',
      '.gif',
      '.bmp',
      '.wbmp',
      '.webp',
      '.tif',
      '.psd',
      // 允许上传的文本类型
      '.svg',
      '.js',
      '.jsx',
      '.json',
      '.css',
      '.less',
      '.html',
      '.htm',
      '.xml',
      '.txt',
      '.doc',
      '.docx',
      '.md',
      '.pdf',
      '.xls',
      '.xlsx',
      // 允许上传的压缩文件类型
      '.zip',
      '.gz',
      '.tgz',
      '.gzip',
      // 允许上传的音视频文件类型
      '.mp3',
      '.mp4',
      '.avi',
    ],
  }
    

- 

演示，一定要看！！
[![upload.mp4 (15.94MB)](https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*NNs6TKOR3isAAAAAAAAAAABkARQnAQ)]()

该死的语雀！！！我花了一个多小时在写完丢丢完写然后从Typora写了再粘贴过来，蜗牛般的刷新速度小心翼翼不敢点更新的恐惧中，战战兢兢完成了这一趴&¥#**@（@（¥@（I#





------

## 3. 分享相关API

# 16、前后端交互





------

# 附录

## ValParams API 说明

参数验证处理
Valparams.setParams(req, params, options);

| Param                       | Type                                               | Description                                                  | Example                                                      |
| --------------------------- | -------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| req                         | Object                                             | request 对象,这里我们就是取相应的三种请求的参数进行参数验证  | {params, query, body}                                        |
| params                      | Object                                             | 参数的格式配置 { pname: {alias, type, required, range: {in, min, max, reg, schema }, defValue, trim, allowEmptyStr, desc[, detail] } } | {sysID : {alias:'sid',type: 'int', required: true, desc: '所属系统id'}} |
| params[pname]               | String                                             | 参数名                                                       |                                                              |
| params[pname].alias         | String                                             | 参数别名，可以使用该参数指定前端使用的参数名称               |                                                              |
| params[pname].type          | String                                             | 参数类型                                                     | 常用可选类型有 int, string, json 等，其他具体可见下文或用 Valparams.vType 进行查询 |
| params[pname].required      | Boolean                                            | 是否必须                                                     |                                                              |
| params[pname].range         | Object                                             | 参数范围控制                                                 | {min: '112.80.248.10', max: '112.80.248.72'}                 |
| params[pname].range.min     | ALL                                                | 最小值、最短、最早（不同 type 参数 含义有所差异）            |                                                              |
| params[pname].range.max     | ALL                                                | 最大值、最长、最晚（不同 type 参数 含义有所差异）            |                                                              |
| params[pname].range.in      | Array                                              | 在XX中，指定参数必须为其中的值                               |                                                              |
| params[pname].range.reg     | RegExp                                             | 正则判断，参数需要符合正则                                   |                                                              |
| params[pname].range.schema  | Object                                             | jsonSchema，针对JSON类型参数有效，使用ajv对参数进行格式控制  |                                                              |
| params[pname].defValue      | ALL                                                | 默认值，没传参数或参数验证出错时生效，此时会将该值赋值到相应参数上 |                                                              |
| params[pname].trim          | Boolean                                            | 是否去掉参数前后空格字符，默认false                          |                                                              |
| params[pname].allowEmptyStr | Boolean                                            | 是否允许接受空字符串，默认false                              |                                                              |
| params[pname].desc          | String                                             | 参数含义描述                                                 |                                                              |
| options                     | Object                                             | 参数关系配置                                                 |                                                              |
| options.choices             | Array                                              | 参数挑选规则                                                 | [{fields: ['p22', 'p23', 'p24'], count: 2, force: true}] 表示'p22', 'p23', 'p24' 参数三选二 |
| options.choices[].fields    | Array                                              | 涉及的参数                                                   |                                                              |
| options.choices[].count     | Number                                             | 需要至少传 ${count} 个                                       |                                                              |
| options.choices[].force     | Boolean                                            | 默认 false，为 true 时，涉及的参数中只能传 ${count} 个, 为 false 时，可以多于 ${count} 个 |                                                              |
| options.equals              | Array                                              | 参数相等                                                     | [['p20', 'p21'], ['p22', 'p23']] 表示 'p20', 'p21' 两个值需要相等，'p22', 'p23' 两个值需要相等 |
| options.equals[]            | Array                                              | 涉及的参数(涉及的参数的值需要是相等的)                       |                                                              |
| options.compares            | Array                                              | 参数大小关系                                                 | [['p25', 'p26', 'p27']] 表示 'p25', 'p26', 'p27' 必须符合 'p25' <= 'p26' <= 'p27' |
| options.compares[]          | Array                                              | 涉及的参数(涉及的参数的值需要是按顺序从小到大的)             |                                                              |
| options.cases               | Object                                             | 参数条件判断                                                 | [{when: ['p30'], then: ['p31'], not: ['p32']}] 表示 当传了 p30 就必须传 p31 ,同时不能传p32 |
| options.cases.when          | Array                                              | 条件                                                         |                                                              |
| options.cases.when[]        | String                                             | 涉及的参数，（字符串）只要接收到的参数有这个字段即为真       |                                                              |
| options.cases.when[].field  | 涉及的参数的名（对象）                             | ---                                                          |                                                              |
| options.cases.when[].value  | 涉及的参数的值（对象）需要参数的值与该值相等才为真 | ---                                                          |                                                              |
| options.cases.then          | Array                                              | 符合when条件时，需要必传的参数                               |                                                              |
| options.cases.not           | Array                                              | 符合when条件时，不能接收的参数                               |                                                              |



```javascript
const Valparams = require('path/to/Valparams[/index]');
Valparams.locale('zh-cn');

function list(req, res, next) {
  let validater = Valparams.setParams(req, {
    sysID : {alias:'sid',type: 'int', required: true, desc: '所属系统id'},
    page  : {type: 'int', required: false, defValue: 1, range:{min:0}, desc: '页码'},
    size  : {type: 'int', required: false, defValue: 30, desc: '页面大小'},
    offset: {type: 'int', required: false, defValue: 0, desc: '位移'}
  }, {
    choices : [{fields: ['sysID', 'page'], count: 1, force: false}],
  });
  if (validater.err && validater.err.length) {
    console.log(validater.err);
  }
  else {
    console.log(validater);
    //{ query: { page: 1, size: 30 },
    //  body: {},
    //  params: { sysID: 2 },
    //  all: { sysID: 2, page: 1, size: 30 },
    //  err: null }
    //  raw: { query: { page: 1, size: 30 },
    //         body: {},
    //         params: { sid: 2 },
    //       }
    //}
    //do something
  }
}

```

**返回支持的类型列表**

```javascript
Valparams.vType = {
  ALL        : 'all',
  STRING     : 'string',
  ARRAY      : 'array',
  DATE       : 'date',
  INT        : 'int',
  FLOAT      : 'float',
  LETTER     : 'letter',
  NUMBER     : 'number',
  IP         : 'ip',
  EMAIL      : 'email',
  PHONE      : 'phone',
  URL        : 'url',
  JSON       : 'json',
  BOOL       : 'bool',
  NULL       : 'null',
  RANGE      : 'range',
  DATERANGE  : 'dateRange',
  INTRANGE   : 'intRange',
  FLOATRANGE : 'floatRange',
  NUMBERRANGE: 'numberRange'
};

```

##### 自定义本地化文件

Valparams.defineLocale(key, value);

| Param | Type   | Description                                                  | Example |
| ----- | ------ | ------------------------------------------------------------ | ------- |
| key   | String | 语言标识                                                     | zh-cn   |
| value | Object | 本地化内容，可配置内容有 em_type, em_minmax, em_reg, em_in, em_schema, em_required, em_range_relation, em_choices, em_equals, em_compares, em_cases | ---     |

##### 更新已有本地化文件内容

Valparams.updateLocale(key, value);
参数含义同 defineLocale

##### 获取本地化文件内容

Valparams.localeData(key);

| Param | Type   | Description | Example |
| ----- | ------ | ----------- | ------- |
| key   | String | 语言标识    | zh-cn   |

##### 列出已加载的本地化文件

Valparams.locales(key);
目前已有 en 、 zh-cn

| Param | Type   | Description | Example |
| ----- | ------ | ----------- | ------- |
| key   | String | 语言标识    | zh-cn   |

##### 设置使用的本地化文件

Valparams.locale(locale); 如： `Valparams.locale('zh-cn')`;