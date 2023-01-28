//-----------------------------------------------Constantes-------------------------------------------------------------:
//Character Lists:
const randomSet = ["无聊", "尴尬", "告诉", "打算", "参观", "胃口好", "感冒", "反过来说", "春夏秋冬", "虽然", "桌子", "开始"];
const activeLVBSet = ["爱", "八", "把", "爸", "吧", "白", "百", "班", "半", "办", "包", "报", "杯", "北", "本", "比"];
const superstitionSet = ["迷信", "避免", "否则", "运气", "随时", "降临", "许多", "使用", "甚至", "直接", "具有", "意义", "肯定", "不幸", "无论", "厄运", "证据", "证明", "忌讳", "在意", "忽视"];
const legendsSet = ["有害", "既然", "打破", "讲解", "保准", "回答", "创作", "胜", "传说"];
const citySet = ["新词", "香港", "澳门", "人口", "地理", "由…组成", "公里", "面积", "语信", "气候", "经济", "历史", "政治", "其他", "外国", "简体字", "简单", "离", "土地", "平方公里"];

//Pinyin Lists (+ "_Pinyin"):
const randomSet_Pinyin = ["wu liao", "gan ga", "gao su", "da suan", "can guan", "wei kou hao", "gan mao", "fan guo lai shuo", "chun xia qiu dong", "sui ran", "zhuo zi", "kai shi"];
const activeLVBSet_Pinyin = ["ai", "ba", "ba", "ba", "ba", "bai", "bai", "ban", "ban", "ban", "bao", "bao", "bei", "bei", "ben", "bi"];
const superstitionSet_Pinyin = ["mi xin", "bi mian", "fou ze", "yun qi", "sui shi", "jiang lin", "xu duo", "shi yong", "shen zhi", "zhi jie", "ju you", "yi yi", "ken ding", "bu xing", "wu lun", "e yun", "zheng ju", "zheng ming", "ji hui", "zai yi", "hu shi"];
const legendsSet_Pinyin = ["you hai", "ji ran", "da po", "jiang jie", "bao zhun", "hui da", "chuang zuo", "sheng", "chuan shuo"];
const citySet_Pinyin = ["xin ci", "xiang gang", "ao men", "ren kou", "di li", "you...zu cheng", "gong li", "mian ji", "yü xin", "qi hou", "jiang ji", "li shi", "zheng zhi", "qi ta", "wai guo", "jian ti zi", "jian dan", "li", "tu di", "ping fang gong li"];

//Definition Lists (+ "_Definition"):
const randomSet_Definition = ["ennuyeux", "génant", "avertir/prévenir/informer", "planifier", "visiter", "bon appétit!", "rhume", "d'autre part (connecteur logique)", "printemps, été, automne, hiver", "cependant (connecteur logique)", "table", 'Commencer (appuyez sur "Prochaine Carte")'];
const activeLVBSet_Definition = ["amour/affection", "huit", "tenir/gérer (avec la main)", "père (爸爸)", "bar/élément phonétique", "blanc", "cent (100)", "classe/travail", "moitié (一半)", "faire/gérer", "sac/paquet", "déclarer/annoncer/répondre", "classificateur de verre (一杯水)", "nord", "racine/classificateur de livres", "comparer"];
const superstitionSet_Definition = ["superstition", "éviter", "sinon", "chance", "à tout moment", "la chance tombe/arrive", "très beaucoup", "utiliser", "voir même jusqu'à/même", "directement", "posséder", "sens", "sans aucun doute", "malheureux", "peu importe", "malheur/malchance", "preuve", "prouver", "taboo", "s'en foutre", "négliger"];
const legendsSet_Definition = ["endommager", "étant donné que... (connecteur logique)", "casser/briser", "expliquer", "assurer que/être sûre que", "répondre", "inventer/créer [concepte/idée (pas concret)]", "gagner/battre qqn", "légende"];
const citySet_Definition = ["nouveau mot", "Hong Kong (Ville)", "Macao (Ville)", "Population", "géographie", "à partir de ... se former", "kilomètre (km)", "surface (aire)", "langage/langue", "climat", "économie", "histoire", "la politique", "d'autre", "pays étranger", "caractère simplifié", "simple", "distant (struct: A distant de B [distance entre A et B])", "la terre (pas la planète)", "kilomètre carré (km²)"];

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