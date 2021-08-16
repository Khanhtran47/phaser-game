import BaseScene from "./BaseScene";
import getData from "./data.js";

class NextQuestionScene extends BaseScene {
  constructor(config) {
    super(
      {
        key: "NextQuestionScene",
      },
      config
    );
  }

  init(data) {
    this.currentQuestionIndex = data.currentQuestionIndex;
  }

  create() {
    super.create();
    let dataPlay = getData();

    let totalQuestions = dataPlay.length;
    console.log(totalQuestions);
    this.currentQuestionIndex++;
    console.log(this.currentQuestionIndex);
    if (this.currentQuestionIndex < totalQuestions) {
      this.scene.start("PlayScene", {
        currentQuestionIndex: this.currentQuestionIndex,
      });
    } else {
      this.game.destroy(true);
    }
  }
}

export default NextQuestionScene;
