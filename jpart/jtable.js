/**
 * JTable, 表格
 * Jiang Youhua 2021.03.10
 * Edition 2.0.1
 * 1 showHead = true, whether to show the header;
 * 2 headBackground ='#ddd', table against background.
 * 3 trEvenBackground ='#eee', form row background.
 * 4 trOddBackground ='#fff', table double row background.
 * 5 headColor ='#000', the head color.
 * 6 bodyColor ='#000', the color of the table body.
 * 7 horizontalLine ='#bbb', horizontal line.
 * 8 verticalLine ='#bbb', vertical line.
 */

class JTable extends Part {

    _data = [
        {
            Index: 1,
            Name: 'JTable Part',
            href: './jpart/_jtable.js',
            Link: 'The Core of JPart.',
            Edition: '2.0.1',
            Date: '2021.03.10'
        }, {
            Index: 2,
            Name: 'JArticle',
            href: './jpart/jarticle.js',
            Link: 'The Article Part of JPart.',
            Edition: '2.0.1',
            Date: '2021.03.10'
        }, {
            Index: 3,
            Name: 'JLogo',
            href: './jpart/JLogo.js',
            Link: 'The Logo Part of JPart.',
            Edition: '2.0.1',
            Date: '2021.03.10'
        }, {
            Index: 4,
            Name: 'JPreviews',
            href: './jpart/jpreviews.js',
            Link: 'The Previews Part of JPart.',
            Edition: '2.0.1',
            Date: '2021.03.10'
        }, {
            Index: 5,
            Name: 'JSlideshow',
            href: './jpart/jslideshow.js',
            Link: 'The Slideshow Part of JPart.',
            Edition: '2.0.1',
            Date: '2021.03.10'
        }
    ];

    constructor(href, showHead, headBackground, trEvenBackground, trOddBackground, headColor, bodyColor,  horizontalLine, verticalLine, tdHeight) {
        super();
        this.href = 'Link';
        this.showHead = true;
        this.headBackground = '#ddd';
        this.trEvenBackground = '#eee';
        this.trOddBackground = '#fff';
        this.headColor = '#000';
        this.bodyColor = '#000';
        this.horizontalLine = '#bbb 1px solid';
        this.verticalLine = '#bbb 1px solid';
        this.tdHeight = '50px';

        this.Map({
            href: href,
            showHead: showHead,
            headBackground: headBackground,
            trEvenBackground: trEvenBackground,
            trOddBackground: trOddBackground,
            headColor: headColor,
            bodyColor: bodyColor,
            horizontalLineColor: horizontalLine,
            verticalLineColor: verticalLine,
            tdHeight: tdHeight,
        })
    }

    _dataFromString(str) {
        return [{ title: str }];
    }

    _style() {
        return `
        #${this._id} {
            width: 100%;
            border-collapse: collapse;
        }

        #${this._id} tr{
            border-top: ${this.horizontalLine};
            border-bottom: ${this.horizontalLine};
        }

        #${this._id} td {
            text-align: center;
            border-left: ${this.verticalLine};
            border-right: ${this.verticalLine};
            height: ${this.tdHeight};
        }
        
        #${this._id} thead tr {
            width: 100%;
            color: ${this.headColor};
            background: ${this.headBackground};
        }

        #${this._id} tbody tr {
            color: ${this.bodyColor};
        }

        #${this._id} tbody tr:nth-child(odd) {
            background: ${this.trOddBackground};
        }

        #${this._id} tbody tr:nth-child(even) {
            background: ${this.trEvenBackground};
        }
        `
    }

    _layout() {
        if(!isArray(this._data)){
            console.log("The data of JTable does not match the expectation, the expectation is Array.");
            return;
        }

        let table = this._html;
        table.setTag("table");

        // 显示表头。
        if (this.showHead) {
            let tr = new Html('tr')
            let thead = new Html('thead', tr);
            table.addContent(thead);
            for(let x in this._data[0]) {
                if(x == 'href'){
                    continue;
                }
                let td = new Html('td', x);
                tr.addContent(td);
            }
        }

        let tbody = new Html('tbody');
        table.addContent(tbody);
        for(let i = 0; i < this._data.length; i++) {
            let obj = this._data[i]
            let tr = new Html('tr', '', { id: this._getId('tr', i) }, [this._getClass('tr')]);
            tbody.addContent(tr);
            let href = obj.href;
            delete obj.href;
            for(let x in obj) {
                let v = obj[x];
                let tag = `td${x}`;
                if(x == this.href ){
                    v = new Html('a', v, {href: href});
                }
                let td = new Html('td', v, { id: this._getId(tag, i) }, [this._getClass(tag)]);
                tr.addContent(td);
            }
        }
    }
}