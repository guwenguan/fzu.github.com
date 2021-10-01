<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
<meta charset="UTF-8">
<head id="Head1"><title>
	福州大学一码通
</title><meta name="viewport" content="width=device-width, initial-scale=1.0" />

<link rel="stylesheet" href="./scripts/bootstrap.min.css" />
<link rel="stylesheet" href="./scripts/style4.css" />

<script type="text/javascript" src="./scripts/jquery-3.3.1.min.js"></script>

<script type="text/javascript" src="./scripts/jquery.easyui.min.js"></script>

<script type="text/javascript" src="./scripts/easyui-lang-zh_CN.js"></script>
<script src="./scripts/chinesealert.js" type="text/javascript"></script>

<script src="./scripts/common.js" type="text/javascript"></script>
<script src="./scripts/Jquery.MaskLayer.js" type="text/javascript"></script>
<script src="./scripts/jquery-powerFloat-min.js" type="text/javascript"></script>
<script src="./scripts/jquery.qrcode.min.js" type="text/javascript"></script>

<style type="text/css">
     .obj{
	outline:none;
	line-height:29px;
	padding:10px;
	padding-bottom:0;
	height:29px;

    border-radius: 5px;
 }
@-moz-document url-prefix() {
   .obj{
	outline:none;
	line-height:40px;
	padding:10px;
	height:40px;
    width: 170px;
 }
}
@media all and (-ms-high-contrast:none){
  .obj{
	outline:none;
	line-height:29px;
	padding:10px;
	padding-bottom:0;
	height:29px;
    width: 150px;
 }
}
 </style>
    <script type="text/javascript" src="./scripts/JsBarcode.all.min.js"></script>
    <link href="./scripts/my_loading.css" rel="stylesheet" />
    <script src="./scripts/jq_loading.js" type="text/javascript"></script>
    
   

    <style>

        .jkmColor{

        }


    </style>
        <!--点击选择支付方式-->
        <script type="text/javascript">
            var jkm ='#C0C0C0';
            var acctype = "";//支付方式类型
            var InterValObj; //timer变量，控制时间
            var curCount = 60; //当前剩余秒数
            var fullUrl = 'ws://ykt.fzu.edu.cn:2016';//监听地址
            var myScroll;
            //选择支付方式
            $(function () {
                var push1 = [];
                $.each(jQuery(".payment-box").find("dl"), function (m, n) {
                    var model = {};
                    model.text = $(this).find('.title').html();
                    model.src = $(this).find("img").attr("src");
                    model.value = jQuery(n).attr("tag");
                    model.desc = $(this).find('.dec').html();
                    push1.push(model);
                });
                if (push1.length == 1) {
                    document.getElementById("showUserPicker").innerHTML = "";
                }
                if (push1.length >= 1) {
                    acctype = push1[0].value;
                    // $('#payWay').html('<img src="' + push1[0].src + '"/><span>' + push1[0].text + acctype + '</span');
                    $('#payWay').html('<img src="' +
                        push1[0].src +
                        '"/><div style="text-align: left; font-size:13px;"><div style="font-weight: 600;">' +
                        push1[0].text +
                        '</div><div>' +
                        push1[0].desc +
                        '</div></div>');

                }
                $('.payment-box').find('em').first().removeClass('icon-uncheckbox').addClass('icon-checkbox');
                $('#changeWay').click(function () {
                    $('#paymethodshow').show();
                    $('.shadeBg').show();
                });
                $('.payment-box').find('dl').click(function () {
                    acctype = $(this).attr('tag');
                    $('.payment-box').children('dl').find('dd').children('em').removeClass('icon-checkbox').addClass('icon-uncheckbox');
                    $(this).children('dd').find('em').removeClass('icon-uncheckbox').addClass('icon-checkbox');
                    //$('#payWay').html('<img src="' + $(this).find("img").attr("src") + '"/><span>' + $(this).find('.title').html() + '</span>');
                    $('#payWay').html('<img src="' +
                        $(this).find("img").attr("src") +
                        '"/><div style="text-align: left; font-size:13px;"><div style="font-weight: 600;">' +
                        $(this).find('.title').html() +
                        '</div><div>' +
                        $(this).find('.dec').html() +
                        '</div></div>');
                    $('#paymethodshow').hide();
                    $('.shadeBg').hide();
                    getreqestbarcode();
                });
                $('.shadeBg').click(function () {
                    $('#paymethodshow').hide();
                    $('.shadeBg').hide();
                });
                $('#more').click(function () {
                    $('#paymethodshow').show();
                });
                $("#qrCodeIco").css("margin", ($("#code").height() - $("#qrCodeIco").height()) / 2);//控制Logo图标的位置
                //点击查看一维码
                $('.tx').click(function () {
                    $('#oneCode').show();
                    $('#tips').show();
                });
                $('#oneCode').click(function () {
                    $(this).hide();
                });
                //关闭提示
                $('.btn_box').click(function () {
                    $('#tips').toggle();
                    return false;
                });
                //判断横屏和竖屏
                var width = document.documentElement.clientWidth;
                var height = document.documentElement.clientHeight;
                if (width < height) {
                    //console.log(width + " " + height);
                    $print = $('#oneCode');
                    $print.width(height);
                    $print.height(width);
                    $print.css('top', (height - width) / 2);
                    $print.css('left', 0 - (height - width) / 2);
                    $print.css('transform', 'rotate(90deg)');
                    $print.css('transform-origin', '50% 50%');
                }
                //福大健康码防伪获取服务器时间
                // GetDate(true);
            });

            $(function () {
                createqrcode();
                $('#codew').click(function () {
                    // getreqestbarcode();
                    createqrcode();
                });
             

            });
            function createqrcode() {
                curCount = 60;
                window.clearInterval(InterValObj); //停止计时器
                InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
                var i = parseInt(10*Math.random());
                var qrcode = $("#qrcode" + i).text();
                msgSend(qrcode);
                var qrkcode = "";
                var j = 0;
                for (var i = 1; i <= qrcode.length; i++) {
                    if (i % 4 == 0) {
                        qrkcode += qrcode.substr(j * 4, 4) + " ";
                        j++;
                    }
                }
                var options = {
                    width: 2,//较细处条形码的宽度
                    height: 70, //条形码的宽度，无高度直接设置项，由位数决定，可以通过CSS去调整，见下
                    //quite: 10,
                    format: "CODE128",
                    displayValue: false,//是否在条形码下方显示文字
                    margin: 2
                };
                //JsBarcode(barcode, str, options);//原生
                // $('#barcode').JsBarcode(qrcode, options);//jQuery
                if (qrcode != "" && qrcode.length == 20) {
                    qrkcode = qrcode.substr(0, 4) + "************ 查看数字";//数字隐藏
                }
                JsBarcode("#barcode", qrcode, options);
                JsBarcode("#barcode1", qrcode, options);
                $("#dvtext").text(qrcode);
                $("#dvtext1").text(qrkcode);
                if (jkm=='') {
                    jkm = "#000000";
                }
                jkm = "#000000";
 
                var qrcodeobj = $("#code").empty().qrcode({
                    render: "table", //table方式  canvas
                    correctLevel: 0,//纠错等级    
                    //top: 800,
                    //background      : "#005992",//背景颜色    
                    foreground: jkm, //前景颜色    
                    text: qrcode
                });
                
                //判断健康码颜色改变提示语
                if (jkm == "#000000") {
                    $(".jkmColor").css("color", "#1d953f");
                    $("#slogan").html("未见异常，允许通行，请主动出示，配合检测，并做好自我防护，出行前请确认。");
                } else if (jkm == "#d20c12") {
                    $(".jkmColor").css("color", jkm);
                    $("#slogan").html("此码不可通行，码颜色将根据您的健康信息和通行权限动态更新。");
                } else {
                    $(".jkmColor").css("color", jkm);
                }
            }
            // //获取支付码
            // function getreqestbarcode() {
            //     var i = parseInt(10*Math.random());
            //     console.log(i)
            //     // $("#qrcode" + i).text(k);
            //     createqrcode();
            //     $.myloading("hide");
                
            // }
            // // 生成随机数
            // function randomNum(minNum,maxNum){ 
            //     switch(arguments.length){ 
            //         case 1: 
            //             return parseInt(Math.random()*minNum+1); 
            //             break; 
            //         case 2: 
            //             return parseInt(Math.random()*(maxNum-minNum+1)+minNum); 
            //             break; 
            //         default: 
            //             return 0; 
            //             break; 
            //     } 
            // }
            //timer处理函数
            function SetRemainTime() {
                if (curCount == 0) {
                    // createqrcode();
                    // getreqestbarcode();
                }
                else {
                    curCount--;
                }
            }

            function msgSend(temp) {
                try {
                    var ws = null;

                    if ("WebSocket" in window) {
                        ws = new WebSocket(fullUrl);

                    } else if ("MozWebSocket" in window) {
                        ws = new MozWebSocket(fullUrl);

                    } else {
                        return false;
                    }

                    if (ws != null) {
                        ws.onopen = function () { };
                        ws.onclose = function () { };
                        ws.onerror = function (event) { };
                        ws.onmessage = function (msg) {
                            $("#txtvalue").val(msg.data);
                            $("#form1").submit();
                        };
                        delayExcute(temp, ws);
                    }
                } catch (e) {
                    //alert(e);
                }

            }

            /*
             *html发送二维码给服务端进行监听
             */
            function delayExcute(temp, ws) {
                if (ws != null) {
                    window.setTimeout(function () {
                        ws.send("(" + temp + ")");
                    }, 500);

                }
            }
            // setInterval(function () {
            //     GetDate(false);
            // }, 1000);

            // function GetDate(flag) {
            //     AjaxGet(AjaxHandlerUrl + 'ThirdWeb/GetServerDate', null, function (result) {
            //         $("#monthDay").html(result.monthDay);
            //         $("#second").html(result.second);
            //         $("#hourMinute").html(result.hourMinute);
            //         if (flag) {
            //             $("#marqueeStr").html(result.marqueeStr);
            //         }
            //     });
            // }
            //动态获取时间
            window.setInterval(function (){
	    		    var nowTime = getNowFormatDate();
                    $("#monthDay").html(getMonthAndDay());
                    $("#hourMinute").html(nowTime.split(" ")[1].substring(0,5));
                    $("#second").html(nowTime.split(" ")[1].substring(6,8));
                    // $("#marqueeStr").html('文明');
	    		},1000);

            function getNowFormatDate() {//获取当前时间
                var date = new Date();
                var seperator1 = "-";
                var seperator2 = ":";
                var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
                var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
                var hour = date.getHours()<10?"0" + date.getHours():date.getHours();
                var minute = date.getMinutes()<10?"0" + date.getMinutes():date.getMinutes();
                var second = date.getSeconds()<10?"0" + date.getSeconds():date.getSeconds();
                //var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
                var currentdate = month  + seperator1  + strDate
                        + " "  + hour  + seperator2  + minute  + seperator2 + second
                        ;
                return currentdate;
            }
            function getMonthAndDay() {//获取当前时间
                var date = new Date();
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                var currentdate = add0(month)  + "月" + add0(strDate) +"日";
                return currentdate;
            }

            //修改月、天的格式，保持两位数显示
            function add0(m){
                return m<10?'0'+m:m
            }

            function getParam(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if (r != null)
                    return decodeURI(r[2]);   //对参数进行decodeURI解码
                return null;
            }

            $(function() {
                var val1 = getParam("userName");
                var val2 = getParam("deptName");
                var val3 = getParam("marqueeStr");
                $("#userName").text("姓名：" + val1);
                $("#deptName").text("部门：" + val2);
                $("#marqueeStr").html(val3);
            });

        </script>
    </head>
<body class="sweep_bg">
<header>

</header>
    <div style="font-size: 20px;color: white;position: relative;width: 86%;margin: 20px auto 0 auto;" >
        <image src="./images/FZU.png" style="width: 99px; float: right; position: absolute;  right: 0px; top: -17px;"></image>
        <span id="userName" style="display: block;padding-bottom: 20px;">姓名：许新年</span>
        <span id="deptName" style="display: block;">部门：数学与计算机科学学院</span>
    </div>
        <div class="pay-container">

          	<div class="tx">
	              <img id="barcode1" src="./images/barcode.png">

	             
                  <div id="currentTime" class="jkmColor" style="font-size: large;margin: 10px;">
                      <b id="monthDay"></b>
                      <b id="second" style="font-size: 35px;"></b>
                      <b id="hourMinute"></b>
                  </div>
	         </div>
            <div id="codew" style="">
                
               
                <div class="qr_code" style="width: 125px; height: 125px;" id="code" >
                 
                </div>
                <div >
                    <marquee class="jkmColor" style="height: 35px;font-size: 40px;display: block;padding-top: 20px;" id="marqueeStr"></marquee>
                </div>
                <div id="slogan" class="jkmColor" style="  width: 80% ;     text-align: left; margin: 0 auto;">
                    
                </div>     
            </div>
           
          	<div  class="bank_update"  id="changeWay" >
            	<div id='payWay'  class="bank" style="display:flex;align-items:center;justify-content:center;line-height: normal; margin-left: 30px;">
                </div> 
                <a id="showUserPicker"  type='button' style="margin-right: 30px;"><img style="width: 10px; height: 15px;" src="./images/Shape.png"/></a>
        	</div>
            
        </div>
        <div class="mui-content">
            <div class="mui-content-padded"></div>
        </div>
         <div style="      margin: 30px;  text-align: center;">
             <a href="http://ehall.fzu.edu.cn/qljfwapp/sys/lwReportEpidemic/*default/index.do#/" style="color: white;font-size: large;font-weight: 700;    border-radius: 5px;padding: 2px 6px 2px 6px;border: 1px solid;">每日健康填报</a>

         </div>

        <!--选择支付方式-->
        <div id="paymethodshow" class="popup">
            <div class="caption-head border font-size-20 flex-box">
                <button onclick="$('#paymethodshow').hide();$('.shadeBg').hide();" class="btn01">
                    <em class="icon-close font-size-24">×</em>
                </button>
            <div class="fit text-center">选择支付方式</div>
            </div>
            <div class="profile-box">
            <div class="liushui-list payment-box">
                
                
                        <dl tag="###">
                            <dt><img alt="" src="./images/card1.jpg"/></dt>
                            <dd class="f">
                                <div class="title">一卡通</div>
                                <div class="dec">适用所有场景</div>
                            </dd>
                            <dd><em class="icon-uncheckbox"></em></dd>
                        </dl>
                               
                
            </div>
            </div>
        </div>
        <div class="shadeBg">            
        </div>

<div style="text-align:center;position: absolute;bottom: .2rem;width: 100%;">
    <div id="ccTips" style="margin-bottom: 100px;">
        暂不支持此服务
    </div>
</div>
       <div id="oneCode">
           <div class="one">
                <div id="dvtext"></div>
                <div class="oneimg">
                    <img id="barcode" src="">
                </div>
           </div>
           <div class="tipsbox" id="tips">
               
                <div class="tips-txt">
                    付款码数字仅用于付钱时向商家出示 为防诈骗，请不要发送给他人
                </div>
                <div class="btn_box mar_bot04 part-top01">
                     <button type="button" class="btn   font_20"  >我知道了</button>
                </div> 
            </div>
       </div>
        <form action="/ThirdWeb/OrderResult" id="form1" method="POST">
            <input type="hidden" name="txtvalue" id="txtvalue" />
            <input type="hidden" id="appUrl" value=""/>
            <inout type="hidden" id="appFlag" value=""/>
            <inout type="hidden" id="isshowheader" value="0"/>
        </form>
    <div style="display: none;" id="qrcode0">40373238485875757502</div>

    <div style="display: none;" id="qrcode1">40057768095395713234</div>

    <div style="display: none;" id="qrcode2">40375757221243103046</div>

    <div style="display: none;" id="qrcode3">40227575242457575571</div>

    <div style="display: none;" id="qrcode4">40250137575424572724</div>

    <div style="display: none;" id="qrcode5">40127575757505069840</div>

    <div style="display: none;" id="qrcode6">40758313757577575813</div>

    <div style="display: none;" id="qrcode7">40843785757542670204</div>

    <div style="display: none;" id="qrcode8">40279375754275758510</div>

    <div style="display: none;" id="qrcode9">40637425757537104990</div>
</body>

</html>
