$(document).ready(function() {
	
	$( "#toggle" ).click(function() {

		if ($("#buttons").is(":visible")) {
			$("#buttons").hide()
			$( "#toggle_icon" ).addClass("fa-plus")
			$( "#toggle_icon" ).removeClass("fa-minus")
		} else {
			$("#buttons").show();
			$( "#toggle_icon" ).removeClass("fa-plus")
			$( "#toggle_icon" ).addClass("fa-minus")
		}
		
		});
	
});