require.config({
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery',
        template: 'artTemplate/template-web',
        bootstrap:'bootstrap/js/bootstrap.min',
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker.min',
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate:'jquery-validate/jquery-validate',
        form: 'jquery-form/jquery.form',
        cookie: 'jquery-cookie/jquery.cookie',
        uploadify: 'jquery-uploadify/jquery.uploadify.min',
        region: 'jquery-region/jquery.region',
        editor:'ckeditor/ckeditor',

        common: '../js/common',
        login: '../js/login',
        teacher_list:'../js/teacher-list',
        teacher_add:'../js/teacher-add',
        util:'../js/util',
        index:'../js/index',
        settings: '../js/settings',
        course_list:'../js/course-list'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        language:{
            deps:['jquery','datepicker']
        },
        validate:{
            deps:['jquery']
        },
        uploadify:{
            deps : ['jquery']
        },
        editor : {
            exports : 'CKEDITOR'
        }
    }
});