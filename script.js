let gameFinished = false;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    if (gameFinished) return;  // Ha a játék már véget ért, ne engedjük további lépéseket.

    event.preventDefault();

    const data = event.dataTransfer.getData("text");
    const droppedBall = document.getElementById(data);
    const targetBottle = event.target;

    // Csak akkor pakolhatunk egy golyót az üvegbe, ha az üvegbe való pakolás szabályainak megfelelő
    if (targetBottle.classList.contains('bottle') && targetBottle !== droppedBall.parentElement) {
        const targetBalls = targetBottle.getElementsByClassName('ball');
        
        // Az új golyót mindig az üveg tetejére helyezzük
        if (targetBalls.length === 0) {
            targetBottle.appendChild(droppedBall);
        } else {
            targetBottle.insertBefore(droppedBall, targetBottle.firstChild);
        }
    }

    checkGameStatus();  // Ellenőrizzük, hogy vége van-e a játéknak
}

function checkGameStatus() {
    const bottles = document.getElementsByClassName('bottle');
    let allCorrect = true;

    for (let bottle of bottles) {
        const balls = bottle.getElementsByClassName('ball');
        
        // Ha az üvegben van golyó, ellenőrizzük, hogy mindegyik ugyanazzal a színnel rendelkezik
        if (balls.length > 0) {
            const firstBallColor = balls[0].classList[1];  // Az első golyó színe
            for (let ball of balls) {
                if (ball.classList[1] !== firstBallColor) {
                    allCorrect = false;
                    break;
                }
            }
        }
    }

    // Ha minden üvegben csak egy színű golyók vannak, akkor vége van a játéknak
    if (allCorrect) {
        gameFinished = true;
        document.getElementById('message').innerText = 'Gratulálok, megnyerted a játékot!';
    }
}
