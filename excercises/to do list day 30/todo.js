console.log("Request Sent");

function loadData() {
    // $document.ready(function () { // used to when load this document 
    $.ajax({
        url: "http://api.vschool.io/layalmhy/todo/",
        type: "GET",
        success: function (data) {
            console.log("data loaded");
            $(".output").html("");
            for (var i = 0; i < data.length; i++) {
                $(".output").append("<li id='" + data[i]._id + "'>" + data[i].title + "</li>");
                console.log("data is" + data[i]._id + "   title is " + data[i].title);
            }
        }
    });
    //   });
}

function addData(title, description, price, completed) {
    //  var title = $("#title").val();
    console.log(price);
    var data = {
        title: title,
        description: description || "N/A",
        price: price || 0,
        completed: $("#completed").is(":checked") || false,
    };
    $.ajax({
        url: "http://api.vschool.io/layalmhy/todo/",
        type: "POST",
        data:data,
        success: function (data) {
            console.log("data loaded");
            loadData();
        }
    });

}

$(document).ready(function () {
    console.log("Application has started");
    loadData();
    $("#submit").click(function () {
        var title = $("#title").val();
        var description = $("#description").val();
        var price = $("#price").val();
        // var url=$("#imgURL").val();
        var completed = $("#completed").is(":checked");
        addData(title, description, price, completed);
        loadData();
    });
});