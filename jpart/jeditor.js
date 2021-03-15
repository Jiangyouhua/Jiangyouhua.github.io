/**
 * JEditor, Edior JPart.
 * Jiang Youhua 2021.03.10
 * Edition 2.0.1
 * 1 darkCodeStyle = true, whether the code is dark style.
 */

class JEditor extends Part {

    _editor = new Html();
    _output = new Html();
    _count = 0;

    constructor(darkCodeStyle, titleSize, activeColor) {
        super();

        this.darkCodeStyle = true;

        this.Map({
            darkCodeStyle: darkCodeStyle,
        })
    }

    _dataFromString(s) {
        this._data = [{title: s}];
    }

    _style() {
        return `
        table#${this._id}{
            width:100%;
        }
        #${this._id} .editor {
            font-family: "Lucida Console", Courier, monospace;
            background-color: ${this.darkCodeStyle ? '#111' : '#eee'};
            border-radius: 5px;
            color: ${this.darkCodeStyle ? '#eee' : '#111'};
            padding: 1% 2%; 
            display: inline-block;
            width: 96%;
            height: 350px;
            vertical-align: top;
            overflow: auto;
        }
        #${this._id} .output {
            display: inline-block;
            width: 96%;
            border: #888 1px solid;
            height: 350px;
            border-radius: 5px;
            padding: 1% 2%; 
            vertical-align: top;
            overflow: auto;
            float: right;
        }
        #${this._id} .buttons {
            text-align: center;
            padding: 10px;
        }

        #${this._id} button{
            margin: 5px;
            width: 150px;
        }

        
        #${this._id} var {
            color: ${this.darkCodeStyle ? '#fff53b' : '#bf7704'};
        }
        
        #${this._id} tag {
            color: ${this.darkCodeStyle ? '#7fff00' : '#3e7903'};
        }
        
        #${this._id} string{
            color: ${this.darkCodeStyle ? '#ff7f50' : '#be3502'};
        }
        
        #${this._id} func{
            color: ${this.darkCodeStyle ? '#26befd' : '#0354a6'};
        }
        #${this._id} annotate{
            color: ${this.darkCodeStyle ? '#444' : '#bbb'};;
        }
        
        #${this._id} article {
            background-color: yellow;
            border-radius: 5px;
            display: block;
            padding: 10px 20px;
            margin: 5px;  
        }

        #${this._id} hr {
            margin: 40px 0 0 0;
        }

        #${this._id} button.empty{
            background-color: red;
            border-radius: 4px;
            border: 1px #666 solid;
        }

        #${this._id} button.apply{
            background-color: green;
            border-radius: 4px;
            border: 1px #666 solid;
        }
        
        .${this._getClass('block')} {
            padding: 20px 0;
        }
        `;
    }

    _layout() {
        let table = this._html;
        table.setTag('table')
        table.addClass("content");

        let td = new Html('td');
        td.setAttr('colspan', 3);
        let tr = new Html('tr', td)
        table.addContent(tr);

        td.addContent(new Html('p', 'Please enter your JPart application code in the edit area on the left, click the confirmation above, and the output area on the right will display the content after its application.'))
        td.addContent(new Html('br'));
        td.addContent(new Html("button", "Empty", { onclick: `${this._id}.emptyEditor()` }, ['empty']));
        td.addContent(new Html("button", "Apply", { onclick: `${this._id}.applyEditor()` }, ['apply']));
        td.addContent(new Html('br'));td.addContent(new Html('br'));

        let left = new Html('td', this._editor, {width: '49%'});
        let right = new Html('td', this._output);
        tr = new Html('tr');
        table.addContent(tr);
        tr.addContents(left, new Html('td', '&nbsp;', {width: '2%'}), right);
        table.addContent(tr);

        this._editor.addClass('editor');
        this._editor.setAttr('contenteditable', "true");
        this._editor.setAttr('onkeyup', `${this._id}.onKeyUp()`)
        this._output.addClass('output');
        
        td = new Html('td')
        td.addClass('buttons');
        tr = new Html('tr', td);
        table.addContent(td);

        let arr = ['JArticle', 'JGuide', 'JList', 'JLogo', 'JNavigation', 'JPaging', 'JPreviews', 'JSlideshow', 'JTable'];
        for (let i = 0; i < arr.length; i++) {
            let b = new Html('button', arr[i]);
            b.setAttr('onclick', `${this._id}.appendPart('${arr[i]}')`)
            td.addContent(b);
        }
    }

    _forCode(lines) {
        let arr = lines.split('\n');
        let a = [];
        for (let i = 0; i < arr.length; i++) {
            let s = arr[i];
            let temp = document.createElement("div");
            (temp.textContent != null) ? (temp.textContent = s) : (temp.innerText = s);
            let output = temp.innerHTML;
            temp = null;
            let str = this._forTag(output);
            str = this._forWord(str);
            str = this._forKey(str);
            str = this._forValue(str);
            str = this._forFunc(str);
            str = this._forAnnotate(str);
            a.push(str);
        }
        return a.join('<br>');
    }

    _forKey(s) {
        let str = s.replace(/[\w-]+(?=\ *=)/g, function (word) {
            return `<var>${word}</var>`;
        })
        return str;
    }

    _forValue(s) {
        let str = s.replace(/\"(.*?)\"|\'(.*?)\'/g, function (word) {
            return `<string>${word}</string>`;
        })
        return str;
    }

    _forTag(s) {
        let str = s.replace(/(?<=&lt;|&lt;\/)\w+/g, function (word) {
            return `<tag>${word}</tag>`;
        })
        return str;
    }

    _forWord(s) {
        let str = s.replace(/new|let|var|function|return/g, function (word) {
            return `<b>${word}</b>`;
        })
        return str;
    }

    _forFunc(s) {
        let str = s.replace(/\w+(\.\w+)*(?=\()/g, function (word) {
            return `<func>${word}</func>`;
        })
        return str;
    }

    _forAnnotate(s) {
        let str = s.replace(/\/\/.+/g, function (word) {
            return `<annotate>${word}</annotate>`;
        })
        return str;
    }

    appendPart(s) {
        this.emptyEditor();
        this._editor.addContent(this._forCode(`<div data-source='' data-part='${s}()'></div>`));
        let ele = this._editor.toElement();
        if (ele.scrollHeight > ele.clientHeight) {
            ele.scrollTop = ele.scrollHeight;
        }
    }

    emptyEditor() {
        this._editor.removeContent();
        this._output.removeContent();
    }

    applyEditor() {
        this._output.removeContent();
        this._output.addContent(this._editor.toElement().innerText.replace(/\s+/ig, " "));
        let web = new Web();
        web.Format(this._output);
        let ele = this._output.toElement();
        if (ele.scrollHeight > ele.clientHeight) {
            ele.scrollTop = ele.scrollHeight;
        }
    }

    onKeyUp() {
        let e = this._editor.toElement();
        let s = e.innerText;

        // 删除不作处理。
        if (s.length <= this._count) {
            this._count = s.length;
            return;
        }
        this._count = s.length;

        let sel = window.getSelection();
        if (!sel.anchorOffset) {
            return;
        }
        // 鼠标所在的最小节点。
        let node = sel.anchorNode;
        let p = sel.anchorOffset;

        // 当前最小节点所在的位置。
        let index = this._indexOfChildren(p, node, e);
        console.log(index);

        e.innerHTML = this._forCode(s);
        let obj = this._itemOfChildren(index, e);

        let range = sel.getRangeAt(0);
        if (obj.node instanceof Element) {
            range.selectNode(obj.node);
        } else {
            range.setStart(obj.node, obj.position);
            range.setEnd(obj.node, obj.position);
        }
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    }

    _itemInNode(p, item, node) {
        if (item == node) {
            return true;
        }
        if (!node.childNodes || node.childNodes.length == 0) {
            return false;
        }
        return this._itemInNode(item, node.childNodes[0]);
    }

    _nodeLength(node) {
        if (!(node instanceof Element)) {
            return node.length
        }
        if (node.tagName == "BR") {
            return 1;
        }
        return node.innerText.length;
    }

    _indexOfChildren(index, node, e) {
        // 顶级。
        if (node == e) {
            let n = 0
            for (var i = 0; i < index; i++) {
                n += this._nodeLength(node.childNodes[i]);
            }
            return n;
        }

        // 非顶级。
        while (node.previousSibling) {
            index += this._nodeLength(node.previousSibling);
            node = node.previousSibling;
        }
        if (node.parentElement != e) {
            return this._indexOfChildren(index, node.parentElement, e);
        }
        return index;

    }

    _itemOfChildren(position, e) {
        let re = { node: e, position: position };
        for (let i = 0; i < e.childNodes.length; i++) {
            re.node = e.childNodes[i];
            let length = this._nodeLength(re.node);
            // 不在该区域。
            if (re.position > length) {
                re.position -= length;
                continue;
            }
            if (re.position == length) {
                return re;
            }
            // Element
            if (re.node instanceof Element) {
                return this._itemOfChildren(re.position, re.node);
            }
            return re;
        }
        return re;
    }
}