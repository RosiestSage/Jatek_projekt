//abris
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

const levels = [
    [ // konnyu
        [
            ['red', 'green', 'blue'],
            ['red', 'blue', 'green'],
            ['green', 'red', 'blue']
        ],
        [
            ['green', 'green', 'blue'],
            ['red', 'blue', 'red'],
            ['green', 'red', 'blue']
        ],
        [
            ['blue', 'green', 'green'],
            ['red', 'red', 'blue'],
            ['blue', 'green', 'red']
        ],
        [
            ['green', 'blue', 'red'],
            ['blue', 'red', 'green'],
            ['red', 'green', 'blue']
        ],
        [
            ['red', 'blue', 'green'],
            ['green', 'blue', 'red'],
            ['blue', 'green', 'red']
        ]          
    ],
    [ // kozepes
        [
            ['green', 'blue', 'red', 'yellow', 'purple'],
            ['yellow', 'green', 'blue', 'purple', 'red'],
            ['purple', 'red', 'yellow', 'green', 'blue'],
            ['blue', 'purple', 'green', 'red', 'yellow'],
            ['red', 'yellow', 'purple', 'blue', 'green']
          ],
          [
            ['blue', 'red', 'green', 'purple', 'yellow'],
            ['purple', 'blue', 'yellow', 'green', 'red'],
            ['yellow', 'green', 'blue', 'red', 'purple'],
            ['green', 'yellow', 'red', 'purple', 'blue'],
            ['red', 'purple', 'green', 'yellow', 'blue']
          ],
          [
            ['yellow', 'green', 'blue', 'red', 'purple'],
            ['red', 'yellow', 'purple', 'blue', 'green'],
            ['blue', 'purple', 'green', 'yellow', 'red'],
            ['purple', 'blue', 'yellow', 'green', 'red'],
            ['green', 'red', 'yellow', 'purple', 'blue']
          ],
          [
            ['green', 'blue', 'yellow', 'purple', 'red'],
            ['purple', 'green', 'blue', 'red', 'yellow'],
            ['yellow', 'red', 'green', 'blue', 'purple'],
            ['blue', 'yellow', 'purple', 'green', 'red'],
            ['red', 'purple', 'yellow', 'green', 'blue']
          ],
          [
            ['red', 'yellow', 'green', 'blue', 'purple'],
            ['yellow', 'purple', 'green', 'blue', 'red'],
            ['blue', 'green', 'red', 'purple', 'yellow'],
            ['green', 'blue', 'purple', 'red', 'yellow'],
            ['purple', 'red', 'yellow', 'green', 'blue']
          ]
    ],
    [ // nehez
        [
            ['red', 'green', 'blue', 'yellow', 'purple', 'orange'],
            ['orange', 'red', 'green', 'blue', 'yellow', 'purple'],
            ['yellow', 'orange', 'red', 'green', 'blue', 'purple'],
            ['blue', 'yellow', 'orange', 'red', 'green', 'purple'],
            ['purple', 'blue', 'yellow', 'green', 'red', 'orange'],
            ['green', 'purple', 'blue', 'orange', 'yellow', 'red']
        ],
        [
            ['blue', 'green', 'yellow', 'orange', 'red', 'purple'],
            ['red', 'blue', 'green', 'yellow', 'purple', 'orange'],
            ['purple', 'red', 'yellow', 'green', 'blue', 'orange'],
            ['yellow', 'purple', 'orange', 'blue', 'green', 'red'],
            ['green', 'yellow', 'purple', 'orange', 'blue', 'red'],
            ['orange', 'blue', 'green', 'red', 'yellow', 'purple']
        ],
        [
            ['green', 'yellow', 'blue', 'purple', 'orange', 'red'],
            ['red', 'green', 'yellow', 'blue', 'purple', 'orange'],
            ['purple', 'orange', 'red', 'green', 'yellow', 'blue'],
            ['blue', 'green', 'orange', 'yellow', 'purple', 'red'],
            ['yellow', 'purple', 'green', 'blue', 'orange', 'red'],
            ['orange', 'red', 'yellow', 'purple', 'green', 'blue']
        ],
        [
            ['yellow', 'blue', 'orange', 'green', 'red', 'purple'],
            ['green', 'yellow', 'blue', 'purple', 'orange', 'red'],
            ['blue', 'orange', 'yellow', 'green', 'purple', 'red'],
            ['red', 'green', 'blue', 'orange', 'purple', 'yellow'],
            ['orange', 'purple', 'green', 'red', 'yellow', 'blue'],
            ['purple', 'red', 'green', 'yellow', 'blue', 'orange']
        ],
        [
            ['orange', 'purple', 'green', 'blue', 'yellow', 'red'],
            ['yellow', 'red', 'orange', 'green', 'blue', 'purple'],
            ['blue', 'yellow', 'purple', 'orange', 'green', 'red'],
            ['green', 'blue', 'red', 'yellow', 'purple', 'orange'],
            ['red', 'green', 'yellow', 'purple', 'orange', 'blue'],
            ['purple', 'orange', 'blue', 'green', 'red', 'yellow']
        ]
    ]
];

let bottles = 0;
let balls = 0;
let difficulty;
let level;

function setDifficulty(selectedDifficulty) {
    difficulty = selectedDifficulty;

    switch (selectedDifficulty) {
        case 1:
            bottles = 4;
            balls = 3;
            break;
        case 2: 
            bottles = 6;
            balls = 5;
            break;
        case 3:
            bottles = 7;
            balls = 6;
            break;
    }
}

function selectLevel(level) {
    generateGame(difficulty, level, bottles, balls)
}

function generateGame(difficulty, level, bottles, balls) {
    let containerDiv = document.getElementById("jatek");
    containerDiv.innerHTML = "";

    let pattern = [];
    let lastindex = 0;
    for (let index = 0; index < (bottles - 1); index++) {
        // containerDiv.innerHTML += '<div class="bottle" id="bottle' + index + '" ondrop="drop(event)" ondragover="allowDrop(event)">';
        containerDiv.innerHTML += '<div class="golóhordozó bottle"><div class="lid"></div><div class="glass bottle" id="bottle' + index + '" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';

        pattern = levels[difficulty - 1][level - 1][index];
        for (let indexB = 0; indexB < balls; indexB++) {
            document.getElementById("bottle" + index).innerHTML += '<div class="ball ' + pattern[indexB] + '" id="ball' + index + indexB + '" draggable="true" ondragstart="drag(event)"></div>';
        }
        lastindex = index;
    }
    containerDiv.innerHTML += '</div>' + '<div class="golóhordozó bottle"><div class="lid"></div><div class="glass bottle" id="bottle' + (lastindex + 1) + '" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
}

// drop js

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    if (checkStatus()) {
        event.preventDefault();
        return;
    }

    if (event.target.parentElement.firstChild != event.target) {
        event.preventDefault();
        return;
    }
    else {
        event.dataTransfer.setData("text", event.target.id);
    }
}

function drop(event) {
    event.preventDefault();

    const data = event.dataTransfer.getData("text");
    const droppedBall = document.getElementById(data);
    const targetBottle = event.target;

    if (targetBottle.getElementsByClassName('ball').length != balls) {
        if (targetBottle.classList.contains('bottle') && targetBottle !== droppedBall.parentElement) {
            const targetBalls = targetBottle.getElementsByClassName('ball');
            
            if (targetBalls.length === 0) {
                targetBottle.appendChild(droppedBall);
            }
            else {
                targetBottle.insertBefore(droppedBall, targetBottle.firstChild);
            }
        }
    }
    else {
        return;
    }
    console.log(checkStatus());
}

function checkStatus() {
    const currentBottles = document.getElementsByClassName("bottle");
    
    for (let index = 0; index < currentBottles.length; index++) {
        
        let currentBalls = currentBottles[index].getElementsByClassName("ball");
        
        if (currentBalls.length > 1) {
            let firstColor = currentBalls[0].classList[1];
        
            for (let indexB = 0; indexB < currentBalls.length; indexB++) {
                if (currentBalls[indexB].classList[1] != firstColor) {
                    return false;
                }
            }
        }
        else if (currentBalls.length == 0) {
            break;
        }
        else {
            return false;  
        }
    }
    return true;
}

//reload

function reload(){
    reloading(difficulty, level);

}

function reloading(difficulty, level) {
    generateGame(difficulty, level, bottles, balls);
    switch (difficulty){
        case 1:
            golok = document.getElementsByClassName('ball');
            console.log(golok)
            for (let i = 0; i < golok.length; i++){
                golok[i].style.width = '100px';
                golok[i].style.height = '100px';
            }
            break;
        case 2:
            golok = document.getElementsByClassName('ball');
            for (let i = 0; i < golok.length; i++){
                golok[i].style.width = '70px';
                golok[i].style.height = '70px';
            }
            break;
        case 3:
            golok = document.getElementsByClassName('ball');
            for (let i = 0; i < golok.length; i++){
                golok[i].style.width = '60px';
                golok[i].style.height = '57px';
            }
            break;


    }
}

//david js

function tovabb(elem, dif){
    let lista = ["open_page","difficulty", "levels", "gameplay"];
    switch (elem){
        case 2:
            document.getElementById(lista[elem - 2]).style.display = 'none';
            document.getElementById(lista[elem -1]).style.display = 'block';
            break;
        case 3:
            document.getElementById(lista[elem - 2]).style.display = 'none';
            document.getElementById(lista[elem - 1]).style.display = 'block';
            break;
        case 4:
            document.getElementById(lista[elem - 2]).style.display = 'none';
            document.getElementById(lista[elem - 1]).style.display = 'block';
            break;
    }
    if (typeof dif === 'string'){
        switch (dif){
            case 'Easy':
                difficulty = 1;
                break;
            case 'Medium':
                difficulty = 2;
                break;
            case 'Hard':
                difficulty = 3;
                break;
        }
        setDifficulty(difficulty);
        document.getElementById('diff').innerHTML = dif;
    }
    else{
        level = dif;
        selectLevel(level);
        document.getElementById('level').innerHTML = level;

    }
    if (elem == 4){
        let element = document.getElementById("jatek");
        let golok;
        switch (element.childElementCount){
            case 4:
                golok = document.getElementsByClassName('ball');
                console.log(golok)
                for (let i = 0; i < golok.length; i++){
                    golok[i].style.width = '100px';
                    golok[i].style.height = '100px';
                }
                break;
            
            case 6:
                golok = document.getElementsByClassName('ball');
                for (let i = 0; i < golok.length; i++){
                    golok[i].style.width = '70px';
                    golok[i].style.height = '70px';
                }
                break;

            case 7:
                golok = document.getElementsByClassName('ball');
                for (let i = 0; i < golok.length; i++){
                    golok[i].style.width = '60px';
                    golok[i].style.height = '57px';
                }
                break;
            }
        
        }
    }

function vissza(elem){
    let lista = ["open_page","difficulty", "levels", "gameplay"];
    document.getElementById('menu').style.display = 'flex';
    switch (elem){
        case 2:
            

            // document.getElementById(lista[elem - 1]).style.display = 'block';
            // document.getElementById(lista[elem]).style.display = 'none';
            break;        
        case 3:
            document.getElementById("menu").innerHTML  += '<button> Back to levels</button>' + '<button> Back to difficulty</button>' + '<button> Back to game</button>';
            // document.getElementById(lista[elem - 1]).style.display = 'block';
            // document.getElementById(lista[elem]).style.display = 'none';

            break;
    }
}