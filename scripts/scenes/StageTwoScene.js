/**
 * The scene for the second stage
 * 2020/04/29
 * Chanhee Jang
 */
import StageParent from './StageParent.js';
import StageThree from './StageThreeScene.js';


export default class StageTwoScene extends StageParent {
    constructor(config) {
        super(config);
    }

    preload() {
        super.preload();
        this.load.audio("binihairi", "http://127.0.0.1:8080/resources/musics/binihairi.mp3");
    }

    create() {
        super.create();
        this.bgm = this.sound.add("binihairi");

        this.bgm.play({
            volume: 0.3
        });
        this.stageManager.setStageBgm(this.bgm);
        this.enableCharacterControl();
        this.patternNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2];
        this.setNextScene(StageThree, "STAGE3");
        this.createPatternGroup();
        this.eventArgs = [-500];
        this.emitTimeEvent();
    }

    update() {
        super.update();
        this.stageManager.overlapCharacterAndTicket();
    }
}