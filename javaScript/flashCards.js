//-----------------------------------------------Constantes-------------------------------------------------------------:
//Character Lists:
var randomSet = ["无聊", "尴尬", "告诉", "打算", "参观", "胃口好", "感冒", "反过来说", "春夏秋冬", "虽然", "桌子", "开始"];
const secondSet = ["a", "b", "c", "d", "e", "f", "g"];

//Pinyin Lists (+ "_Pinyin"):
const randomSet_Pinyin = ["wu liao", "gan ga", "gao su", "da suan", "can guan", "wei kou hao", "gan mao", "fan guo lai shuo", "chun xia qiu dong", "sui ran", "zhuo zi", "kai shi"];
const secondSet_Pinyin = ["ah", "bé", "c'est", "dé", "eux", "effe", "j'ai"];

//Definition Lists (+ "_Definition"):
const randomSet_Definition = ["ennuyeux", "génant", "avertir/prévenir", "planifier", "visiter", "bon appétit!", "rhume", "d'autre part (connecteur logique)", "printemps, été, automne, hiver", "cependant (connecteur logique)", "table", 'Commencer (appuyez sur "Prochaine Carte")'];
const secondSet_Definition = ["al", "bl", "cl", "dl", "el", "fl", "gl"];

//-------------------------------------------------------------------------------------------------------------------------

var charList = randomSet.filter(function(f){return f;}); //ensemble principal, change lorsqu'on choisit un autre ensemble.
var pinyinList = randomSet_Pinyin.filter(function(f){return f;}); //ensemble de pinyin actuel
var definitionList =  randomSet_Definition.filter(function(f){return f;}); //ensemble de définitions actuelles
// le filtre est pour transformer la liste en objet de fonction, car si la liste est égal à une autre liste, changer une des deux listes change les deux listes.
var currentSet = "randomSet"; //met l'ensemble actuel à "randomSet"

//-------------------------------------------------------------------------------------------------------------------------

function replaceCharSet(set) {
	charList = eval(set).filter(function(f){return f;});
	pinyinList = eval(set + "_Pinyin").filter(function(f){return f;});
	definitionList = eval(set + "_Definition").filter(function(f){return f;});

	document.getElementById(currentSet + "_Element").style.fontWeight = "normal"; //met le poid du texte en normal
	document.getElementById(set + "_Element").style.fontWeight = "bold"; //met le poid du texte du nouvel ensemble à lourd
	currentSet = set;
	console.log("Set charList to", set + ":", charList);
	generateCard();
}

//-------------------------------------------------------------------------------------------------------------------------

function generateCard() {
	var currentDisplayChar = document.getElementById("mainCharacterDisplay").innerHTML; //trouver le caractère actuel
	let currentIndex = charList.indexOf(currentDisplayChar)
	charList.splice(currentIndex, 1); //enlève le charactère actuel de la liste
	pinyinList.splice(currentIndex, 1); //enlève le pinyin du caractère actuel de sa liste
	definitionList.splice(currentIndex, 1); //enlève la définition du caractère actuel de sa liste

	let randomInteger = Math.floor(Math.random() * charList.length); // randint(0, len(charList))
	console.log("Generated random number:", randomInteger); //affiche la valeur générée dans la console
	let generatedChar = charList[randomInteger]; //prend le numéro aléatoire comme index de la liste

	if (charList.length == 0) {
		endCurrentSet();

	} else {
		document.getElementById("mainPinyinDisplay").innerHTML = "---"; //enlève le pinyin du caractère
		document.getElementById("mainDefinitionDisplay").innerHTML = "---"; //enlève la définition du caractère 
		document.getElementById("mainCharacterDisplay").innerHTML = generatedChar; //met à jour le caractère actuel
	}
}

function endCurrentSet() {
	console.log("charList empty."); //affiche que la variable est vide.
	document.getElementById("mainCharacterDisplay").innerHTML = "Fin d'ensemble."; //message de fin
	document.getElementById("mainPinyinDisplay").style.display = "none"; //cache l'élément texte qui affiche le pinyin
	document.getElementById("mainDefinitionDisplay").style.display = "none"; //cache l'élément texte qui affiche la définition
	document.getElementById("nextCardButton").value = "Recommencer"; //change le texte du bouton ) "Recommencer"
	document.getElementById("nextCardButton").onclick = restartSet; //fait que le bouton lance la fonction restartSet() aulieu de generateCard()
}

function restartSet() {
	console.log("restart attempt");
	replaceCharSet(currentSet); //Remet tous les mots dans la liste
	document.getElementById("nextCardButton").value = "Prochaine Carte"; //remet le texte du bouton à "Prochaine Carte"
	document.getElementById("nextCardButton").onclick = generateCard; //remet la function du bouton à generateCard()
	generateCard(); //génère une carte débutante
	document.getElementById("mainPinyinDisplay").style.display = ""; //affiche les textes
	document.getElementById("mainDefinitionDisplay").style.display = ""; //affiche les textes
}

//-------------------------------------------------------------------------------------------------------------------------

function showDefinition() {
	let currentCharacter = document.getElementById("mainCharacterDisplay").innerHTML; //trouve le caractère actuel
	let indexValue = charList.indexOf(currentCharacter); //trouve l'index du caractère actuel
	document.getElementById("mainPinyinDisplay").innerHTML = pinyinList[indexValue]; //met à jour le pinyin
	document.getElementById("mainDefinitionDisplay").innerHTML = definitionList[indexValue]; //met à jour la définition

}