var MyCanvas = document.getElementById("MyCanvas"); // koppeling naar Canvas
var ctx = MyCanvas.getContext("2d"); // koppelen aan 2d modus


var SpritePositieX = Math.floor(Math.random()*480); //positie X var
var SpritePositieY = Math.floor(Math.random()*480); // positie Y var
var Snelheid = 10; // snelheid van bewegen blokje

tekenSprite();

document.addEventListener("keydown", (uitlezen) => {
    let toets = uitlezen.key;
    console.log(toets);
    switch (toets) {
        case "ArrowUp":
        SpritePositieY -= Snelheid;
        tekenSprite();
        break;
        case "ArrowDown":
        SpritePositieY += Snelheid;
        tekenSprite();
        break;
        case "ArrowRight":
        SpritePositieX += Snelheid;
        tekenSprite();
        break;
        case "ArrowLeft":
            SpritePositieX -= Snelheid;
            tekenSprite();
        default: break;
    }
}
);

function tekenSprite() {
    if (SpritePositieX < 0) {SpritePositieX = MyCanvas.offsetWidth - 20;  }
    if (SpritePositieY < 0) {SpritePositieY = MyCanvas.offsetHeight - 20; }
    if (SpritePositieX > MyCanvas.offsetWidth - 20) 
        {SpritePositieX = 0;}
    if (SpritePositieY > MyCanvas.offsetHeight - 20)
        {SpritePositieY = 0;}
    ctx.clearRect(0, 0, MyCanvas.offsetWidth, MyCanvas.offsetHeight); // leegmaken
    ctx.fillStyle = "darkblue"; // kleur toekennen
    ctx.fillRect(SpritePositieX, SpritePositieY, 20, 20); // vierkant tekenen
}


