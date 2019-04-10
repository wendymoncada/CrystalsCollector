$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var randomNum = Math.floor(Math.random() * 101 + 19);
    var result = 0;
    var pink = crystalValues(1, 12);
    var gold = crystalValues(1, 12);
    var white = crystalValues(1, 12);
    var purple = crystalValues(1, 12);
    var twinkleEffect = document.createElement("Audio");
    var hornEffect = document.createElement("Audio");

    function crystalValues(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    twinkleEffect.setAttribute("src", "assets/twinkle.mp3");
    hornEffect.setAttribute("src", "assets/horn.mp3");

    $("#randomNum").text(randomNum);

    $("#pink").click(function () {
        result += pink;
        $("#scoreNum").text(result);
        console.log(result)
        scoreTallied();
    });

    $("#gold").click(function () {
        result += gold;
        $("#scoreNum").text(result);
        console.log(result)
        scoreTallied();
    });

    $("#white").click(function () {
        result += white;
        $("#scoreNum").text(result);
        console.log(result)
        scoreTallied();
    });

    $("#purple").click(function () {
        result += purple;
        $("#scoreNum").text(result);
        console.log(result)
        scoreTallied();
    });

    function reset() {
        result = 0;
        $("#scoreNum").text(result);

        randomNum = Math.floor(Math.random() * 101 + 19);
        $("#randomNum").text(randomNum);

        pink = crystalValues(1, 12);
        gold = crystalValues(1, 12);
        white = crystalValues(1, 12);
        purple = crystalValues(1, 12);
    };

    function scoreTallied() {
        if (result == randomNum) {
            wins++;
            $("#wins").text("Wins: " + wins);
            twinkleEffect.play();
            reset();
        }

        else if (result > randomNum) {
            losses++;
            $("#losses").text("Losses: " + losses);
            hornEffect.play();
            reset();
        }
        else {

        }
        console.log(result);
    };
});