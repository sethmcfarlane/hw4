    function setup() {
        createCanvas(400, 400);
    }

    var x = []; // new empty array
    var y = []; // new empty array

    function draw() {
        background(255);
        noFill();

        x.push(mouseX); // equivalent to append(x, mouseX)
        y.push(mouseY); // equivalent to append(y, mouseY)

        for (var i = 0; i < x.length; i = i + 10) {
            // triangle(x[i], y[i], x[i] - 20, y[i] - 50, x[i] + 20, y[i] - 50);
					triangle(x[i], y[i] + (i + 10), x[i] - (i + 10), y[i] - (i + 10), x[i] + (i + 10), y[i] - (i + 10));

        }

        x = x.slice(-50); // keep the last 50 x values
        y = y.slice(-50); // keep the last 50 y values

    }
