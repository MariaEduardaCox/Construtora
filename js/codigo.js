$(function(){
    $("#voltar").hide();
    $(window).scroll(function(){
        if($(this).scrollTop()>600){
            ("#voltar").fadeIn(2000);
        }

        if($(this).scrollTop()<600){
            $("#voltar").fadeOut(2000);
        }
    });

    $("#voltar").click(function(){
        $("html").animate({
            scrollTop:0},500);
        });
    });

    
    $(function(){
        $("#voltar1").hide();
        $(window).scroll(function(){
            if($(this).scrollTop()>600){
                $("#voltar1").fadeIn(2000);
            }
            if($(this).scrollTop()<600){
                $("#voltar1").fadeOut(2000);
            }
        });
        $("#voltar1").click(function(){
            $("html").animate({
                scrollTop:0},500);
            });
        });
    
