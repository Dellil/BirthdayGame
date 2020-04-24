/**
 * The Scene for prototype
 * 2020/04/23
 * Chanhee Jang
 */
import createRectangle from '../sprites/Rectangle.js';
import GameObjectController from "../controllers/CharacterController.js";
import invokeDebug from '../debugs/DebugScene.js';
import debugText from '../debugs/DebugText.js';


export default class StageOneScene extends Phaser.Scene {
    constructor(config) {
        super(config);
        this.rect = null;
        this.g_obj_conroller = null;
        this.xV = null;
        this.yV = null;
    }
    preload() {
        this.load.image("sky", "http://127.0.0.1:8080/resources/backgrounds/dark_night_sky.jpg");
        this.load.image("bg-2", "http://127.0.0.1:8080/resources/backgrounds/bg-2.png");
    }
    create() {
        this.add.image(640, 360, "sky");

        this.rectChar = createRectangle(this, 300, 720, 50, 50);
        this.physics.add.existing(this.rectChar);
        this.rectChar.body.setCollideWorldBounds(true, 0, 0);
        this.rectChar.body.gravity.y = 1000;
        this.g_obj_conroller = new GameObjectController(this, this.rectChar);
        this.g_obj_conroller.spaceController();
        this.g_obj_conroller.leftController();
        this.g_obj_conroller.rightController();

        // GROUP & Timer
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

        this.time.addEvent({
            delay: 3000,
            loop: true,
            callback: this.timerCallback,
            callbackScope: this,
        });

        // Debug Button to enter start scene
        invokeDebug(this);

        // DEBUG for Group
        this.caption = this.add.text(16, 16, '', {
            fill: '#7fdbff',
            fontFamily: "monospace",
            lineSpacing: 4
        });
    }
    update() {
        // Check if obstacle pass the world's left wall
        this.o_group.getChildren().forEach(obstacle => {
            if (obstacle.x < 0) {
                this.o_group.kill(obstacle);
            }
        });

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

        debugText(this.caption, this.o_group);
    }

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
    }
}