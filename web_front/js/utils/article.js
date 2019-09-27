var article ={
    show:function(param,callBack){
        $.get(URLIST.article_show,param,function(res){
            callBack(res);
        });
    },

};