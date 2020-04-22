/**
 * The Scene for prototype
 * 2020/04/23
 * Chanhee Jang
 */
import createRectangle from '../sprites/Rectangle.js';
import game_obj_controller from "../controllers/RectangleController.js";


export default {
    preload: function preload() {
        // load local files
        this.load.image("sky", "http://127.0.0.1:8080/resources/backgrounds/dark_night_sky.jpg");
    },
    create: function create() {
        this.add.image(640, 360, "sky");
        let rect = createRectangle(this);

        this.physics.add.existing(rect);
        rect.body.setCollideWorldBounds(true, 0, 0);
        game_obj_controller(this, rect);
    }
}