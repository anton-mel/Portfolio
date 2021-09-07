
  $i=0;
  $(document).on('keydown',function(event) {
    var key = event.keyCode;
    if($(window).scrollTop()>=$(window).height() && $(window).scrollTop()<$(window).height()*2){
      if(key == 38) {
        $i=$i-50;
        if($i<0){
          $(".descriotion__about ul").animate({scrollTop: 500}, 500, 'swing');
        }else{
          $(".descriotion__about ul").animate({scrollTop:$i}, 500, 'swing');
        }
      }else if(key == 40) {
        $i=$i+50;
        if($i>540){
          $i=0;
        }
        $(".descriotion__about ul").animate({scrollTop:$i}, 500, 'swing');
      }
    }
  });

    
// /////////////////POPPERS///////////////////
  const tooltip = document.querySelector('#tooltip');

  // Pass the button, the tooltip, and some options, and Popper will do the
  // magic positioning for you:
  Popper.createPopper(button, tooltip, {
    placement: 'right',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 0],
        },
      },
    ]
  });


// //////////////////MOUSE///////////////////////
new kursor({
	type: 4,
	removeDefaultCursor: true,
	color: "#fff"
});

/*///////////////SCROLL//////////////////*/
const scroll = new SmoothScroll('.menu ul li a[href*="#"]', {
	speed: 800
});



var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2, {
  relativeInput: true
});

var scene3 = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene3, {
  relativeInput: true
});

var scene4 = document.getElementById('scene4');
var parallaxInstance = new Parallax(scene4, {
  relativeInput: true
});

var scene5 = document.getElementById('scene5');
var parallaxInstance = new Parallax(scene5, {
  relativeInput: true
});

$(window).scroll(function () {
	if($(window).scrollTop()>0 && $(window).scrollTop()<=$(window).height()){
		$(".wrapper h1").css("margin-top", $(window).scrollTop()/3*2);
		$(".decore").css("bottom", $(window).scrollTop()*1.5);
	}

	$ss = ($(window).scrollTop()+$(window).height())/($("body").height());
	$(".line-height").css("height", $ss*100+"vh");
});

$(".menu").find("a").each(function(){
	$(this).click(function(){
		$(".menu").find("a").each(function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
	});
});



$(document).ready(function(){
  $(document).find("img[src*='https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png']").hide();

  setTimeout(function(){
    $(".loader h1").animate({opacity: 1}, 2000);
  }, 500);
  setTimeout(function(){
    $(".loader h1").animate({opacity: 0}, 1000);
  }, 3000);
  setTimeout(function(){
    $(".loader").animate({opacity: 0}, 1000);
    setTimeout(function(){
      $(".loader").hide();
    },1000);
  }, 4000);

  setTimeout(function(){
    $("#tooltip").animate({opacity: 1}, 500);
    setTimeout(function(){
      $("#tooltip").animate({opacity: 0}, 500);
    }, 6000);
  }, 5000);

  $ss = ($(window).scrollTop()+$(window).height())/($("body").height());
  $(".line-height").css("height", $ss*100+"vh");
  $(".chat").hide();

});

$i = 0;
$(".messanger").click(function(){
	if($i==0){
		$(".chat").show();
		$(".chat").animate({
		    opacity: "1"
		}, 200, function() {
			$i++;
		});
		$(this).html('<i class="fa fa-times" aria-hidden="true" style="transform: translateX(-1px)"></i>');
	}else{
		$(".chat").animate({
		    opacity: "0"
		}, 200, function() {
			$(this).hide();
			$i--;
		});
		$(this).html('<i class="fa fa-paper-plane" aria-hidden="true"></i>');
	}
});

$(".mess").find("input").focusout(function(){
	if($(".mess").find("input").val()!==""){
		$(".mess").find("input").css("border","solid 1px #fff");
	}
});
