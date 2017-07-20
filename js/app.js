
$("button").click(function(e) {
	e.preventDefault();
	var value = $(".input-box").val();
	div = "<div class='item-box'> <h3 class='item-text'>" + value + "</h3> <input type='checkbox'> <i class='fa fa-trash fa-2x bin-button' aria-hidden='true'></i> </div>";
	$(".main").append(div);
	$(".bin-button").click(function() {
	$(this).parent("div.item-box").remove();
})
	$("[type=checkbox]").click(function() {
	$(this).siblings(".item-text").toggleClass("strikethrough");
})
});



