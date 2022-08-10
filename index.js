
window.addEventListener('scroll', screenOnScroll)

const body = document.querySelector('body');

function screenOnScroll() {
	
	const isScrollZero = scrollY > 0;

	const navigation = document.querySelector('#navigation')
	const home = document.querySelector('#home')


	if(isScrollZero){
		navigation.classList.add('on-scroll')
		home.classList.add('on-scroll')
	} else {
		navigation.classList.remove('on-scroll')
		home.classList.remove('on-scroll')
	}
}



window.addEventListener('resize', onResize, true);

function onResize (e) {  
	const screenWidth = e.currentTarget.innerWidth;

	const isScreenWidthLargerThan1024 = screenWidth > 1024;
	if (isScreenWidthLargerThan1024) {
		closeMenu()
	}
};



//EXPAND MENU---------------------------------------


function expandMenu () {
	body.classList.toggle('menu-expanded');
}

const openMenuButton = document.querySelector('.open-menu')
const closeMenuButton = document.querySelector('.close-menu')

openMenuButton.addEventListener('click', expandMenu)
closeMenuButton.addEventListener('click', expandMenu)

function closeMenu() {
	body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`

#about .contents,
#about .contact,
#skills,
#projects,
#projects .cards,
#contact`);


