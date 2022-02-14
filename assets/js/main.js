const firstPlayersListNames  = [
  'Carstein',
  'narntt',
  'vasyan_pro_2010',
  'Rivka',
  'Sindirella',
  'Galina68ru',
  'Stas_ka',
  'InKey',
  'Fergus',
  'Zaina',
  'Alcock',
  'French',
  'Livingston',
  'Rahman',
  'Ellwood',
  'Lozano',
  'Gamble',
]
const secondPlayersListNames = [
  'Qurad',
  'Arthas',
  'Halabete',
  'Nanysoan',
  'Helle',
  'Prghelib',
  'Qurad',
  'Necromancer',
  'Ammaarah',
  'Decker',
  'Crawford',
  'Ortiz',
  'Hicks',
  'Devlin',
  'Jolene',
  'Karolina',
  'Rocky',
]

const firstPlayersListEl  = document.querySelector('.players-list:first-child')
const secondPlayersListEl = document.querySelector('.players-list:last-child')

let firstPlayersListHTML  = ''
let secondPlayersListHTML = ''

for (let i = 0, length = firstPlayersListNames.length; i < length; i++) {
  firstPlayersListHTML  += getLiHTML(firstPlayersListNames[i])
  secondPlayersListHTML += getLiHTML(secondPlayersListNames[i])
}

firstPlayersListEl.innerHTML  = firstPlayersListHTML
secondPlayersListEl.innerHTML = secondPlayersListHTML

function getLiHTML(playerName) {
  return `
    <li class="players-item">
      <p class="players-item__name">${playerName}</p>
      <p class="players-item__joined">Joined today</p>
    </li>
  `
}

// elements for parallax
const header = document.querySelector('.header')
const contentsList = document.querySelector('.contents__list')  

// header cards
const card1  = document.querySelector('#game-card-1')
const card2  = document.querySelector('#game-card-2')
const card3  = document.querySelector('#game-card-3')
const card4  = document.querySelector('#game-card-4')

const headerPaddingBottom = Number.parseFloat(window.getComputedStyle(header).paddingBottom)

window.addEventListener('scroll', e => {
  window.requestAnimationFrame(headerParallax)
})

function headerParallax() {  
  const value = window.scrollY

  if (value > 2000) {
    return
  }

  if (value <= headerPaddingBottom) {
    header.style.paddingBottom = (headerPaddingBottom - value) + 'px'
  }
  
  card1.style.transform = `translateY(-${(value / 10)}%)`
  card2.style.transform = `translateY(-${(value / 5)}%)`
  card3.style.transform = `translateY(-${(value / 20)}%)`
  card4.style.transform = `translateY(-${(value / 15)}%)`
}
