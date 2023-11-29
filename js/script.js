const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const movieArr = [];
const rateArr = [];
for(let i = 0; i < personalMovieDB.count; i++) {
    movieArr[i] = prompt('Один из последних просмотренных фильмов?', '');
    rateArr[i] = prompt('Насколько оцените его?');
}


for(let i = 0; i < personalMovieDB.count; i++) {
    personalMovieDB.movies[movieArr[i]] = rateArr[i];
}
console.log(personalMovieDB);