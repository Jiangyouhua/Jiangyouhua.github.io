/**
 * JAd, 站点AD
 * Jiang Youhua 2019.01.10
 */

let JAd = function() {
    this._index = 0;
    PART.apply(this, arguments);
    (function(self, args) {
        let a = Array.prototype.slice.call(args);
        self.SetArgs(a);
    })(this, arguments);
}

JAd.prototype = new PART();

JAd.prototype.forContent = function() {
    let div = new HTML();
    let points = new HTML();
    for(let x = 0; x < this._data.length; x ++) {
        let obj = this._data[x];
        if (!obj.image && !obj.text) {
            console.log("JAd Data's image and text is null");
            return;
        }
        // 指示点
        let p = new HTML("span", " ","href=#")
        p.AddClass("ad_point_"+x);
        p.AddCss("background-color", x ? "white":"red")
        points.AddContent(p)
        // AD
        let tag = obj.href ? "a" : "div";
        let a = new HTML(tag);
        a.AddClass("ad_page_"+x);
        div.AddContent(a);
        a.AddCss("display", x ? "none":"block");
        if(!!obj.image) {
            a.AddCss("background-image", "url("+obj.image+")");
            a.AddCss("background-repeat", "no-repeat");
            a.AddCss("background-size", "100% 100%");
            a.AddCss("background-position", "no-center");
        }
        if(!!obj.text){
            a.AddContent(obj.text);
        }

        for(let i in obj){
            if(i == "image" || i == "text"){
                continue;
            }
            a.AddAttr(i, obj[i]);
        }
    }
    div.AddContent(points);
    this._html = div;
    let _this = this;
    let duration = this._config ? parseInt(this._config) : 3000
    let t = setInterval(function () {
        _this.AdChange();
    }, duration)
}

JAd.prototype.AdChange = function () {
    this._index ++
    let n = this._data.length;
    let i = this._index % n;
    let doc = document.getElementById(this._id)
    for(let x = 0; x < n; x ++){
        let  b = i == x;
        doc.querySelector(".ad_page_" + x).style.display = b ? "block" : "none";
        doc.querySelector(".ad_point_" + x).style.backgroundColor = b ? "red" : "white";
    }
}

/**
 * 默认数据
 * image: 显示的图片
 * text:  显示的文字
 * text， image 不能同时为空
 * 其它标签为各项标签属性
 * @type {*[]}
 * @private
 */
JAd.prototype._data = [
    {text:"Jiang", image:""},
    {text:"You", image:""},
    {text:"hua", image:""},
]

/**
 * 默认配置
 * 广告轮换时间，毫秒
 * @type {number}
 * @private
 */
JAd.prototype._config = 1000;

