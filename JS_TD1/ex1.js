'use strict';


function min(a,b){
    return (a<b)? a : b;
}

function max(a,b){
    if(a>b)
        return a;
    else
        return b;
}

console.log("Minimum entre 4 et 6 : "+ min(4,6));
console.log("Maximum entre 4 et 6 : "+ max(4,6));

function affichageNb(a){
    for (let i = 0; i < 100; i++){
        let b = 1;
        console.log(b);
        b++;
    }
    if (a % 3 === 0){
        console.log("woueee");
    }

    if (a % 5 === 0){
        console.log("yoooo");
    }

    if(a === 73){
        console.log("Biinnngooo");
    }
}

console.log(affichageNb(73));
console.log(affichageNb(3));
console.log(affichageNb(15));

function power(n, x){
    var res = x;
    for(let i = 1; i < n; i++){
        res *= x;
    }
    return resultat;
}

console.log("4 puissance 3 = " + power(4,3));
console.log("3 puissance 3 = " + power(3,3));

function powerRec(n, x){
    if (n == 0){
        return 1;
    }
    else{
        return x = x * power(n-1, x);
    }
}

console.log("3 puissance 4 = " + powerRec(3,4));
console.log("4 puissance 2 = " + powerRec(4,2));
