document.querySelector('.j-hamburger').addEventListener('click',function(){	
	if(this.classList.contains('is-active')){
		this.classList.remove('is-active');
		document.querySelector('#mennu').classList.remove('nav-active');
    document.body.style.overflow = 'auto';
		}
	else {
		this.classList.add('is-active');
		document.querySelector('#mennu').classList.add('nav-active');
    document.body.style.overflow = 'hidden';
	}
});
function smoothScroll(Element) {
Element = document.getElementById(Element);
var selectedPosX = 0;
var selectedPosY = 0;
while (Element != null) {
    selectedPosX += Element.offsetLeft;
    selectedPosY += Element.offsetTop;
    Element = Element.offsetParent;
}
window.scrollTo(selectedPosX, selectedPosY);
}

