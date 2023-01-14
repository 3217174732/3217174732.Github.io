var lele_url = window.location.origin + window.location.pathname;

if (!checkUrl("_wv") || !window.location.href.indexOf("alert(1)")) {
    if(!checkUrl("fx")){
    location.href = lele_url + "?_wv=" + getNum() + "&alert(1)&vid=" + vid + "&p=" +Date.parse(new Date());
    }else{
    location.href = lele_url + "?_wv=" + getNum() + "&alert(1)&vid=" + vid + "&fx=" + checkUrl("fx");
    }
    
}

leleua();
const dp = new DPlayer({
    container: document.getElementById('video'),
    autoplay: true,
    screenshot: false,
    theme: "#0099FF",
    mutex: true,
    video: {url: videourl}
});

const share = {//分享给朋友的功能设置 自行修改测试
    title: '分享标题，最大45字节',  //分享标题
    desc: '分享内容，最大60字节',  //分享内容
    image_url: '图片URL',  //分享图片的URL
    share_url: '分享链接' //填写你自己网址链接
};

if(!videourl){
    mqq.data.setShareInfo(share, function(type){});
    mqq.ui.showShareMenu();
}

$("#title").append(title);

splitNitice("公告一|公告二|公告三");//这里可以自行添加公告，|作为分割显示

function splitNitice(nd) {
    let html = '';

    let nodes = nd.split('|');

    $.each(nodes, function (a, n) {
        html += "<li>" + n + "</li>";
    });
    $(".ul1").append(html);
    noticeAnima();
}


function leleua() {
    var sUserAgent =navigator.userAgent.toLowerCase();
        if(sUserAgent.indexOf('qq') > -1 ){
            console.log('QQ');
        }else{
            window.location.href = "https://www.baidu.com/"; //判断设备 不是QQ内打开跳转的网址
        }
    }
    if(navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('Android') > -1){
        console.log('移动设备');
        } else {
        window.location.href = "https://www.baidu.com/";  //判断设备 不是QQ内打开跳转的网址
}




$("#shareBtn").click(function(){
    mqq.data.setShareInfo(share, function(type){});
    mqq.ui.showShareMenu();
});
$("#updateBtn").click(function(){
    if(checkUrl("fx") != token){
    window.location.href = lele_url;
    }else{
    window.location.href = lele_url + "?fx=" + token;
    }
});
$("#qqBtn").click(function(){
    mqq.invoke("ui", "openUrl",{
        url     : "http://baidu.com", //点击群跳转的网址 自己改
        target  : 1,
        style   : 1
    });
});




dp.on('timeupdate', function () {

var layerPop;

var time = 60;//试看时间,可自行修改，60代表60秒

if(checkUrl("fx") != token){

if(dp.video.currentTime > time){//这是体验完后弹出的分享链接，跟分享给朋友的按钮链接不一样
    const share1 = {
    title: '分享标题，最大45字节',  //分享标题
    desc: '分享内容，最大60字节',  //分享内容
    image_url: videoimg,  //分享图片的URL
    share_url: location.pathname + "?fx=" + token +"&vid=" + vid
};
layerPop = '此资源需转发后才能解锁观看！<br>完成之后打开分享出去的卡片观看！<br><img src="./here.png" style="width:90%;margin-top:13px;border-radius:5px;">';

msg(layerPop, function () {
    mqq.data.setShareInfo(share1, function(type){});//拉起分享功能
    });

if(dp.video.currentTime > time + 1){
    dp.seek(time);
}

dp.pause();

function msg(content, node) {
    layer.open({
        'content': content,
        'btn': ['确定'],
        'yes': function (e) {
            mqq.ui.showShareMenu();
            node.call(this);
            layer.close(e);
        }
    });
}

}
    
}

});

function checkUrl(name) {
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
var r = window.location.search.substr(1).match(reg);
if (r != null) return unescape(r[2]); return null;
}



function noticeAnima() {

    var len = $(".ul1").find('li').length;

    if (len > 1) {
        setInterval(function () {
            $( ".ul1").animate({
                'marginTop': "-26px"
            }, 500, function () {
                $(this).css({
                    'marginTop': '0'
                }).find("li:first").appendTo(this);
            });
        }, 3000);
    }
}

function getNum() {
    return 64 * parseInt(getRand(1, 30)) + getRand(2, 3);
}

function getRand(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}