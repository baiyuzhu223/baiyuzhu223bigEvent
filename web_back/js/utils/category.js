var category={
   show:function (callback) {
       $.get(URLIST.category_show,function (res) {
           callback(res);
       });
   },
   add:function(name,slug,callback) {
       $.post(URLIST.category_add,{name:name,slug:slug},function (res) {
           callback(res);
       });
   },
   del:function (id,callback) {
       $.post(URLIST.category_delete,{id:id},function (res) {
           callback(res);
       });
   },
   edit:function (id,name,slug,callback) {
       $.post(URLIST.category_edit,{id:id,name:name,slug:slug},function (res) {
           callback(res);
       });
   },
}
