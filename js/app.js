$(document).ready(function() {
	$(".input-button").click(function(evt){
		evt.preventDefault();
		var value = $(".input-box").val();
		var item = "<div class='item-box'> <h3 class='item-text'>" + value + "</h3> <input type='checkbox' class='checkbox'> <i class='fa fa-trash fa-2x bin-button' aria-hidden='true'></i> </div>";
		$(".main").append(item);
		$(".bin-button").click(function() {
 			$(this).parent().remove();
		});
		$(".checkbox").click(function() {
			$(this).prev().toggleClass("strikethrough");
		});
	});	
});

