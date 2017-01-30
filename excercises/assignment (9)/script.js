

urlCall="http://api.vschool.io/layalmhy/todo/58863e4ef945ec460e3c59da"
$.ajax({
    url: urlCall + '?' + $.param({"Id": Id, "bolDeleteReq" : bolDeleteReq}),
    type: 'DELETE',
    success: callback || ,
    error: errorCallback || $.noop
});