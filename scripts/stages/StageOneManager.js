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
        this.addPatternPhysicsBody();

        return this.patternGroup;
    }

    addPatternPhysicsBody() {
        this.patternArray.forEach(pattern => {
            pattern.getChildren().forEach(obstacle => {
                this.scene.physics.add.existing(obstacle);
                obstacle.body.onWorldBounds = true;
                obstacle.body.collideWorldBounds = true;
            })
        })
    }

    moveFirstPattern() {
        let firstPattern = this.patternArray.shift();
        firstPattern.getChildren().forEach(obstacle => {
            obstacle.body.setVelocity(-500, 0);
        });
    }

    patternLength() {
        return this.patternGroup.getChildren().length;
    }
}