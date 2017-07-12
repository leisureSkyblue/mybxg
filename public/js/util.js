define(['jquery'], function ($) {
    // util  可能需要多次调用的方法
    // qs方法用来获取URL中指定的参数值
    function qs(key, param) {
        var obj = {};
        if (param) {
            var p = param.substr(1);
            if (p) {
                var arr = p.split('&');
                arr.forEach(function (item) {
                    var kv = item.split('=');
                    obj[kv[0]] = kv[1];
                });
            }
        }
        return obj[key];
    }
    return {
        qs: qs
    }
});