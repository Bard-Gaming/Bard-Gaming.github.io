const smoothScrollSupport = 'scrollBehavior' in document.documentElement.style;
console.log(`Smooth Scroll: ${smoothScrollSupport}`)

function ownScrollTo(id) {
	console.log(`Displaying: ${document.getElementById(id)}\nInnerHTML: ${document.getElementById(id).innerHTML}`);
	document.getElementById(id).scrollIntoView({behavior: "smooth"});
}