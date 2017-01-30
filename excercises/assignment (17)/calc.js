<!DOCTYPE html>
<html>
<head>
<script>
function getElements() {
    var x = document.getElementsByName("x");
    document.getElementById("demo").innerHTML = x.length;
}
</script>
</head>
<body>

<p>
Cats: <input name="x" type="text" value="Cats">
Dogs: <input name="x" type="text" value="Dogs">
</p>

<p>
<input type="button" onclick="getElements()" value="How many elements named x?">
</p>

<p id="demo"></p>

</body>
</html>
