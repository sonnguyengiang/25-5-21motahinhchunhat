class Rect {
    constructor(x,y,dai,rong,color) {
        this.x = x;
        this.y = y;
        this.dai = dai;
        this.rong = rong;
        this.color = color;
    }
        renderRect(canvas) {
            let pen = canvas.getContext('2d');
            pen.beginPath();
            pen.rect(this.x,this.y,this.dai,this.rong);
            pen.fillStyle = this.color;
            pen.fill();
            pen.closePath();
        }
    }
