import Phaser from "phaser";

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.image("background", "assets/background.jpg");
    this.load.image("hourHand", "assets/kimgio.png");
    this.load.image("minuteHand", "assets/kimphut.png");
    this.load.image("clock", "assets/mat.png");
    this.load.image("back", "assets/back.png");
    this.load.image("frame", "assets/khung.png");
    this.load.image("success", "assets/success.png");
  }

  create() {
    this.scene.start("MenuScene");
  }
}

export default PreloadScene;
