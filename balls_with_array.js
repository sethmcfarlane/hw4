var bX = [];
    var bY = [];
    var changeInbX = [];
    var changeInbY = [];
    var h = [];
    var s = [];
    
    function setup() {
        createCanvas(windowWidth, windowHeight-4);
        colorMode(HSL);
        
        for (var i = 0; i < 2; i++) {
            bX.push(random(width));
            bY.push(random(height));
            changeInbX.push(random(1,6)*random([-1,1]));
            changeInbY.push(random(1,6)*random([-1,1]));
            h.push(random(360));
            s.push(random(50,80));
        }
    }
    
    function draw() {
        background(220);
        
        for (var i = 0; i < bX.length; i++){
            noStroke();
            fill(h[i], s[i], 70);
            ellipse(bX[i], bY[i], 40);
            bX[i] += changeInbX[i];
            bY[i] += changeInbY[i];
            
            if (bX[i] > width - 20) {
                changeInbX[i] *= -1;
            }
            
            if (bY[i] > height - 20) {
                changeInbY[i] *= -1;
            }
            
            if (bX[i] < 20) {
                changeInbX[i] *= -1;
            }
            
            if (bY[i] < 20) {
                changeInbY[i] *= -1;
            }
        }
    }
    
    function mouseClicked(){
        var r = 1
        bX.push(mouseX);
        bY.push(mouseY);
        changeInbX.push(random(1,6)*random([-1,1]));
        changeInbY.push(random(1,6)*random([-1,1]));
        h.push(random(360));
        s.push(random(50,80));
    }
