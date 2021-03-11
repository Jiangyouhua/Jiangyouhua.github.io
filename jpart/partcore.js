/**
 * Determine whether it is a non-empty string.
 * @param s
 * @returns {boolean}
 * @private
 */
function isString(s) {
    return (!!s && typeof s == "string" && s.length > 0);
}

/**
 * Determine whether it is a non-empty array.
 * @param a
 * @returns {boolean}
 * @private
 */
function isArray(a) {
    return (!!a && (a instanceof Array) && a.length > 0);
}

/**
 * Determine whether it is an object.
 * @param o
 * @returns {boolean}
 * @private
 */
function isObject(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
}

/**
 * Determine whether it is a function.
 * @param f
 * @returns {boolean}
 * @private
 */
function isFunction(f) {
    return (!!f && typeof f == "function");
}

/**
 * Determine whether the string is a URL.
 * @param u
 * @returns {boolean}
 * @private
 */
function isUrl(url) {
    if (!isString(url)) {
        return false;
    }
    let re = new RegExp("^\./{1}|^/{1}|\.\w{2,6}$|\.\w{2,6}\?|\.\w{2,6}\#");
    return re.test(url);
}

/**
 * Determine whether the string is the URL of the picture.
 * @param url
 * @returns {boolean}
 * @private
 */
function isImageUrl(url) {
    if (!url) {
        return false;
    }
    let re = /\.(png|jpg|gif|jpeg|webp)$/gi;
    return re.test(url);
}

/**
 * Determine whether the string is an audio URL.
 * @param url
 * @returns {boolean}
 * @private
 */
function isAudioUrl(url) {
    if (!url) {
        return false;
    }
    let re = /\.(mp3|webm|ogg|wav|acc)$/gi;
    return re.test(url);
}

/**
 * Determine whether the string is the URL of the video.
 * @param url
 * @returns {boolean}
 * @private
 */
function isVideoUrl(url) {
    if (!url) {
        return false;
    }
    let re = /\.(mp4|webm|ogg)$/gi;
    return re.test(url);
}

/**
 * Determine whether the string is an Ajax URL.
 * @param url
 * @returns {boolean}
 * @private
 */
function isAjaxUrl(url) {
    if (!url) {
        return false;
    }
    let re = /\.(html|htm|shtml|shtl|asp|aspx|jsp|php|phtml|txt|xml|ini|json)$/gi;
    return re.test(url);
}

/**
 * Determine whether it is a Document object.
 * @param obj
 * @returns {boolean}
 * @private
 */
function isDOM(obj) {
    return (typeof HTMLElement === 'object') ? obj instanceof HTMLElement : obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
}

/**
 * Equivalent to eval function.
 * @param s
 * @returns {boolean}
 * @private
 */
function evalJS(s) {
    if (!isString(s)) {
        return s;
    }
    try {
        return Function('"use strict"; return (' + s + ')')();
    } catch (e) {
        console.log(s, e);
    }
}

/**
 * TML Class:
 * Encapsulate the Document and use the new Html() method to create the Document element.
 * Element(), 输出DOM.Element
 */

class Html {

    children = [];

    constructor(_tag = 'div', _content, _attr = {}, _class = [], _style = {}) {
        this.setTag(_tag);
        this.addContent(_content);
        this.setAttrWithObject(_attr);
        this.addClass(..._class);
        this.setStyleWithObject(_style);
    }

    init(element) {
        this._element = element;
        return this;
    }

    // Set Html Tag。
    setTag(tag) {
        if (!isString(tag)) {
            tag = 'div';
        }
        // Use Document Element。
        if (!this._element) {
            this._element = document.createElement(tag);
            return this;
        }

        // Update。
        let e = this._element;
        this._element = document.createElement(tag);
        this._element.innerHTML = e.innerHTML;
        let names = e.getAttributeNames();
        for (let i in names) {
            let key = names[i];
            let value = e.getAttribute(key);
            this._element.setAttribute(key, value);
        }
        return this;
    }

    // Add Single Content。
    addContent(content) {
        if (!content) {
            return this;
        }
        
        if (content instanceof Html) {
            this._element.appendChild(content.toElement());
            this.children.push(content)
            return this;
        }
        if (content instanceof Node || content instanceof HTMLDivElement) {
            this._element.appendChild(content);
            this.children.push(new Html().init(content))
            return this;
        }
        if (content instanceof Array) {
            for (let i = 0; i < content.length; i++) {
                this.addContent(content[i]);
            }
            return this;
        }

        let s = "";
        switch (typeof content) {
            case 'object':
                s = JSON.stringify(content);
                break;
            case 'string':
                s = content;
                break;
            default:
                s = content.toString()
        }
        this._element.innerHTML += s;
        this.children.push(new Html('', ))
        return this;
    }

    // Add Multi-Content.
    addContents(...contents){
        for(let i = 0; i < contents.length; i++){
            this.addContent(contents[i]);
        }
    }

    // Remove Content.
    removeContent() {
        this._element.innerHTML = '';
        this.children = [];
        return this;
    }

    /** Style */

    // Set HTML Style Attributes.
    setStyle(key, value) {
        if (!isString(key)) {
            return this;
        }
        if (!isString(value)) {
            value = '';
        }
        this._element.style[key] = value;
        return this;
    }

    // Remove HTML Style Attributes.
    removeStyle(key) {
        delete this._element.style[key];
        return this;
    }

    // Set HTML Style Attributes With Object.
    setStyleWithObject(object) {
        if (!object) {
            return this;
        }
        for (let key in object) {
            this.setStyle(key, object[key]);
        }
        return this;
    }

    /** Attr */
    // Set HTML Attributes.
    setAttr(key, value) {
        if (!isString(key)) {
            return this;
        }
        if (!isString(value)) {
            value = '';
        }
        this._element.setAttribute(key, value);
        return this;
    }

    // Remove HTML Attributes.
    removeAttr(key) {
        if (!isString(key)) {
            return this;
        }
        delete this._element.removeAttribute(key);
        return this;
    }

    // Set HTML Attributes With Object.
    setAttrWithObject(object) {
        if (!object) {
            return this;
        }
        for (let key in object) {
            this.setAttr(key, object[key]);
        }
        return this;
    }

    /** Class */
    // Set HTML Class Attributes.
    addClass(...name) {
        if (!isArray(name)) {
            return this;
        }
        this._element.classList.add(...name);
        return this;
    }

    // Remove HTML Class Attributes.
    removeClass(...name) {
        if (!isArray(name)) {
            return this;
        }
        this._element.classList.remove(...name);
        return this;
    }

    // Object of Html to String.
    toString() {
        let e = this.toElement();
        let d = document.createElement('div');
        d.appendChild(e);
        return d.innerHTML;
    }

    // Object of Html to Document Element.
    toElement() {
        this._activeScript();
        return this._element;
    }

    // Clone.
    clone() {
        return Object.create(this);
    }

    _activeScript() {
        let arr = this._element.getElementsByTagName('script');
        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i];
            let script = document.createElement("script");
            script.type = "text/javascript";
            script.text = obj.innerHTML;
            document.getElementsByTagName("head")[0].appendChild(script);
            document.head.removeChild(document.head.lastChild);
        }
    }
}

/**
 * 
 * Part Class.
 * Private Property.
 * 1. _data, data of Part。
 * 2. _html, Bottom Container of Part.
 * 3. _id, Html id Attribute。
 * 4. _sort, Sequence Number in Layout。
 * Abstract method。
 * 1. _dataFromString(), Convert Literal Into Data of Part.
 * 2. _style(), Realize the Function of Style Code.
 * 3. _layout(), Realize the Function of Part Layout.。
 * Output method.
 * 1. toHtml()，Part to Html。
 * 2. toElement()，Part to Document Element。
*/
class Part {

    _data;
    _html = new Html();
    _id = '';
    _sort = 0;

    Map(obj) {
        if (!isObject(obj)) {
            return this;
        }
        for (let key in obj) {
            let re = obj[key];
            if (re === undefined) {
                continue;
            }
            this[key] = re;
        }
        return this;
    }

    setData(data) {
        if (!data) {
            return this;
        }
        if (typeof data == 'string') {
            try {
                this._data = JSON.parse(str);
            } catch (e) {
                if(isArray(this._data)){
                    this._data = [];
                } else {
                    this._data = {};
                }
                this._dataFromString(data);
            }
            return this;
        }
        this._data = data;
        return this;
    }

    setSort(sort) {
        this._sort = sort;
        this._id = this._getId();
        window[this._id] = this;
        return this;
    }

    setTag(tag) {
        this._html.setTag(tag);
        return this;
    }
 
    setContent(content) {
        this._html.setContent(content);
        return this;
    }

    addContent(content) {
        this._html.addContent(content);
        return this;
    }

    setStyle(key, value) {
        this._html.setStyle(key, value);
        return this;
    }

    addStyle(key, value) {
        this._html.addStyle(key, value);
        return this;
    }

    removeStyle(key) {
        this._html.removeStyle(key);
        return this;
    }

    setStyleWithObject(object) {
        this._html.setStyleWithObject(object);
        return this;
    }

    addStyleWithObject(object) {
        this._html.addStyleWithObject(object);
        return this;
    }

    setAttr(key, value) {
        this.setAttr(key, value);
        return this;
    }

    setAttr(key, value) {
        this.setAttr(key, value);
        return this;
    }

    removeAttr(key) {
        this._html.removeAttr(key);
        return this;
    }

    setAttrWithObject(object) {
        this._html.setAttrWithObject(object);
        return this;
    }

    addAttrWithObject(object) {
        this._html.addAttrWithObject(object);
        return this;
    }

    setClass(name) {
        this._html.setClass(name);
        return this;
    }

    addClass(name) {
        this._html.addClass(name);
        return this;
    }

    setClassWithArray(array) {
        this._html.setClassWithArray(array);
        return this;
    }

    addClassWithArray(array) {
        this._html.addClassWithArray(array);
        return this;
    }

    toElement() {
        return this.toHtml().toElement();
    }

    toHtml() {
        this._css()
        this._layout();
        this._html.setAttr('id', this._id);
        return this._html;
    }

    _operateNumbersInString(s, i, model = 0) {
        if (!isString(s)) {
            return s;
        }
        return s.replace(/(\d+\.\d+)|\d+/g, function (number) {
            let n = Number(number);
            switch (model) {
                case 1:
                    return n - i;
                case 2:
                    return n * i;
                case 3:
                    return n / i;
                default:
                    return n + i;
            }
        });
    }

    _getId(tag, index = 0) {
        let s = `_${tag}`;
        if (!tag) {
            s = '';
        }
        return `${this.constructor.name}${s}_${this._sort}_${index}`;
    }

    _getClass(tag) {
        let s = `_${tag}`;
        if (!tag) {
            s = '';
        }
        return `${this.constructor.name}${s}`;
    }

    _css() {
        let style = new Html('style', this._style(), { type: 'text/css' })
        this._html.addContent(style);
    }

    _dataFromString(str) {
        console.log(`${this.constructor.name}._dataFromString() needs to be overwrite.`)
    }

    _style() {
        console.log(`${this.constructor.name}._style() needs to be overwrite.`)
    }

    _layout() {
        console.log(`${this.constructor.name}._layout() needs to be overwrite.`)
    }
}

/**
 * Realize the use of Jpart for Html.
 * 1、data-source = string, Data Source, Provide a Source for Jart Data.
 * 2、data-fore = function, The Processing Procedure Before Data Output.
 * 3、data-back = funciton, The Processing Procedure After Data Output.
 * 4、data-part = JPart, JPart Specify the JPart Parts Used.
 */

class Web {
    width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    count = 0;  // Count of Part。
    constructor() {

    }

    _parser(s) {
        // Literal.
        let pattern = /\${.+}/g;
        if (!pattern.test(s)) {
            return s
        }

        // Single JS Object.
        let a = s.match(/(?<=^\${)\w+(.{1}\w+)*(?=}$)/g);
        if (!!a) {
            return this._matchObject(a[0]);
        }

        // Multiple JS Objects.
        let it = this;
        s = s.replace(/\${\w+(.{1}\w+)*}/g, function (word) {
            let s = word.substring(2, word.length - 1);
            return it._matchObject(s);
        })

        // Literal.
        if (!pattern.test(s)) {
            return s
        }
        return evalJS('`' + s + '`');
    }

    // Match Object.
    _matchObject(word) {
        if (word.length == 0) {
            return '';
        }

        // JS Variable
        let s = this._valueFromWindow(word);
        if (!!s) {
            return s;
        }

        // URL.Search.
        s = this._valueFromUrl(word);
        if (!!s) {
            return s;
        }

        // Input。
        s = this._valueFromForm(word);
        if (!!s) {
            return s;
        }

        s = evalJS(word);
        if (!!s) {
            return s
        }
        return word;
    }

    _valueFromWindow(key) {
        // JS Variable。
        if (!(key in window)) {
            return;
        }
        let a = window[key];

        // Clone。
        if (a instanceof Array) {
            return JSON.parse(JSON.stringify(a));
        }
        if (isObject(a)) {
            return Object.create(a);
        }
        return a;
    }

    _valueFromUrl(key) {
        // URL.Search。
        let search = new URLSearchParams(location.search.substring(1));
        if (search.has(key)) {
            return search.get(key);
        }
        return;
    }

    _valueFromForm(key) {
        // Input Value.
        let items = document.getElementsByName(key);
        if (items === undefined || items.length == 0) {
            return '';
        }

        let s = [];
        for (let i = 0; i < items.length; i++) {
            s.push(items[i].value);
        }
        if (s.length == 1) {
            return s[0]
        }
        return s;
    }

    _func(dom, data, str) {
        if (!isString(str)) {
            return data;
        }

        let a = [dom, data];
        let i = str.lastIndexOf('(');
        let f = str.substring(0, i);
        let s = str.substring(i + 1, str.length - 1);
        if (!!s) {
            let args = s.split(',');
            for (let j = 0; j < args.length; j++) {
                let obj = args[j].trim()
                a.push(evalJS(obj));
            }
        }
        f = f.replace()
        return evalJS(f)(...a);
    }

    _class(dom, data, str) {
        if (!isString(str)) {
            return;
        }
        let p = str.replace(/(?<=[^\w'"]),/g, function (w) {
            return "undefined,";
        });
        let part = evalJS(`new ${p}`);
        if (!part || !(part instanceof Part)) {
            console.log(`${part} is definded`);
            return;
        }
        dom.appendChild(part.setData(data).setSort(this.count).toElement());
        this.count++;
    }

    _output(dom, data, fore, part) {
        if (!fore && !part) {
            return this._domAddData(dom, data);
        }
        if (!!fore) {
            data = this._func(dom, data, fore);
        }
        if (!part) {
            return this._domAddData(dom, data);
        }
        return this._class(dom, data, part);
    }

    _domAddData(dom, data) {
        if (!data) {
            return;
        }

        let tag = dom.tagName.toLowerCase();

        // src。
        if (tag == 'img' || tag == 'audio' || tag == 'video' || tag == 'script') {
            dom.src = data;
            return;
        }

        // href。
        if (tag == "link" || tag == 'a') {
            if (isUrl(data)) {
                dom.href = data;
                return;
            }
        }

        // name。
        if (tag == 'input' || tag == 'select') {
            dom.value = data;
            this.syncInput(dom);
            return;
        }

        // Not URL.
        if (!isUrl(data)) {
            let s = data.toString()
            if (data instanceof Object && !(data instanceof Html)) {
                s = JSON.stringify(data);
            }
            dom.innerHTML = s;
            return
        }

        // Image.
        if (isImageUrl(data)) {
            let img = new Html('img');
            img.setAttr('src', data);
            dom.appendChild(img.toElement());
            return;
        }

        // Audio.
        if (isAudioUrl(data)) {
            let audio = new Html('audio');
            audio.setAttr('src', data);
            audio.setAttr('controls');
            dom.appendChild(audio.toElement());
            return;
        }

        // Video.
        if (isVideoUrl(data)) {
            let video = new Html('video');
            video.setAttr('src', data);
            video.setAttr('controls');
            dom.appendChild(video.toElement());
            return;
        }

        // Other File。
        if (dom.tagName.toLowerCase() == 'a') {
            dom.href = data;
            return;
        }

        let a = new Html('a');
        a.setAttr('href', data);
        a.addContent(data.split('/').pop());
        dom.appendChild(a.toElement());
        return;
    }

    _select(selector) {
        if (!selector) {
            return [];
        }
        let ds = 'data-source';
        let dp = 'data-part';
        let tag = `[${ds}]:not(br, hr, param, meta, animateTransform), [${dp}]:not(br, hr, param, meta, animateTransform)`;
        if (isString(selector)) {
            if (selector.indexOf(ds) > -1) {
                return document.querySelectorAll(selector);
            }
            if (selector.indexOf(dp) > -1) {
                return document.querySelectorAll(selector);
            }
            let s = `${selector} ${tag}`;
            return document.querySelectorAll(s);
        }
        if (isDOM(selector)) {
            return selector.querySelectorAll(tag);
        }
        if (selector instanceof Html) {
            return selector.toElement().querySelectorAll(tag);
        }
        return [];
    }

    async _request(url) {

        let response = await fetch(url);
        if (!response.ok) {
            console.log(`HTTP error! status: ${response.status}`)
            return url;
        }
        let type = response.headers.get("content-type").split("/").pop()
        switch (type) {
            case "json":
                return await response.clone().json();
            default:
                return await response.text();

        }
    }

    async _source(dom, source) {
        if (!source) {
            return undefined;
        }

        // Parser。
        let result = this._parser(source);
        if (result === undefined) {
            return "";
        }
        // Nor Ajax Data。
        if (!isAjaxUrl(result)) {
            return result;
        }

        // URL。
        return await this._request(result);
    }

    async _analysis(dom, set) {
        let data = await this._source(dom, set.source);
        this._output(dom, data, set.fore, set.part);
        this._func(dom, data, set.back);
        this.Format(dom);
    }

    Format(selector) {
        let nodes = this._select(selector);
        if (nodes.length == 0) {
            return;
        }
        for (let x = 0; x < nodes.length; x++) {
            let note = nodes[x];
            let set = note.dataset;
            this._analysis(note, set);
        }
    }

    syncInput(input) {
        if (!isDOM(input)) {
            return;
        }
        let name = input.getAttribute("name");
        if (!isString(name)) {
            return;
        }
        this.Format(`[data-source*="${name}"]`);
    }
}

// Main.
window.onload = function () {
    let web = new Web();
    web.Format(document.body);
};
