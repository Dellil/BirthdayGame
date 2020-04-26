/**
 * this js is just for legacy code which test code, debug, trash code, etc...
 */

// Collide two objects
this.physics.collide(
    this.rectChar,
    this.o_group,
    function (first_obj, second_obj) {
        first_obj.body.setVelocity(this.xV, this.yV);
        this.cameras.main.shake(300);
        second_obj.body.setVelocity(-300, 0);
    },
    function (first_obj, second_obj) {
        this.xV = first_obj.body.velocity.x * -100;
        this.yV = first_obj.body.velocity.y * -80;
    }
    ,
    this
);

// Check if obstacle pass the world's left wall
this.o_group.getChildren().forEach(obstacle => {
    if (obstacle.x < 0) {
        this.o_group.kill(obstacle);
    }
});

debugText(this.caption, this.o_group);

// Timer Callback
timerCallback() {
    let obstacle = this.o_group.get(1330, 520);

    // if all obstacle state set to false, it will be return null
    if (obstacle === null) {
        return
    }
    obstacle.setActive(true).setVisible(true);
    obstacle.setDisplaySize(50, 400);
    // Hit area for physics
    obstacle.setSize(50, 400);
    this.physics.add.existing(obstacle);
    obstacle.body.setVelocity(-300, 0);
}// GROUP & Timer
this.o_group = this.add.group({
    maxSize: 10,
    defaultKey: "bg-2",
    createCallback: function (obstacle) {
        obstacle.setName("obstacle" + this.getLength());
        console.log(obstacle.name, " is created!");
    },
    removeCallback: function (obstacle) {
        console.log(obstacle.name, " is removed!");
    }
});

// DEBUG for Group
this.caption = this.add.text(16, 16, '', {
    fill: '#7fdbff',
    fontFamily: "monospace",
    lineSpacing: 4
});

// loop time event for o_group
this.time.addEvent({
    delay: 3000,
    loop: true,
    callback: this.timerCallback,
    callbackScope: this,
});

// Pattern Obstacle for testing
this.rectObstacle1 = createRectangle(this, 1320, 142.5, 50, 285);
this.rectObstacle2 = createRectangle(this, 1320, 577.5, 50, 285);
this.r_group = this.add.group([this.rectObstacle1, this.rectObstacle2]);

this.r_group.getChildren().forEach(obstacle => {
    this.physics.add.existing(obstacle);
    obstacle.body.setVelocity(-300, 0);
});

getPattern1() {
    let pattern1 = this.pattern.getPattern1();
    pattern1.getChildren().forEach(obstacle => {
        this.scene.physics.add.existing(obstacle);
        obstacle.body.setVelocity(-300, 0);
    });
    return pattern1;
}

// Debug Method! modify the code when develop a real-game
pattern1CollideControl(o_group) {
    this.scene.physics.overlap(
        this.player,
        o_group,
        function (first_obj, second_obj) {
            first_obj.body.setVelocity(this.xV, this.yV);
            this.scene.cameras.main.shake(300);
        },
        function (first_obj, second_obj) {
            this.xV = first_obj.body.velocity.x * -100;
            this.yV = first_obj.body.velocity.y * -80;
        },
        this
    );

    o_group.getChildren().forEach(obstacle => {
        if (obstacle.getBounds().right < 0) {
            obstacle.setX(1330);
        }
    });
}