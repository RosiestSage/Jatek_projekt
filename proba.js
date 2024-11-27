function tovabb(elem){
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