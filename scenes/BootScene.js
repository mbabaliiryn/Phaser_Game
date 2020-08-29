/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'assets/logo.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}
