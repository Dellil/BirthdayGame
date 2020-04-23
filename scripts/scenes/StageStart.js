/**
 * Game Start Scene
 * 2020/04/23
 * Chanhee Jang
 */
import StageOneScene from './StageOneScene.js';


export default class StageStartScene extends Phaser.Scene {
    constructor(config) {
        super(config);
    }

    preload() {
        this.load.image("bg-1", "http://127.0.0.1:8080/resources/backgrounds/bg-1.png");
        this.load.image("bg-2", "http://127.0.0.1:8080/resources/backgrounds/bg-2.png");
    }

    create() {
        let bg1 = this.add.image("640", "360", "bg-1");
        bg1.setDisplaySize(1280, 720);

        let bg2 = this.add.image("640", "360", "bg-2");
        bg2.setDisplaySize(1280, 720);


        this.input.on('pointerdown', function (pointer, currentlyOver) {
            this.scene.scene.add("stage_one", StageOneScene, true)
            this.scene.scene.remove("stage_start");
        });
    }

    update() {

    }
}