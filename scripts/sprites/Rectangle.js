export default function createRectangle(scene_obj, x, y, width, height) {
    return scene_obj.add.rectangle(x, y, width, height, '0xffffff');
}