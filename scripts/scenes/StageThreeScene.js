/**
 * The scene for the third stage
 * 2020/04/23
 * Chanhee Jang
 */
import StageParent from './StageParent.js';
import StageEnd from './StageEnd.js';


export default class StageThreeScene extends StageParent {
    constructor(config) {
        super(config);
    }

    preload() {
        super.preload();
        this.load.audio("flyers", "http://127.0.0.1:8080/resources/musics/flyers.mp3");
    }

    create() {
        super.create();
        this.bgm = this.sound.add("flyers");

        this.bgm.play({
            volume: 0.3
        });
        this.stageManager.setStageBgm(this.bgm);
        this.enableCharacterControl();
        this.patternNums = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 8,
            7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5
        ];
        this.setNextScene(StageEnd, "STAGEEND");
        this.createPatternGroup();
        this.eventArgs = [-500];
        this.emitTimeEvent();
    }

    update() {
        super.update();
        this.stageManager.overlapCharacterAndTicket();
    }
}