//check of specific todo by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//click on x to delete
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});	//gives us parent element as jQuery element
	event.stopPropagation(); // stops bubling up to other elements
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"  + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
});