 
	$(document).ready(function () {

		 $(document).mousemove(function(e){
		 	$('.cursor').css("top", e.pageY);
		 	$('.cursor').css("left", e.pageX);
		 })

		 $('.circle_1').hover(function() {
		 	$(".green").addClass("white");
		 })

		 $('.circle_2').hover(function() {
		 	$(".green").addClass("white");
		 	$(".red").addClass("white");
		 })
})
