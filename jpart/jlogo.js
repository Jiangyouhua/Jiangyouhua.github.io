/**
 * JLogo, Logo Part。
 * Jiang Youhua 2021.03.10
 * Edition 2.0.1
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
 * 11 contentColor ='#888', content color.
 * 12 iconRadius = '4px', icon border radius.
 */

class JLogo extends Part {

    _data = {
        title: 'JLogo',
        content: `Jiang Youhua 2021.03.10`,
        image: ''
    }

    constructor(isJustified, backgroundColor, borderRadius, titleSplit, titleSize, titleFont, titleForeColor, titleHindColor, contentSize, contentFont, contentColor, iconRadius) {
        super();

        this.isJustified = false;
        this.backgroundColor = "#222";
        this.borderRadius = '4px';
        this.titleSplit = 1;
        this.titleSize = '';
        this.titleFont = 'Abel';
        this.titleForeColor = '#FF7D00';
        this.titleHindColor = '#00ffd4';
        this.contentSize = titleSize == ''? '12px' : jpart.operateSize(titleSize, 2, 3);
        this.contentFont = '';
        this.contentColor = '#888';
        this.iconRadius = '4px';

        this.Map({
            isJustified: isJustified,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            titleSplit: titleSplit,
            titleSize: titleSize,
            titleFont: titleFont,
            titleForeColor: titleForeColor,
            titleHindColor: titleHindColor,
            contentSize: contentSize,
            contentFont: contentFont,
            contentColor: contentColor,
            iconRadius: iconRadius
        });
    }

    _dataFromString(s) {
        let arr = s.split('|');
        this._data = {};
        this._data.title = arr.shift().trim();
        if (!jpart.isArray(arr)){
            return;
        }
        this._data.content = arr.shift().trim();
        if (!jpart.isArray(arr)){
            return;
        }
        this._data.image = arr.shift().trim();
    }

    _style() {
        // 两头对齐。
        let t = '';
        if (this.isJustified) {
            t = `display: table;`;
        }

        let s = '';
        if (!!this.titleSize) {
            s = `font-size: ${this.titleSize};`;
        }

        return `
        #${this._id} {
            ${t}
            width: 100%;
            background-color: ${this.backgroundColor};
            border-radius: ${this.borderRadius};
        }
        #${this._id} .${this._getClass('logo')} {
            ${s}
            font-family: ${this.titleFont};
            display: table-cell;
        }

        #${this._id} .${this._getClass('icon')}{
            background-position: 50% 50%; background-repeat:no-repeat; 
            background-size:100% 100%;
            -moz-background-size:100% 100%;
            display: inline-block;
            vertical-align: middle;
            border-radius: ${this.iconRadius};
        }

        #${this._id} .${this._getClass('slogan')} {
            display: table-cell;
            text-align: right;
            color: ${this.contentColor};
            font-size: ${this.contentSize};
            padding-left: 10px;
        }
        #${this._id} .${this._getClass('fore')} {
            color: ${this.titleForeColor};
        }
        #${this._id} .${this._getClass('back')} {
            color:${this.titleHindColor};
        }
        `;
    }

    _layout() {
        if(!jpart.isObject(this._data)){
            console.log("The data of JLogo does not match the expectation, the expectation is Object.");
            return;
        }

        let div = this._html
        div.setTag('span')
        let logo = new Html('span', '', { id: this._getId('logo') }, [this._getClass('logo')]);
        div.addContent(logo);

        if (!!this._data.image) {
            let icon = new Html('span',' ', {id: this._getId('icon')}, [this._getClass('icon')]);
            logo.addContent(icon).addContent(' ');
            icon.setStyle('backgroundImage', `url('${this._data.image}')`);

            let size = this.titleSize;
            jpart.imageSize(this._data.image, function(w, h) {
                let width = jpart.operateSize(size, (w/h), 2);
                icon.setStyle('width', width);
                icon.setStyle('height', size);
            })
            delete this._data.image;
        }
        if (!!this._data.title) {
            let s = this._data.title;
            if (this.titleSplit < 0) {
                this.titleSplit = 0;
            }
            if (this.titleSplit >= s.length) {
                this.titleSplit = s.length - 1;
            }
            let head = new Html('span', s.substring(0, this.titleSplit), { id: this._getId('fore') }, [this._getClass('fore')]);
            let foot = new Html('span', s.substring(this.titleSplit), { id: this._getId('back') }, [this._getClass('back')]);
            logo.addContent(head).addContent(foot);
            delete this._data.title;
        }

        if (!!this._data.content) {
            let slogan = new Html('div', this._data.content, { id: this._getId('slogan') }, [this._getClass('slogan')]);
            div.addContent(slogan);
            delete this._data.content;
        }

        div.setAttrWithObject(this._data);
    }
}