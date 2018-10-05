    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background(255);

        for (var x = 10; x < width-10; x = x + 40) {
            colorMode(HSB);
            stroke(x, 80, 80);
            line(x, height/2, mouseX, mouseY);
        }
    }
