$(function() {

	$("#recent-tabs-comments").hide();
	
	//add the click function        
	$(".nav-pills a").on("click", function(){
		$(".nav-pills").find(".active").removeClass("active");
		$(this).parent().addClass("active");
	});
	
	$(".member .menu a").on("click", function(){
		$(".menu").find(".active").removeClass("active");
		$(this).addClass("active");
		
		switch($(this).attr("id"))
		{
			case "m1":
				$("#menu1").show();
				$("#menu2").hide();
				$("#menu3").hide();
				break;
			case "m2":
				$("#menu1").hide();
				$("#menu2").show();
				$("#menu3").hide();
				break;
			case "m3":
				$("#menu1").hide();
				$("#menu2").hide();
				$("#menu3").show();
				break;
			case "m4":
				$("#menu4").show();
				$("#menu5").hide();
				break;
			case "m5":
				$("#menu4").hide();
				$("#menu5").show();
				break;
			default:
			    $("#menu1").show();
				$("#menu2").hide();
				$("#menu3").hide();
				$("#menu4").show();
				$("#menu5").hide();
				break;
		}
		return false;
	});
	
	$("#recent-tabs .nav a").on("click", function(){
		$("#recent-tabs .nav").find(".current").removeClass("current");
		$(this).addClass("current");
		var mylink=$(this).attr("href");
		
		//alert(mylink);
		$("#recent-tabs .list-wrap").find("ul").hide();
		$(mylink).show();
		return false;
	});
	
	$('.first').waypoint(function() {
		$('.first').addClass('animated fadeInRight');
		}, { 
		offset: '80%',
		triggerOnce: true
	});
	
	$('.second').waypoint(function() {
		$('.second').addClass('animated fadeInLeft');
		}, { 
		offset: '80%',
		triggerOnce: true
	});
	
	$(".mr_frbox").slide({titCell:"",mainCell:".mr_frUl ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4});
	
	});