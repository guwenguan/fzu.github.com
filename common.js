
//var AjaxHandlerUrl = "http://" + document.location.host + "/";
var AjaxHandlerUrl ="/";
function AjaxPost(url, postData, successFunc, errorFunc) {
    if (postData == null)
        postData = { json: true };
    else
        postData.json = true;
    $.ajax({ url: url, data: postData, type: 'post', dataType: 'json',timeout :1200000,
        success: function (data) {
            if (data) {
                if (data.IsSucceed != null) {
                    if (data.IsSucceed) {
                        if (data.Msg == "-404") {
                            timeOut();
                        }
                        else {
                            successFunc(data);
                        }
                    }
                    else {
                        successFunc(data);
                    }
                }
                else {
                    successFunc(data);
                }
            }
        }
, error:
function (xhr) {
    //closeLoadingMessage();
    if (xhr) {
        try {
            closeloading();
        }
        catch (e) {
        }
        if (errorFunc) {
            errorFunc(xhr);
        }
        else {
         
            var msg = "错误结果：</br>"
              + "------------------------------------------------------------</br>"
            showMessage(msg + xhr.responseText);
        }
    }
}
    });
}
function AsynPost(url, postData, successFunc, errorFunc) {
    if (postData == null)
        postData = { json: true };
    else
        postData.json = true;
    $.ajax({ url: url, data: postData, type: 'post', async: false, dataType: 'json',
        success: function (data) {
            if (data) {
                if (data.Msg != null) {
                    if (data.Msg == "-404") {
                        timeOut();
                        try {
                            closeloading();
                        }
                        catch (e) {
                        }
                    }
                    else {
                        successFunc(data);
                    }
                }
                else {
                    successFunc(data);
                }
            }
        }
, error:
function (xhr) {
    if (xhr) {
        try {
            closeloading();
        }
        catch (e) {
        }
        if (errorFunc) {
            errorFunc(xhr);
        }
        else {
            var msg = "错误结果：</br>"
              + "------------------------------------------------------------</br>"
            showMessage(msg + xhr.responseText);
        }
    }
}
    });
}
function AjaxPost1(url, postData, successFunc, errorFunc) {
    if (postData == null)
        postData = { json: true };
    else
        postData.json = true;
    $.ajax({ url: url, data: postData, type: 'post', async: false, dataType: 'json',
        success: function (data) {
            if (data) {
                if (data.Msg != null) {
                    if (data.Msg == "-404") {
                        timeOut();
                        try {
                            closeloading();
                        }
                        catch (e) {
                        }
                    }
                    else {
                        successFunc(data);
                    }
                }
                else {
                    successFunc(data);
                }
            }
        }
, error:
function (xhr) {
    try {
        closeloading();
    }
    catch (e) {
    }
    if (xhr) {
        if (errorFunc) errorFunc(xhr); else {
            var msg = "错误结果：</br>"
              + "------------------------------------------------------------</br>"
            showMessage(msg + xhr.responseText);
        }
    }
}
    });
}
function AjaxPost2(url, postData, successFunc, errorFunc) {
    if (postData == null)
        postData = { json: true };
    else
        postData.json = true;
    $.ajax({ url: url, data: postData, type: 'post', async: true, dataType: 'json',
        success: function (data) {
            if (data) {
                if (data.Msg != null) {
                    if (data.Msg == "-404") {
                        timeOut();
                        try {
                            closeloading();
                        }
                        catch (e) {
                        }
                    }
                    else {
                        successFunc(data);
                    }
                }
                else {
                    successFunc(data);
                }
            }
        }
, error:
function (xhr) {
    try {
        closeloading();
    }
    catch (e) {
    }
    if (xhr) {
        if (errorFunc) errorFunc(xhr); else {
            var msg = "错误结果：</br>"
              + "------------------------------------------------------------</br>"
            showMessage(msg+xhr.responseText);
         }
    }
}
    });
}
function timeOut() {
    //AjaxGet("/Main/Account/LogTimeOut", null, successGet, errGet, "html");
    top.location.href = AjaxHandlerUrl + "Category/Default";
}
function successGet(result) {
    var b = $(parent.document.body);
    $(b).append('<div class="body-mask"></div>');
    $(b).append(result);
    $(b).find("#txt_Password").focus(function () {
        $(this).addClass("hasinput")
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).removeClass("hasinput")
        }
    })
    $(b).find("#sp_username").text($(b).find('#sp_current_name').text());
    $(b).find('#txt_LoginName').val($(b).find('#sp_current_code').val());
    $(b).find('#txt_loginType').val($(b).find('#sp_current_logintype').val());
}
function errGet(result) {
    alert(result);
}
function Ajax(url, postData, successFunc, errorFunc) {
    $.ajax({ url: url, data: postData, type: 'post', dataType: 'json',
        success: function (data) {
            if (data) {
                if (data.IsSucceed != null) {
                    if (data.Msg == "-404") {
                        timeOut();
                    }
                    else {
                        successFunc(data);
                    }
                }
            }
        }
, error:
function (xhr) {
    if (xhr) {
        if (errorFunc) errorFunc(xhr); else alert(xhr.Data);
    }
}
    });
}
function AjaxPostPhone(url, postData, successFunc, errorFunc, dataType) {
    $.ajax({
        url: url, data: postData, type: 'post', dataType: dataType,
        success: function (data) {
            if (data) {
                successFunc(data);
            }
        },
        error: function (xhr) {
            if (xhr) { if (errorFunc) errorFunc(xhr); else alert(xhr); }
        }
    });
};

function AjaxGet(url, postData, successFunc, errorFunc, dataType) {
    $.ajax({ url: url, data: postData, type: 'get', dataType: dataType, async: false,
        success: function (data)
        { if (data) { successFunc(data); } }
, error:
function (xhr) {
    if (xhr) 
    { 
        if (errorFunc) errorFunc(xhr);
        // else console.log('系统忙！请稍后...'); 
        // alert("系统忙！请稍后...")
    }
}
    });
}
//截取字符串
function lmitValue(value, num) {
    if (value.length > num)
        return value.substr(0, num);
    return value;
}
//checkbox全选,全不选
function cCheckboxs(pid, name) {
    var isCheck = document.getElementById(pid).checked;
    var ids = document.getElementsByName(name);
    if (ids != null && ids.length != 0) {
        for (var j = 0; j < ids.length; j++) {
            ids.item(j).checked = isCheck;
        }
    }
}
//去右空格; 
function eltrim(s) {
    return s.replace(/(^\s*)/, "");
}
//去左右空格; 
function ertrim(s) {
    return s.replace(/(\s*$)/, "");
}
function etrim(s) {
    return ertrim(eltrim(s));
}
function cltrim(s) {
    return s.replace(/(^[' '|'　']*)/, '');
}
function crtrim(s) {
    return s.replace(/([' '|'　']*$)/, '');
}
function ctrim(s) {
    return crtrim(cltrim(s));
}
function trim(s) {
    return ctrim(etrim(s));
}

//动态刷新iframe
function reinitIframe(id) {
    var iframe = document.getElementById("frame_content_" + id);
    try {
        iframe.height = iframe.contentWindow.document.documentElement.scrollHeight;
    }
    catch (ex) { }
}
//转换日期
function getDateTime(time) {
    if (time != null) {
        var date = new Date(parseInt(time.replace("/Date(", "").replace(")/", ""), 10));
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        if (month.toString().length == 1)
            month = "0" + month;
        var day = date.getDate();
        if (day.toString().length == 1)
            day = "0" + day;
        var hh = date.getHours();
        if (hh.toString().length == 1)
            hh = "0" + hh;
        var mm = date.getMinutes();
        if (mm.toString().length == 1)
            mm = "0" + mm;
        var ss = date.getSeconds();
        if (ss.toString().length == 1)
            ss = "0" + ss;
        return year + "-" + month + "-" + day + " " + hh + ":" + mm + ":" + ss;
    }
    return "";
}
function format_dateTime(value, rowData, rowIndex) {
    return getDateTime(value);
}

function myformatter(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
}
function myformatters() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    return y + (m < 10 ? ('0' + m) : m) + (d < 10 ? ('0' + d) : d);
}
function myparser(s) {
    if (!s) return new Date();
    var ss = (s.split('-'));
    var y = parseInt(ss[0], 10);
    var m = parseInt(ss[1], 10);
    var d = parseInt(ss[2], 10);
    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
        return new Date(y, m - 1, d);
    } else {
        return new Date();
    }
}
/*对象序列化为字符串*/
String.toSerialize = function (obj) {
    var ransferCharForJavascript = function (s) {
        var newStr = s.replace(
/[\x26\x27\x3C\x3E\x0D\x0A\x22\x2C\x5C\x00]/g,
function (c) {
    ascii = c.charCodeAt(0)
    return '\\u00' + (ascii < 16 ? '0' + ascii.toString(16) : ascii.toString(16))
}
);
        return newStr;
    }
    if (obj == null) {
        return null
    }
    else if (obj.constructor == Array) {
        var builder = [];
        builder.push("[");
        for (var index in obj) {
            if (typeof obj[index] == "function") continue;
            if (index > 0) builder.push(",");
            builder.push(String.toSerialize(obj[index]));
        }
        builder.push("]");
        return builder.join("");
    }
    else if (obj.constructor == Object) {
        var builder = [];
        builder.push("{");
        var index = 0;
        for (var key in obj) {
            if (typeof obj[key] == "function") continue;
            if (index > 0) builder.push(",");
            builder.push("\"" + key + "\":" + String.toSerialize(obj[key]) + "");
            index++;
        }
        builder.push("}");
        return builder.join("");
    }
    else if (obj.constructor == Boolean) {
        return obj.toString();
    }
    else if (obj.constructor == Number) {
        return obj.toString();
    }
    else if (obj.constructor == String) {
        return '"' + ransferCharForJavascript(obj) + '"';
    }
    else if (obj.constructor == Date) {
        return '{"__DataType":"Date","__thisue":' + obj.getTime() - (new Date(1970, 0, 1, 0, 0, 0)).getTime() + '}';
    }
    else if (this.toString != undefined) {
        return String.toSerialize(obj);
    }
}

//比较对象是否在数组里面存在
function objByArrayExist(array, str) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == str) {
            return true;
        }
    }
    return false;
}
//弹出信息窗口 title:标题 msgString:提示信息 msgType:信息类型 [error,info,question,warning]
function msgShow(title, msgString, msgType) {
    $.messager.alert(title, msgString, msgType);
}
function closeTab() {
    var currtab_title = $('#mm').data("currtab");
    $('#tabs').tabs('close', currtab_title);
}
function closeThis() {
    var tab = $(".tabs-selected", parent.document);

    //$("#tabs", parent.document).tabs('close', tab.text());
}
function closeDialog() {
    $('#w').dialog('close');
}
function addPanel(subtitle, url, icon, type, code) {
    var tab = $('#tabs').tabs('getSelected');
    if (!$('#tabs').tabs('exists', subtitle)) {
        loading();
        $('#tabs').tabs('add', {
            title: subtitle,
            content: createFrame("/Manager/Home/link?url=" + url + "&code=" + code + "&sysid=" + type, code, type),
            closable: true,
            iconCls: "icon-24 ico-" + icon + "-1"
        });
    } else {
        $('#tabs').tabs('select', subtitle);
    }
}
function createFrame(url,code,sysid) {
    var s = '<iframe scrolling="no" width="100%" height="500px" align="center" id="win_'+code+'_'+sysid+'" name="win"  onload="Javascript:SetWinHeight(this)" frameborder="0"  src="' + url + '"></iframe>';
    return s;
}
function SetWinHeight(obj) {
    try {
        var win = obj;
        if (document.getElementById) {
            if (win && !window.opera) {
                if (win.contentDocument && win.contentDocument.body.offsetHeight) {
                    win.height = win.contentDocument.body.offsetHeight; //  + 30;
                    win.width = win.contentDocument.body.offsetWidth;
                } else if (win.Document && win.Document.body.scrollHeight) {
                    win.height = win.Document.body.scrollHeight;
                    win.width = win.Document.body.scrollWidth;
                }
            }
        }
        closeloading();
    } catch(e) {
        closeloading();
    }
}

function logtime() {
    var model = {};
    model.UserName = $('#txt_LoginName').val();
    model.Password = $('#txt_Password').val();
    model.LoginType = $('#txt_loginType').val();
    if (model.UserName == "") {
        $('#txt_LoginName').focus();
    }
    else if (model.Password == "") {
        $('#txt_Password').focus();
    }
    else {
        $('#btn_login').attr('disabled', true);
        $('#btn_login').text("正在登录...");
        Ajax("/Main/Account/LogTimeOut", String.toSerialize(model), loginSuccess, loginError);
    }
}
function loginSuccess(result) {
    if (result.IsSucceed) {
        $('#w').dialog('close');
    }
    else {
        $('#btn_login').removeAttr('disabled');
        $('#btn_login').text('重新登录');
        $('#txt_Password').val();
        $('#txt_Password').focus();
    }
}
function loginError(result) {
    $('#btn_login').removeAttr('disabled');
    $('#btn_login').text('重新登录');
    $('#txt_Password').val();
    $('#txt_Password').focus();
}

//function hideColumns() {
//    var b = $(window.parent.document.body).find('#sp_current_code').val();
//    var cols = getCookie(b + "|" + document.location.pathname);
//    if (cols != null) {
//        $.each(cols.split('|'), function (i, item) {
//            if (item != "" && item != null)
//                $('#dg').datagrid('hideColumn', item);
//        });
//    }
//}
//修改隐藏列函数，修改时间2015-06-18
function hideColumns() {
   
    var b = $(window.parent.document.body).find('#sp_current_code').val();
    //修改存储显示列
    var cols = getCookie(b + "|" + document.location.pathname);
    if (cols != null) {
        //增加记录列变化数组
        var cArr = [];
        //显示列
        $.each(cols.split('|'), function (i, item) {
            if (item != "" && item != null) {
                $('#dg').datagrid('showColumn', item);
                var t = $('#dg').datagrid('getColumnOption', item);
                cArr.push(t);
            }
        });
        var c = $('#dg').datagrid("getColumnFields");
        //隐藏不显示列
        $.each(c, function (i, item) {
            var h = true;
            for (var j = 0; j < cols.split('|').length - 1; j++) {
                if (cols.split('|')[j] != "" && cols.split('|')[j] != null) {
                    if (cols.split('|')[j] == item) {
                        h = false;
                        break;
                    }
                }
            }
            if (h) {
                $('#dg').datagrid('hideColumn', item);
                var t = $('#dg').datagrid('getColumnOption', item);
                cArr.push(t);
            }
        });
        //alert(isfirst);
        //重新加载列
        if (isfirstcolss) {
            isfirstcolss = false;
            $('#dg').datagrid({ columns: [cArr] });
        }
    }
}
var isfirstcolss = true;
function getCookie(objName) {
    var arrStr = document.cookie.split(";");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (eltrim(temp[0]) == objName) {
            if (temp[1] != null) {
                return unescape(temp[1]);
            }
            return "";
        }
    }
}
function setCookie(name, value) {
    var Days = 365;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}
function setTmpCookie(name, value) {
    document.cookie = name + "=" + escape(value) + ";path=/";
}

//检测日期是否正确 yyyyMMdd
function RQcheck(RQ) {
    var date = RQ;
    var result = date.match(/^(\d{1,4})(|\/)(\d{1,2})\2(\d{1,2})$/);

    if (result == null)
        return false;
    var d = new Date(result[1], result[3] - 1, result[4]);
    return (d.getFullYear() == result[1] && (d.getMonth() + 1) == result[3] && d.getDate() == result[4]);

}
//检测时间格式yyyyMMddHHMMSS
function checkDateTime(str) {
    var reg = /^(\d{1,4})(|\/)(\d{1,2})\2(\d{1,2})(\d{1,2})(\d{1,2})(\d{1,2})$/;
    var r = str.match(reg);
    if (r == null) return false;
    var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
    return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4] && d.getHours() == r[5] && d.getMinutes() == r[6] && d.getSeconds() == r[7]);
}
//检测IP的正确性
function f_check_IP(pid) {
    var ip = $("#" + pid).val();
    if (ip) {
        var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/; //正则表达式
        if (re.test(ip)) {
            if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256)
            { return true; }
            else {
                $("#" + pid).val("");
                return false;
            }
        }
        else {
            $("#" + pid).val("");
            return false;
        }
    }
    return true;
}
function showMessage(msg) {
    if ($('#msg').lenght == 0 || $('#msg').lenght == null)
        $('body').append("<div id=\"msg\"></div>");
    $('#msg').dialog({
        width: 600,
        height: 450,
        top: 50,
        href: '/Message/PubMessage',
        title: '系统消息框',
        modal: true,
        onLoad: function (data) {
            $('#txt_message').html(msg);
        }
    });
}
//$(document).ready(checkMoney("pid"));
//limit 限制输入的最大金额 0 不限制
//输入框金额限制
function checkMoney(pid, limit) {
    String.prototype.count = function (c) {
        var sum = 0;
        for (var i = 0; i < this.length; i++) {
            if (this[i] == c) { sum++; }
        }
        return sum;
    };
    $("#" + pid).keydown(function (event) {
        if (event.shiftKey || event.ctrlKey || event.altKey) { return false; }
        var v = $("#" + pid).val();
        if (v == "" && event.keyCode == 190) { return false; }
        var isPass = false; var isDot = false;
        if (event.keyCode >= 96 && event.keyCode < 106) { isPass = true; }
        if (event.keyCode >= 48 && event.keyCode <= 57) { isPass = true; }
        if (event.keyCode == 110 || event.keyCode == 190) { isPass = true; isDot = true; }
        if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) { return true; }
        if (!isPass) { return false; }
        if (v.count('.') > 0 && isDot) { return false; }
        if (v.indexOf('.') != -1 && event.keyCode != 8 /*back space*/) {
//            var val = $("#" + pid).val();
//            $("#" + pid).val(val.substr(0, val.indexOf('.') + 2));
        }
    }).blur(function () {
        var v = $("#" + pid).val();
        if (v != null && v != "") {
            if (v.substr(v.length - 1, 1) == ".")
                $("#" + pid).val(v.substr(0, v.length - 1));
            var v1 = $("#" + pid).val();
            if (parseFloat(limit) != 0) {
                if (parseFloat(v1) > parseFloat(limit))
                    $("#" + pid).val(parseFloat(limit).toFixed(2));
                else
                    $("#" + pid).val(parseFloat(v1).toFixed(2));
            }
            else {
                $("#" + pid).val(parseFloat(v1).toFixed(2));
            }
        }
    });
}
//验证邮箱
function checkEmailNo(str) {
//    var szReg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
//    var bChk = szReg.test(szMail);
//    return bChk;
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return reg.test(str);
}
//检测身份证号
var WiIDNO = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];    // 加权因子   
var ValideCodeIDNO = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];            // 身份证验证位值.10代表X   
function IdCardValidate(idCard) {
    idCard = trimIDNO(idCard.replace(/ /g, ""));               //去掉字符串头尾空格                     
    if (idCard.length == 15) {
        return isValidityBrithBy15IdCard(idCard);       //进行15位身份证的验证    
    } else if (idCard.length == 18) {
        var a_idCard = idCard.split("");                // 得到身份证数组   
        if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) {   //进行18位身份证的基本验证和第18位的验证
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
/**  
* 判断身份证号码为18位时最后的验证位是否正确  
* @param a_idCard 身份证号码数组  
* @return  
*/
function isTrueValidateCodeBy18IdCard(a_idCard) {
    var sum = 0;                             // 声明加权求和变量   
    if (a_idCard[17].toLowerCase() == 'x') {
        a_idCard[17] = 10;                    // 将最后位为x的验证码替换为10方便后续操作   
    }
    for (var i = 0; i < 17; i++) {
        sum += WiIDNO[i] * a_idCard[i];            // 加权求和   
    }
    valCodePosition = sum % 11;                // 得到验证码所位置   
    if (a_idCard[17] == ValideCodeIDNO[valCodePosition]) {
        return true;
    } else {
        return false;
    }
}
/**  
* 验证18位数身份证号码中的生日是否是有效生日  
* @param idCard 18位书身份证字符串  
* @return  
*/
function isValidityBrithBy18IdCard(idCard18) {
    var year = idCard18.substring(6, 10);
    var month = idCard18.substring(10, 12);
    var day = idCard18.substring(12, 14);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题   
    if (temp_date.getFullYear() != parseFloat(year)
          || temp_date.getMonth() != parseFloat(month) - 1
          || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}
/**  
* 验证15位数身份证号码中的生日是否是有效生日  
* @param idCard15 15位书身份证字符串  
* @return  
*/
function isValidityBrithBy15IdCard(idCard15) {
    var year = idCard15.substring(6, 8);
    var month = idCard15.substring(8, 10);
    var day = idCard15.substring(10, 12);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
    if (temp_date.getYear() != parseFloat(year)
              || temp_date.getMonth() != parseFloat(month) - 1
              || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}
//去掉字符串头尾空格   
function trimIDNO(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}  

/*导出excel文件
type 0_导出全部 1_当前页
tableid datagrid id
cols 导出数据列
query 查询条件
cname 类名
*/
function outExcel(type, tableid, query, cname, controller) {
    var total = $('#' + tableid).datagrid('getData').total;
    if (total != null && total != 0) {
        var c = $('#' + tableid).datagrid("options").columns;
        var cols = "";
        $(c[0]).each(function (i, item) {
            cols += item.field + "-" + item.title + ",";
        });
        var data = null;
        if (type != 0)
            data = String.toSerialize($('#' + tableid).datagrid('getData').rows);
        loading();
        AjaxPost(AjaxHandlerUrl + controller+'/Excel/OutExcel', { type: type, data: data, col: cols.substr(0, cols.length - 1), query: String.toSerialize(query), cname: cname, page: 1, rows: total }, function (result) {
            if (result) {
                window.location.href = AjaxHandlerUrl+ "Excel/" + result;
            }
            closeloading();
        });
    }
    else
        $.messager.alert("提示", "没有需要导出的数据！", "info", null);
}

function loading(value) {
    if (typeof (value) == "undefined" || value == null || value == "")
        value = "正在为您拼命加载中,请稍后...";
    var modalHtml = '<div class="bodymask" style="width:' + $("body").width() + 'px;height:' + $("body").height() + 'px">&nbsp;</div><div class="loader"><p class="text" style="color:blue;">' + value + '</p></div>';
    $("body").append(modalHtml);
}
function closeloading() {
    $(".bodymask,.loader").remove();
}
//layout 右侧详细信息隐藏按钮
$.extend($.fn.layout.methods, {
    setRegionToolVisableState: function (jq, params) {
        return jq.each(function () {
            if (params.region == "center")
                return;
            var panels = $.data(this, 'layout').panels;
            var panel = panels[params.region];
            var tool = panel.panel('header').find('>div.panel-tool');
            tool.css({ display: params.visible ? 'block' : 'none' });
            var first = params.region.substring(0, 1);
            var others = params.region.substring(1);
            var expand = 'expand' + first.toUpperCase() + others;
            if (panels[expand]) {
                panels[expand].panel('header').find('>div.panel-tool').css({ display: params.visible ? 'block' : 'none' });
            }
        });
    }
});
///附件上传判断
function dealUpPic() {
    var pfile = $('#up_Balance').filebox('getValue');
    var pgrp = pfile.toString().split('.');

    if (pgrp.length == 2) {
        var pfilename = pfile.toString().split('.')[1].toString().toLowerCase();
        if (pfilename != "gif" && pfilename != "jpg" && pfilename != "png" && pfilename != "jpeg") {
            $.messager.alert("提示", "附件格式不正确，请重新选择！", "warning", null);
        } else {
           // $("#balanceForm").submit();
            document.getElementById('balanceForm').submit();
        }
         
    }
    else {
        $.messager.alert("提示", "附件名称有误，请重新选择！", "warning", null);
    }
}

///附件上传判断
function dealUpPic1() {
    var pfile = $('#up_Balance1').filebox('getValue');
    var pgrp = pfile.toString().split('.');

    if (pgrp.length == 2) {
        var pfilename = pfile.toString().split('.')[1].toString().toLowerCase();
        document.getElementById('balanceForm1').submit();
    }
    else {
        $.messager.alert("提示", "附件名称有误，请重新选择！", "warning", null);
    }
}

function ToggleButton(o) {
    if ($(o).text() == 0) {
        $(o).text("1");
        $(o).removeClass("off").addClass("on");
    } else if ($(o).text() == 1) {
        $(o).text("0");
        $(o).removeClass("on").addClass("off");
    }
}


function DialogCommon(titlename, dialoname, width, height) {
    if (width == ""||width==undefined) width = 420;
    if (height == "" || height == undefined) height = 165;
    if ($("#w").length <= 0)
        $('body').append("<div id=\"w\"></div>");
    $('#w').dialog({
        iconCls: 'icon-search',
        top: '5%',
        width: width,
        height: height,
        href: AjaxHandlerUrl + 'Manager/Common/PageDialog?name=' + dialoname,
        title: titlename,
        modal: true,
        onLoad: function (data) {
            if (data.indexOf("forGoToLogOutSystem") >= 0)
                top.location.href = location.href;
        }
    });
}
/// id ,弹出名字 ，宽度 ，高度
function DialogCommonNew(id,titlename, dialoname, width, height) {
    if (width == "" || width == undefined) width = 420;
    if (height == "" || height == undefined) height = 165;
    if ($("#" + id).length <= 0)
        $('body').append("<div id=\"w\"></div>");
    $('#' + id).dialog({
        iconCls: 'icon-search',
        top: '5%',
        width: width,
        height: height,
        href: AjaxHandlerUrl + 'Manager/Common/PageDialog?name=' + dialoname,
        title: titlename,
        modal: true,
        onLoad: function (data) {
            if (data.indexOf("forGoToLogOutSystem") >= 0)
                top.location.href = location.href;
        }
    });
}


//获取url中的参数
function getUrlParam(strParame) {
    var args = new Object();
    var query = location.search.substring(1);

    var pairs = query.split("&"); // Break at ampersand 
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('=');
        if (pos == -1) continue;
        var argname = pairs[i].substring(0, pos);
        var value = pairs[i].substring(pos + 1);
        value = decodeURIComponent(value);
        args[argname] = value;
    }
    return args[strParame];
}

//function GetRequest() {
//    var url = location.search; //获取url中"?"符后的字串 
//    var theRequest = new Object();
//    if (url.indexOf("?") != -1) {
//        var str = url.substr(1);
//        strs = str.split("&");
//        for (var i = 0; i < strs.length; i++) {
//            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
//        }
//    }
//    return theRequest;
//} 

//type==1 弹出
function goPage(flowid, type, appid,firstname,secname) {
    if (type == "1")
        document.getElementById('goSubmits').setAttribute('target', '_blank');
    else {
        document.getElementById('goSubmits').setAttribute('target', 'comepage');
        loading("页面加载中......");
    }
    $("#flowID").val(flowid);
    $("#type").val(type);
    $("#randow").val(new Date().getMilliseconds());
    if (document.getElementById("divloc")) {
        var item = " <strong class=\"first\"><img src=\"/themes/web/images/blank.gif\" class=\"icon ico-yjs\" /><a>个人中心</a></strong><span class=\"font-arrow\">&gt;</span> <span>" + firstname + "</span> ";
        if (secname != "" && secname!=undefined) {
            item += "<span class=\"font-arrow\">&gt;</span><span>" + secname + "</span>";
        }
        $("#divloc").html(item);
    }
    document.getElementById('goSubmits').submit();
}

function SetWinHeightWeb(obj) {
    try {
        var win = obj;
        if (document.getElementById) {
            if (win && !window.opera) {
                if (win.contentDocument && win.contentDocument.body.offsetHeight) {
                    win.height = win.contentDocument.body.offsetHeight + 15; //  + 30;
                    //win.width = win.contentDocument.body.offsetWidth;
                    win.width = document.getElementById("mainbox").offsetWidth - 270;
                }
                else if (win.Document && win.Document.body.scrollHeight) {
                    win.height = win.Document.body.scrollHeight;
                    win.width = win.Document.body.scrollWidth;
                }
            }
        }
        closeloading();
    }
    catch (e) {
        closeloading();
        try { } catch (e) { }
    }
}
//GRID显示悬浮名
function forTitle(val, dd, idx) {
    return "<span title=" + val + ">" + val + "</span>";
}

/*
*时间格式化
*/
DateFormat = function (time,form) {
    var dates = time.split(' ');
    if (dates.length > 1)
        return dates[0];
    else if (time.toString().indexOf("-") < 0) {
        var date = new Date(parseInt((time + "").replace("/Date(", "").replace(")/", "")));

        var format = date.format(form);
        // var format = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        return format;
    } else {
        return time;
    }
};

/*
*时间格式化
*/
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(),    //day
        "h+": this.getHours(),   //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1,
                (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                    RegExp.$1.length == 1 ? o[k] :
                        ("00" + o[k]).substr(("" + o[k]).length));
    return format;
};

function showNum(obj) {
    if (obj == "10") {
        document.getElementById("password").value = "";
    }
    else if (obj == "11") {
        $.powerFloat.hide();
    }
    else {
        var s = document.getElementById("password").value;
        if (s.length < 6)
            document.getElementById("password").value += obj;
    }
};
function getUnionControl(UnionControl) {
    return document.getElementById(UnionControl);
}

function checkInstall(UnionControl) {
    try {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        if (userAgent.indexOf("Safari") > -1) {
            //$(UnionControl + "downloadlink").attr(" <a href=\"/Control/UnionPlugin.pkg\">请下载控件进行安装</a><br />");
            $("#" + UnionControl + "downloadlink").attr("href", "/Control/UnionPlugin.zip");
        } //判断是否Safari浏览器

        if (!getUnionControl(UnionControl).UnionGetVersion()) {
            document.getElementById(UnionControl).height = 0;
            document.getElementById(UnionControl).width = 0;
            document.getElementById(UnionControl).style.display = "none";
        } else {
            document.getElementById(UnionControl + "downloadlink").style.display = 'none';
            document.getElementById(UnionControl).style.display = "block";
            //alert("请安装插件！");
        }

    } catch (e) {
        document.getElementById(UnionControl + "downloadlink").style.display = 'block';
        document.getElementById(UnionControl).style.display = "none";
        // alert("请安装插件！");
    }

}
function GetRSAStr(UnionControl, retstr) {
    try {
        var pksm2 = "";
        pksm2 = $("#txtpksm").val();
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        if (userAgent.indexOf("Safari") > -1) {
            pksm2 = $("#txtpksm").val();
            //return "Safari";
        } //判断是否Safari浏览器
        var ret = getUnionControl(UnionControl).UnionSm2PKEnc("2", "", pksm2, retstr);
        return ret;
    } catch (e) {
        return "";
    }
}

function getnums(parameters) {
    $(parameters).keypress(function () {
        if (!this.value.match(/^[\+\-]?\d*?\.?\d*?$/)) this.value = this.t_value;
        else this.t_value = this.value;
        if (this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/)) this.o_value = this.value;

        if (this.value.indexOf(".") > -1) {
            if (this.value.split(".")[1].length > 2) {
                this.value = this.t_value.split(".")[0] + "." + this.value.split(".")[1].substr(0, 2);
            }
        }

    }).keyup(function () {
        if (!this.value.match(/^[\+\-]?\d*?\.?\d*?$/)) this.value = this.t_value;
        else this.t_value = this.value;
        if (this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/)) this.o_value = this.value;

        if (this.value.indexOf(".") > -1) {
            if (this.value.split(".")[1].length > 2) {
                this.value = this.t_value.split(".")[0] + "." + this.value.split(".")[1].substr(0, 2);
            }
        }

    }).blur(function () {
        if (!this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?|\.\d*?)?$/)) this.value = this.o_value;
        else {
            if (this.value.match(/^\.\d+$/)) this.value = 0 + this.value;
            if (this.value.match(/^\.$/)) this.value = 0;
            this.o_value = this.value;
        }
        if (this.value.indexOf(".") > -1) {
            if (this.value.split(".")[1].length > 2) {
                this.value = this.t_value.split(".")[0] + "." + this.value.split(".")[1].substr(0, 2);
            }
        }

    });
}

function CloseWebPage() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
        window.location.href = "about:blank";
    } else if (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1) {
        window.opener = null; window.open('about:blank', '_self', '').close();
    } else {
        window.opener = null;
        window.open("about:blank", "_self");
        window.close();
    }
}