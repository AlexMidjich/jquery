$(document).ready(function(){



	$("#color1").on({click: function(){
        $("body, #color1").css("background-color", "#e6e600");
        $("#color2, #color3, #color4, #color5, #color6").css("background-color", "#800000");
        $("#gul").css({color:"#e6e600"});
        $("#bla, #rosa, #lila, #rod, #gran").hide();
        $("#gul").show();
    	} 
	});

	$("#color2").on({click: function(){
        $("body, #color2").css("background-color", "#4da6ff");
        $("#color1, #color3, #color4, #color5, #color6").css("background-color", "#800000");
        $("#bla").css({color:"#4da6ff"});
        $("#gul, #rosa, #lila, #rod, #gran").hide();
        $("#bla").show();
    	} 
	});

	$("#color3").on({click: function(){
        $("body, #color3").css("background-color", "#ff80ff");
        $("#color1, #color2, #color4, #color5, #color6").css("background-color", "#800000");
        $("#rosa").css({color:"#ff80ff"});
        $("#gul, #bla, #lila, #rod, #gran").hide();
        $("#rosa").show();
    	} 
	});

	$("#color4").on({click: function(){
        $("body, #color4").css("background-color", "#cc33ff");
        $("#color1, #color2, #color3, #color5, #color6").css("background-color", "#800000");
        $("#lila").css({color:"#cc33ff"});
        $("#gul, #bla, #rosa, #rod, #gran").hide();
        $("#lila").show();
    	} 
	});

	$("#color5").on({click: function(){
        $("body, #color5").css("background-color", "#ff4d4d");
        $("#color1, #color2, #color3, #color4, #color6").css("background-color", "#800000");
        $("#rod").css({color:"#ff4d4d"});
        $("#gul, #bla, #rosa, #lila, #gran").hide();
        $("#rod").show();
    	} 
	});

	$("#color6").on({click: function(){
        $("body, #color6").css("background-color", "#00e64d");
        $("#color1, #color2, #color3, #color4, #color5").css("background-color", "#800000");
        $("#gran").css({color:"#00e64d"});
        $("#gul, #bla, #rosa, #lila, #rod").hide();
        $("#gran").show();
    	} 
	});

	$("h3").hover(function(){
		$("body").css("background-color", "#ffffff");
		$("button").css("background-color", "#800000");
		$("h3").css({color:"#000000"});
		$("#gul, #bla, #rosa, #lila, #rod, #gran").hide();
	});

});