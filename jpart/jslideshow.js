/**
 * JSlideshow, Sildeshow Part
 * Jiang Youhua 2021.03.10
 * Edition 2.0.1
 * 1 duration = 3000, the switching time, in milliseconds.
 * 2 titleColor ='white', title color.
 * 3 contentColor ='white', content color.
 * 4 pointColor ='white', the color of the point.
 * 5 currentPointColor ='red', the color of the current point.
 * 6 background = '#222', the color of the background.
 * 7 titleSize = '148px', the size of the title.
 * 8 contentSize = '26px', the size of the content.
 * 9 titleFontFamily ='Indie Flower', the font of the label.
 */

class JSlideshow extends Part {

    _points = new Html();
    _pages = new Html();
    _postion = 0;

    _data = [{
        title: 'JPreviews',
        content: `Previews Part`,
        image: '',
        href: ''
    },{
        title: 'JLogo',
        content: `Logo Part`,
        image: '',
        href: ''
    },{
        title: 'JSlideshow',
        content: `Slideshow Part`,
        image: '',
        href: ''
    },{
        title: 'JArticle',
        content: `Article Part`,
        image: '',
        href: ''
    }]

    constructor(duration, titleColor, contentColor, pointColor, currentPointColor, background, titleSize, contentSize, titleFontFamily) {
        super();

        this.duration = 3000;
        this.titleColor = 'white';
        this.contentColor = 'white';
        this.pointColor = 'white';
        this.currentPointColor = 'red';
        this.background = "#222";
        this.titleSize = '72px';
        this.contentSize = '16px';
        this.titleFontFamily = 'Indie Flower';

        this.Map({
            duration: duration,
            titleColor: titleColor,
            contentColor: contentColor,
            pointColor: pointColor,
            currentPointColor: currentPointColor,
            background: background,
            titleSize: titleSize,
            contentSize: contentSize,
            titleFontFamily: titleFontFamily
        })
    }

    _dataFromString(s) {
        this._data = [];
        let arr = s.split('|');
        let a = [];
        for(var i = 0; i < arr.length; i++){
            a.push({title: arr[i].trim()});
        }
        this._data = a;
    }

    _style() {
        return `
        #${this._id} a {
            text-decoration: none; 
            color: ${this.titleColor};
        }
        #${this._id} {
            text-align: center;
            background: ${this.background};
        }
        #${this._id} .${this._getClass('title')} {
            font-size: ${this.titleSize};
            font-family: ${this.titleFontFamily};
        }
        #${this._id} .${this._getClass('content')}  {
            color: ${this.contentColor};
            font-size: ${this.contentSize};
            margin: 20px;
        }

        #${this._id} .${this._getClass('point')} {
            width: 10px;
            height: 10px;
            margin: 10px; 
            background-color: ${this.pointColor};
            border: 0;
        }
        #${this._id} .active {
            background-color: ${this.currentPointColor};
        }
        `;
    }

    _layout() {
        if(!jpart.isArray(this._data)){
            console.log("The data of JSlideshow does not match the expectation, the expectation is Array.");
            return;
        }

        let div = this._html;
        let _this = this;
        // 定时轮换。
        let t = this._rotation();

        for(let x = 0; x < this._data.length; x++) {
            let obj = this._data[x];

            // 页面。
            let b = x ? 'none' : 'block';
            let div = new Html('div', '', { id: this._getId('page', x) }, [this._getClass('page')], { display: b });
            this._pages.addContent(div);
            // 添加背景图。
            if (!!obj.image) {
                div.addStyle('background-image', 'url(' + obj.image + ')');
                div.addStyle('background-repeat', 'no-repeat');
                div.addStyle('background-size', '100% 100%');
                div.addStyle('background-position', 'no-center');
            }
            // 添加标题。
            if (!!obj.title) {
                div.addContent(new Html('a', obj.title, { href: obj.href, id: this._getId('title', x) }, [this._getClass('title')]));
            }
            // 添加信息。
            if (!!obj.content) {
                div.addContent(new Html('p', obj.content, { id: this._getId('content', x) }, [this._getClass('content')]));
            }

            // 指示点。
            let p = new Html('button', '', { id: this._getId('point', x) }, [this._getClass('point')]);
            p.toElement().addEventListener("click", function () {
                _this._changeWithIndex(x);
                clearInterval(t);
                t = _this._rotation();
            });

            if (!x) {
                p.addClass('active');
            }
            this._points.addContent(p);
        }
        div.addContent(this._pages);
        div.addContent(this._points);
    }

    _rotation() {
        let _this = this;
        return setInterval(function () {
            _this._changeWithIndex(_this._postion + 1);
        }, this.duration)
    }

    _changeWithIndex(index) {
        this._postion = index
        let n = this._data.length;
        let i = this._postion % n;
        for(let x = 0; x < n; x++) {
            if (i == x) {
                this._pages.children[x].setStyle('display', 'block');
                this._points.children[x].addClass('active');
                continue;
            }
            this._pages.children[x].setStyle('display', 'none');
            this._points.children[x].removeClass('active');

        }
    }
}