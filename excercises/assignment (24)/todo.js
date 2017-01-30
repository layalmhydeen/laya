//function deleteItem(item){
//    //$("#"+ id).remove();
//    $(item).remove();
//}
//$("#submit").click(function(item){
//    var item=$("#item").val();
//    // note to save id of an element we put id =item id='"+item+"'>"
//    $("#output").append("<li id='"+item+"'>"+item+"<button onclick='deleteItem("+item+")'>Delete</button></li>");
//    $("#item").val();
//});

function deleteItem(item){
    //$("#"+ id).remove();
    $(item).remove();
}
$("#submit").click(function(item){
    var item=$("#item").val();
    // note to save id of an element we put id =item id='"+item+"'>"
    $("#output").append("<li id='"+item+"'>"+item+"<input type='checkbox' onclick='deleteItem("+item+")'></li>");
    $("#item").val();
});