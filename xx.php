<?php
$list = explode("\n",file_get_contents("./list.txt"));//这个是视频文件名，一行一个链接和标题
foreach ($list as $key => $val){
    
    if(!empty($val)){
        $lists[] = $val;
    }
}
if(!$_GET["vid"]){
$result = array_rand($lists);
}else{
$result = $_GET["vid"] - 1;
}

$vid = $result;
$result = str_replace(array("\r", "\n"), "", $lists[$result]);

if(!$result){
    $result = "https://static.dingtalk.com/media/lAbPJxDjxcFg6oDOMj0qi84yPSqL.mp4|视频已失效";//获取不到链接默认使用这个 几率几乎没有 备用！！！！
}  

$video =explode("|",$result);

;

function getRandomString($len, $chars=null)  
{  
    if (is_null($chars)) {  
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";  
    }  
    mt_srand(10000000*(double)microtime());  
    for ($i = 0, $str = '', $lc = strlen($chars)-1; $i < $len; $i++) {  
        $str .= $chars[mt_rand(0, $lc)];  
    }  
    return $str;  
}
?>
<!Doctype html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <title>欢迎使用</title>
    <meta name="referrer" content="never">
    <meta itemprop="name" name="title" content="QQ资源" />
    <meta itemprop="description" name="description" content="点这播放" />
    <meta itemprop="image" name="image" content="http://shp.qpic.cn/collector/1544644574/8642d866-9702-4da1-a9a0-3176a7692f04/0">
    <link href="./layer.css" rel="stylesheet" type="text/css">
    <script src="https://open.mobile.qq.com/sdk/qqapi.js?_bid=152"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/lelege/flplayer/js/gg.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/layer-mobile@2.0.1/dist/layer.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js"></script>
</head>


<body>


<?php
//include("../gg/gg.php");//广告跳转
?>

<!--这里可以放广告js代码-->

    <h3 align="center" style="color:white;" id="title"></h3>
    <div id="video" style="width: 100%;height: 220px;"></div>    
    <div style="position: relative;height: 23px;overflow: hidden;font-size:15px;color:white;margin:10px 0;background: #332121;">
        <img src="http://shp.qpic.cn/collector/1544644574/ce08a64a-2ca6-49d2-a7ef-c42c2deee893/0" style="height:20px;position: absolute;">
        <ul class="ul1"></ul>
    </div>
    <button class="mini-upload" id="updateBtn">换一部电影</button>
    <button class="mini-upload" id="qqBtn">点 这 里 进 群 无 限 看</button>
    <a class="mini-upload" href="http://baidu.com"> 精 品 VIP 专 区 </a>
<script>
var token = "<?php echo $_SESSION['lookok'];?>";

var title = "<?php echo $video[2];?>";

var videourl = "<?php echo $video[0];?>";

var videoimg = "<?php echo $video[1];?>";

var vid = "<?php echo $vid + 1;?>";

</script>
<script src="./1.js"></script>
</body>
</html>
