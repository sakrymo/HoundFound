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

const dogBreedsReadable = DOG_API_BREEDS.map(breed => {
  if (breed === 'australian - shepherd') return 'australian shepherd'
  if (breed.includes('-')) {
    const hyphenPosition = breed.indexOf('-')
    const firstPart = breed.substr(0, hyphenPosition).trim()
    const secondPart = breed.slice(hyphenPosition + 1).trim()

    return `${secondPart} ${firstPart}`
  } else return breed
})

fetch(DOG_API_RANDOM_URL)
  .then(response => {
    const responseJSON = response.json()
    return responseJSON
  })
  .then(responseJSON => {
    console.log(responseJSON.message)
  })

/*
888b. 888b. 8888 8    .d88b.    db    888b. 8888 888b.
8  .8 8  .8 8www 8    8P  Y8   dPYb   8   8 8www 8  .8
8wwP' 8wwK' 8    8    8b  d8  dPwwYb  8   8 8    8wwK'
8     8  Yb 8888 8888 `Y88P' dP    Yb 888P' 8888 8  Yb
*/

const preloader = document.querySelector('.preloader')
const hidePreloader = () => preloader.classList.add('hidden')

/*
888b.    db    8b  8 888b. .d88b. 8b   d8    888b. .d88b. .d88b
8  .8   dPYb   8Ybm8 8   8 8P  Y8 8YbmdP8    8   8 8P  Y8 8P www
8wwK'  dPwwYb  8  "8 8   8 8b  d8 8  "  8    8   8 8b  d8 8b  d8
8  Yb dP    Yb 8   8 888P' `Y88P' 8     8    888P' `Y88P' `Y88P'
*/
// prettier-ignore
const dogResultContainer = document.querySelector('.random-img-result-container')
const randomButton = document.getElementById('random-btn')
const closeButton = document.querySelector('.result-close')
const retryButton = document.querySelector('.result-retry')

randomButton.addEventListener('click', showRandomDog)
document
  .querySelector('.result-btn.result-retry')
  .addEventListener('click', showRandomDog)

closeButton.addEventListener('click', _e =>
  dogResultContainer.classList.remove('visible')
)

function showRandomDog () {
  dogResultContainer.classList.add('visible')
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJSON => {
      document
        .querySelectorAll('.dog-image')
        ?.forEach(element => element.remove())

      const randomDogImg = document.createElement('img')
      randomDogImg.src = responseJSON.message
      randomDogImg.className = 'dog-image'

      dogResultContainer.append(randomDogImg)
    })
}

/*
888b.    db    .d88b 8  dP .d88b  888b. .d88b. 8    8 8b  8 888b.
8wwwP   dPYb   8P    8wdP  8P www 8  .8 8P  Y8 8    8 8Ybm8 8   8
8   b  dPwwYb  8b    88Yb  8b  d8 8wwK' 8b  d8 8b..d8 8  "8 8   8
888P' dP    Yb `Y88P 8  Yb `Y88P' 8  Yb `Y88P' `Y88P' 8   8 888P'
*/

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
  .d88b. 8888    db    888b. .d88b 8   8 888b.    db    888b.
  YPwww. 8www   dPYb   8  .8 8P    8www8 8wwwP   dPYb   8  .8
      d8 8     dPwwYb  8wwK' 8b    8   8 8   b  dPwwYb  8wwK'
  `Y88P' 8888 dP    Yb 8  Yb `Y88P 8   8 888P' dP    Yb 8  Yb
*/
const searchbar = document.getElementById('breed-searchbar')
const searchResults = document.querySelector('.breed-searchbar-results')
const dropdownButton = document.querySelector(
  '.breed-searchbar-dropdown-toggle-wrapper'
)

const handleSearchResultIntersection = (entries, _observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) entry.target.scrollIntoView(false)
  })
}

const searchResultIntersectionObserver = new IntersectionObserver(
  handleSearchResultIntersection,
  {
    root: searchResults,
    rootMargin: '0px',
    threshold: 1.0
  }
)

// Utility functions
const removeMultipleSpaces = str => str.replace(/\s\s+/g, ' ')
const toTitleCase = str =>
  str
    .split(' ')
    .map(s => s[0].toUpperCase() + s.substr(1).toLowerCase())
    .join(' ')

const showResults = () => searchResults.classList.add('active')
const hideResults = () => searchResults.classList.remove('active')
const toggleResults = () => searchResults.classList.toggle('active')
//prettier-ignore
const filterBreeds = q => {
  return (
    dogBreedsReadable
      .map(str => str.toUpperCase())
      .filter(str => str
                      .split(' ')
                      .filter((e, i) => e.startsWith(q.trim().split(' ')[i]) ||
                                        e.startsWith(q.trim().split(' ')[0]))
                      .length >= q.trim().split(' ').length)
                      .sort((a, b) => a.indexOf(q) > b.indexOf(q))
  )
}

// Rotate dropdown button when search suggestions appear
dropdownButton.addEventListener('click', toggleResults)

const updateDropdownIcon = mutations => {
  for (const mutation of mutations) {
    if (mutation.target.classList.contains('active'))
      dropdownButton.classList.add('active')
    else dropdownButton.classList.remove('active')
  }
}

const dropdownObserver = new MutationObserver(updateDropdownIcon)
dropdownObserver.observe(searchResults, { attributes: true })

// Hide search suggestions on focus out of searchbar
// ! BUG: DOESN'T WORK WITH CLICK EVENT LISTENER ON RESULT ITEM
// ! searchbar.addEventListener('focusout', hideResults)

// Display search suggestions & indicate invalid input
searchbar.addEventListener('keyup', e => {
  const excludedKeys = ['arrowdown', 'arrowup']
  if (!excludedKeys.includes(e.key.toLowerCase())) {
    while (searchResults.firstChild) searchResults.firstChild.remove()
    searchbar.value = removeMultipleSpaces(searchbar.value)
    const query = searchbar.value.toUpperCase()

    // Display search suggestions
    for (const result of filterBreeds(query)) {
      let element = document.createElement('li')
      const queryWithSpaces = fixSpaces(query, result)

      element.classList.add('breed-searchbar-results-item')
      element.innerHTML = result
        .replace(query, `<span class="search-query">${queryWithSpaces}</span>`)
        .toLowerCase()
      element.addEventListener('click', e => {
        searchbar.value = removeMultipleSpaces(e.target.textContent)
        hideResults()
      })
      // searchResultIntersectionObserver.observe(element)

      const queryEndsWithSpace =
        query.charAt(query.length - 1) === ' ' &&
        query.trimEnd() !== result.split(' ')[0]

      if (queryEndsWithSpace) continue
      else searchResults.appendChild(element)
    }

    function fixSpaces (query, str) {
      const words = str.split(' ')
      const isStringInSecondWord = str.indexOf(query) > words[0].length
      const isStringAtTheEndOfFirstWord =
        str.indexOf(query) + query.length + 1 === ''
      const whichWordMatchesQuery = words.indexOf(query)
      const queryWithSpace = { '-1': query, '0': query + ' ', '1': ' ' + query }

      if (isStringAtTheEndOfFirstWord) return queryWithSpace['0']
      if (isStringInSecondWord) return queryWithSpace['1']
      return queryWithSpace[whichWordMatchesQuery.toString()]
    }

    // Validate/show/hide input
    const searchbarIsEmpty = !searchbar.value
    const searchQueryIsInvalid = !searchResults.firstChild
    const queryIsPerfectMatch =
      searchbar.value.toLowerCase() ===
      searchResults.firstChild?.textContent.trim()

    if (searchResults.firstChild) showResults()
    if (searchbarIsEmpty || queryIsPerfectMatch) hideResults()
    if (searchQueryIsInvalid) searchbar.classList.add('invalid')
    else searchbar.classList.remove('invalid')

    // Track if result items are in view
    for (const item of searchResults.childNodes) {
    }
  }
})

// Highlight search suggestion functions
const clearHighlightedResult = () => {
  document
    .querySelectorAll('.breed-searchbar-results-item.selected')
    .forEach(element => element.classList.remove('selected'))
}

const highlightResult = direction => {
  const selectedIndex = Array.from(searchResults.childNodes)
    .map(e => e.className)
    .indexOf('breed-searchbar-results-item selected')

  const directionValues = { next: 1, previous: -1 }
  const offset = directionValues[direction] || 0

  const lastResultIsHighlighted =
    selectedIndex + 1 === searchResults.childElementCount
  const firstResultIsHighlighted = selectedIndex - 1 === -1
  const noResultIsHighlighted = selectedIndex === -1

  const [firstResult, lastResult, nextResult] = [
    searchResults.firstChild,
    searchResults.lastChild,
    searchResults.childNodes[selectedIndex + offset]
  ]
  // # REFACTOR THIS
  searchResultIntersectionObserver.disconnect()
  if (noResultIsHighlighted) {
    clearHighlightedResult()
    firstResult.classList.add('selected')
    firstResult.scrollIntoView()
  } else if (lastResultIsHighlighted && direction === 'next') {
    clearHighlightedResult()
    firstResult.classList.add('selected')
    firstResult.scrollIntoView()
  } else if (firstResultIsHighlighted && direction === 'previous') {
    clearHighlightedResult()
    lastResult.classList.add('selected')
    lastResult.scrollIntoView()
  } else {
    clearHighlightedResult()
    nextResult.classList.add('selected')
    searchResultIntersectionObserver.observe(nextResult)
  }
}

// Searchbar keyboard navigation
searchbar.addEventListener('keydown', e => {
  if (searchResults.firstChild) {
    switch (e.key.toLowerCase()) {
      case 'enter':
        searchbar.value =
          removeMultipleSpaces(
            document.querySelector('.breed-searchbar-results-item.selected')
              ?.textContent
          ) || removeMultipleSpaces(searchResults.firstChild.textContent)
        hideResults()
        break
      case 'arrowdown':
        highlightResult('next')
        break
      case 'arrowup':
        highlightResult('previous')
        break
      default:
        // alert(e.key.toLowerCase())
        break
    }
  }
})

// If search result is not visibile scroll into view
searchResults.addEventListener('mouseover', clearHighlightedResult)

// TODO:
// // when excess spaces are removed from searchbar input prevent it from jumping
// // make scrolling follow the result highlighted with keyboard
// make enter submit if the searchbar value is valid
// // make enter submit the highlighted result
// // make the downwards arrow in search toggle results and also arrow down on keyboard if closed
// disable hover on arrow press
// use popmotion for some fancy animation maybe for loading?
// make the placeholder moving to top animation shorter when the choice is clicked not typed
// seperate stuff into functions to make things readable
// turn the search results to title case with javascript
// style the dog image window
// keep a history of the dog results so you can go back and forwards or see the source images