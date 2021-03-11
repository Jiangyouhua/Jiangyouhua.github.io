/**
 * JList, List Part.
 * Jiang Youhua 2021.03.10
 * Edition 2.0.1
 * 1. isUl = true, whether it is an unordered list.
 */
class JList extends Part {

    _data = [{
        title: 'JList', 
        content: 'List Part', 
        image: '', 
        href: '', 
        active: false,
        children: [],
    }, {
        title: 'Jarticle', 
        content: 'Article Part', 
        image: '', 
        href: '', 
        active: false,
        children: [],
    }, {
        title: 'JLogo', 
        content: 'Logo Part', 
        image: '', 
        href: '', 
        active: false,
        children: [],
    }, {
        title: 'JSlideshow', 
        content: 'Slideshow Part', 
        image: '', 
        href: '', 
        active: false,
        children: [],
    }, {
        title: 'JTable', 
        content: 'Table Part', 
        image: '', 
        href: '', 
        active: false,
        children: [],
    }];

    constructor(isUl) {
        super();

        this.isUl = true;

        this.Map({isUl: isUl});
    }

    _dataFromString(s) {
        this._data[0].title = s;
    }

    _style() {
        return `
        #${this._id} li {
            text-decoration: none; 
        }
        #${this._id} a {
            text-decoration: none; 
        }
        #${this._id} .active{
            color: #0ff;
        }
        `;
    }

    _layout() {
        if(!isArray(this._data)){
            console.log("The data of JList does not match the expectation, the expectation is Array.");
            return;
        }

        let ul = this._html;
        ul.setTag(this._isUl ? 'ul' : 'ol');
        for(let x in this._data) {
            let obj = this._data[x];
            let a = new Html('a');
            let li = new Html('li', a);
            ul.addContent(li);

            if (!!obj.image) {
                let span = new Html('img', '', {src: obj.image});
                a.addContent(span);
                delete obj.image;
            }

            if (!!obj.title) {
                let span = new Html('span', obj.title);
                a.addContent(span);
                delete obj.title;
            }

            if (!!obj.content){
                let span = new Html('div', obj.content);
                a.addContent(span);
                delete obj.content;
            }

            if (!!obj.children) {
                let child = new JList(this._isUl, x);
                child.setData(obj.children).setSort(`${this._sort}_${x}`);
                li.addContent(child.toHtml());
                delete obj.children;
            }

            if(!!obj.active){
                a.addClass('active');
                delete obj.active;
            }

            a.setAttrWithObject(obj);
        }
    }
}