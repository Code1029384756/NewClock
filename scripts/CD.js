var s4 = document.getElementById("s4");

//获取倒计时相关节点
var s4_hour = document.getElementById("s4_hour");
var s4_minute = document.getElementById("s4_minute");
var s4_second = document.getElementById("s4_second");
var s4_down = document.getElementById("s4_down");
var s4_p = document.getElementById("s4_p");

//定义倒计时相关参数
var sum = 0;
var timer3;


//倒计时函数
s4_down.onclick = function down() {
    sum = parseInt(s4_hour.value * 60 * 60) + parseInt(s4_minute.value * 60) + parseInt(s4_second.value);
    s4_hour.value = null;
    s4_minute.value = null;
    s4_second.value = null;
    clearInterval(timer3);

    //ES6内容
    timer3 = setInterval(() => {
        s4_p.innerText = "剩余"+sum+"秒";
        if (sum == 0) {
            s4_p.innerText = "时间到了";
            clearInterval(timer3);
        }
        sum--;
    }, 1000);
}