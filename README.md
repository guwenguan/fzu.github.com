<html lang="zh-CN"><head>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>福州大学一码通</title>
    <!-- <link type="text/css" rel="stylesheet" href="./lib/style.css"> -->
    <script src="./scripts/jquery-3.3.1.min.js"></script>
</head>
<style>
    .param-body {
    margin-top: 100px;
    padding: 16px 0;
    text-align: center;
    background:#fff;
    box-shadow:0px 12px 16px 0px rgba(140,157,210,0.4);
    border-radius:4px;
    }
    input{
    outline-style: none ;
    border: 1px solid #ccc; 
    border-radius: 3px;
    padding: 11px 12px;
    width: 70%;
    font-size: 14px;
    font-weight: 700;
    font-family: "Microsoft soft";
    text-align:center;
}
    p{
    font-size: 16px;
    font-weight: 700;
    font-family: "Microsoft soft";
    color: #444444;
    margin: 5px;
    }
    input:focus{
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
    

</style>
<body>
<div class="param-body">
    <p style="margin-bottom: 20px; color: #00FF00; font-size:large">不关我事，后果自负</p >
    <div>
    <p>请输入姓名</p >
    <input type="text" id="userName" value="自由的门" placeholder="请输入姓名">
    <p>请输入班级</p >
    <input type="text" id="deptName" value="数学与计算机科学学院" placeholder="请输入部门">
    <p>请输入标语</p >
    <input type="text" id="marqueeStr" value="和谐" placeholder="现在默认滚动标语为文明">
    <br>
    <br>
    <button id="send">确定</button>
</div>
</div>
</body>
<script>
    $(function() {
        $('#send').click(function() {
            var value1 = $('#userName').val();
            var value2 = $('#deptName').val();
            var value3 = $('#marqueeStr').val();
            var url = "/form.html?userName="
             + value1 + "&deptName=" + value2 + "&marqueeStr=" + value3;
            url=encodeURI(url);
            window.location.href=url;
        });
    });
</script>
</html>
