/**
 * Created by whipnwalt on 4/5/2016.
 */
Game.screens['StartMenu'] = (function(game){
    'use strict';

    function initialize(){

        document.getElementById('NewGameButton').addEventListener(
            'click',
            function () { game.showScreen('Canvas'); });

        document.getElementById('HighScoresButton').addEventListener(
            'click',
            function () { game.showScreen('HighScoresTable'); });

        document.getElementById('CreditsButton').addEventListener(
            'click',
            function () { game.showScreen('Credits'); });
    }

    function run(){
        //no code needed at this time.
    }

    return{
        initialize : initialize,
        run : run
    };
}(Game.game));