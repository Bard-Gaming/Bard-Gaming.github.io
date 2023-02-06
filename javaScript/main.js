const navbarHeader = document.createElement("nav");

//----------------------------------Actual HMTL------------------------------------------------:
navbarHeader.innerHTML = `
<ul class="navbarMainList">
	<li><a id="fpLogo" href="index.html" title="Page d'accueil"><img src="resources/icon.png"></a></li>
	<li>
		<a href="htmlPages/programIndex.html">Programmes ↓</a>
		<ul class="programList">
			<li><a class="listElement1" href="htmlPages/programPages/baseConverter.html">Convertisseur de Bases</a></li>
			<li><a class="listElement1" href="htmlPages/programPages/flashCards.html">Cartes Flash</a></li>
		</ul>
	</li>
	<li>
		<a href="htmlPages/chineseIndex.html">Chinois ↓</a>
		<ul class="programList">
			<li><a class="listElement2" href="htmlPages/chineseResourcePages/classContent.html">Cours</a></li>
			<li><a class="listElement2" href="htmlPages/chineseResourcePages/resourceLinks.html">Ressources</a></li>
		</ul>
	</li>
	<li><a href="htmlPages/aboutPage.html">À propos</a></li>

</ul>`;

function loadNavbar() {
	document.body.appendChild(navbarHeader);
}

//changeTab
function changeTab(event, contentId) {
	var i;
	var consoleString = "";
	var tabContentList = document.getElementsByClassName("tabContent");
	var tabButtonList = document.getElementsByClassName("tabButton");

	console.log(event);

	//for element in tabContentList: hide element
	for (var i = 0; i < tabContentList.length; i++) {
		consoleString += `, "${tabContentList[i].id}"`;
		tabContentList[i].style.display = "none";
	}
	console.log(`Hid Elements with id: ${consoleString.substring(2)}.`);
	consoleString = "";

	//enlève la classe "currentButton" de tous les elements dans tabButtonList
	for (var i = 0; i < tabButtonList.length; i++) {
		consoleString += `, ${tabButtonList[i].innerHTML}`;
		tabButtonList[i].classList.remove("currentButton");
	}
	console.log(`Removed class "currentButton" from Elements with html: ${consoleString.substring(2)}.`);

	//ajoute classe "currentButton" au bouton + affiche le contenu
	console.log(`Adding class "currentButton" to Element with html: ${event.srcElement.innerHTML}.`)
	event.srcElement.classList.add("currentButton");
	document.getElementById(contentId).style.display = "block";

}