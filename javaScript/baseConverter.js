function reverseString(inputString) {
	const stringArray = inputString.split(""); //transforme string en liste
	let resultString = "";
	for (let i = stringArray.length - 1; i >= 0; i--) { //for loop --> de index max de la liste à 0 (défile tous les éléments à l'envers)
		resultString += stringArray[i] //rajoute la valeur (en commençant à la fin) de la liste au string
	}

	return resultString; //retourne le string inversé
}

function convertBase(inputValue, inputBase) {
	let resultString = "";
	let tempRemainder = 0;

	for (let i = 0; inputValue > 0; i++) {
		tempRemainder = inputValue % inputBase; //reste de la division par la base
		resultString += tempRemainder; //ajoute le reste au résultat final
		
		inputValue -= tempRemainder; //soustrait le reste de division
		inputValue /= inputBase; //divise la valeure principale - son reste (pas de décimaux)
	}

	document.getElementById("resultParagraph").innerHTML = reverseString(resultString); //affiche le string des restes à l'envers
}