$(document).ready(function(){

	$('.m-choice button').click(function () {
		$('.m-choice button').removeClass("checked");
		$(this).addClass("checked");
		var className = $(this).text();
		$(".m-index").hide(1000);
		$("."+className).show(1000);
	});

	$(".image").click(function(){
		var thisImg = new Image();
		thisImg.src =$(this).attr("src");
		thisImg.style.width=$(document).height()/2;
		$(".cover").show();
		$(".amplifyImg").show().append(thisImg);
		$(".amplifyImg")[0].style.height=$(document).height();
		$(".amplifyImg").click(function () {
			$(".cover").hide();
			$(this).hide().empty();
			$(this)[0].style.height=0;
		});
	});

	$('.ex2-choice button').click(function () {
		$('.ex2-choice button').removeClass("checked");
		$(this).addClass("checked");
		var className = $(this).text();
		$(".ex2-index").hide();
		$("."+className).show();
	});

	$(".add").click(function () {
		var str="";
		var index;
		if($(".ex3 li span").length>0){
			index=parseInt($(".ex3 li span").last().text())+1;
		}
		else {
			index=1;
		}
		str="<li><span>"+index+"</span>"+
			"<input type='text'>"+
			"<button class='delete'>Delete</button></li>";
		$(this).parent().append(str);
		initDelete();
	});
});

function initDelete(){
		$(".delete").click(function () {
			$(this).parent().remove();
			for(i=1;i<=$(".ex3 li").length;i++){
				$(".ex3 li span").eq(i-1).text(i);
			}
		});
}
 
initDelete();
