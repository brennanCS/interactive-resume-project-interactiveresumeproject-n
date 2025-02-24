

    $(".thick-border").click(function(){
        var inside = $(this).find("#inside");
        var back = $("body").css("background-color");

        if(inside.is(":visible")){
            inside.slideUp("slow");
            $(this).find("h1, h4").animate({left:"0"}, "slow");
            $(this).find(".date").animate({left:"0"}, "slow");
            $(this).animate({backgroundColor:back},"slow");
        }
        else{
            inside.slideDown("slow");
            $(this).find("h1, h4").animate({left:"35%"}, "slow");
            $(this).find(".date").animate({left:"-40%"}, "slow");
            if(back=="rgb(154, 153, 153)"){
                $(this).animate({backgroundColor:"rgb(198, 198, 198)"},"slow");
            }
            else{
                $(this).animate({backgroundColor:"rgb(154, 153, 153)"},"slow");
            }
        }
    });

    $(".thin-border").click(function(event){
        event.stopPropagation();
        var insides = $(this).find("#insides");
        var back = $("body").css("background-color");


        if(insides.is(":visible")){
            insides.slideUp("slow");
            $(this).find("h1, h4").animate({left:"0"}, "slow");
            $(this).find(".date").animate({left:"0"}, "slow");
            $(this).animate({backgroundColor:back},"slow");
        }
        else{
            insides.slideDown("slow");
            $(this).find("h1, h4").animate({left:"35%"}, "slow");
            $(this).find(".date").animate({left:"-40%"}, "slow");
            if(back=="rgb(154, 153, 153)"){
                $(this).animate({backgroundColor:"rgb(198, 198, 198)"},"slow");
            }
            else{
                $(this).animate({backgroundColor:"rgb(154, 153, 153)"},"slow");
            }
        }
    });

           
var lightButton = document.getElementById("lightBtn");
var darkButton = document.getElementById("darkBtn");
            
lightButton.addEventListener("click", function(){
    document.body.id = "light-mode";
    localStorage.setItem("theme", "light");
});
            
darkButton.addEventListener("click", function(){
    document.body.id = "dark-mode";
    localStorage.setItem("theme", "dark");
});
            
window.addEventListener("DOMContentLoaded", function(){
    var savedTheme = localStorage.getItem("theme");
    if(savedTheme != null){
        document.body.id= savedTheme + "-mode";
    }
});

refresh.addEventListener('click', function(){
    window.location.reload();
  });
