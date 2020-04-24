/**
 * set scene's configuration via this class
 */
import StageStart from './StageStart.js';
import StageOneScene from './StageOneScene.js';

export default class StageManagerScene extends Phaser.Scene {
    create() {
        this.scene.add("stage_start", StageOneScene, true);
    }
}