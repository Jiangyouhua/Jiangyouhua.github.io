/**
 * JPreviews, Previews Part.
 * Jiang Youhua 2021.03.10
 * Edition 2.0.1
 * 1 columnNumber = 4, the number of columns.
 * 2 contentLine = 5, the number of content display lines.
 * 3 titleSize ='h3', title size.
 * 4 titleAlign ='left', title alignment.
 * 5 contentAlign ='left', content alignment.
 * 6 imageHeight = '200px', image height.
 * 7 imageRadius = '4px', the image has rounded corners.
 * 8 splitHeight = '20px', split heigth.
 * 9 splitLine = '1px', split line height.
 */

class JPreviews extends Part {

    _data = [{
        title: 'JPreviews',
        content: `* 1 columnNumber = 4, the number of columns.
        * 2 contentLine = 5, the number of content display lines.
        * 3 titleSize ='h3', title size.
        * 4 titleAlign ='left', title alignment.
        * 5 contentAlign ='left', content alignment.
        * 6 imageRadius = '4px', the image has rounded corners.`,
        image: '',
        href: ''
    }, {
        title: 'JLogo',
        content: `* 1 isJustified = false, whether the two ends are aligned.
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
        image: '',
        href: ''
    }, {
        title: 'JSlideshow',
        content: `* 1 duration = 3000, the switching time, in milliseconds.
        * 2 titleColor ='white', title color.
        * 3 contentColor ='white', content color.
        * 4 pointColor ='white', the color of the point.
        * 5 currentPointColor ='red', the color of the current point.
        * 6 background = '#222', the color of the background.
        * 7 titleSize = '148px', the size of the title.
        * 8 contentSize = '26px', the size of the content.
        * 9 titleFontFamily ='Indie Flower', the font of the label.`,
        image: '',
        href: ''
    }, {
        title: 'JArticle',
        content: ` * 1 columnNumber = 1, number of sub-column.
        * 2 titleTag ='h1', title size.
        * 3 subtitleTag ='h3', subtitle size.
        * 4 titleAlign ='center', title alignment.
        * 5 contentAlign ='left', text alignment.
        * 6 infoAlign ='right', information alignment.
        * 7 imageHeight = '100px' image height.`,
        image: '',
        href: ''
    }]

    constructor(columnNumber, contentLine, titleSize, titleAlign, contentAlign, imageHeight, imageRadius, splitHeight, splitLine) {
        super();

        this.columnNumber = 4;
        this.contentLine = 5;
        this.titleSize = 'h3';
        this.titleAlign = 'left';
        this.contentAlign = 'left';
        this.imageHeight = '200px';
        this.imageRadius = '10px';
        this.splitHeight = '20px';
        this.splitLine = '1px';

        this.Map({
            columnNumber: columnNumber,
            contentLine: contentLine,
            imageHeight: imageHeight,
            titleSize: titleSize,
            titleAlign: titleAlign,
            contentAlign: contentAlign,
            imageRadius: imageRadius,
            splitHeight: splitHeight,
            splitLine: splitLine,
        })
    }

    _dataFromString(s) {
        this._data = [];
        let arr = s.split('|');
        for(let i = 0; i < arr.length; i++){
            let str = arr[i].trim();
            let item = {title: str};
            this._data.push(item);
        }
    }

    _style() {
        let w = (100 - this.columnNumber * 2) / this.columnNumber;
        return `
        #${this._id} a {
            text-decoration: none;
        }

        #${this._id} .${this._getClass('preview')} {
            display: inline-block;
            width: ${w}%;
            vertical-align: top;
            margin: 0 1%;
        }

        #${this._id} .${this._getClass('image')} {
            background-position: 50% 50%; background-repeat:no-repeat; 
            background-size:100%;
            -moz-background-size:100%;
            display: inline-block;
            vertical-align: middle;
            border-radius: ${this.imageRadius};
            width: 100%;
            height: ${this.imageHeight};
            background-color: #fff;
        }

        #${this._id} hr.${this._getClass('split')} {
            border-top: ${this.splitLine} #888 dotted;
            border-left: 0;
            border-right: 0;
            border-bottom: 0;
            margin: ${this.splitHeight} 0;
        }

        #${this._id} .${this._getClass('preview')} .title {
            text-align: ${this.titleAlign};
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }

        #${this._id} .${this._getClass('preview')} .content {
            display: block;
            text-align: ${this.contentAlign};
            padding: 0;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: ${this.contentLine};
            -webkit-box-orient: vertical;
        }
        `;
    }

    _layout() {
        if (!jpart.isArray(this._data)) {
            console.log("The data of JPreviews does not match the expectation, the expectation is Array.");
            return;
        }

        let div = this._html;
        for (let i = 0; i < this._data.length; i++) {
            let obj = this._data[i];
            let d = new Html();

            if (!!obj.href){
                d.setTag('a');
            }

            div.addContent(d);
            d.setAttr('id', this._getId('preview', i));
            d.addClass(this._getClass('preview'));

            if (!!obj.image) {
                let image = new Html('span', '', { id: this._getId('image') }, [this._getClass('image')]);
                d.addContent(image).addContent(' ');
                image.setStyle('backgroundImage', `url('${obj.image}')`);
                delete obj.image;
            }
            if (!!obj.title) {
                let title = new Html(this.titleSize, obj.title);
                title.addClass('title');
                d.addContent(title)
                delete obj.title;
            }
            if (!!obj.content) {
                let content = new Html('pre', obj.content);
                content.addClass('content');
                d.addContent(content);
                delete obj.content;
            }
            
            d.addContent(new Html('hr', '', {}, [this._getClass('split')]));

            d.setAttrWithObject(obj);
        }
    }
}