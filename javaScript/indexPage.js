const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
console.log(`Native SmoothScroll: ${supportsNativeSmoothScroll}`)

function ownScrollTo(id) {
	console.log(`Displaying: ${document.getElementById(id)}\nInnerHTML: ${document.getElementById(id).innerHTML}`);
	document.getElementById(id).scrollIntoView({behavior: "smooth"});
}