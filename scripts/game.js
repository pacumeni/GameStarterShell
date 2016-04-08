/**
 * Created by whipnwalt on 4/6/2016.
 */
Game.screens['Canvas'] = (function(gameModel, screens, graphics, input){
    'use strict';
    var keyboard = input.Keyboard(),
        cancelNextRequest = false,
        lastTimeStamp = performance.now();
    
    function initialize(){
        keyboard.registerCommand(KeyEvent.DOM_VK_ESCAPE,
            function (){
                cancelNextRequest = true;
                screens.showScreen('StartMenu');
            });
    }

    function processInput(elapsedTime) {
        keyboard.update(elapsedTime);
        gameModel.processInput(elapsedTime);
    }

    function update(elapsedTime) {
        gameModel.update(elapsedTime);
    }

    function render(){
        graphics.clear();
        gameModel.render();
    }

    function gameLoop(time) {
        var elapsedTime = time - lastTimeStamp;

        processInput(elapsedTime);
        update(elapsedTime);
        lastTimeStamp = time;

        render();

        if (!cancelNextRequest){
            requestAnimationFrame(gameLoop);
        }
    }

    function run() {
        gameModel.initialize();
        lastTimeStamp = performance.now()

        cancelNextRequest = false;
        requestAnimationFrame(gameLoop);
    }

    return {
        initialize : initialize,
        run : run
    }
}(Game.model, Game.screens, Game.graphics, Game.input));