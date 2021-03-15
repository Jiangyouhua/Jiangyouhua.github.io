/**
 * JNavigation, Navigation Part.
 * Jiang Youhua 2021.03.10
 * Edition 2.0.1
 * 1 textColor = '#000', text color.
 * 2 fontSize = '24px', font size.
 * 3 lineHeight = '72px', line height.
 */

class JNavigation extends JList {

    _data = [
        {
            title: 'JNavigation',
            href: "#JNavigation"
        }, {
            title: 'JPart',
            href: "#JPart"
        }, {
            title: 'Jiang Youhua',
            href: "#Jiang"
        }
    ]
    
    constructor(isUl, textColor, fontSize, lineHeight) {
        super(isUl);

        this.textColor = '#000';
        this.fontSize = '24px';
        this.lineHeight = '72px';

        this.Map({textColor: textColor, fontSize: fontSize, lineHeight: lineHeight});
    }

    _dataFromString(s) {
        this._data = [];
        let arr = s.split('|');
        let a = [];
        for(var i = 0; i < arr.length; i++){
            let word = arr[i].trim();
            let obj = {
                title: word,
                href: i == 0 ? './index.html' : `./${word.toLowerCase().replace(/\s/g, '_')}.html`,
            }
            a.push(obj);
        }
        this._data = a;
    }

    _style() {
        return `
        #${this._id}{
            display: table;
            width: 100%;
            padding: 0;
            margin: 0;
        }
        #${this._id}>li {
            display: table-cell;
            text-align: center;
            width: ${1.0/this._data.length*100}%;
            color: ${this.textColor};
            font-size: ${this.fontSize};
            line-height: ${this.lineHeight};
        }
        #${this._id}>li ul {
            display: none;
        }
        #${this._id} a {
            display: block;
            text-decoration: none; 
            color: ${this.textColor};
            line-height: 300%;
        }
        #${this._id} .active{
            border-bottom:1px solid #000;
        }
        `;
    }
}