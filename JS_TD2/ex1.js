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

console.log("Si a=2 et b=8"+ range(2,8));
console.log("Si a=7 et b=4"+ range(7,4));
console.log("Si a=12 et b=14"+ range(12,14));



function sumFor(tab){
	let somme=0;
	for (let i=0; i<tab.length; i++){
		somme+=tab[i];
	}
	return somme;
}

console.log("Tableau [2,12,18]"+ sumFor([2,12,18]));



function sumForEach(tab){
	let somme=0;

}

function sumReduce(){

}