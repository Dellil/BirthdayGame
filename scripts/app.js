/**
 * ENTRY GATE IS HERE!
 * 2020/04/23
 * Chanhee Jang
 */
import phaser from 'phaser';
import StageManager from './scenes/StageManagerScene.js'


const Phaser = phaser;

let config = {
    type: Phaser.AUTO,
    title: "Birthday Game - Prototype ver.",
    version: "1.0.0",
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            debugShowBody: true,
            gravity: { y: 1000 }
        }
    },
    input: {
        keyboard: true,
        mouse: true,
        touch: false
    },
    scene: StageManager
    // scene: {
    //     preload: prototypeScene.preload,
    //     create: prototypeScene.create,
    //     update: prototypeScene.update
    // }
};

let game = new Phaser.Game(config);