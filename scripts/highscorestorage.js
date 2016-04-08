/**
 * Created by whipnwalt on 4/6/2016.
 */
Game.highscorestorage = (function () {
   'use strict';

    var scores = [],
        previousScores = localStorage.getItem('Game.highScores');

    if (previousScores !== null){
        scores = JSON.parse(previousScores);
    }

    function  add(score) {
        scores.push(score);
        scores.sort(function(a, b){
            if (a > b) {
                return -1;
            } else if (a < b) {
                return 1;
            }

            return 0;
        });

        if (score.length > 5) {
            scores = score.slice(0, 5);
        }

        localStorage['Game.highScores'] = JSON.stringify(scores);
    }

    function get() {
        return scores;
    }

    return {
        add : add,
        get : get
    };
}());