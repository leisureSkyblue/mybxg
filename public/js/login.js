define(['jquery', 'cookie'], function ($) {
    $('#btn').click(function () {
        
        $.ajax({
            type: 'post',
            // url:'http://api.studyit.com/login',
            url: '/api/login',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) {
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
        console.log(1)
                    
                    location.href = '/index/index';
                }
            }
        });
        console.log($('#loginForm').serialize())
        return false;
    });
});