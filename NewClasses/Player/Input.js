

Player.prototype.input = function () {
    //direction of sword swing
    //jump
    if (moveKey[32]) {
        if (!this.veloy) this.veloy = -20;

    //left
    } 
    if (moveKey[65]) {
        this.velox = -10;
        this.direct = -1;
    //right
    } 
    if (moveKey[68]) {
        this.velox = 10
        this.direct = 1;
    } 
    //up
    if (moveKey[87]) {
    }
    if (moveKey[83]) {
    }
    //left click
    if (mouse.button == 0) {

        let changeX = TrigCalculation(mouse.angle, 50)[0];
        let changeY = TrigCalculation(mouse.angle, 50)[1];
                
        this.killZone = new KillZone(this.x + changeX ,
                                     this.y + changeY ,
                                     50, 50, mouse.angle, 1, 5, this); 
        
    }
    //shift
    if (commandKey[16]) {
        this.velox = 30*this.direct;
        this.ignoreTime = 5;
        this.ignoreCounter = 0;
    }
}
