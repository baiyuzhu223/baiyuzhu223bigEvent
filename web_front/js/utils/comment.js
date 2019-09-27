var comment ={
    get:function(article_id,callBack){
        $.get(URLIST.comment_show,{article_id:article_id},function(res){
            callBack(res);
        });
    },
    add:function(param,callBack){
        $.post(URLIST.comment_add,param,function(res){
            callBack(res);
        });
    }
};