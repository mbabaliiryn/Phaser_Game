/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.add.image(400, 300, 'bg');

    // Score display
    //  this.overDisplay = this.add.image( config.width / 2, config.height / 2 - 100, 'orange_btn');
    this.scoreText = this.add.text(280, 120, 'GAME OVER', {
      fontSize: '40px',
      fontWeight: 900,
      fill: '#fff',
    });
    // Phaser.Display.Align.In.Center(this.scoreText, this.overDisplay);

    this.homebtn = this.add.sprite(300, 500, 'home').setInteractive().setScale(0.5);
    this.homebtn.on(
      'pointerdown',
      () => {
        this.scene.start('Title');
      },
    );
    this.scoreText = this.add.text(280, 530, 'Home', {
      fontSize: '18px',
      fill: '#fff',
    });

    this.playAgainBtn = this.add.sprite(500, 500, 'play_again').setInteractive().setScale(0.5);
    this.playAgainBtn.on(
      'pointerdown',
      () => {
        this.scene.start('Game');
      },
    );
    this.scoreText = this.add.text(450, 530, 'Play Again', {
      fontSize: '18px',
      fill: '#fff',
    });
  }
}