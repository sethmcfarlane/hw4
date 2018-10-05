    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background(255);

        for (var x = 80; x < width-80; x = x + 10) {
            line(x, height/2, mouseX, mouseY);
        }
    }
