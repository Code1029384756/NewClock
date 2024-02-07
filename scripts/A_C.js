//获取元素结点
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");

//闹钟相关数据定义
var arr_h = new Array();
var arr_m = [];
var num = 0;
var flag = 0;

//闹钟相关节点获取
var val = document.getElementsByClassName("val");
var s2_add = document.getElementById("s2_add");
console.log(val);

//添加闹钟
s2_add.onclick = function add() {
    if (val[1].value == '') {
        alert("时间不能为空！");
    }
    else {
        if (val[0].value < 0 || val[0].value > 23 || val[1].value < 0 || val[1].value > 59) {
            alert("输入错误,无法添加");
            for (var i = 0; i < 2; i++) {
                val[i].value = null;
            }
        } 
        else {
            arr_h[num] = val[0].value;
            arr_m[num] = val[1].value;
            var s = "闹钟" + (num + 1) + ":" + arr_h[num] + ":" + arr_m[num];
            var textNode = document.createTextNode(s);
            var p = document.createElement("p");
            p.appendChild(textNode);
            s2.appendChild(p);
            num++;
            for (var i = 0; i < 2; i++) {
                val[i].value = null;
            }
        }
    }
    
}

//删除闹钟
//大家先试着自己实现，讲解时再统一实现

//闹钟监视函数
function monitor() {
    var nowTime = new Date();
    var minute = nowTime.getMinutes();
    var hour = nowTime.getHours();
    for (var i = 0; i <= num; i++) {
        if (arr_m[i] == minute && arr_h == hour && flag == 0) {
            alert("闹钟响了");
            flag = 1;
        }
    }
}

//闹钟启动函数
setInterval(monitor, 1000);
setInterval(() => {
    flag == 0;
}, 60000);

//计时器相关元素结点获取
var s3_p = document.getElementById("s3_p");
var s3_btn_one = document.getElementById("s3_btn_one");
var s3_btn_two = document.getElementById("s3_btn_two");
var s3_btn_three = document.getElementById("s3_btn_three");
var s3_btn_four = document.getElementById("s3_btn_four");

var timer1, timer2;
var i = 0;