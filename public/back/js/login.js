$(function(){
    $('#form').bootstrapValidator({
        //配置效验图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',    // 校验成功
            invalid: 'glyphicon glyphicon-remove',  // 校验失败
            validating: 'glyphicon glyphicon-refresh' // 校验中
          },
        //配置字段；
        fields:{
            username:{
                //配置效验规则
                validators:{
                    //非空效验
                    notEmpty:{
                        //提示消息
                        message:'用户名不能为空'
                    },
                    stringlength:{
                        min:2,
                        max:6,
                        message:"用户名在2-6位数"
                    },
                    callback:{
                        message:"用户名不存在"
                    }
                }
            },
            password:{
                validators:{
                    notEmpty:{
                        message:'密码不能为空'
                    },
                    stringlength:{
                        min:6,
                        max:12,
                        message:'密码必须6-12位数'
                    },
                    callback:{
                        message:{
                            message:'抱歉，密码不正确'
                        }
                    }
                }
            }
        }
    })


    //登陆功能；
    //表单效验成功事件， success.form.bv插件自带的事件；
    $('#form').on('success.form.bv',function(e){
       e.preventDefault();//阻止默认事件；
    //    console.log(123)
       $.ajax({
           type:'post',
           url:'/employee/employeeLogin',
           data:$('#form').serialize(),
           dataType:'json',
           success:function(info){
               if(info.success){
                   location.href='index.html';
               }
               if(info.error===1000){
                  alert('用户名错误')
               }
               if(info.error===1001){
                   alert('密码错误');
               }
           }
       })
    })




    //表单重置功能
    $("[type='reset']").on('click',function(){
        $('#form').data('bootstrapValidator').resetForm();
    })
})