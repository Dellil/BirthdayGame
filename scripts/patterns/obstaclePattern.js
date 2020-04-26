import createRectangle from "../sprites/Rectangle";


/**
 * obstacle patterns (In game)
 * 2020/04/25
 */
export default class ObstaclePattern {
    constructor(scene_obj) {
        this.scene = scene_obj;
    }

    getPatternInsertingNumber(input_num) {
        let pattern;
        switch (input_num) {
            case 1:
                pattern = this.getPattern1();
                break;
            case 2:
                pattern = this.getPattern2();
                break;
            case 3:
                pattern = this.getPattern3();
                break;
            case 4:
                pattern = this.getPattern4();
                break;
            case 5:
                pattern = this.getPattern5();
                break;
            case 6:
                pattern = this.getPattern6();
                break;
        }
        return pattern;
    }

    /**
     * Pattern Type 1
     */
    getPattern1() {
        let rectObstacle1 = createRectangle(this.scene, 1320, 142.5, 50, 285);
        let rectObstacle2 = createRectangle(this.scene, 1320, 577.5, 50, 285);

        return this.scene.add.group([rectObstacle1, rectObstacle2]);
    }

    getPattern2() {
        let rectObstacle1 = createRectangle(this.scene, 1320, (142.5 / 2), 50, 142.5);
        let rectObstacle2 = createRectangle(this.scene, 1320, (142.5 + 150 + 427.5 / 2), 50, 427.5);

        return this.scene.add.group([rectObstacle1, rectObstacle2]);
    }

    getPattern3() {
        let rectObstacle1 = createRectangle(this.scene, 1320, (427.5 / 2), 50, 427.5);
        let rectObstacle2 = createRectangle(this.scene, 1320, (427.5 + 150 + 142.5 / 2), 50, 142.5);

        return this.scene.add.group([rectObstacle1, rectObstacle2]);
    }

    getPattern4() {
        let rectObstacle1 = createRectangle(this.scene, 1320, (213.75 / 2), 50, 213.75);
        let rectObstacle2 = createRectangle(this.scene, 1320, (213.75 + 150 + 356.25 / 2), 50, 356.25);

        return this.scene.add.group([rectObstacle1, rectObstacle2]);
    }

    getPattern5() {
        let rectObstacle1 = createRectangle(this.scene, 1320, (356.25 / 2), 50, 356.25);
        let rectObstacle2 = createRectangle(this.scene, 1320, (356.25 + 150 + 213.75 / 2), 50, 213.75);

        return this.scene.add.group([rectObstacle1, rectObstacle2]);
    }

    /**
     * Pattern Type 2
     */
    getPattern6() {
        let rectObstacle1 = createRectangle(this.scene, 1320, (356.25 / 2), 50, 356.25);
        let rectObstacle2 = createRectangle(this.scene, 1320, (356.25 + 150 + 213.75 / 2), 50, 213.75);

        return this.scene.add.group([rectObstacle1, rectObstacle2]);
    }
}