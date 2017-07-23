$(document).ready(function(){
	$(".input-button").click(function(evt){
		evt.preventDefault();
		var value = $(".input-box").val();
		var item = "<div class='item-box'> <h3 class='item-text'>" + value + "</h3> <input type='checkbox' class='omak'> <i class='fa fa-trash fa-2x bin-button' aria-hidden='true'></i> </div>";
		$(".main").append(item);
		$(".bin-button").click(function() {
 		$(this).parent().remove();
		});
		$(".omak").click(function() {
		$(this).siblings(".item-text").toggleClass("strikethrough");
		});
	});
});





// $("button").click(function(e) {
// 	e.preventDefault();
// 	var value = $(".input-box").val();
// 	var div = "<div class='item-box'> <h3 class='item-text'>" + value + "</h3> <input type='checkbox'> <i class='fa fa-trash fa-2x bin-button' aria-hidden='true'></i> </div>";
// 	$(".main").append(div);
// 	$(".bin-button").click(function() {
// 	$(this).parent("div.item-box").remove();
// });
// 	$("[type=checkbox]").click(function() {
// 	$(this).siblings(".item-text").toggleClass("strikethrough");
// });
// });



