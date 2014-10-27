$(function(){
	var button = $("button");
	
	button.on("click", function() {
		console.log("Button was clicked");
		var newItem = ($("input").val());

		var newLi = $("<li>").text(newItem);

		if ($("input").val() == "");
		return false;

		$("ul").append(newLi);

	});
});

