define(['jquery','template','cookie'],function($,template){
	//侧边栏菜单折叠与现实
	$('.navs ul').prev('a').on('click',function(){
		$(this).next().slideToggle();
	});
	//实现退出功能
	$("#logout").click(function(){
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				if(data.code == 200){
                    $.removeCookie('loginInfo',{path:'/'})
                    location.href = '/';
                }
			}
		});
	});
	//获取登录的用户信息
        var info = $.cookie('loginInfo');
        //渲染头像
        var tpl = '<div class="avatar img-circle">'
            	  +'<img src="{{tc_avatar}}">'
                  +'</div>'
                  +'<h4>{{tc_name}}</h4>';
		var html = template.render(tpl,info?JSON.parse(info):{});
		$('.aside .profile').html(html);
		//验证用户是否登录过
		if(!$.cookie('PHPSESSID')&&location.pathname!='/'&&location.href!='/login'){
			location.href = '/';
		}
});