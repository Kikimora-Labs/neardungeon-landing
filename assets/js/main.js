addPlayersToHTMLLists()

// elements for parallax
const header = document.querySelector('.header')
const contentsSection = document.querySelector('.contents')

const headerPaddingBottom = Number.parseFloat(window.getComputedStyle(header).paddingBottom)

// header cards
const card1  = document.querySelector('#game-card-1')
const card2  = document.querySelector('#game-card-2')
const card3  = document.querySelector('#game-card-3')
const card4  = document.querySelector('#game-card-4')

window.addEventListener('scroll', e => {
  window.requestAnimationFrame(all)

  // window.requestAnimationFrame(headerParallax)  
})

function all() {  
  headerParallax()
  // glideElementOnScroll()
}

function headerParallax() {  
  const value = window.scrollY

  if (value <= headerPaddingBottom) {
    header.style.paddingBottom = (headerPaddingBottom - value) + 'px'
  }
  
  card1.style.transform = `translateY(-${(value / 10)}%)`
  card2.style.transform = `translateY(-${(value / 5)}%)`
  card3.style.transform = `translateY(-${(value / 20)}%)`
  card4.style.transform = `translateY(-${(value / 15)}%)`
}

// move element from side to side on scroll (***for scroll event***)
function glideElementOnScroll() {  
  console.log(isScrolledIntoView(contentsSection));
  if (isScrolledIntoView(contentsSection)) {
    const value = window.scrollY / 100
    let step = 100 * value
    let currX = 0

    currX += step

    contentsSection.style.transform = `translateX(-${currX}%)` 
  } else {
    contentsSection.style.transform = `translateX(0)` 
  } 
}

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return box
}

function isScrolledIntoView(el) {
  // check for 0.1% visible
  var percentVisible = 0.01;
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;
  var elemHeight = el.getBoundingClientRect().height;
  var overhang = elemHeight * (1 - percentVisible);

  var isVisible = (elemTop >= -overhang) && (elemBottom <= window.innerHeight + overhang);
  return isVisible;
}

function addPlayersToHTMLLists() {
  const firstPlayersListEl = document.querySelector('.players-list:first-child')
  const secondPlayersListEl = document.querySelector('.players-list:last-child')

  const firstPlayersListNames = [
    'Carstein',
    'narntt',
    'vasyan_pro_2010',
    'Rivka',
    'Sindirella',
    'Galina68ru',
    'Stas_ka',
    'InKey'
  ]

  const secondPlayersListNames = [
    'Qurad',
    'Arthas',
    'Halabete',
    'Nanysoan',
    'Helle',
    'Prghelib',
    'Qurad',
    'Necromancer'
  ]

  let firstPlayersListHTML = ''
  let secondPlayersListHTML = ''

  for (let i = 0, length = firstPlayersListNames.length; i < length; i++) {
    firstPlayersListHTML += getLiHTML(firstPlayersListNames[i])
    secondPlayersListHTML += getLiHTML(secondPlayersListNames[i])
  }

  firstPlayersListEl.innerHTML = firstPlayersListHTML
  secondPlayersListEl.innerHTML = secondPlayersListHTML

  function getLiHTML(playerName) {
    return `
      <li class="players-item">
        <p class="players-item__name">${playerName}</p>
        <p class="players-item__joined">Joined today</p>
      </li>
    `
  }
}