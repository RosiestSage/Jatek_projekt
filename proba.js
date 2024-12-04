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

function szamolas(){
    var element = document.getElementById("elso");
    console.log(element.childElementCount);
}