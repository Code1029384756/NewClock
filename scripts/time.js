function fnCreatClock(){
    //声明时间相关变量
    var dLocal,nYear,nMonth,nDate,nHours,nMinutes,nSeconds;
  
    //1 获取计算机本地时间
    function fnGetDate(){ 
      //1.1 调用date对象
      dLocal = new Date();
      //1.2 获取当前年份
      nYear = dLocal.getFullYear(); 
      //1.3 获取当前月份，月份是从0开始计数，所以需要加1才是正确的月份
      nMonth = dLocal.getMonth() + 1; 
      //1.4 获取当前日期
      nDate = dLocal.getDate(); 
      //1.5 获取当前小时
      nHours = dLocal.getHours(); 
      //1.6 获取分钟
      nMinutes = dLocal.getMinutes(); 
      //1.7 获取秒数
      nSeconds = dLocal.getSeconds(); 
    }
  
    //2.1 封装一个函数，用于把单数字前添加字符串0，例如1改为01
    function fnToDouble(num){  
      //声明一个返回结果
      var sResult = ''; 
      if(num<10){
        //判断数字小于10则是单数字，需要在前面添加字符串0
        sResult = '0' + num;
      }else{
        //数字为10以上转换为字符串
        sResult = '' + num;
      }
      //返回格式化后的字符串
      return sResult; 
    }
  
    function fnFormatDate(){
      //2.2 组合时间数据为字符串。本实例主要针对初学者，所以这里用的是最简单的格式化方式，即把所有数据用+号相连
      return nYear + '-' + fnToDouble(nMonth) + '-' + fnToDouble(nDate) +
             ' ' + fnToDouble(nHours) + ':' + fnToDouble(nMinutes) + ':' + fnToDouble(nSeconds);
    }
  
    //3.1 获取clock元素
    var eClock = document.getElementById('clock'); 
    //获取时间 
    fnGetDate();
    //3.2 修改clock元素中的时间
    eClock.innerHTML = fnFormatDate(); 
  
    //使用定时器实时更新时间
    setInterval(function(){ 
      //3.3 每秒更新时间
      fnGetDate();  
      //3.3 修改clock元素中的时间
      eClock.innerHTML = fnFormatDate(); 
    },1000); 
  }
  fnCreatClock();