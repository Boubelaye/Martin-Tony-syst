'use strict'

function range(a, b){
	let tab=[];

	if (a<=b){
		for(let i=a; i<=b; i++){
			tab.push(i);
		}
	}
	else if (a>b){
		for(let i=b; i<a; i++){
			tab.push(i);
		}
	}

	return tab;
}

console.log("Test question 1");
console.log("Si a=2 et b=8, alors "+ range(2,8));
console.log("Si a=7 et b=4, alors "+ range(7,4));
console.log("Si a=12 et b=14, alors "+ range(12,14));



function sumFor(tab){
	let somme=0;
	for (let i=0; i<tab.length; i++){
		somme+=tab[i];
	}
	return somme;
}

console.log("Test question 2 avec for");
console.log("Somme de [2,12,18] = "+ sumFor([2,12,18]));



function sumForEach(tab){
	let somme=0;
	tab.forEach(tab=>somme+=tab);
	return somme;
}
console.log("Test question 2 avec forEach");
console.log("Somme de [2,12,18] = "+ sumForEach([2,12,18]));


function sumReduce(tab){
	let somme=(acc, elem)=>acc+elem;
	return tab.reduce(somme);
}
console.log("Test question 2 avec reduce");
console.log("Somme de [2,12,18] = "+ sumReduce([2,12,18]));


function moyenneFor(tab){
	let moy=0;
	let i=0;
	for(i; i<tab.length; i++){
		moy=moy+tab[i];
	}
	return moy/i;
}
console.log("Test de la question 3 avec for");
console.log("Moyenne avec for de 5, 8 et 20 = "+moyenneFor([5,8,20]));


function moyenneForEach(tab){
	let somme=0;
	tab.forEach(tab=>somme+=tab);
	let moyenne=somme/tab.length;
	return moyenne;
}
console.log("Test de la question 3 avec forEach");
console.log("Moyenne avec for de 5, 8 et 20 = "+moyenneForEach([5,8,20]));


function moyenneReduce(tab){

}
console.log("Test de la question 3 avec reduce");
console.log("Moyenne avec for de 5, 8 et 20 = "+moyenneReduce([5,8,20]));


function pattern(t, pattern){

}
