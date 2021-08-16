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
    this.showImage(questionItem);
    this.showRuler();
    this.showInputText();
  }

  getQuestion(questionIndex) {
    return this.dataPlay[questionIndex];
  }

  showQuestion(questionItem) {
    console.log(questionItem.title);
    this.title = this.add
      .text(
        this.config.width / 2,
        this.config.height * 0.05,
        questionItem.title,
        {
          font: "40px Arial",
          fill: "#000",
          wordWrap: true,
          wordWrapWidth: 800,
          align: "center",
        }
      )
      .setOrigin(0.5, 0.5);
  }

  showRuler() {
    let ruler = this.add
      .image(this.config.width / 2, this.config.height * 0.15, "ruler")
      .setInteractive()
      .setOrigin(0.5, 0.5);
    ruler.displayWidth = (this.config.width * 10.7) / 25;
    ruler.displayHeight = this.config.height * 0.35;
    this.input.setDraggable(ruler);

    this.input.dragDistanceThreshold = 16;

    this.input.on("dragstart", function (pointer, gameObject) {
      gameObject.setBlendMode(Phaser.BlendModes.MULTIPLY); //for WebGL
    });

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragend", function (pointer, gameObject) {
      gameObject.setBlendMode(Phaser.BlendModes.NORMAL);
    });
  }

  showImage(questionItem) {
    let images = questionItem.question[0].split("-");
    let lengths = questionItem.question[1].split("-");
    console.log(images, lengths);
    this.addImage(images.length, images, lengths);
  }

  addImage(numImage, images, lengths) {
    let xPos = this.config.width * 0.1;
    let yPos = this.config.height * 0.55;
    let count = 0;
    for (let i = 0; i < numImage; i++) {
      count++;
      let image = this.add
        .image(xPos, yPos, images[i])
        .setOrigin(0.5, 0.5)
        .setScale(0.05);
      image.displayWidth = (this.config.width * lengths[i]) / 25;
      image.displayHeight = (this.config.width * lengths[i]) / 25;

      xPos += this.config.width * 0.3;
    }
  }

  showInputText() {
    this.element = this.add.dom(640, 360).createFromCache("input");
    // element.addListener("click");

    // element.on("click", function (event) {
    //   if (event.target.name === "playButton") {
    //     var inputText = this.getChildByName("nameField");

    //     //  Have they entered anything?
    //     if (inputText.value !== "") {
    //       //  Turn off the click events
    //       this.removeListener("click");

    //       //  Hide the login element
    //       this.setVisible(false);

    //       //  Populate the text with whatever they typed in
    //       text.setText("Welcome " + inputText.value);
    //     }
    //   }
    // });
  }

  // buttonClicked(timeAnswer, correctAnswer, currentQuestionIndex) {
  //   if (timeAnswer === correctAnswer) {
  //     alert("Correct");
  //   } else {
  //     alert("Wrong");
  //   }
  //   this.nextQuestion(currentQuestionIndex);
  // }

  // nextQuestion(currentQuestionIndex) {
  //   this.scene.start("NextQuestionScene", {
  //     currentQuestionIndex: this.currentQuestionIndex,
  //   });
  // }
}

export default PlayScene;
