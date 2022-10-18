class Enemy {
    constructor(x, y, h, w, color, ctx) {
        this.y = y;
        this.x = x;
        this.h = h;
        this.w = w;
        this.color = color;
        this.speedEnemy = 1;
        this.ctx = ctx;
}

    /*moveUp() {
        this.y -= 1;
    }*/

    
    drawCanvas() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }


    moveEnemy(){
        this.y += this.speedEnemy

        if(this.y + this.w >= 500){
            this.speedEnemy = -1;
        } if (this.y <= 0) {
            this.speedEnemy = 1;
        }
    }


    top() {
        return this.y;
      }
    
      bottom() {
        return this.y + this.h;
      }

  }

