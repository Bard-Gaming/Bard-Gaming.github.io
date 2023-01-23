var charList = ["无聊", "尴尬", "告诉", "打算", "参观", "胃口好", "感冒", "反过来说", "春夏秋冬", "虽然", "桌子", "开始"];
var pinyinList = ["wu liao", "gan ga", "gao su", "da suan", "can guan", "wei kou hao", "gan mao", "fan guo lai shuo", "chun xia qiu dong", "sui ran", "zhuo zi", "kai shi"];
var definitionList = ["ennuyeux", "génant", "avertir/prévenir", "planifier", "visiter", "bon appétit!", "rhume", "d'autre part (connecteur logique)", "printemps, été, automne, hiver", "cependant (connecteur logique)", "table", 'Commencer (appuyez sur "Prochaine Carte")']

var currentSet = "firstSet"
document.getElementById("firstSet").style.fontWeight = "bold"

//-------------------------------------------------------------------------------------------------------------------------

function replaceCharSet(set) {
	const firstSet = ["无聊", "尴尬", "告诉", "打算", "参观", "胃口好", "感冒", "反过来说", "春夏秋冬", "虽然", "桌子", "开始"];
	const secondSet = ["a", "b", "c", "d", "e", "f"]

	charList = eval(set);
	document.getElementById(currentSet).style.fontWeight = "normal" //sets previous set font weight to normal
	document.getElementById(set).style.fontWeight = "bold" //sets new set font weight to bold
	currentSet = set
	console.log("Set charList to", set + ":", charList);
}

function generateCard() {
	var currentDisplayChar = document.getElementById("mainCharacterDisplay").innerHTML; //trouver le caractère actuel
	charList.splice(charList.indexOf(currentDisplayChar), 1); //enlève le charactère actuel de la liste

	let randomInteger = Math.floor(Math.random() * charList.length); // randint(0, len(charList))
	console.log("Generated random number:", randomInteger) //affiche la valeur générée dans la console
	let generatedChar = charList[randomInteger]; //prend le numéro aléatoire comme index de la liste

	if (charList.length == 0) {
		console.log("charList empty.");
		document.getElementById("mainCharacterDisplay").innerHTML = "Fin d'ensemble."; //message de fin
		document.getElementById("mainPinyinDisplay").style.display = "none" //cache l'élément texte qui affiche le pinyin
		document.getElementById("mainDefinitionDisplay").style.display = "none" //cache l'élément texte qui affiche la définition
		document.getElementById("nextCardButton").value = "Recommencer"

	} else {
		document.getElementById("mainPinyinDisplay").innerHTML = "---"; //enlève le pinyin du caractère
		document.getElementById("mainDefinitionDisplay").innerHTML = "---"; //enlève la définition du caractère 
		document.getElementById("mainCharacterDisplay").innerHTML = generatedChar; //met à jour le caractère actuel
	}
}

//-------------------------------------------------------------------------------------------------------------------------

function showDefinition() {
	let currentCharacter = document.getElementById("mainCharacterDisplay").innerHTML; //trouve le caractère actuel
	let indexValue = charList.indexOf(currentCharacter); //trouve l'index du caractère actuel
	document.getElementById("mainPinyinDisplay").innerHTML = pinyinList[indexValue]; //met à jour le pinyin
	document.getElementById("mainDefinitionDisplay").innerHTML = definitionList[indexValue]; //met à jour la définition
}

//https://stackoverflow.com/questions/21397743/passing-html-input-value-as-a-javascript-function-parameter
//https://www.youtube.com/watch?v=2qA4mobfcK0