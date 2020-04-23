/**
 * The Scene for prototype
 * 2020/04/23
 * Chanhee Jang
 */
import createRectangle from '../sprites/Rectangle.js';
import characterController from "../controllers/CharacterController.js";


export default class StageOneScene extends Phaser.Scene {
    constructor(config) {
        super(config);
        this.rect = null;
    }
    preload() {
        this.load.image("sky", "http://127.0.0.1:8080/resources/backgrounds/dark_night_sky.jpg");
    }
    create() {
        this.add.image(640, 360, "sky");
        this.rect = createRectangle(this);

        this.physics.add.existing(this.rect);
        this.rect.body.setCollideWorldBounds(true, 0, 0);
        characterController(this, this.rect);
    }
    update() {

    }
}
// TEST CODE
// export default {
//     preload: function preload() {
//         // load local files
//         this.load.image("sky", "http://127.0.0.1:8080/resources/backgrounds/dark_night_sky.jpg");
//     },
//     create: function create() {
//         this.add.image(640, 360, "sky");
//         let rect = createRectangle(this);

//         this.physics.add.existing(rect);
//         rect.body.setCollideWorldBounds(true, 0, 0);
//         game_obj_controller(this, rect);
//     },
//     update: function (t, d) {

//     }
// }