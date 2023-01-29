const navbarHeader = document.createElement("nav");

//----------------------------------Actual HMTL------------------------------------------------:
navbarHeader.innerHTML = `
<ul class="navbarMainList">
	<li><a id="fpLogo" href="index.html" title="Page d'accueil"><img src="resources/icon.png"></a></li>
	<li>
		<a href="htmlPages/programIndex.html">Programmes ↓</i></a>
		<ul class="programList">
			<li><a href="htmlPages/programPages/baseConverter.html">Convertisseur de Bases</a></li>
			<li><a href="htmlPages/programPages/flashCards.html">Cartes Flash</a></li>
		</ul>
	</li>
	<li><a href="htmlPages/chineseIndex.html">Ressources Chinois</a></li>
	<li><a href="htmlPages/aboutPage.html">À propos</a></li>

</ul>`;

function loadNavbar() {
	document.body.appendChild(navbarHeader);
}