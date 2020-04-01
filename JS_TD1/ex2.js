'use strict'


function creerMultiplicateur(n){
	return(x) => x*n;
}

console.log("Multiplicateur de 7 par 3 :"+creerMultiplicateur(7)(3))



function creerSequence(init, step){
	var acc=init-step;

	return function(){
		acc+=step;
		return acc;
	}
}

let sequence=creerSequence(6, 4);
console.log("Sequence : init=6 ; step=4");
/**à terminer*/



function fibonacci(nb1, nb2){
	let suiteFibo=[nb1, nb2];
	return()==>{
		suiteFibo.push(suiteFibo[suiteFibo.length-2]+suiteFibo[suiteFibo.length-1]);
		return suiteFibo.join('');
	}
}

console.log()/**à faire*/



function creerMultiplicateurModif(){

}


function powerModif(){

}
