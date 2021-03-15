/**
 * JGuide, Guide Part.
 * Jiang Youhua 2021.03.10
 * Edition 2.0.1 
 * 1 darkCodeStyle = true, whether the code is dark style.
 * 2 titleSize ='h1', title size.
 * 3 activeColor ='red', the color of the current item.
 */

class JGuide extends Part {

    _data = [{
        title: 'JGuide',
        content: ` * 1 darkCodeStyle = true, whether the code is dark style.
        * 2 titleSize ='h1', title size.
        * 3 activeColor ='red', the color of the current item.`,
        image: '',
        id: '#',
        code: '<div>JGuide</div>',
        split: false,
        active: false,
        children: [],
    }];

    constructor(darkCodeStyle, titleSize, activeColor) {
        super();

        this.darkCodeStyle = true;
        this.titleSize = 'h1';
        this.activeColor = 'red';

        this.Map({
            darkCodeStyle: darkCodeStyle,
            titleSize: titleSize,
            activeColor: activeColor
        })
    }

    _dataFromString(s) {
        this._data = [{title: s}];
    }

    _style() {
        return `
        #${this._id} code {
            font-family: "Lucida Console", Courier, monospace;
            background-color: ${this.darkCodeStyle ? '#111' : '#eee'};
            display: block;
            color: ${this.darkCodeStyle ? '#eee' : '#111'};
            padding: 10px 20px; 
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
        }

        #${this._id} hr {
            margin: 40px 0 0 0;
        }
        
        .${this._getClass('block')} {
            padding: 20px 0;
        }
        `;
    }

    _layout() {
        if(!jpart.isArray(this._data)){
            console.log("The data of JGuide does not match the expectation, the expectation is Array.");
            return;
        }

        let div = this._html;
        for(let x = 0; x < this._data.length; x++) {
            let obj = this._data[x];
            let block = new Html();
            block.addClass(this._getClass('block'));
            div.addContent(block);

            // 页面。
            if (!!obj.title) {
                let d = new Html(this.titleSize, obj.title, { id: this._getId('title', x) }, [this._getClass('title')]);
                block.addContent(d);
                delete obj.title;
            }
            if (!!obj.content) {
                let s = obj.content.replace(/\r\n|\n|\r/g, '<br />');
                let d = new Html('', s, { id: this._getId('content', x) }, [this._getClass('content')]);
                block.addContent(d);
                delete obj.content;
            }
            if (!!obj.code) {
                let code = new Html('code', this._forCode(obj.code));
                let pre = new Html('pre', code);
                block.addContent(pre);

                let p = new RegExp('<(\S*?)[^>]*>.*?|<.*? />');
                if (p.test(obj.code)) {
                    let article = new Html('article', obj.code.replace('\$', '$'));
                    block.addContent(article);
                }
                delete obj.code;
            }
            if (!!obj.children) {
                let t = jpart.operateSize(this.titleSize, 1)
                let d = new JGuide(t);
                d.setData(obj.children);
                block.addContent(d.toHtml());
                delete obj.children
            }
            if (!!obj.split) {
                block.addContent(new Html('hr'));
                delete obj.split;
            }

            block.setAttrWithObject(obj)
        }
    }

    _forCode(s) {
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

        return str;
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
}