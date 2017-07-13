define(['jquery', 'template', 'util', 'editor', 'uploadify', 'region'], function ($, template, util, CKEDITOR) {
    // 设置导航菜单选中
    util.setMenu('/index/index');
    // 查询用户详细信息
    $.ajax({
        type: 'get',
        url: '/api/teacher/profile',
        dataType: 'json',
        success: function (data) {
            var html = template('settingsTpl', data.result);
            $("#settingsInfo").html(html);
            // 文件上传
            $("#upfile").uploadify({
                width: 120,
                height: 120,
                buttonText: '',
                fileObjName: 'tc_avatar',
                swf: '/public/assets/jquery-uploadify/uploadify.swf',
                uploader: '/api/uploader/avatar',
                onUploadSuccess: function (a, b, c) {
                    // 修改图片地址
                    $("#settingsInfo img").attr('src', b.result.path);
                }
            });
            // 省市县联动
            $("#region").region({
                url: '/public/assets/jquery-region/region.json'
            });
            //处理富文本
            CKEDITOR.replace('editor', {
                toolbarGroups: [
                    { name: 'clipboard', groups: ['clipboard', 'undo'] },
                    { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                    { name: 'others', groups: ['others'] },
                    { name: 'about', groups: ['about'] }
                ]
            })
        }
    });
});