/**
 * JPreviews, Previews Part.
 * Jiang Youhua 2021.03.10
 * Edition 2.0.1
 * 1 columnNumber = 4, the number of columns.
 * 2 contentLine = 5, the number of content display lines.
 * 3 titleSize ='h3', title size.
 * 4 titleAlign ='left', title alignment.
 * 5 contentAlign ='left', content alignment.
 * 6 imageRadius = '4px', the image has rounded corners.
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
    },{
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
    },{
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
    },{
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

    constructor(columnNumber, contentLine,  titleSize, titleAlign, contentAlign, imageRadius) {
        super();

        this.columnNumber = 4;
        this.contentLine = 5;
        this.titleSize = 'h3';
        this.titleAlign = 'left';
        this.contentAlign = 'left';
        this.imageRadius = '4px';

        this.Map({
            columnNumber: columnNumber,
            contentLine: contentLine,
            titleSize: titleSize,
            titleAlign: titleAlign,
            contentAlign: contentAlign,
            imageRadius: imageRadius,
        })
    }

    _dataFromString(s) {
        this._data[0].title = s;
    }

    _style(){
        return `
        .${this._getClass('preview')} {
            display: inline-block;
            width: ${92 / this.columnNumber}%;
            margin: 1%;
            vertical-align: top;
        }
        .${this._getClass('preview')} img {
            display: inline-block;
            width: 100%;
            border-radius: ${this.imageRadius};
        }
        .${this._getClass('preview')} .title {
            text-align: ${this.titleAlign};
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        .${this._getClass('preview')} .content {
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
        if(!isArray(this._data)){
            console.log("The data of JPreviews does not match the expectation, the expectation is Array.");
            return;
        }

        let div = this._html;
        for(let i = 0; i < this._data.length; i++) {
            let obj = this._data[i];
            let d = new Html();
            div.addContent(d);
            d.setAttr('id', this._getId('preview', i));
            d.addClass(this._getClass('preview'));

            if (!!obj.image){
                let img = new Html('img', '', {src: obj.image})
                d.addContent(img);
            }
            if (!!obj.title){
                let title = new Html(this.titleSize, obj.title);
                title.addClass('title');
                d.addContent(title)
            }
            if (!!obj.content) {
                let content = new Html('div', obj.content);
                content.addClass('content');
                d.addContent(content);
            }
        }
    }
}