function showMessage(option)
{
	option = jQuery.extend({
		hideCloseButton: true,
		contentHTML: "<img src='/themes/default/images/ajax-loader.gif'/>"
	}, option);

	var fullbgId = "fullbg";
	var dialogId = "dialog";
	var dialogContentId = "dialog_content";

	var elemFullbg = $("#" + fullbgId);
	var elemDialog = $("#" + dialogId);
	var elemDialogcontent = $("#" + dialogContentId);

	if (elemFullbg.length == 0)
	{
		var div = document.createElement("div");
		div.id = fullbgId;

		document.body.appendChild(div);
		elemFullbg = $("#" + fullbgId);
	}

	if (elemDialog.length == 0)
	{
		var div = document.createElement("div");

		if (elemDialogcontent.length == 0)
		{

			div.id = dialogId;

			document.body.appendChild(div);
			elemDialog = $("#" + dialogId);
		}

		var div = document.createElement("div");
		div.id = dialogContentId;
		elemDialogcontent = $("#" + dialogContentId);

		elemDialog.append(div);
	}
	else
	{
		$("#closeMaskLayer").remove();
	}

	if (!option.hideCloseButton)
	{
		var divCenter = $("<div style='text-align:center;' id='closeMaskLayer'></div>");
		divCenter.append("<a href='javascript:void(0);'>关闭</a>").bind("click", function (e) { closeBg(dialogId, fullbgId); });
	}

	elemDialog.append(divCenter);

	$("#" + dialogContentId).empty();
	$("#" + dialogContentId).html(option.contentHTML);

	showBg(dialogId, fullbgId);
}

//显示灰色JS遮罩层  
function showBg(dialogId, fullbgId)
{
	var bH = $("body").height();
	var bW = $("body").width();
	var objWH = getObjWh(dialogId);
	var fullBg = $("#" + fullbgId);
	fullBg.css({ width: bW, height: bH, display: "block" });

	var tbT = objWH.split("|")[0] + "px";
	var tbL = objWH.split("|")[1] + "px";

	$("#" + dialogId).css({ top: tbT, left: tbL, display: "block" });
	$(window).scroll(function () { resetBg(dialogId, fullbgId) });
	$(window).resize(function () { resetBg(dialogId, fullbgId) });
}

function getObjWh(obj)
{
	var st = document.documentElement.scrollTop; //滚动条距顶部的距离  
	var sl = document.documentElement.scrollLeft; //滚动条距左边的距离  
	var ch = document.documentElement.clientHeight; //屏幕的高度  
	var cw = document.documentElement.clientWidth; //屏幕的宽度  
	var objH = $("#" + obj).height(); //浮动对象的高度  
	var objW = $("#" + obj).width(); //浮动对象的宽度  
	var objT = Number(st) + (Number(ch) - Number(objH)) / 2;
	var objL = Number(sl) + (Number(cw) - Number(objW)) / 2;
	return objT + "|" + objL;
}
function resetBg(dialogId, fullbgId)
{
	var fullbg = $("#" + fullbgId).css("display");
	if (fullbg == "block")
	{
		var bH2 = $("body").height();
		var bW2 = $("body").width();
		$("#" + fullbgId).css({ width: bW2, height: bH2 });
		var objV = getObjWh(dialogId);
		var tbT = objV.split("|")[0] + "px";
		var tbL = objV.split("|")[1] + "px";
		$("#" + dialogId).css({ top: tbT, left: tbL });
	}
}

//关闭灰色JS遮罩层和操作窗口
function closeBg(dialogId, fullbgId)
{
	$("#" + fullbgId).css("display", "none");
	$("#" + dialogId).css("display", "none");
}

function closeMessage()
{
	$("#fullbg").css("display", "none");
	$("#dialog").css("display", "none");
}