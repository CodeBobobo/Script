javascript: (function() {
    var hour = 0;
    var minute = 0;
    var second = 0;
    var txt = document.getElementsByClassName('cur-page')[0].innerHTML;
    var page = txt.match(/\/(\d+)/)[1];

    function f1() {
        hour = 0;
        minute = 0;
        second = 0;
        var min = 0;
        var sec = 0;
        if (document.getElementById('divChild')) {
            d.removeChild(document.getElementById('divChild'));
        }
        if (parseInt(input1.value) >= 1 && parseInt(input1.value) <= page && parseInt(input2.value) <= page && parseInt(input1.value) <= parseInt(input2.value)) {
            for (var i = parseInt(input1.value) - 1; i < parseInt(input2.value); i++) {
                var time = document.getElementsByClassName('duration')[i].innerHTML;
                var t = time.match(/\d+/g);
                if (t.length == 3) {
                    var h = t[0];
                    var m = t[1];
                    var s = t[2];
                } else {
                    var h = 0;
                    var m = t[0];
                    var s = t[1];
                }
                hour += parseInt(h);
                min += parseInt(m);
                sec += parseInt(s);
            }
            hour += parseInt(min / 60);
            minute = min - parseInt(min / 60) * 60 + parseInt(sec / 60);
            second = sec - parseInt(sec / 60) * 60;
            if (minute >= 60) {
                hour += parseInt(minute / 60);
                minute = minute - parseInt(minute / 60) * 60;
            }
            if (second >= 60) {
                minute = parseInt(second / 60);
                second = second - parseInt(second / 60) * 60;
            }
            if (input3.value != 1) {
                var total = hour * 3600 + minute * 60 + second;
                total = total / input3.value;
                hour = parseInt(total / 3600);
                minute = parseInt((total % 3600) / 60);
                second = total % 60;
            }
            var d1 = document.createElement('div');
            d1.style.cssText = "margin-top:15px";
            d1.setAttribute("id", "divChild");
            d.appendChild(d1);
            var t1 = document.createTextNode("全" + (parseInt(input2.value) - parseInt(input1.value) + 1) + "集:" + hour + "时" + minute + "分" + parseInt(second) + "秒");
            d1.appendChild(t1);
        } else {
            var d1 = document.createElement('div');
            d1.style.cssText = "margin-top:15px";
            d1.setAttribute("id", "divChild");
            d.appendChild(d1);
            var t1 = document.createTextNode("输入与实际集数不符");
            d1.appendChild(t1);
        }
    }

    function over() {
        btn.style.backgroundColor = "#E4E4E4";
    }

    function out() {
        btn.style.backgroundColor = "#F4F4F4";
    }
    var body = document.body;
    var d = document.createElement("div");
    d.style.cssText = "padding-top:15px;width:145px;height:135px;background-color:#F4F4F4;position:absolute;right:55px;top:218px;border:1px solid #00A1D6;color:#00A1D6;z-index:999;text-align:center;font-size:14px";
    body.appendChild(d);
    var d2 = document.createElement("div");
    d.appendChild(d2);
    var t2 = document.createTextNode("第");
    d2.appendChild(t2);
    var input1 = document.createElement('input');
    input1.setAttribute("type", "number");
    input1.style.cssText = "border: 1px solid deepskyblue;width:40px";
    d2.appendChild(input1);
    var t3 = document.createTextNode("集到");
    d2.appendChild(t3);
    var input2 = document.createElement('input');
    input2.setAttribute("type", "number");
    input2.style.cssText = "border: 1px solid deepskyblue;width:40px";
    d2.appendChild(input2);
    var t4 = document.createTextNode("集");
    d2.appendChild(t4);
    var btn = document.createElement('input');
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "计算");
    btn.style.cssText = "width:50px;margin-top:15px;border: 1px solid #00A1D6;cursor:pointer";
    d.appendChild(btn);
    btn.onclick = f1;
    btn.onmouseover = over;
    btn.onmouseout = out;
    var t5 = document.createTextNode("倍速：");
    d2.appendChild(t5);
    var input3 = document.createElement('input');
    input3.setAttribute("type", "number");
    input3.style.cssText = "border: 1px solid deepskyblue;width:50px;margin-top:15px;margin-right:10px";
    input3.value = 1;
    d2.appendChild(input3);
    var t6 = document.createTextNode("倍");
    d2.appendChild(t6);
})();