// const { tween } = popmotion

// console.log(tween)
// const counter = document.querySelector('.counter')
// const updateCounter = v => (counter.innerHTML = v)

// tween().start(updateCounter)

// import { animate } from 'popmotion'

// const $root = document.querySelector('body')

// const from = -5
// const to = 5
// const duration = 10000
// const type = 'spring'
// const bounce = 1
// const velocity = 1

// animate({
//   from: from,
//   to: to,
//   duration: duration,
//   type: type,
//   bounce: bounce,
//   velocity: velocity,
//   onUpdate: latest =>
//   {
//     $root.innerHTML = `from: ${from}<br>to ${to}<br>latest: ${latest}`
//     $root.innerHTML += `<div class="circle" style="transform: translateY(${Math.sin(latest) * 100 + 10 * latest}px) translateX(-${Math.cos(latest) * 100 + 10 * latest}px)"></div>`
//   }
// })

const PIXABAY_API_KEY = '9324111-d9394a0e56f6eb524da75f703'
const PIXABAY_RANDOM_DOG_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=dog&image_type=photo&orientation=horizontal&per_page=200&editors_choice=true&category=animals`
const DOG_API_RANDOM_URL = 'https://dog.ceo/api/breeds/image/random'
const DOG_API_BREEDS = [
  'affenpinscher',
  'african',
  'airedale',
  'akita',
  'appenzeller',
  'australian - shepherd',
  'basenji',
  'beagle',
  'bluetick',
  'borzoi',
  'bouvier',
  'boxer',
  'brabancon',
  'briard',
  'buhund - norwegian',
  'bulldog - boston',
  'bulldog - english',
  'bulldog - french',
  'bullterrier - staffordshire',
  'cattledog - australian',
  'chihuahua',
  'chow',
  'clumber',
  'cockapoo',
  'collie - border',
  'coonhound',
  'corgi - cardigan',
  'cotondetulear',
  'dachshund',
  'dalmatian',
  'dane - great',
  'deerhound - scottish',
  'dhole',
  'dingo',
  'doberman',
  'elkhound - norwegian',
  'entlebucher',
  'eskimo',
  'finnish - lapphund',
  'frise - bichon',
  'germanshepherd',
  'greyhound - italian',
  'groenendael',
  'havanese',
  'hound - afghan',
  'hound - basset',
  'hound - blood',
  'hound - english',
  'hound - ibizan',
  'hound - plott',
  'hound - walker',
  'husky',
  'keeshond',
  'kelpie',
  'komondor',
  'kuvasz',
  'labradoodle',
  'labrador',
  'leonberg',
  'lhasa',
  'malamute',
  'malinois',
  'maltese',
  'mastiff - bull',
  'mastiff - english',
  'mastiff - tibetan',
  'mexicanhairless',
  'mix',
  'mountain - bernese',
  'mountain - swiss',
  'newfoundland',
  'otterhound',
  'ovcharka - caucasian',
  'papillon',
  'pekinese',
  'pembroke',
  'pinscher - miniature',
  'pitbull',
  'pointer - german',
  'pointer - germanlonghair',
  'pomeranian',
  'poodle - miniature',
  'poodle - standard',
  'poodle - toy',
  'pug',
  'puggle',
  'pyrenees',
  'redbone',
  'retriever - chesapeake',
  'retriever - curly',
  'retriever - flatcoated',
  'retriever - golden',
  'ridgeback - rhodesian',
  'rottweiler',
  'saluki',
  'samoyed',
  'schipperke',
  'schnauzer - giant',
  'schnauzer - miniature',
  'setter - english',
  'setter - gordon',
  'setter - irish',
  'sheepdog - english',
  'sheepdog - shetland',
  'shiba',
  'shihtzu',
  'spaniel - blenheim',
  'spaniel - brittany',
  'spaniel - cocker',
  'spaniel - irish',
  'spaniel - japanese',
  'spaniel - sussex',
  'spaniel - welsh',
  'springer - english',
  'stbernard',
  'terrier - american',
  'terrier - australian',
  'terrier - bedlington',
  'terrier - border',
  'terrier - cairn',
  'terrier - dandie',
  'terrier - fox',
  'terrier - irish',
  'terrier - kerryblue',
  'terrier - lakeland',
  'terrier - norfolk',
  'terrier - norwich',
  'terrier - patterdale',
  'terrier - russell',
  'terrier - scottish',
  'terrier - sealyham',
  'terrier - silky',
  'terrier - tibetan',
  'terrier - toy',
  'terrier - welsh',
  'terrier - westhighland',
  'terrier - wheaten',
  'terrier - yorkshire',
  'tervuren',
  'vizsla',
  'waterdog - spanish',
  'weimaraner',
  'whippet',
  'wolfhound - irish'
]

fetch(DOG_API_RANDOM_URL)
  .then(response => {
    const responseJSON = response.json()
    return responseJSON
  })
  .then(responseJSON => {
    console.log(responseJSON.message)
  })

// Set background image
const bgImg = document.querySelector('.bg-img-container')

fetch(PIXABAY_RANDOM_DOG_URL)
  .then(response => {
    const responseJSON = response.json()
    return responseJSON
  })
  .then(responseJSON => {
    const dogIndex = Math.floor(Math.random() * responseJSON.hits.length)
    const dog = responseJSON.hits[dogIndex]
    const imgURL = dog.largeImageURL

    document.getElementById('bg-img-author').textContent = dog.user
    document.getElementById('bg-img-src').href = dog.pageURL

    console.log(responseJSON)

    const loadingTracker = document.createElement('img')
    loadingTracker.src = imgURL
    loadingTracker.classList.add('bg-img-loading-tracker')

    loadingTracker.onload = hidePreloader

    bgImg.appendChild(loadingTracker)
    bgImg.style.backgroundImage = `url(${imgURL})`
  })

/*
888b. 888b. 8888 8    .d88b.    db    888b. 8888 888b.
8  .8 8  .8 8www 8    8P  Y8   dPYb   8   8 8www 8  .8
8wwP' 8wwK' 8    8    8b  d8  dPwwYb  8   8 8    8wwK'
8     8  Yb 8888 8888 `Y88P' dP    Yb 888P' 8888 8  Yb
*/

const preloader = document.querySelector('.preloader')

function hidePreloader () {
  preloader.classList.add('hidden')
}

/*
888b.    db    .d88b 8  dP .d88b  888b. .d88b. 8    8 8b  8 888b.
8wwwP   dPYb   8P    8wdP  8P www 8  .8 8P  Y8 8    8 8Ybm8 8   8
8   b  dPwwYb  8b    88Yb  8b  d8 8wwK' 8b  d8 8b..d8 8  "8 8   8
888P' dP    Yb `Y88P 8  Yb `Y88P' 8  Yb `Y88P' `Y88P' 8   8 888P'
*/

// TODO:
// make breed searchbar into text input with autosuggest + dropwdown checkboxes
// use popmotion for some fancy animation maybe for loading?
// try SimpleBar for the dropdown scrolling
