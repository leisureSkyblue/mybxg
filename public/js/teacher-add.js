define(['jquery','template'],function($,template){
    //绑定表单提交事件
    $("#addBtn").click(function(){
        $.ajax({
            type:'post',
            url:'/api/teacher/add',
            data:$("#addForm").serialize(),
            dataType:'json',
            success:function(data){
                if(data.code==200){
                    location.href = '/teacher/list';
                }
            }
        });
    });
});