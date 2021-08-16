import BaseScene from "./BaseScene";
import getData from "./data.js";

class PlayScene extends BaseScene {
  constructor(config) {
    super(
      {
        key: "PlayScene",
      },
      config
    );

    //data
    var dataPlay = getData();
    this.dataPlay = dataPlay;
  }

  init(data) {
    this.currentQuestionIndex = data.currentQuestionIndex;
  }

  create() {
    super.create();
    var questionItem = this.getQuestion(this.currentQuestionIndex);
    console.log(this.currentQuestionIndex);
    console.log(questionItem);

    this.showQuestion(questionItem);
    this.showTime(questionItem);
    this.showTimeQuestion(questionItem);
    this.showAnswer(questionItem);
  }

  getQuestion(questionIndex) {
    return this.dataPlay[questionIndex];
  }

  showQuestion(questionItem) {
    console.log(questionItem.title);
    this.title = this.add
      .text(this.config.width / 2, this.config.height / 8, questionItem.title, {
        font: "40px Arial",
        fill: "#000",
        wordWrap: true,
        wordWrapWidth: 800,
        align: "center",
      })
      .setOrigin(0.5, 0.5);
  }

  showTime(questionItem) {
    const PI = 3.14159265359;
    let time = questionItem.question[0].split(":");
    console.log((time[0] / 12) * 360);
    //let questionItem
    let hourHand = (time[0] / 12) * 360;
    console.log(hourHand);
    let minHand = (time[1] / 60) * 360;
    this.add
      .sprite(this.config.width * 0.3, this.config.height * 0.5, "clock")
      .setOrigin(0.5, 0.5)
      .setScale(0.1);
    let hourHandClock = this.add
      .image(this.config.width * 0.3, this.config.height * 0.5, "hourHand")
      .setOrigin(0.5, 0.5)
      .setScale(0.05);
    let minuteHandClock = this.add
      .image(this.config.width * 0.3, this.config.height * 0.5, "minuteHand")
      .setOrigin(0.5, 0.5)
      .setScale(0.05);
    hourHandClock.rotation = (hourHand * PI) / 180;
    minuteHandClock.rotation = (minHand * PI) / 180;
  }

  showTimeQuestion(questionItem) {
    let timeQuestion = questionItem.question[1].split(":");
    console.log(timeQuestion);
    console.log(timeQuestion.length);
    this.addTimeQuestion(timeQuestion.length, timeQuestion);
  }

  showAnswer(questionItem) {
    let answer = questionItem.question[2].split(",");
    console.log(answer);
    this.addTimeAnswer(answer.length, answer, questionItem.correct_answer);
  }

  addTimeQuestion(numFrame, timeQuestion) {
    let xPos = this.config.width * 0.45;
    let yPos = this.config.height * 0.5;
    let count = 0;
    for (let i = 0; i < numFrame; i++) {
      count++;
      this.addFrameQuestion(xPos, yPos, timeQuestion[i]);
      xPos += this.config.width / 10;
    }
  }

  addFrameQuestion(xPos, yPos, timeQuestion) {
    this.add.sprite(xPos, yPos, "frame").setOrigin(0.5, 0.5).setScale(0.5);
    this.add
      .text(xPos, yPos, timeQuestion, {
        font: "42px Arial",
        fill: "#000",
        align: "center",
      })
      .setOrigin(0.5, 0.5)
      .setScale(1);
  }

  addTimeAnswer(numFrame, timeAnswer, correctAnswer) {
    let xPos = this.config.width * 0.05;
    let yPos = this.config.height * 0.85;
    let count = 0;
    for (let i = 0; i < numFrame; i++) {
      count++;
      this.addFrameAnswer(xPos, yPos, timeAnswer[i], correctAnswer);
      xPos += this.config.width / 10;
    }
  }

  addFrameAnswer(xPos, yPos, timeAnswer, correctAnswer) {
    this.add.sprite(xPos, yPos, "frame").setOrigin(0.5, 0.5).setScale(0.5);
    let answer = this.add
      .text(xPos, yPos, timeAnswer, {
        font: "42px Arial",
        fill: "#000",
        align: "center",
      })
      .setOrigin(0.5, 0.5)
      .setScale(1)
      .setInteractive();
    answer.on("pointerdown", () =>
      this.buttonClicked(timeAnswer, correctAnswer, this.currentQuestionIndex)
    );
  }

  buttonClicked(timeAnswer, correctAnswer, currentQuestionIndex) {
    if (timeAnswer === correctAnswer) {
      alert("Correct");
    } else {
      alert("Wrong");
    }
    this.nextQuestion(currentQuestionIndex);
  }

  nextQuestion(currentQuestionIndex) {
    this.scene.start("NextQuestionScene", {
      currentQuestionIndex: this.currentQuestionIndex,
    });
  }
}

export default PlayScene;
