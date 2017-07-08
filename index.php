<?php
//后端路由(分发URL请求)
$pathname = 'index';
$filename = 'index';

if(isset($_SERVER['PATH_INFO'])){
    $urlpath = $_SERVER['PATH_INFO'];
    //去掉字符串中的第一个字符
    $str = substr($urlpath,'1');
    //explode分割字符串相当于js中的split
    $arr = explode('/',$str);
    if(count($arr) == 2){
        $pathname = $arr[0];
        $filename = $arr[1];
    }
} else {
    $filename = 'login';
}

include('./views/'.$pathname.'/'.$filename.'.html');


?>