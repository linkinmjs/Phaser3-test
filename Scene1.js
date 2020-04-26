class Scene1 extends Phaser.Scene {
<<<<<<< HEAD
    constructor() {
        super("bootGame");
      }

    preload(){
        //images
        this.load.image("background","./assets/images/background.png");
        this.load.image("ship1","./assets/images/ship.png");
        this.load.image("ship2","./assets/images/ship2.png");
        this.load.image("ship3","./assets/images/ship3.png");
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
=======
    constructor(){
        super('bootGame');
    }

    create(){
        this.add.text(20,20, "Loading game...");
        this.scene.start("playGame")
>>>>>>> master
    }
}