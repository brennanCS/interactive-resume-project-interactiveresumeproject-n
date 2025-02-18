$(".thick-border").click(function(){
    var inside = $(this).find("#inside");

    if(inside.is(":visible")){
        inside.slideUp("slow");
        $(this).find("h1, h4").animate({left:"0"}, "slow");
        $(this).find("#date").animate({left:"0"}, "slow");
    }
    else{
        inside.slideDown("slow");
        $(this).find("h1, h4").animate({left:"40%"}, "slow");
        $(this).find("#date").animate({left:"-40%"}, "slow");
    }
});

$(".thin-border").click(function(){
    var insides = $(this).find("#insides");

    if(insides.is(":visible")){
        insides.slideUp("slow");
        $(this).find("h4").animate({left:"0"}, "slow");
        $(this).find("#date").animate({left:"0"}, "slow");
    }
    else{
        inside.slideDown("slow");
        $(this).find("h4").animate({left:"40%"}, "slow");
        $(this).find("#date").animate({left:"-40%"}, "slow");
    }
});