/**
 * Created by whipnwalt on 4/5/2016.
 */
Game.screens['Credits'] = (function(game){
    'use strict';
    function initialize() {
        document.getElementById('CreditsBackButton').addEventListener(
            'click', function(){ game.showScreen('StartMenu'); });
    }

    function run(){
        //no code needed at this time.
    }

    return{
        initialize : initialize,
        run : run
    };
}(Game.game));