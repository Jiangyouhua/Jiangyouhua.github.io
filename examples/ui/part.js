/**
 * 数据部分
 * @type {string}
 */

let jp = new Object(); //定义一个根对象

// Logo
jp.logo = "<span class='logo'><span>J</span><span>Part</span></span>";

jp.banner = {
    title:jp.logo,
    text:"一起<span style='color: red'>组装</span>您的前端程序",
    "class":"big"
};

// AD
jp.ad = [
    {text:"Simplest"},
    {text:"Quickly"},
    {text:"Component"},
    {text:"Lightest"},
    {text:"Efficient"},
];

jp.load = [
    {"text":"<span data-source=$jp.logo></span> 核心库1.0.0版", href:"jpartcore.js"},
];

// Navigation
jp.nav = [
    {text:"首页", href:"./examples/_index.html", onclick:"jp.loadPage(this)", "data-affect":"#body"},
    {text:"文档", href:"./examples/document.html", onclick:"jp.loadPage(this)", "data-affect":"#body"},
    {text:"示例", href:"./examples/editor.html", onclick:"jp.loadPage(this)", "data-affect":"#body"},
    {text:"下载", href:"./examples/download.html", onclick:"jp.loadPage(this)", "data-affect":"#body"}
];

// index.html
jp.banner1 = {
    title:jp.logo,
    text:"本网站完全使用<span data-source='$jp.logo'></span>来实现",
    "class":"big",
}

jp.preview = [
    {
        // image:"./examples/ui/image/web1.png",
        title:"极简的",
        text:"<span data-source='$jp.logo'></span> 是如此的简单：您甚至不需要熟悉HTML、CSS、JavaScript，您只需要花1分钟的时间去了解它，再花一分钟的时间去尝试它。就这样，您就可以在您需要的时候去使用它，它的表现会让您很幸福。"
    },
    {
        // image:"./examples/ui/image/web2.png",
        title:"快捷的",

        text:"<span data-source='$jp.logo'></span> 用于快速的，高效的构建您的前端程序：您只需要先去下载它，然后引用它，最后连接数据源并设置它，您就已经使用上了它。这同时意味，您也已经完成了您前端的所有工作。"
    },
    {
        // image:"./examples/ui/image/web3.png",
        title:"重用的",
        text:"<span data-source='$jp.logo'></span> 的重心是组件化设计，所有的组件均可以重复使用：页面的每一部分都可以是组件，如导航、列表、文章预览、全文阅读、广告轮播等等。这些设计好的组件，可以被您和您的朋友重复使用在页面的各个位置。"
    },
];

jp.about = {
    title:"在前端，我想要什么呢",
    subtitle:"一个普通程序员对前端长久的思考",
    text:"<span data-source='$jp.logo'></span> 是我多年前编写的。很长时间没在意，直到2014年，我又要为后台编写前端部分。当时Angular、React正火，我尝试使用一下，特别是React，我发现它跟我以前编写的前端框架非常的相似。于我翻出这个框架，把它初步完善并应用于项目中，整个过程自我感觉还不错，我又给它取了个名字，叫：<span data-source='$jp.logo'></span> ，同时做了一个简单的应用说明，然后把它挂到了github上。<br><br>\n" +
        "这样时间不觉中过去了。直到最近，我接手朋友开发的一个小程序，修改后台时发现是使用Vue实现前端的，这又让我想起了我的 <span data-source='$jp.logo'></span> 。我去github上看它，它孤零零的在那里，Star依然为零。<br>\n" +
        "<span data-source='$jp.logo'></span> 能让我在前端开发中不断的想起它，是因为它远比Angular、React、Vue来得更简单，对JS、HTML、CSS的分离实现得更彻底。并不是说 <span data-source='$jp.logo'></span> 比Angular、React、Vue更优秀，而是它们间的使命不相同。在我无数的前端编程中，我一直有一个错觉，今天做的事，昨天我也做过，前天我也做过，前一个星期我也做过，前一个月我也做过，前一年我也做过……。我会不断的编写导航条、横幅、列表、图文预览、全文阅读等等。我想做一个框架，准确的说设计一个标准，类似于工业标准来解决这些问题，<span data-source='$jp.logo'></span> 是如何做到的呢？。<br><br>\n" +
        "首先，<span data-source='$jp.logo'></span> 为您解决页面实现的问题：<br>\n" +
        "1. <span data-source='$jp.logo'></span> 把页上的每一个区块，如：航条、横幅、列表、图文预览、全文阅读等，定义为<b>组件</b>。<br>\n" +
        "2. <span data-source='$jp.logo'></span> 为每个组件定义了数据加载接口，用来接收数据，HTML呈现它，您可以通过CSS来定义它的外观。<br>\n" +
        "3. <span data-source='$jp.logo'></span> 认为，把多个这栏的组件，按您规划组合在一起，那就是您所需要的页面。<br><br>\n" +
        "其次，<span data-source='$jp.logo'></span> 为您解决协同开发的问题：<br>\n" +
        "1. <span data-source='$jp.logo'></span> 提供HTML类，把JS人员彻底从HTML编写中分离出来，每一个组件可以用纯JS编写。<br>\n" +
        "2. <span data-source='$jp.logo'></span> 提供PART类，指定组件的接口规范，让UI人员知道组件需要什么样的数据，所呈现的基要样式。<br>\n" +
        "3. <span data-source='$jp.logo'></span> 提供WEB类，让页面按规划输出，让页面的区块让设定的互动。<br><br>\n" +
        "最后，<span data-source='$jp.logo'></span> 是这样假想的：<br>\n" +
        "1. 有一个公共的平台，让一些动手能力好的朋友提交设计的组件，每个组件必需有组件实现代码（js）、样式呈现代码（CSS）、组件需要的最全默认数据，这样即能保证它的呈现效果，有能说明它的数据接口及样式参考。<br>\n" +
        "2. 有需要的朋友，下载指定的组件，向后端人员提交接口说明。其于 <span data-source='$jp.logo'></span> 核心库就能象搭积木一样，搭出自己需要的页面，这个朋友完全可以是零基础。<br>\n" +
        "3. 当共享的组件达到一定数量，也许您就不需要前端人员了。<br><br>\n" +
        "<span data-source='$jp.logo'></span> 能做到，这也是我再一次完善它并把它推出来的原因。遵循 MIT 开源协议，您可以使用它，您会越来越喜欢它的。期待您把它做到更好，或和我一起把它做到更好，谢谢您。\n",
};

jp.tail = {
    title:"谢谢您",
    subtitle:"遵循 MIT 开源协议",
    text:"Copyright © 2014-2019 Jiang YouHua"
};

// document
jp.catalog = [{
    text: "概述",
    href: "#document-start",
    onclick:"jp.anchorDocument(this)",
}, {
    text: "页面设计",
    href: "#page-design",
    onclick:"jp.anchorDocument(this)",
    sub: [{
        text: "一、data-source 属性",
        onclick:"jp.anchorDocument(this)",
        href: "#data-source"
    }, {
        text: "二、data-func 属性",
        onclick:"jp.anchorDocument(this)",
        href: "#data-func"
    }, {
        text: "三、data-part 属性",
        onclick:"jp.anchorDocument(this)",
        href: "#data-part"
    }, {
        text: "四、data-back 属性",
        onclick:"jp.anchorDocument(this)",
        href: "#data-back"
    }, {
        text: "五、data-affect 属性",
        onclick:"jp.anchorDocument(this)",
        href: "#data-affect"
    }]
}, {
    text: "组件设计",
    href: "#part-design",
    onclick:"jp.anchorDocument(this)",
    sub: [{
        text: "一、组件类的基本结构与设计要求",
        onclick:"jp.anchorDocument(this)",
        href: "#part-base"
    }, {
        text: "二. 组件类的基本接口",
        onclick:"jp.anchorDocument(this)",
        href: "#part-interface"
    }]
}, {
    text: "内容类说明",
    href: "#default-class",
    onclick:"jp.anchorDocument(this)",
    sub:[{
        text: "一、WEB类",
        onclick:"jp.anchorDocument(this)",
        href: "#web-class"
    }, {
        text: "二、URL类",
        onclick:"jp.anchorDocument(this)",
        href: "#url-class"
    },{
        text: "三、HTML类",
        onclick:"jp.anchorDocument(this)",
        href: "#html-class"
    }]
},{
    text: "流程说明",
    onclick:"jp.anchorDocument(this)",
    href: "#document-end",
}];

jp.banner2 = {
    image:"",
    title:jp.logo,
    text:"应用文档",
    "class":"title",
};

/**
 * 文档数据
 */

jp.code = {
    string:"&lt;div <b>data-source='我是字面量'</b>&gt;&lt;/div&gt;",
    jsString:"&lt;script&gt;<br>\n" +
        "<b>jp.docValue</b> = '我是JS变量值';<br>\n" +
        "&lt;/script&gt;<br>\n" +
        "&lt;div <b>data-source='$jp.docValue'</b>&gt;&lt;/div&gt;",
    file:"&lt;script&gt;<br>\n" +
        "<b>jp.docFile</b> = '/jpart/examples/file/info.txt';<br>\n" +
        "&lt;/script&gt;<br>\n" +
        "&lt;div <b>data-source='$jp.docFile'</b>&gt;&lt;/div&gt;",
    ajax:"&lt;script&gt;<br>\n" +
        "<b>jp.docAjax</b> = '/jpart/examples/file/value.json';<br>\n" +
        "&lt;/script&gt;<br>\n" +
        "&lt;div <b>data-source='$jp.docAjax'</b>&gt;&lt;/div&gt;",
    input:"&lt;input autocomplete='off' type='text' <b>data-source='jpart'</b> /&gt;",
    select:"&lt;select <b>data-source='3'</b> &gt; <br>\n" +
        "&nbsp;&nbsp;&nbsp;&lt;option value='0'&gt; Angular &lt;/option&gt;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&lt;option value='1'&gt; React &lt;/option&gt;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&lt;option value='2'&gt; Vue &lt;/option&gt;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&lt;option value='3'&gt; jpart &lt;/option&gt;<br>\n" +
        "&lt;/select&gt;",
    img: "&lt;img <b>data-source='/jpart/examples/ui/image/logo.png'</b> /&gt;",
    func:"&lt;script&gt;<br>\n" +
        "<b>jp.docFunc = function(data)</b>{<br>\n" +
        "&nbsp;&nbsp;&nbsp;return data + ': 我是JiangYouhua'; <br>\n" +
        "}<br>\n" +
        "&lt;/script&gt;<br>\n" +
        "&lt;div <b>data-source='jpart'</b> <b>data-func='jp.docFunc'</b>&gt;&lt;/div&gt;",
    funcArgs:"&lt;script&gt;<br>\n" +
        "<b>jp.docFuncArgs = function(data, a, b, c)</b>{<br>\n" +
        "&nbsp;&nbsp;&nbsp;return data = {<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data:data,<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;number:a + b + c<br>\n" +
        "&nbsp;&nbsp;&nbsp;}; <br>\n" +
        "}<br>\n" +
        "&lt;/script&gt;<br>\n" +
        "&lt;div <b>data-source='jpart'</b> <b>data-func='jp.docFuncArgs(1, 2, 3)'</b>&gt;&lt;/div&gt;",
    part:"&lt;script&gt;<br>\n" +
        "<b>jp.docNavigation</b> = [{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'Angular',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('Angular')\"<br>\n" +
        "},{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'React',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('React')\"<br>\n" +
        "},{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'Vue',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('Vue')\"<br>\n" +
        "},{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'jpart',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('jpart')\"<br>\n" +
        "}];<br>\n" +
        "&lt;/script&gt;<br>\n" +
        "&lt;div <b>data-source='$jp.docNavigation'</b> <b>data-part='JNavigation'</b>&gt;&lt;/div&gt;",
    partConfig:"&lt;script&gt;<br>\n" +
        "<b>jp.docNavigation</b> = [{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'Angular',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('Angular')\"<br>\n" +
        "},{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'React',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('React')\"<br>\n" +
        "},{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'Vue',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('Vue')\"<br>\n" +
        "},{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'jpart',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('jpart')\"<br>\n" +
        "}];<br>\n" +
        "&lt;/script&gt;<br>\n" +
        "&lt;div <b>data-source='$jp.docNavigation'</b> <b>data-part='JNavigation'</b> <b>data-config=2</b> &gt;&lt;/div&gt;",
    back:"&lt;script&gt;<br>\n" +
        "<b>jp.docIndex</b> = 0;<br>\n" +
        "<b>jp.docNavigation</b> = [{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'Angular',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('Angular')\"<br>\n" +
        "},{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'React',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('React')\"<br>\n" +
        "},{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'Vue',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('Vue')\"<br>\n" +
        "},{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'jpart',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('jpart')\"<br>\n" +
        "}];<br>\n" +
        "<b>jp.docBack = function(id)</b>{<br>\n" +
        "&nbsp;&nbsp;&nbsp;dom =document.getElementById(id).querySelectorAll(\"a\");<br>\n" +
        "&nbsp;&nbsp;&nbsp;dom[docIndex].style.background = \"#ff8888\";<br>\n" +
        "}\n" +
        "&lt;/script&gt;<br>\n" +
        "&lt;div <b>data-source='$jp.docNavigation'</b> <b>data-part='JNavigation'</b><br> <b>data-back='jp.docBack'</b></b>&gt;&lt;/div&gt;",
    backArgs:"&lt;script&gt;<br>\n" +
        "<b>jp.docNavigation</b> = [{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'Angular',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('Angular')\"<br>\n" +
        "},{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'React',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('React')\"<br>\n" +
        "},{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'Vue',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('Vue')\"<br>\n" +
        "},{<br>\n" +
        "&nbsp;&nbsp;&nbsp;text:'jpart',<br>\n" +
        "&nbsp;&nbsp;&nbsp;onclick:\"alert('jpart')\"<br>\n" +
        "}];<br>\n" +
        "<b>jp.docBackArgs = function(id, num)</b>{<br>\n" +
        "&nbsp;&nbsp;&nbsp;dom =document.getElementById(id).querySelectorAll(\"a\");<br>\n" +
        "&nbsp;&nbsp;&nbsp;dom[num].style.background = \"#ff8888\";<br>\n" +
        "}\n" +
        "&lt;/script&gt;<br>\n" +
        "&lt;div <b>data-source='$jp.docNavigation'</b> <b>data-part='JNavigation'</b><br> <b>data-back='jp.docBackArgs(2)'</b></b>&gt;&lt;/div&gt;",
    affect:"&lt;script&gt;<br>\n" +
        "<b>jp.docInput</b> = 'Hello word';<br>\n" +
        "<b>jp.docAffect = function(data)</b>{<br>\n" +
        "&nbsp;&nbsp;&nbsp;docInput = data + ': Hello Jiang Youhua'; <br>\n" +
        "}<br>\n" +
        "&lt;/script&gt;<br>\n" +
        "&lt;div data-source='jpart' <b>data-back='jp.docAffect(\"A\")'</b><br> <b>data-affect='#theInput'</b>&gt;&lt;/div&gt;<br>\n" +
        "&lt;input autocomplete='off' <b>id='theInput'</b> type='text' <b>data-source='$jp.docInput'</b> /&gt;\n" +
        "                                ",
    affectEvent:"&lt;script&gt;<br>\n" +
        "<b>jp.jsEvent = function(it)</b>{<br>\n" +
        "&nbsp;&nbsp;&nbsp;// TODO<br>\n" +
        "}<br>\n" +
        "&lt;/script&gt;<br>\n" +
        "1. &lt;input autocomplete='off' type='text' <b>name='jp.docTogether'</b> <b>onkeyup='jp.jsEvent(this)'</b><br> <b>data-affect='#theTogether'</b> /&gt;<br>\n" +
        "2. &lt;input autocomplete='off' type='text' <b>id='theTogether'</b> <b>data-source='$jp.docTogether'</b> /&gt;",
};

/**
 * 函数部分
 * @type {string}
 */

jp.pageUrl = "./examples/_index.html";

// 导航页面跳转
jp.loadPage = function (it) {
    jp.pageUrl = it.getAttribute("href");
    let nodes = it.parentNode.childNodes;
    for(let x = 0; x < nodes.length; x ++){
        let node = nodes[x];
        node.classList.remove("action")
    }
    it.classList.add("action");
    document.documentElement.scrollTop = 0;
    document.getElementById("body").innerHTML = "";
    document.getElementById("head").style.position = "inherit";
    if(it.innerHTML == "首页"){
        WEB.Show(".ad");
        return
    }
    WEB.Hide(".ad")
    document.getElementById("head").style.position = "fixed";
};

jp.anchorDocument = function(e){
    if ( e && e.preventDefault )
        e.preventDefault();
    else
        window.event.returnValue = false;
    document.documentElement.scrollTop
    let x = document.getElementById("document-top").offsetTop;
    let id = e.getAttribute("href")
    let top = document.querySelector(id).offsetTop;
    let t =  document.documentElement.scrollTop ;
    document.documentElement.scrollTop = top - x;
};
