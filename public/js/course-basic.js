define(['jquery','template','util'],function($,template,util){
    // 设置菜单选中
    util.setMenu('/course/course_add');
    // 获取课程ID
    var csId = util.qs('cs_id',location.search);
    // 如果cs_id存在则是编辑操作,不存在即是添加操作
    if(csId){
        // 编辑操作
        $.ajax({
            type:'get',
            url:'/api/course/basic',
            data:{cs_id:csId},
            dataType:'json',
            success:function(data){
                data.result.operate = '课程编辑';
                var html = template('courseTpl',data.result);
                $("#courseInfo").html(html);
            }
        });
    } else {
        // 添加操作
    }
});