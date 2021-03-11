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
 */

class JLogo extends Part {

    _data = {
        title: 'JLogo',
        content: `Jiang Youhua 2021.03.10`,
        image: ''
    }

    constructor(isJustified, backgroundColor, borderRadius, titleSplit, titleSize, titleFont, titleForeColor, titleHindColor, contentSize, contentFont, contentColor) {
        super();

        this.isJustified = false;
        this.backgroundColor = "#222";
        this.borderRadius = '4px';
        this.titleSplit = 1;
        this.titleSize = '';
        this.titleFont = 'Abel';
        this.titleForeColor = '#FF7D00';
        this.titleHindColor = '#00ffd4';
        this.contentSize = '12px';
        this.contentFont = '';
        this.contentColor = '#888';

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
            contentColor: contentColor
        });
    }

    _dataFromString(s) {
        this._data.title = s;
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

        let m = '';
        if (!!this._data.image) {
            m = `vertical-align: middle;`;
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
            ${m}
            width: ${!this.titleSize ? '14px' : this.titleSize};
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
            ${m}
        }
        #${this._id} .${this._getClass('back')} {
            color:${this.titleHindColor};
            ${m}
        }
        `;
    }

    _layout() {
        if(!isObject(this._data)){
            console.log("The data of JLogo does not match the expectation, the expectation is Object.");
            return;
        }

        let div = this._html
        div.setTag('span')
        let logo = new Html('span', '', { id: this._getId('logo') }, [this._getClass('logo')]);

        if (!!this._data.image) {
            let image = new Html('img', '', { src: this._data.image, id: this._getId('icon'), height: this.titleSize }, [this._getClass('icon')]);
            logo.addContent(image).addContent(' ');
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
            let foot = new Html('spen', s.substring(this.titleSplit), { id: this._getId('back') }, [this._getClass('back')]);
            logo.addContent(head).addContent(foot);
            delete this._data.title;
        }
        div.addContent(logo);
        if (!!this._data.content) {
            let slogan = new Html('div', this._data.content, { id: this._getId('slogan') }, [this._getClass('slogan')]);
            div.addContent(slogan);
            delete this._data.content;
        }

        div.setAttrWithObject(this._data);
    }
}