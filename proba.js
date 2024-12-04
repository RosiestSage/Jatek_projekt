function tovabb(elem, dif){
    let lista = ["open_page","difficulty", "levels", "gameplay"];
    let difficulty;
    let level;
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
        console.log(difficulty);
        document.getElementById('diff').innerHTML = dif;
    }
    else{
        level = dif;
        console.log(level);
        document.getElementById('level').innerHTML = level;

    }
    if (elem == 4){
        let element = document.getElementById("jatek");
        console.log(element.childElementCount);
        let golok;
        switch (element.childElementCount){
            case 4:
                golok = document.getElementsByClassName('ball');
                console.log(golok)
                for (let i = 0; i < golok.length; i++){
                    golok[i].style.backgroundColor = 'white';
                    golok[i].style.width = '100px';
                    golok[i].style.height = '100px';
                }
                break;
            
            case 6:
                golok = document.getElementsByClassName('ball');
                for (let i = 0; i < golok.length; i++){
                    golok[i].style.backgroundColor = 'red';
                    golok[i].style.width = '70px';
                    golok[i].style.height = '70px';
                }
                break;

            case 7:
                golok = document.getElementsByClassName('ball');
                for (let i = 0; i < golok.length; i++){
                    golok[i].style.backgroundColor = 'green';
                    golok[i].style.width = '60px';
                    golok[i].style.height = '70px';
                }
                break;
            }
        
        }
    }

function vissza(elem){
    let lista = ["open_page","difficulty", "levels", "gameplay"];
    switch (elem){
        case 2:
            document.getElementById(lista[elem - 1]).style.display = 'block';
            document.getElementById(lista[elem]).style.display = 'none';
            break;        
        case 3:
            document.getElementById(lista[elem - 1]).style.display = 'block';
            document.getElementById(lista[elem]).style.display = 'none';
            break;
    }
}

// let gameplay = document.getElementById('gameplay');
// if (gameplay.style.display = block){

// }
