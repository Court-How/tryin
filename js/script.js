$(document).ready(function() {
    
    var images = ["sprinkle.png", "sugar2.png", "check.png", "cereal2.png", "DayWalker.png", "Gay90s.png", "ODB.png", "OhFu$ckYeah.png", "TheD2.png", "TheFiftyTyson.png"];
    $("#one").css({"background-image": "url(images/" + images[Math.floor(Math.random()*images.length)] + ")"});
    
    $("#two").css({"background-image": "url(images/" + images[Math.floor(Math.random()*images.length)] + ")"});
    
    $("#three").css({"background-image": "url(images/" + images[Math.floor(Math.random()*images.length)] + ")"});
    
    $("#four").css({"background-image": "url(images/" + images[Math.floor(Math.random()*images.length)] + ")"});
    
    
    
    // jquery library
    
    
    $(".shuffle-me").shuffleImages({
        trigger: "imageMouseMove",
        triggerTarget: false,
        mouseMoveTrigger: 50,
        hoverTrigger: 200,
        target: "> img"
    });
    
    
    
});
