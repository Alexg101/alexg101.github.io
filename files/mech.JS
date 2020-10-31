$(function(){
    var fortunes = [
       "You will be a doctor in NYC, and married to KENDAL JENNER with 2 kids.",
       "You will be a plumber in LA, and married to JENIFER ANISTON with 3 kids.",
      "You will be a cop in TX, and married to JAY Z with 1 kid.",
      "You will be a military in CA, and married to DJ KHALID with 0 kids."
    ];
    fortunes[4] = "YOU STAYED  " + fortunes.length + " Your Family";
    var prev = "";
    function fortunate(){
        var i = (Math.floor(Math.random() * fortunes.length));
        var fortune = fortunes[i];
        while(fortune == prev){
            i = (Math.floor(Math.random() * fortunes.length));
            fortune = fortunes[i];
        }
        return "#" + (i + 1) + " - " + fortune;
    }
    $("#getFortune").click(function(){
        $("#getFortune").text("Get New Fortune")
        var tip = fortunate();
        prev = tip;
        $("#fortune").fadeOut(500);
        setTimeout(function(){
        tip = "<mark>" + tip + "</mark>";
            $("#fortune").html(tip);
            $("#fortune").fadeIn(500);
        }, 500);
    });
});
