let number__ = [1,2,3,4,5,6,7,8,9,0];
function choice(i){
    return Math.floor(Math.random() * i);
}
function Jeux(){
    const NumberMyster= choice(number__.length)
    let FoundNumberMyster = false
    alert(NumberMyster);
    while(!FoundNumberMyster){
        let choice = prompt("Bienvenue au jeux du nombre mystere,Veuiller entrer un nombre pour le deviner:");
        if (choice != Number){
            alert('Il ya un probleme,entrez un nombre');
            continue;
        }
        if (choice == NumberMyster){
            alert("Vous avez trouver le nombre mystere !!");
            FoundNumberMyster = true;
        }else if (NumberMyster < choice){
            alert(`le nombre mystere est plus petit ${choice}`);
        }else if (NumberMyster > choice){
            alert(`le nombre mystere est plus grand ${choice}`);
        }
    }
}
console.log(Jeux())
