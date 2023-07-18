$(document).ready(function(){


    $(".button").click(function(){
        $(this).addClass("active").siblings().removeClass("active");

        var filter = $(this).attr("data-filter");
    
        if (filter == "all"){
            $(".project .image").show(400);
        }
        else{
            $(".project .image").not("."+filter).hide(200);
            $(".project .image").filter("."+filter).show(400);
        }
    })


    //MAGNIFIC-POPUP
    $(".project").magnificPopup({ 
        
        delegate: "a",
        type: "image",
        removalDelay: 500, //delay removal by X to allow out-animation
        gallery:{
            enabled: true
        },
    })


});