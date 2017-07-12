require.config({
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery',
        template: 'artTemplate/template-web',
        bootstrap:'bootstrap/js/bootstrap.min',
        cookie: 'jquery-cookie/jquery.cookie',
        common: '../js/common',
        login: '../js/login',
        teacher_list:'../js/teacher-list',
        teacher_add:'../js/teacher-add'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});