import Phaser from "phaser";

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.image("background", "assets/background.jpg");
    this.load.image("back", "assets/back.png");
    this.load.image("success", "assets/success.png");
    this.load.image("ruler", "assets/ruler.png");
    this.load.image("square", "assets/square.png");
    this.load.image("rectangle", "assets/rectangle.png");
    this.load.image("watermelon", "assets/watermelon.png");
    this.load.image("house", "assets/house.png");
    this.load.image("frame", "assets/frame.png");
    this.load.html("input", "assets/input.html");
  }

  create() {
    this.scene.start("MenuScene");
  }
}

export default PreloadScene;
