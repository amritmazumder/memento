	$(document).ready(function(){


	

		$(".selfText a").css("border","1px solid #f6f6f6");

		$(".selfText a").hover(function(){
			$(this).css("background","#f6f6f6");
			$(this).css("color","#1c1c1c");
		}, function() {
			$(this).css("background","");
			$(this).css("color","#f6f6f6");
		});

		$(".storyText a").css("border","2px solid #1c1c1c");

		$(".storyText a").hover(function(){
			$(this).css("background","#1c1c1c");
			$(this).css("color","#f6f6f6");
		}, function(){
			$(this).css("background","");
			$(this).css("color","1c1c1c");
		});
		

		$(".container:contains('EARL')").parent().css("background","#f6f6f6");
		$(".container:contains('Earl')").parent().css("background","#f6f6f6");
		$(".container:contains('You')").parent().css("background","#1c1c1c");
		$(".container:contains('you')").parent().css("background","#1c1c1c");

		var viewport = $(window).width();
		var viewportHeight = $(window).height();
		var fof = $(document).height();

		//alert(fof);

		$("a").click(function(e){
			
			e.preventDefault();
			
			var container = $(this).parent().parent().parent().parent();
			var paragraph = $(this).parent();
			var article = $(this).parent().parent().parent();
			var offset = $(this).offset();
			var href = $(this).attr('href');
			var pageHeight = 10000;
			var clicked = false;

			if (!clicked) {
				$(this).after("<iframe class='framer' height=' "+pageHeight+"' width='"+viewport+" ' src='"+href+" ' frameBorder='0'>");
				clicked = true;

			} else {

			}
						
});


	});