import StageStart from '../scenes/StageStart.js';


export default function invokeDebug(scene_obj) {
    let stageStart = scene_obj.add.text(100, 150, "Go to Start", { fontSize: '40px' });
    stageStart.setInteractive();
    stageStart.on("pointerdown", function (p, lX, lY, e) {
        scene_obj.scene.add("stageStart", StageStart, true);
        scene_obj.scene.remove(scene_obj);
    });
}