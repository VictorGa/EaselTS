define(["require", "exports", '../../src/easel/display/Stage', '../../src/easel/display/SpriteSheet', '../../src/easel/display/BitmapText'], function (require, exports, Stage, SpriteSheet, BitmapText) {
    var Test = (function () {
        function Test() {
            var stage = new Stage("canvasElement");
            var img = new Image();
            img.onload = function () {
                var ss = new SpriteSheet(data);
                var text = new BitmapText("Hello World,\nWhat's Happening?", ss);
                // Center the text
                var bounds = text.getBounds();
                text.x = stage.canvas.width - bounds.width >> 1;
                text.y = stage.canvas.height - bounds.height >> 1;
                stage.addChild(text);
                stage.update();
            };
            img.src = "assets/BitmapFont.png";
            // Embedded SpriteSheet data.
            var data = {
                "animations": {
                    "V": { "frames": [21] },
                    "A": { "frames": [0] },
                    ",": { "frames": [26] },
                    "W": { "frames": [22] },
                    "B": { "frames": [1] },
                    "X": { "frames": [23] },
                    "C": { "frames": [2] },
                    ".": { "frames": [29] },
                    "Y": { "frames": [24] },
                    "D": { "frames": [3] },
                    "Z": { "frames": [25] },
                    "E": { "frames": [4] },
                    "F": { "frames": [5] },
                    "G": { "frames": [6] },
                    "H": { "frames": [7] },
                    "I": { "frames": [8] },
                    "J": { "frames": [9] },
                    "K": { "frames": [10] },
                    "!": { "frames": [27] },
                    "L": { "frames": [11] },
                    "M": { "frames": [12] },
                    "N": { "frames": [13] },
                    "O": { "frames": [14] },
                    "P": { "frames": [15] },
                    "Q": { "frames": [16] },
                    "R": { "frames": [17] },
                    "S": { "frames": [18] },
                    "T": { "frames": [19] },
                    "?": { "frames": [28] },
                    "U": { "frames": [20] }
                },
                "images": ["assets/BitmapFont.png"],
                "frames": [
                    [155, 2, 25, 41, 0, -10, -3],
                    [72, 2, 28, 43, 0, -8, -1],
                    [599, 2, 28, 38, 0, -8, -4],
                    [41, 2, 27, 44, 0, -8, -1],
                    [728, 2, 32, 38, 0, -6, -4],
                    [184, 2, 35, 41, 0, -4, -2],
                    [409, 2, 30, 39, 0, -7, -3],
                    [443, 2, 29, 39, 0, -7, -3],
                    [901, 2, 13, 35, 0, -8, -5],
                    [698, 2, 26, 38, 0, -9, -4],
                    [666, 2, 28, 38, 0, -8, -4],
                    [764, 2, 23, 38, 0, -10, -4],
                    [828, 2, 37, 36, 0, -3, -5],
                    [567, 2, 28, 38, 0, -8, -4],
                    [519, 2, 44, 38, 0, 1, -4],
                    [869, 2, 28, 36, 0, -8, -5],
                    [476, 2, 39, 38, 0, -2, -4],
                    [371, 2, 34, 39, 0, -5, -3],
                    [631, 2, 31, 38, 0, -6, -4],
                    [289, 2, 39, 40, 0, -2, -3],
                    [918, 2, 31, 32, 0, -6, -7],
                    [791, 2, 33, 37, 0, -5, -4],
                    [2, 2, 35, 46, 0, -4, 1],
                    [253, 2, 32, 40, 0, -6, -3],
                    [104, 2, 32, 43, 0, -6, -1],
                    [332, 2, 35, 39, 0, -5, -4],
                    [953, 2, 9, 16, 0, -17, -29],
                    [140, 2, 11, 41, 0, -16, -1],
                    [223, 2, 26, 41, 0, -7, -1],
                    [966, 2, 9, 10, 0, -17, -31]
                ]
            };
        }
        return Test;
    })();
    var bt = new Test();
});