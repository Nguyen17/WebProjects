$(document).ready(function()
{
	if $( ".webgl-content" ).scrollTop() < 300{
		$(".webgl-content").css({"display": none});
	}
	if $(".webgl-content").scrollTop() > 300 {
		$(".webgl-content").css({"display": block});
	}


})