

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: () => {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '').trim();

        while (typeof (personalMovieDB.count) === 'number' || personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim();
            b = prompt('На сколько оцените его?').trim();

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        personalMovieDB.private = personalMovieDB.private ? false : true;
    },
    writeYourGenres: () => {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}

three().then(console.log);