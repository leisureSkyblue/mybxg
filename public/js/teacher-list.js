define(['jquery','template','bootstrap'],function($,template){
    //通过ajax请求对teacher-list页面进行渲染
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            var html = template('teacherTpl',{list:data.result});
            $("#teacherInfo").html(html);
	     //讲师信息模态框渲染
            $("#teacherInfo").find('.preview').click(function(){
                var td = $(this).parent();
                var tcId = td.attr('data-tcId');
                //通过ajax请求获取讲师详细信息
                $.ajax({
                    type:'get',
                    url:'/api/teacher/view',
                    data:{tc_id:tcId},
                    dataType:'json',
                    success:function(data){
                        var html = template('modalTpl',data.result);
                        $("#modalInfo").html(html);
                        $("#teacherModal").modal();
                    }
                });
            });
        }
    });
});