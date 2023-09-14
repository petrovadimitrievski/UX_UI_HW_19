
// I  will delete it after Homework ( just for practice ) 
function stringConcat(){
    var Welcome="Welcome and Thank you";
    var Web=" for Visiting my Portfolio page";
    var WT=Welcome+""+Web;
    alert(WT);
    console.log(WT);
    
    }
    stringConcat();



$(".toggle").click(function(){
    $(this).find(".toggleContainer").toggleClass("active") ;

//  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});


// This is also not working :( 
// $(".topNav").css("color", "#ff0000");

// This is unly working on My Projects-why?
// $("li").css("color", "#ff0000");


// write the text from Class vidio  (not working)
// $ (".toggle").on("click", function()) {
// $(".toggleContainer").toggle();

// }