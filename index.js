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


const filterLink = document.querySelectorAll('.projects__filter-link')
const projects = document.querySelector('#projects .course_projects')

filterLink.forEach((botao) => {
  let nomeCategoria = botao.getAttribute("name")
  botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria))
})

function filtrarPorCategoria(filtro) {
  const cards = projects.querySelectorAll(".card")
  for(let card of cards){

    let tagsList = card.querySelectorAll(".tag")
    let valorFiltro = filtro.toLocaleLowerCase()

    function verificaItem (tagsList, valorFiltro){
      for (let i = 0; i < tagsList.length; i++) {
        if (tagsList[i].innerHTML.toLocaleLowerCase() === valorFiltro) {
            return true;
        }
    }
    return false;
    }
    let filtroExiste = verificaItem(tagsList, valorFiltro)
    

    if (!filtroExiste && valorFiltro != 'todos') {
      card.style.display = 'none';

    }else {
      card.style.display = 'flex';
    } 
    
  }
}