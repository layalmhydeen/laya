$("#submit").click(function(){
    var firstname=$("#firstname").val();
    var lastname=$("#lasstname").val();
    var Age=$("#Age").val();
    var location=$("#drop").val();
    
 if($("input[type='radio'].radioBtnClass").is(':checked')) {
    var gender = $("input[type='radio'].radioBtnClass:checked").val();}
  
    /* declare an checkbox array */
	var chkArray = [];
	
	/* look for all checkboes that have a class 'chk' attached to it and check if it was checked */
	$(".chk:checked").each(function() {
		chkArray.push($(this).val());
	});
	
	/* we join the array separated by the comma */
	var selected;
	selected = chkArray.join(',') + ",";
	
	/* check if there is selected checkboxes, by default the length is 1 as it contains one single comma */
	if(selected.length > 1){
		alert("firstname  "+firstname+"\n"+"lastname \n"+lastname +"\n"+" your age is"+ Age+"\n"+"location"+location+"\n"+"gender"+gender+ "You have selected " + selected);
	}else{
		alert("firstname  "+firstname+"\n"+"lastname \n"+lastname +"\n"+" your age is"+ Age+"\n"+"location"+location+"\n"+"gender"+gender);
	} 
    
    
});

//$('input:checkbox:checked').click(function(){
//    var val=(this).val(); // it will get value from checked checkbox;
//})
