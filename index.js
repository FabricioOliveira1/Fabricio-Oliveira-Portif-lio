// //EFEITO EXPANÇÃO DO LINK DOS CARDS

// const $card = document.querySelectorAll('.fab-card'); 


// //função para adicionar a classe active no link dentro do card
// function toggleLink(){ 
//     this.querySelector('.button_link').classList.toggle('active')
// }

// //cada elemnto da nodelist receber um listener

// for (let i = 0; i < $card.length; i++){
//     let entermouse = $card.item(i).addEventListener('mouseenter', toggleLink);
//     let leavemouse = $card.item(i).addEventListener('mouseleave', toggleLink);
// }



// //EFEITO DE FADE IN DOS ELEMENTOS

// var root = document.documentElement;
// root.className += ' js';

// function boxTop(idBox) {
// 	var boxOffset = $(idBox).offset().top;
// 	return boxOffset;
// }

// $(document).ready(function() {
// 	var $target = $('.anime'),
// 			animationClass = 'anime-init',
// 			windowHeight = $(window).height(),
// 			offset = windowHeight - (windowHeight / 4);

// 	function animeScroll() {
// 		var documentTop = $(document).scrollTop();
// 		$target.each(function() {
// 			if (documentTop > boxTop(this) - offset) {
// 				$(this).addClass(animationClass);
// 			} else {
// 				$(this).removeClass(animationClass);
// 			}
// 		});
// 	}
// 	animeScroll();

// 	$(document).scroll(function() {
// 		setTimeout(function() {animeScroll()}, 150);
// 	});
// });


//FUNCIONALIDADES---------------------------------------

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


