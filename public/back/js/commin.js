

//进度条功能；子第一个ajax发送时候调用；
$(document).ajaxStart(function(){
    NProgress.start();//开启调用进度条功能；
})