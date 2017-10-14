$(document).ready(function() {

    var answer = ["Correct", "Correct", "Correct", "Correct",
        "Correct"
    ];


    var correctAnswer1 = "Correct"
    var correctAnswer2 = "Correct"
    var correctAnswer3 = "Correct"
    var correctAnswer4 = "Correct"
    var correctAnswer5 = "Correct"



    $("#container").hide();
    $(".results").hide();
    $("#button").click(function() {
    $("#container").show()
    $("#start").hide();
        


        var time = setInterval(timeCount, 1000);

        function timer(start) {
            console.log(start);
        };

        function stopTimer() {
            clearInterval(time);
        };
        var countDown = 20;

        function timeCount() {
            if (countDown > 0) {
                timer(countDown);
                countDown--;
                $("#timer2").html("<h2>Time Remaining: " + countDown + "</h2>");
                // $("#seconds").text(timeCount);
            } else if (countDown === 0) {
                timer(countDown);
                stopTimer();
                $("#container").hide();
                $(".results").show();
            }
        }

 
    });

    
    var wins = 0;
    var losses = 0;


    $("#1").on("click", function() {
        if (correctAnswer1 = answer[1]) {
            alert("correct")
        };
        wins++;
        $(".wins").text(wins);
    });


    $("#3").on("click", function() {
        if (correctAnswer2 = answer[3]) {
            alert("correct")
        };
        wins++;
        $(".wins").text(wins);
    });

    $("#4").on("click", function() {
        if (correctAnswer3 = answer[4]) {
            alert("correct")
        };
        wins++;
        $(".wins").text(wins);
    });

    $("#2").on("click", function() {
        if (correctAnswer4 = answer[2]) {
            alert("correct")
        };
        wins++;
        $(".wins").text(wins);
    });

    $("#5").on("click", function() {
        if (correctAnswer5 = answer[4]) {
            alert("correct")
        };
        wins++;
        $(".wins").text(wins);
    });

});
