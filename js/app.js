/**
 * Phyllotaxis
 * http://nickharbaugh.com/
 *
 * Copyright 2017 Nick Harbaugh | All Rights Reserved
 * Written by Nick Harbaugh - http://nickharbaugh.com
 */

// (function($, _) {

    var fibAngle = 137.5;
    var n = 1;
    var s = 10;
    var radius;
    var angle;
    var numSeeds = 500;
    var fibSlider = document.getElementById('fib-slider');
    var redSlider = document.getElementById('red-slider');
    var greenSlider = document.getElementById('green-slider');
    var fibVal = 0,
        redVal = 0,
        greenVal = 0;

    function initialize() {
        initSlider();
    }

    function setup() {
        var canvas = createCanvas(windowWidth, windowHeight);
        canvas.parent("p5canvas");
        frameRate(60);
    }

    function draw() {
        background(0);
        noStroke();
        fibVal = parseFloat(fibSlider.noUiSlider.get());
        redVal = parseInt(redSlider.noUiSlider.get());
        greenVal = parseInt(greenSlider.noUiSlider.get());

        var fAngle = fibAngle + fibVal;

        translate(width*0.66, height*0.5);

        for (var i = 0; i < numSeeds; i++) {

            var rVal = map(i, 0, numSeeds, 0, 50);
            var gVal = map(i, 0, numSeeds, 0, 255);
            fill(redVal, gVal, 250);

            angle = i * fAngle;
            radius = s * sqrt(i);

            var x = radius * cos(angle);
            var y = radius * sin(angle);

            ellipse(x, y, 10);
        }

        // fibAngle += 0.00001;
    }

    function initSlider() {

        noUiSlider.create(fibSlider, {
            start: [0],
            direction: 'ltr', // Put '0' at the bottom of the slider
            orientation: 'horizontal', // Orient the slider vertically
            behaviour: 'tap-drag', // Move handle on tap, bar is draggable
            step: 0.00001,
            tooltips: true,
            format: wNumb({
                decimals: 5
            }),
            range: {
                'min': 0,
                'max': 0.005
            }
            // pips: { // Show a scale with the slider
            //     mode: 'steps',
            //     stepped: true,
            //     density: 20
            // }
        });

        noUiSlider.create(redSlider, {
            start: [0],
            direction: 'ltr', // Put '0' at the bottom of the slider
            orientation: 'horizontal', // Orient the slider vertically
            behaviour: 'tap-drag', // Move handle on tap, bar is draggable
            step: 1,
            tooltips: true,
            format: wNumb({
                decimals: 0
            }),
            range: {
                'min': 0,
                'max': 255
            }
        });

        noUiSlider.create(greenSlider, {
            start: [0],
            direction: 'ltr', // Put '0' at the bottom of the slider
            orientation: 'horizontal', // Orient the slider vertically
            behaviour: 'tap-drag', // Move handle on tap, bar is draggable
            step: 1,
            tooltips: true,
            format: wNumb({
                decimals: 0
            }),
            range: {
                'min': 0,
                'max': 255
            }
        });
    }

    // Initialize
    initialize();

// })(jQuery, _);