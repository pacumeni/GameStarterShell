/**
 * Created by whipnwalt on 4/5/2016.
 */
//var canvas = document.getElementById("gameCanvas");

var Game = {
    screens: {}
};

Game.game = (function(screens){
    'use strict';

    function showScreen(id){
        var screen = 0,
            active = null;

        active = document.getElementsByClassName('active');
        for (screen; screen < active.length; screen++) {
            active[screen].classList.remove('active');
        }
        screens[id].run();
        document.getElementById(id).classList.add('active');
    }

    function initialize(){
        var screen = null;

        for(screen in screens){
            if (screens.hasOwnProperty(screen)){
                screens[screen].initialize();
            }
        }
        showScreen('StartMenu');
    }

    return{
        initialize : initialize,
        showScreen: showScreen
    };
}(Game.screens));