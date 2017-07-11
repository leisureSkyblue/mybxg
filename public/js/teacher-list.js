define(['jquery','template','bootstrap'],function($,template){
    //通过ajax请求对teacher-list页面进行渲染
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            var html = template('teacherTpl',{list:data.result});
            $("#teacherInfo").html(html);
        }
    });
});