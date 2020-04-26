/**
 * To stage management easily.
 * 2020/04/27
 */
import PatternManager from '../patterns/PatternManager.js';


export default class StageOneManager {
    constructor(scene_obj, player_obj) {
        this.scene = scene_obj;
        this.player = player_obj;
        this.patternGroup = null;
        this.patternArray = null;
        this.patternMovingArray = new Array();
        this.patternManager = new PatternManager(this.scene);
    }

    createPatternGroup(patternNums) {
        this.patternGroup = this.patternManager.createPatternByNums(patternNums);
        this.patternArray = this.patternGroup.getChildren();
    }

    patternLength() {
        return this.patternGroup.getChildren().length;
    }

    moveFirstPattern() {
        // pattern임 즉, group이란 소리
        let firstPattern = this.patternArray.shift();
        // body 붙여주고, velocity 설정해주기
        firstPattern.getChildren().forEach(obstacle => {
            this.scene.physics.add.existing(obstacle);
            obstacle.body.setVelocity(-300, 0);
        });
        this.patternMovingArray.push(firstPattern);
    }

    collidePatterns() {
        if (this.patternMovingArray.length == 0) {
            return
        }
        // movingArray iterate 해서 충돌 감지 및 화면에 벗어난 pattern 처리하기
        this.patternMovingArray.forEach(pattern => {
            this.scene.physics.overlap(
                this.player,
                pattern,
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
            pattern.getChildren().forEach(obstacle => {
                if (obstacle.getBounds().right < 0) {
                    pattern.killAndHide(obstacle);
                }
            });
        });
    }
}