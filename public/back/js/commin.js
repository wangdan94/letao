

//进度条功能；子第一个ajax发送时候调用；
$(document).ajaxStart(function(){
    NProgress.start();//开启调用进度条功能；
})

$(function(){
    //分类管理切换功能；
    $('.nav .category').click(function(){
        $('.nav .child').stop().slideToggle();
    })
    $('.icon_menu').click(function(){
        // alert(1);
        $('.lt_aside').toggleClass('hidemenu');
        $('.lt_topbar').toggleClass('hidemenu');
    })


    
    //点击显示模态框；
    $('.icon_logout').click(function(){
     $('#logoutModal').modal('toggle');
    })
//点击退出功能；
    $('.modalout').click(function(){
        $.ajax({
            type:'get',
            url:'/employee/employeeLogout',
            datatype:'json',
            success:function(info){
              if(info.success){
                  location.href='login.html';
              }
            }
        })
    })
    


         //登陆拦截功能
         if(location.href.indexOf('login.html')===-1){
            $.ajax({
                type:'get',
                url:'/employee/checkRootLogin',
                datatype:'json',
                success:function(info){
                  if(info.success){
                      console.log('用户已登录');
                  }
                  if(info.error===400){
                      location.href='login.html'
                  }
                }
            })
        }

   

})