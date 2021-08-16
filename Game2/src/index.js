import Phaser from "phaser";

import PreloadScene from "./scenes/PreloadScene";
import MenuScene from "./scenes/MenuScene";
import PlayScene from "./scenes/PlayScene";
import NextQuestionScene from "./scenes/NextQuestionScene";

const WIDTH = 1280;
const HEIGHT = 720;

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
};

const Scenes = [PreloadScene, MenuScene, PlayScene, NextQuestionScene];
const createScene = (Scene) => new Scene(SHARED_CONFIG);
const initScenes = () => Scenes.map(createScene);

const config = {
  type: Phaser.CANVAS,
  ...SHARED_CONFIG,
  dom: {
    createContainer: true,
  },
  scene: initScenes(),
};

new Phaser.Game(config);
