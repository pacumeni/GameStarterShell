/**
 * Created by whipnwalt on 4/5/2016.
 */
Game.screens['HighScoresTable'] = (function(game){
    'use strict';

    function initialize(){
        document.getElementById('HighScoresBackButton').addEventListener(
            'click',
            function () {
                game.showScreen('StartMenu');
            });
    }


    function displayScores() {
        var highScores = Game.highscorestorage.get(),
            highScoresHTML = document.getElementById('HighScoresList');

        highScoresHTML.innerHTML = '';

        highScores.forEach(function (score) {
            highScoresHTML.innerHTML += (score + '<br/>');
        });
    }

    function run() {
        displayScores();
    }

    return {
        initialize : initialize,
        run : run
    }
}(Game.game));