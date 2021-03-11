var jp = new Object();

var logo = {
    title: 'JPart',
    content: 'Write your web page in the easiest way.',
    image: './file/logo.png'
};

var jads = [
    { title: "JS Parts", content: "Support to assemble your HTML pages in the way of parts." },
    { title: "Lightest", content: "JS core code is only a few hundred lines." },
    { title: "Minimalist", content: "There are only a few features that you need to understand." },
    { title: "So Easy", content: "Can be used after a few minutes of learning." },
    { title: "Efficient", content: "Greatly improve your efficiency in writing web pages." },
];

var navigations = [
    { title: "Home", href: './index.html' },
    { title: "Guide", href: './guide.html?searchValue=I am the search value of URL' },
    { title: "Practise", href: './practise.html' },
    { title: "Download", href: './download.html' },
]

var about = {
    title: "What do I want for front-end development?",
    subtitle: "A programmer's long-term thinking on front-end development",
    content: `This site is developed using <span data-source='JPart' data-part='JLogo()'></span>.

    <span data-source='JPart' data-part='JLogo()'></span> was written by me before 2012, and I used it again in 2014 when I wanted to develop a department called "JCMS". In 2014, front-end frameworks such as Angular and React were very popular. When I tried React, I found that React was somewhat similar to my <span data-source='JPart' data-part='JLogo()'></span> philosophy, so I finally decided to use <span data-source='JPart' data-part='JLogo()'></span> again in "JCMS". The process of using <span data-source='JPart' data-part='JLogo()'></span> this time made me think that <span data-source='JPart' data-part='JLogo()'></span> is quite good. I wanted to share it, so I spent some time to sort it out, set it to version 1.0, and put it on github.
    
    In this way, time passed unconsciously. Until recently, I was planning to develop a project management system called "MPM", which reminded me of <span data-source='JPart' data-part='JLogo()'></span> again. I went to watch it on github, it was there alone, with few stars. Eight years have passed, and Javascript has a new standard, so I rewrite <span data-source='JPart' data-part='JLogo()'></span> again, which is a 2.0 version, and then update it on github.
    
    <span data-source='JPart' data-part='JLogo()'></span> is a better JS framework because it is much simpler than Angular, React, and Vue. Of course, it is not that <span data-source='JPart' data-part='JLogo()'></span> is better than Angular, React, and Vue, but that they have different missions, so they go in different directions.
    
    What is the direction of <span data-source='JPart' data-part='JLogo()'></span>?
    
    You think, in countless front-end programming, we are constantly doing repetitive work, constantly writing navigation bars, banners, lists, graphic previews, full text reading, forms, etc., taking care of every detail. Why can't it be like desktop program development? If I want a list, then I add a list component from the component library, then bind the data, set the parameters, and then process the event. That's it, isn't it great? Yes, this is the direction of <span data-source='JPart' data-part='JLogo()'></span>.
    
    <span data-source='JPart' data-part='JLogo()'></span> hopes to provide you with a series of components. You can select and add them on the page, then bind data, set parameters, and handle events. In this way, you have designed the page you need. I put this page design method as a component design.
    
    How does <span data-source='JPart' data-part='JLogo()'></span> achieve componentized design?

    First of all, <span data-source='JPart' data-part='JLogo()'></span> provides three basic classes to support:
    1. The Html class repackages the JS Document to achieve a more convenient way to write Document elements;
    2. Part class, here it is agreed that all developed component classes must inherit the Part class. In this way, it is convenient for users to realize the use of components by binding data, setting references, and handling events in an agreed manner.
    3. Web class, through the analysis of the agreed tags of the page, so that <span data-source='JPart' data-part='JLogo()'></span> is applied to the page.

    Secondly, <span data-source='JPart' data-part='JLogo()'></span> provides some basic components:
    1. Provide components for logos, slides, navigation bars, banners, lists, graphic previews, and full text reading on the page;
    2. You can use those components to design your page like this site;
    3. The most important thing is that you can not only develop them based on conventions, but you can also use them on the page without restrictions, or even publish them to share with other users.

    Finally, <span data-source='JPart' data-part='JLogo()'></span> has an ultimate dream:
    1. There is a shared platform for high-level developers to submit design components.
    2. Users who need it, download the required components, like building blocks, and build the pages they need. This user can be compvar ely zero-based.
    3. When the shared components reach a certain number, you may not need front-end personnel.
    
    <span data-source='JPart' data-part='JLogo()'></span> is able to do this, and this is my motivation to perfect it again and again.
    
    <span data-source='JPart' data-part='JLogo()'></span> is so easy, you can try to use it in your projects, hopefully you will like it more and more.`,
};

var tail = {
    title: "Thank You!",
    subtitle: "Code licensed under The MIT License. Documentation licensed under CC BY 3.0.",
    content: "Copyright © 2014-2021 Jiang YouHua",
};

// document
var catalog = [{
    title: "About <span data-source='JPart' data-part='JLogo()'></span>",
    href: "#about",
}, {
    title: "How use <span data-source='JPart' data-part='JLogo()'></span>",
    href: "#how-use",
    children: [{
        title: "data-source",
        href: "#data-source",
        children: [
            {
                title: "Literals",
                href: "#literals"
            }, {
                title: "JS Variables",
                href: "#js-variables"
            }, {
                title: "HTTP Data",
                href: "#http-data"
            },
        ]
    }, {
        title: "data-fore",
        href: "#data-fore"
    }, {
        title: "data-back",
        href: "#data-back"
    }, {
        title: "data-part",
        href: "#data-part"
    }]
}, {
    title: "The Parts of <span data-source='JPart' data-part='JLogo()'></span>",
    href: "#the-parts",
    children: [{
        title: "Article Part",
        href: "#article-part"
    }, {
        title: "Guide Part",
        href: "#guide-part"
    }, {
        title: "List Part",
        href: "#list-part"
    }, {
        title: "Logo Part",
        href: "#logo-part"
    }, {
        title: "Navigation Part",
        href: "#navigation-part"
    }, {
        title: "Paging Part",
        href: "#paging-part"
    }, {
        title: "Previews Part",
        href: "#previews-part"
    }, {
        title: "Slideshow Part",
        href: "#slideshow-part"
    }, {
        title: "Table Part",
        href: "#table-part"
    }]
}, {
    title: "Your Part of <span data-source='JPart' data-part='JLogo()'></span>",
    href: "#your-part",
    children: [{
        title: "The Core Library",
        href: "#the-core",
        children: [{
            title: "Web Class",
            href: "#web-class"
        }, {
            title: "Html Class",
            href: "#html-class"
        }, {
            title: "Part Class",
            href: "#part-class"
        }]
    }, {
        title: "Your Class of Part",
        href: "#your-class",
        children: [{
            title: "Data of Your Part",
            href: "#data-of"
        }, {
            title: "Config of Your Part",
            href: "#config-of"
        }, {
            title: "_style() of Your Part",
            href: "#style-of"
        }, {
            title: "_layout() of Your Part",
            href: "#layout-of"
        }]
    }],
    split: true
}, {
    title: 'At Last',
    href: '#at-last',
}];

var guide = [
    {
        title: "About <span data-source='JPart' data-part='JLogo()'></span>",
        content: "<span data-source='JPart' data-part='JLogo()'></span> is a very simple, lightweight and wonderful front-end framework. It contains two parts, the core and parts. You only need to spend 5 minutes to be familiar with and use it, below, let's see how to use <span data-source='JPart' data-part='JLogo()'></span>. ",
        split: true,
        id: 'about',
    },
    {
        title: "How use <span data-source='JPart' data-part='JLogo()'></span>",
        content: "<span data-source='JPart' data-part='JLogo()'></span> uses 4 HTML5 data-attributes, namely data-source, data-fore, data-back, and data-part. We will use <span data-source='JPart' data-part='JLogo()'></span> through these four Attributes. The functions of these four attributes are: First, obtain data through data-source; then, after data is processed by data-fore, pass the data-part output; finally, data-back is used as a callback function. Before we start, we need to introduce the <span data-source='JPart' data-part='JLogo()'></span> core library into the page.",
        code: "<script src='./jpartcore.js'></script>",
        id: 'how-use',
        children: [
            {
                title: '1. data-source ',
                content: 'The data-source is necessary. Its value specifies the data source for the current block. There are three types of data sources, literals, JS variables and HTTP data. ',
                id: 'data-source',
                children: [
                    {
                        title: 'A. Literals',
                        content: 'The value of data-source is used directly.',
                        code: '<div data-source="I am literal."></div>',
                        id: 'literals',
                    }, {
                        title: 'B. JS Variables',
                        content: 'The usage is the same as embedding the js variable in the string. The value comes from three places, the js variable, the value of search in the url, and the value of the form name. This order is also its priority. First, check whether there is a matching variable name in js; if not, check whether there is a matching search name in the url; if not, finally check whether there is a matching name value in the form.',
                        id: 'js-variables',
                        code: `<script> 
    var jsValue = "I am js variable";
    var otherValue = "I am other value";
    function hello(){
        return "Hello World!";
    }
</script>
<input type="hidden" name="formValue" value="I am the value of the form name">
<div data-source="\${jsValue} and \${otherValue}."></div>
<div data-source="\${searchValue} say: '\${hello()}'"></div>
<div data-source="\${formValue} is \${2+2}."></div>`,
                    }, {
                        title: 'C. HTTP Data',
                        content: `There are three situations for obtaining data from HTTP. The first is a text file, the content of which is obtained and displayed according to the developer's needs. The second type is the file supported by HTML5 for display, which is displayed directly by HTML. The third type is other files, showing links to the files.`,
                        id: 'http-data',
                        code: `<ol>
    <li data-source="./file/data.json"></li>
    <li data-source="./file/data.txt"></li>
    <li data-source="./file/data.png"></li>
    <li data-source="./file/data.mp3"></li>
    <li data-source="./file/data.mp4"></li>
    <li data-source="./file/data.js"></li>
</ol>`
                    }
                ],
            },
            {
                title: '2. data-fore',
                content: 'Process the data through the specified function to make the data meet the requirements of output or component use.',
                id: 'data-fore',
                code: `<script> 
    var foreValue = "I am the variable of the fore function."; 
    function add(dom, data){ 
        return data + " The data is passed to the add program for processing." 
    } 
</script>
<div data-source="\${foreValue}" data-fore="add()"></div>`
            },
            {
                title: '3. data-back',
                content: 'It is equivalent to a callback function, which calls the specified function after the data is output.',
                id: 'data-back',
                code: `<script> 
    var backValue = "I am the variable of the back function."; 
    var myName = 'Jiang Youhua'
    function show(dom, data, word, name){ 
        let p = new Html('p', data + ' I can say: "' + word + ' ' + name + '".');
        dom.appendChild(p.toElement()) ;
    } 
</script>
<div data-source="\${backValue}" data-fore="add()" data-back="show('Hello World!', myName)"></div>`
            }, {
                title: '4. data-part',
                content: "Please refer to the following: The Parts of <span data-source='JPart' data-part='JLogo()'></span>.  ",
                id: 'data-part',
                split: true,
            }
        ],
    }, {
        title: "The Parts of <span data-source='JPart' data-part='JLogo()'></span>",
        content: 'Design common blocks of web pages as components, and bind data to the components to display them in their own way.',
        id: 'the-parts',
        code: `<div ... data-part="Part(value, ...)" ...><div>
<div ... data-part='Part().Map({key:value, ...})'><div>`,
        children: [{
            title: "1. Article Part",
            content: `JArticle(columnNumber, titleTag, subtitleTag, titleAlign, contentAlign, infoAlign, previewLine). 
            * 1 columnNumber = 1, number of sub-column.
            * 2 titleTag ='h1', title size.
            * 3 subtitleTag ='h3', subtitle size.
            * 4 titleAlign ='center', title alignment.
            * 5 contentAlign ='left', text alignment.
            * 6 infoAlign ='right', information alignment.
            * 7 imageHeight = '100px' image height.`,
            id: 'article-part',
            code: `<script>
    var poetry = {
        title: 'Who has seen the wind?',
        content: \`Who has seen the wind?  
        Neither I nor you.  
        But when the leaves hang trembling ,
        The wind is passing through.  
        Who has seen the wind?  
        Neither you nor I .  
        But when the trees bow down their heads , 
        The wind is passing by.\`,
        author: 'Christina Rossetti'
    }
</script>
<div data-source="\${poetry}" data-part="JArticle(2, 'h3')"></div>`,
        }, {
            title: "2. Guide Part",
            content: `JGuide(darkCodeStyle, titleSize,  activeColor).
            * 1 darkCodeStyle = true, whether the code is dark style.
            * 2 titleSize ='h1', title size.
            * 3 activeColor ='red', the color of the current item.
            Currently using Gulide Part.`,
            id: 'guide-part',
        }, {
            title: "3. List Part",
            content: `JList(isUl).
            * 1 isUl = true, whether it is an unordered list.`,
            id: 'list-part',
            code: `<script>
function replaceClick(dom, data){
    if(!isArray(data)){
        return;
    }
    var replace = function(data){
        for(let i = 0; i < data.length; i++){
            let obj = data[i];
            obj['onclick']=\`alert('\${obj.href}'); return false;\`;
            obj.href = '#';
            if (!!obj.children){
                replace(obj.children);
            }
        }
        return data;
    }
    return replace(data);
}
</script>
<div data-source="\${navigations}" data-fore='replaceClick()' data-part='JList(false)'></div>`,
        }, {
            title: "4. Logo Part",
            content: `JLogo(isJustified, backgroundColor, borderRadius, titleSplit, titleSize, titleFont, titleForeColor, titleHindColor, contentSize, contentFont, contentColor).
            * 1 isJustified = false, whether the two ends are aligned.
            * 2 backgroundColor = "#222", background color.
            * 3 borderRadius = '4px', rounded corners of the border.
            * 4 titleSplit = 1, title split position.
            * 5 titleSize ='', the size of the title text.
            * 6 titleFont ='Abel', title font.
            * 7 titleForeColor ='#FF7D00', the color of the front part of the title.
            * 8 titleHindColor ='#00ffd4', the color of the back part of the title.
            * 9 contentSize ='', the size of the content text.
            * 10 contentFont ='', title font.
            * 11 contentColor ='#888', content color.`,
            id: 'logo-part',
            code: `<div data-source="JPart" data-part='JLogo()'></div>
<div data-source="JiangYouhua" data-part='JLogo().Map({titleSplit:5, titleFont:"Times"})'></div>
<div data-source='\${logo}' data-part='JLogo(true, , , , "36px", , , , , , "#eee")'></div>`,
        }, {
            title: "5. Navigation Part",
            content: `JNavigation(isUl, textColor, fontSize, lineHeight).
            * 1 textColor = '#000', text color.
            * 2 fontSize = '24px', font size.
            * 3 lineHeight = '72px', line height.`,
            id: 'navigation-part',
            code: `<script>
function changeTitle(dom, data){
    if(!isArray(data)){
        return;
    }
    var change = function(data){
        for(let i = 0; i < data.length; i++){
            let obj = data[i];
            obj['onclick']=\`alert('\${obj.title}'); return false;\`;
            obj.href = '#';
            if (!!obj.children){
                change(obj.children);
            }
        }
        return data;
    }
    return change(data);
}
</script>
<div data-source="\${navigations}" data-fore='changeTitle()' data-part='JNavigation(, , "16px", "32px")'></div>`,
        }, {
            title: "6. Paging Part",
            content: `JPaging(showNumber, textAlign, urlKey, urlSearch).
            * 1 showNumber = 7, show page number.
            * 2 textAlign ='center', alignment.
            * 3 urlKey ='page', the keyword displayed in the URL.
            * 4 urlSearch = true, is it displayed in the search of the URL?`,
            id: 'paging-part',
            code: `<script>
function pageChange(dom, data){
    if(!data){
        return;
    }
    let search = new URLSearchParams(location.search.substring(1));
    let i = search.get('page');
    return {count:parseInt(data), position: parseInt(i)};
}
</script>
<div data-source="100" data-fore='pageChange()' data-part='JPaging()'></div>`,
        }, {
            title: "7. Previews Part",
            content: `JPreviews(columnNumber, contentLine,  titleSize, titleAlign, contentAlign, imageRadius).
            * 1 columnNumber = 4, the number of columns.
            * 2 contentLine = 5, the number of content display lines.
            * 3 titleSize ='h3', title size.
            * 4 titleAlign ='left', title alignment.
            * 5 contentAlign ='left', content alignment.
            * 6 imageRadius = '4px', the image has rounded corners.`,
            id: 'previews-part',
            code: `<script>
var previews = [
    {
        title: 'Preview 1',
        content: 'Preview 1 Content.',
        image:'./file/p1.png',
    },
    {
        title: 'This Block is Preview 2',
        content: 'Preview 2 Content. The excess content will be omitted, and the default value is 5 lines.',
        image:'./file/p2.png',
    },
    {
        title: 'Preview 3',
        content: 'Preview 3 Content.',
        image:'./file/p3.png',
    },
    {
        title: 'Preview 4',
        content: 'Preview 4 Content. The content of this piece exceeds 5 lines. The excess content will be omitted, and the default value is 5 lines.',
        image:'./file/p4.png',
    },
]
</script>
<div data-source='\${previews}'  data-part='JPreviews()'></div>`,
        }, {
            title: "8. Slideshow Part",
            content: `JSlideshow(duration, titleColor, contentColor, pointColor, currentPointColor, background, titleSize, contentSize, titleFontFamily).
            * 1 duration = 3000, the switching time, in milliseconds.
            * 2 titleColor ='white', title color.
            * 3 contentColor ='white', content color.
            * 4 pointColor ='white', the color of the point.
            * 5 currentPointColor ='red', the color of the current point.
            * 6 background = '#222', the color of the background.
            * 7 titleSize = '148px', the size of the title.
            * 8 contentSize = '26px', the size of the content.
            * 9 titleFontFamily ='Indie Flower', the font of the label.`,
            id: 'slideshow-part',
            code: `<div data-source="\${jads}" data-part='JSlideshow(1000, "#000", "#333", "#00f", , "","72px", "16px", "Time")'></div>`,
        }
            , {
            title: "9. Table Part",
            content: `JTable(href, showHead, headBackground, trEvenBackground, trOddBackground, headColor, bodyColor,  horizontalLine, verticalLine, tdHeight).
            * 1 showHead = true, whether to show the header;
            * 2 headBackground ='#ddd', table against background.
            * 3 trEvenBackground ='#eee', form row background.
            * 4 trOddBackground ='#fff', table double row background.
            * 5 headColor ='#000', the head color.
            * 6 bodyColor ='#000', the color of the table body.
            * 7 horizontalLine ='#bbb', horizontal line.
            * 8 verticalLine ='#bbb', vertical line.`,
            id: 'table-part',
            code: `<script>
var students = [
    {Name: "Abel", Age: 12, Score: 5},
    {Name: "John", Age: 11, Score: 4},
    {Name: "Leila", Age: 13, Score: 4},
    {Name: "Tracy", Age: 10, Score: 5},
    {Name: "Sara", Age: 12, Score: 2},
    {Name: "Ayn", Age: 13, Score: 3},
]
</script>
<div data-source="\${students}" data-part='JTable()'></div>`,
        }],
        split: true,
    }, {
        title: "Your Part of <span data-source='JPart' data-part='JLogo()'></span>",
        content: `You need to understand the <span data-source='JPart' data-part='JLogo()'></span> core library before customizing your own Part. 
        After you understand the nuclear library, you can write your own <span data-source='JPart' data-part='JLogo()'></span> parts.`,
        id: 'your-part',
        children: [
            {
                title: 'The Core Library',
                content: "The core library of <span data-source='JPart' data-part='JLogo()'></span> has three main classes, Web, Html, and Par.",
                id: 'the-core',
                children: [
                    {
                        title: 'Web Class',
                        content: "Use window.onload() to parse the label containing the data-source and output it according to the <span data-source='JPart' data-part='JLogo()'></span> convention.",
                        id: 'web-class',
                        code: `// The page is loaded.
1. window.onload()
// Format with Web objects.
2. web.Format(document.body);
// Find out all the nodes that currently contain data-source.
2.1. let nodes = this._select(selector);
// parse each node.
2.2. this._analysis(note, set);
// Get data from the data source.
2.2.1. let data = this._source(set.source);
// Perform output processing on the acquired data. Determine whether fore and part exist.
2.2.2. data = _output(dom, data, fore, part);
// Both do not exist, output directly.
2.2.2.1. this._domAddData(dom, data).
// If fore exists, go through fore processing.
2.2.2.2. var d = this._func(dom, data, str);
// If the part is stored, then process it to the part.
2.2.2.3. this._eval(str)(dom, d).Html();
// Call the callback function after the data is output.
2.2.4. this._func(dom, data, set.back);
// Change the data in the setting range after data output, that is, return to 2.
2.2.5. this.Format(set.affect);
// Perform JPart application on the output data, that is, the sub-data of the current DOM, and return to 2.
2.2.5. this.Format(dom);`
                    }, {
                        title: 'Html Class',
                        content: `To simply encapsulate the HTML DOM Document, you can use new Html() to create an HTML DOM Document object.
                        Html(_tag = 'div', _content, _attr = {}, _class = [], _style = {})
                        setTag(tag) 
                        addContent(content)
                        removeContent() 
                        setStyle(key, value)
                        removeStyle(key)
                        setStyleWithObject(object)
                        setAttr(key, value) 
                        removeAttr(key) 
                        setAttrWithObject(object) 
                        addClass(...name) 
                        removeClass(...name) 
                        toString()
                        toElement() 
                        clone() `,
                        id: 'html-class',
                        code: `<script>
var myHtml = new Html('div', 'I am a object of Html.')
</script>
<div data-source='\${myHtml}'></div>`,
                    }, {
                        title: 'Part Class',
                        content: `It provides a base class for <span data-source='JPart' data-part='JLogo()'></span> development parts. Since the bottom layer of <span data-source='JPart' data-part='JLogo()'></span> is an Html object, it has reconstructed a series of Html methods. Please refer to the Html object, so it is no longer marked here.
                        Part().
                        Map(obj), 
                        setData(data),
                        setSort(sort),
                        toElement(),
                        toHtml(),
                        `,
                        id: 'part-class',
                        code: `<script>
var myPart = (new Part()).toHtml();
</script>
<div data-source='\${myPart}'></div>`,
                    },
                ]
            }, {
                title: 'Your Class of Part',
                content: "To realize your own <span data-source='JPart' data-part='JLogo()'></span> parts, you need to pay attention to the following four points:",
                id: 'your-class',
                code: `class YourPart extends Part {
    ...
}`,
                children: [
                    {
                        title: "Data of Your Part",
                        content: "Each part of <span data-source='JPart' data-part='JLogo()'></span> has its own required data, you can write it in the head of the Part Class by using _data = {title:'', content:''}.",
                        id: 'data-of',
                        code: `class YourPart extends Part {
    _data = {
        title: '',
        content: '',
        image: '',
        href: '',
    }

    // Over Write.
    _dataFromString(str){
        if(!!isString(str)){
            return;
        }
        _data.title = str;
    }
    ...
}`
                    }, {
                        title: "Config of Your Part",
                        content: "The data of Config is passed in through the parameters of the constructor, and you need to call Map() to allow the user to set Cofing by key-value pairs.",
                        id: "config-of",
                        code: `class JLogo extends Part {
    _data = {
        title: '',
        content: '',
        image: '',
        href: '',
    }

    constructor(config1, config2, ...) {
        super();

        this.config1 = default;
        this.config2 = default;
        ...

        this.Map({
            config1: config1,
            config2: config2,
            ...
        });
    }
    ...
}`
                    }, {
                        title: "_style() of Your Part",
                        content: "You need to override _style() to set the style of the current part.",
                        id: "style-of",
                        code: `class JLogo extends Part {
    _data = {
        title: '',
        content: '',
        image: '',
        href: '',
    }

    constructor(config1, config2, ...) {
        super();

        this.config1 = default;
        this.config2 = default;
        ...

        this.Map({
            config1: config1,
            config2: config2,
            ...
        });
    }
    ...

    _style(){
        return \`
            #\${this._id} {
                text-align: center; 
                color: black;
                ...
            } 
            ...
        \`;
    }
}`
                    }, {
                        title: "_layout() of Your Part",
                        content: "You need to rewrite _layout() to design the output of the data.",
                        id: "layout-of",
                        code: `class JLogo extends Part {
    _data = {
        title: '',
        content: '',
        image: '',
        href: '',
    }

    constructor(config1, config2, ...) {
        super();

        this.config1 = default;
        this.config2 = default;
        ...

        this.Map({
            config1: config1,
            config2: config2,
            ...
        });
    }
    ...

    _style(){
        return \`
            #\${this._id} {
                text-align: center; 
                color: black;
                ...
            } 
            ...
        \`;
    }

    _layout(){
        if(!!this._data.title){
            let a = new Html('a', this._data.title);
            ...
            this._html.addContent(a);
        }
        ...
    }
}`
                    }
                ]
            }
        ]
    }, {
        title: "At Last",
        content: "Remember, for most users, you only need to understand the second point, <a href=#how-use>How use <span data-source='JPart' data-part='JLogo()'></span></a>'.",
        id: "at-last"
    }
];

var load = [
    {
        Index: 1,
        Name: 'JPart Core',
        href: './jpart/partcore.js',
        Link: 'The Core of JPart.',
        Edition: '2.0.1',
        Date: '2021.03.10'
    }, {
        Index: 2,
        Name: 'JArticle',
        href: './jpart/jarticle.js',
        Link: 'The Article Part of JPart.',
        Edition: '2.0.1',
        Date: '2021.03.10'
    }, {
        Index: 3,
        Name: 'JGuide',
        href: './jpart/jguide.js',
        Link: 'The Guide Part of JPart.',
        Edition: '2.0.1',
        Date: '2021.03.10'
    }, {
        Index: 4,
        Name: 'JList',
        href: './jpart/jlist.js',
        Link: 'The List Part of JPart.',
        Edition: '2.0.1',
        Date: '2021.03.10'
    }, {
        Index: 5,
        Name: 'JLogo',
        href: './jpart/JLogo.js',
        Link: 'The Logo Part of JPart.',
        Edition: '2.0.1',
        Date: '2021.03.10'
    }, {
        Index: 6,
        Name: 'JNavigation',
        href: './jpart/jnavigation.js',
        Link: 'The Navigation Part of JPart.',
        Edition: '2.0.1',
        Date: '2021.03.10'
    }, {
        Index: 7,
        Name: 'JPaging',
        href: './jpart/jpaging.js',
        Link: 'The Paging Part of JPart.',
        Edition: '2.0.1',
        Date: '2021.03.10'
    }, {
        Index: 8,
        Name: 'JPreviews',
        href: './jpart/jpreviews.js',
        Link: 'The Previews Part of JPart.',
        Edition: '2.0.1',
        Date: '2021.03.10'
    }, {
        Index: 9,
        Name: 'JSlideshow',
        href: './jpart/jslideshow.js',
        Link: 'The Slideshow Part of JPart.',
        Edition: '2.0.1',
        Date: '2021.03.10'
    }, {
        Index: 10,
        Name: 'JTable',
        href: './file/jtable.js',
        Link: 'The Table Part of JPart.',
        Edition: '2.0.1',
        Date: '2021.03.10'
    }
]

// function
function navigationActive(dom, data) {
    if (!isArray(data)) {
        return;
    }
    let name = location.pathname;
    if (name == '/') {
        name = '/index.html'
    }

    var check = function (data) {
        for (let i = 0; i < data.length; i++) {
            let obj = data[i];
            if (!obj.href) {
                continue;
            }
            let url = new URL(obj.href.replace('./', location.origin + '/'));
            obj.active = url.pathname == name;
            if (!!obj.children) {
                check(obj.children);
            }
        }
        return data;
    }
    return check(data);
}

