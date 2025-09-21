const cardwrapper = document.querySelector('.content-cards')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

console.log(searchInput);
console.log(searchButton);

const films = [
  {
    id: 1,
    title: "Марсианин 1",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    raiting: 7.8,
    link:'/film.html',
    image: "./images/film.png",
  },
  {
    id: 2,
    title: "Марсианин 2",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    raiting: 7.8,
    link:'/film.html',
    image: "./images/film.png",
  },
  {
    id: 3,
    title: "Марсианин 3",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    raiting: 7.8,
    link:'/film.html',
    image: "./images/film.png",
  },
  {
    id: 4,
    title: "Марсианин 4",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    raiting: 7.8,
    link:'/film.html',
    image: "./images/film.png",
  },
  {
    id: 5,
    title: "Марсианин 5",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    raiting: 7.8,
    link:'/film.html',
    image: "./images/film.png",
  },
  {
    id: 6,
    title: "Марсианин 6",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    raiting: 7.8,
    link:'/film.html',
    image: "./images/film.png",
  }
]

const render = (array) => {
    cardwrapper.innerHTML = ''

    array.forEach((item) => {
        cardwrapper.insertAdjacentHTML('beforeend', `
            <a href="${item.link}" class="content-cards__item">
                <div class="content-cards__item--img">
                    <img src="${item.image}" alt="film">
                </div>

                <div class="content-cards__item--title">
                    <h5>${item.title},</h5>
                    <span>${item.original}</span>
                </div>  
                <p class="content-cards__item--description">
                    ${item.category}
                </p>
                <p class="content-cards__item--rating">
                    ${item.raiting}
                </p>
            </a>
            
            `)
    });
}
searchButton.addEventListener('click', () => {
    render(films.filter((item) => item.title.includes(searchInput.value)))
})

render(films)
