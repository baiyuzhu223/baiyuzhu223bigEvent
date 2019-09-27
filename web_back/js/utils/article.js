var article = {
    show: function (param, callback) {
        $.get(URLIST.article_show, param, function (res) {
            callback(res);
        });
    },
    del: function (id, callback) {
        $.get(URLIST.article_del, {
            id: id
        }, function (res) {
            callback(res);
        });
    },
    add: function (fd, callback) {
        $.ajax({
            url: URLIST.article_add,
            type: 'post',
            data: fd,
            processData: false, //让jquery不要处理数据，他无法处理fromdata对象
            contentType: false, //不要额外设置请求头，他有自己的请求头
            success: function (res) {
                callback(res);
            }
        })
    },
    edit: function (fd, callback) {
        $.ajax({
       url:URLIST.article_edit,
       type:'post',
       data:fd,
       processData:false,
       contentType:false,
       success:function (res) {
           callback(res);
       }
        })
    }
}