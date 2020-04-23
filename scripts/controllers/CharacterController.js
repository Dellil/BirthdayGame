export default function game_obj_controller(scene_obj, game_obj) {
    let space = scene_obj.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    space.on('up', function (key, event) {
        let time_pressed = key.timeDown - key.timeUp;
        const velo_constant = -100;
        if (time_pressed < -750) {
            time_pressed = -750;
        }

        time_pressed = time_pressed * 1.3;
        const velo_sum = time_pressed + velo_constant;
        game_obj.body.setVelocityY(velo_sum);
    });
}