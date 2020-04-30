import invokeDebug from '../debugs/DebugScene.js';


export default class StageEndScene extends Phaser.Scene {
    constructor(config) {
        super(config);
    }

    preload() {
        this.load.audio("astronomia", "http://127.0.0.1:8080/resources/musics/astronomia.mp3");
    }

    create() {
        let startText = this.add.text(100, 50, "Stage End Scene", { fontSize: '40px' });
        invokeDebug(this);
        this.bgm = this.sound.add("astronomia");

        this.bgm.play({
            volume: 0.3,
            loop: true
        });
    }

    update() {

    }
}