
$(".thick-border").click(function(){
    var inside = $(this).find("#inside");

    if(inside.is(":visible")){
        inside.slideUp("slow");
        $(this).find("h1, h4").animate({left:"0"}, "slow");
        $(this).find(".date").animate({left:"0"}, "slow");
        $(this).animate({backgroundColor:"rgb(154, 153, 153)"},"slow");
    }
    else{
        inside.slideDown("slow");
        $(this).find("h1, h4").animate({left:"35%"}, "slow");
        $(this).find(".date").animate({left:"-40%"}, "slow");
        $(this).animate({backgroundColor:"rgb(198, 198, 198)"},"slow");
    }
});

$(".thin-border").click(function(event){
    event.stopPropagation();
    var insides = $(this).find("#insides");

    if(insides.is(":visible")){
        insides.slideUp("slow");
        $(this).find("h4").animate({left:"0"}, "slow");
        $(this).find(".date").animate({left:"0"}, "slow");
        $(this).animate({backgroundColor:"rgb(154, 153, 153)"},"slow");
    }
    else{
        insides.slideDown("slow");
        $(this).find("h4").animate({left:"35%"}, "slow");
        $(this).find(".date").animate({left:"-40%"}, "slow");
        $(this).animate({backgroundColor:"rgb(198, 198, 198)"},"slow");
    }
});