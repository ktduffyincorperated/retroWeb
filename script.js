
//$(".text, .image").hide();
//
//$("h1").click(function(){
//    $(".text").fadeIn(1000);
//});
//
//$(".text").click(function(){
//    $(".image").slideDown(2000);
//});

$(".big_image, .x").hide();

$(".image-2").hide();


$("button").click(function(){ 
    $(".image-2").show(1000);
});


$(".image-2").click(function(){ 
    $(this).hide(1000);
});




$(".image").click(function(){
    $(".big_image").fadeIn(1000);
    $(".x").fadeIn(1000);
    });

$(".big_image").click(function(){
    $(this).fadeOut(1000);
    });

