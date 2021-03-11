/**
 * JPaging, Paging Part.
 * Jiang Youhua 2021.03.10
 * Edition 2.0.1
 * 1 showNumber = 7, show page number.
 * 2 textAlign ='center', alignment.
 * 3 urlKey ='page', the keyword displayed in the URL.
 * 4 urlSearch = true, is it displayed in the search of the URL?
 */
class JPaging extends Part {

    _data = {
        count: 100,
        position: 8,
    }

    constructor(showNumber, textAlign, urlKey, urlSearch) {
        super();

        this.showNumber = 5;
        this.textAlign = 'center';
        this.urlKey = 'page';
        this.urlSearch = true;

        this.Map({showNumber: showNumber, textAlign: textAlign, urlKey: urlKey, urlSearch: urlSearch});
    }

    _style(){
        return `
        #${this._id} {
            text-align: ${this.textAlign};
        }
        #${this._id} a {
            text-decoration: none; 
            display: inline-block;
            width: 50px;
        }
        #${this._id} a.active {
            font-weight: bold;
            color: #f00;
        }
        `;
    }

    _dataFromString(s) {
        this._data.count = parseInt(s);
    }

    _layout() {
        if(!isObject(this._data)){
            console.log("The data of JPaging does not match the expectation, the expectation is Object.");
            return;
        }

        let div = this._html;

        // 当前页面前后显示2个。
        if (!this._data.count) {
            return;
        }
        if (!this._data.position) {
            this._data.position = 1;
        }

        // pre.
        let pre = new Html('a', '◀︎', { href: this._url(this._data.position - 1), id: this._getId('item', 0) }, [this._getClass('item')]);
        div.addContent(pre)
        let h = parseInt(this.showNumber / 2);
        let min = this._data.position <= h;
        let max = this._data.position >= this._data.count - h;

        if (!min){
            let s = new Html('span', '・・・');
            div.addContent(s);
        }

        // pages.
        for(let i = 0; i < this.showNumber; i++) {
            let j = this._data.position - h + i;
            if(min){
                j = i + 1;
            } 
            if(max){
                j = this._data.count + 1 - this.showNumber + i;
            }

           let p = this._url(j)

            let a = new Html('a', j, { href: `${p}`, id: this._getId('item', i + 1) }, [this._getClass('item')])
            if(j == this._data.position){
                a.addClass('active');
            }
            div.addContent(a);
        }

        if (!max){
            let s = new Html('span', '・・・');
            div.addContent(s);
        }

        // next;
        let next = new Html('a', '▶︎', { href: this._url(this._data.position + 1), id: this._getId('item', -1) }, [this._getClass('item')]);
        div.addContent(next)
        delete this._data.count;
        delete this._data.position;

        div.setAttrWithObject(this._data);
    }

    _url(j){
        if(j < 1){
            j = 1;
        }
        if(j > this._data.count){
            j = this._data.count;
        }
        let p = `${this.urlKey}${j}`;
        if(this.urlSearch){
            let search = new URLSearchParams(location.search);
            search.set(this.urlKey,j)
            p = '?'+search.toString();
        }
        return p;
    }
}