define(['jquery', 'template', 'util', 'datepicker', 'language', 'validate'], function ($, template, util) {
    // 添加或者编辑讲师

    // 设置导航菜单选中高亮
    util.setMenu('/teacher/list');

    // 获取讲师id
    var tcId = util.qs('tc_id', location.search);
    if (tcId) {
        // 根据tc_id查询到讲师信息
        $.ajax({
            type: 'get',
            url: '/api/teacher/edit',
            data: { tc_id: tcId },
            dataType: 'json',
            success: function (data) {
                data.result.tc_operate = '编辑讲师';
                var html = template('teacherTpl', data.result);
                $('#teacherInfo').html(html);
                // 绑定编辑页面的表单提交事件
                // $("#addBtn").click(function(){
                //     submitForm('/api/teacher/update');
                // });
                $("#addForm").validate({
                    sendForm: false,
                    valid: function () {
                        submitForm('/api/teacher/update');
                    },
                    description: {
                        tc_name: {
                            required: '用户名不能为空'
                        },
                        tc_pass: {
                            required: '密码不能为空',
                            pattern: '密码只能是6位数字'
                        },
                        tc_join_date: {
                            required: '入职日期必须选择'
                        }
                    }
                });
            }
        });
    } else {
        // 添加讲师
        var html = template('teacherTpl', { tc_operate: '添加讲师', tc_gender: 0 });
        $("#teacherInfo").html(html);
        // 绑定添加页面的表单提交事件
        // $("#addBtn").click(function(){
        //     submitForm('/api/teacher/add');
        // });
        $("#addForm").validate({
            sendForm: false,
            valid: function () {
                submitForm('/api/teacher/add');
            },
            description: {
                tc_name: {
                    required: '用户名不能为空'
                },
                tc_pass: {
                    required: '密码不能为空',
                    pattern: '密码只能是6位数字'
                },
                tc_join_date: {
                    required: '入职日期必须选择'
                }
            }
        });
    }

    //表单提交事件
    function submitForm(url) {
        $.ajax({
            type: 'post',
            url: url,
            data: $("#addForm").serialize(),
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) {
                    location.href = '/teacher/list';
                }
            }
        });
    }
});