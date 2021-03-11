/**
  * JArticle. Article.
  * Jiang Youhua 2021.03.10
  * Edition 2.0.1
  * 1 columnNumber = 1, number of sub-column.
  * 2 titleTag ='h1', title size.
  * 3 subtitleTag ='h3', subtitle size.
  * 4 titleAlign ='center', title alignment.
  * 5 contentAlign ='left', text alignment.
  * 6 infoAlign ='right', information alignment.
  * 7 imageHeight = '100px' image height.
  */
class JArticle extends Part {

    _data = {
        title: 'JArticle',
        content: `
        * 1 columnNumber = 1, number of sub-column.
        * 2 titleTag ='h1', title size.
        * 3 subtitleTag ='h3', subtitle size.
        * 4 titleAlign ='center', title alignment.
        * 5 contentAlign ='left', text alignment.
        * 6 infoAlign ='right', information alignment.
        * 7 imageHeight = '100px' image height.
        `,
        image:'',
        subtitle:'JArticle. Full Text Reading',
        author:'Jiang Youhua',
        date:'2019.01.10',
        publisher:'',
    };

    constructor(columnNumber, titleTag, subtitleTag, titleAlign, contentAlign, infoAlign, imageHeight) {
        super();

        this.columnNumber = 1;
        this.titleTag = 'h1';
        this.subtitleTag = 'h2';
        this.titleAlign = 'center';
        this.contentAlign = 'left';
        this.infoAlign = 'right';
        this.imageHeight = '100px';

        this.Map({
            columnNumber: columnNumber,
            titleTag: titleTag,
            subtitleTag: subtitleTag,
            titleAlign: titleAlign,
            contentAlign: contentAlign,
            infoAlign: infoAlign,
            imageHeight: imageHeight,
        });
    }

    _dataFromString(s) {
        this._data.title = s;
    }

    _style() {
        return `
        #${this._id} a {
            text-decoration: none; 
            color: black;
        }
        #${this._id} .${this._getClass('title')} {
            text-align: ${this.titleAlign};
            display: block;
            margin: 50px 0 0 0;
        }
        #${this._id} .${this._getClass('subtitle')} {
            text-align: ${this.titleAlign};
            color: #888;
            margin: 0 0 50px 0;
        }
        #${this._id} .${this._getClass('content')} {
            -webkit-column-width:250px;
            -moz-column-count:${this.columnNumber}; /* Firefox */
            -webkit-column-count:${this.columnNumber}; /* Safari 和 Chrome */
            column-count:${this.columnNumber};

            -moz-column-gap:%; /* Firefox */
            -webkit-column-gap:3%; /* Safari and Chrome */
            column-gap:3%;
            text-align: ${this.contentAlign};
            margin: 20px 0;
        }
        #${this._id} .${this._getClass('info')} {
            text-align: ${this.infoAlign};
            color: #888;
            margin: 0 0 50px 0;
        }

        .${this._getClass('image')}{
            height: ${this.imageHeight};
            text-align: ${this.titleAlign};
        }
        
        `;
    }

    _layout() {
        if(!isObject(this._data)){
            console.log("The data of JArticle does not match the expectation, the expectation is Object.");
            return;
        }

        let div = this._html;
        if (!!this._data.title) {
            let h = new Html(this.titleTag, this._data.title, {href: this._data.href, id: this._getId('title') }, [this._getClass('title')]);
            div.addContent(h);
            delete this._data.title;
            delete this._data.href;
        }
        if (!!this._data.subtitle) {
            let d = new Html(this._subtitleTag, this._data.subtitle, { id: this._getId('subtitle') }, [this._getClass('subtitle')]);
            div.addContent(d);
            delete this._data.subtitle;
        }
        if (!!this._data.image) {
            let i = new Html('img', '', { src: this._data.image, id: this._getId('image') }, [this._getClass('image')]);
            div.addContent(i);
            delete this._data.image;
        }

        if (!!this._data.content) {
            let s = this._data.content.replace(/\r\n|\n|\r/g, '<br />');
            let c = new Html('div', s, { id: this._getId('content') }, [this._getClass('content')]);
            div.addContent(c);
            delete this._data.content;
        }

        let info = new Html('', '', { id: this._getId('info') }, [this._getClass('info')]);
        div.addContent(info);

        if (!!this._data.date) {
            let s = new Html('span', this._data.date, { id: this._getId('date') }, [this._getClass('date')]);
            info.addContent(s);
            delete this._data.date;
        }
        if (!!this._data.publisher) {
            let s = new Html('span', this._data.publisher, { id: this._getId('publisher') }, [this._getClass('publisher')]);
            info.addContent(s);
            delete this._data.publisher;
        }
        if (!!this._data.author) {
            let s = new Html('span', this._data.author, { id: this._getId('author') }, [this._getClass('author')]);
            info.addContent(s);
            delete this._data.author;
        }

        this._html.setAttrWithObject(this._data);
    }
}