const marvelMovies = [
    { id: 1, title: "Iron Man", director: "Jon Favreau", released: 2008, runtime: 126},
    { id: 2, title: "Thor", director: "Kenneth Branagh", released: 2011, runtime: 115},
    { id: 3, title: "The Avengers", director: "Joss Whedon", released: 2012, runtime: 143},
    { id: 4, title: "Guardians of the Galaxy", director: "James Gunn", released: 2014, runtime: 121},
    { id: 5, title: "Ant-Man", director: "Peyton Reed", released: 2015, runtime: 117},
    { id: 6, title: "Black Panther", director: "Ryan Coogler", released: 2018, runtime: 134}
];

const DCMovies = [
    { id: 7, title: "The Dark Knight", director: "Christopher Nolan", released: 2008, runtime: 152},
    { id: 8, title: "Watchmen", director: "Zack Snyder", released: 2009, runtime: 215},
    { id: 9, title: "Catwoman", director: "Pitof", released: 2004, runtime: 104},
    { id: 10, title: "Suicide Squad", director: "David Ayer", released: 2016, runtime: 137},
    { id: 11, title: "Wonder Woman", director: "Patty Jenkins", released: 2017, runtime: 149},
    { id: 12, title: "Aquaman", director: "James Wan", released: 2018, runtime: 142}
];

const allMovies = [marvelMovies, DCMovies];

const divider = () => {
    console.log("==========================");
};

//For Each
//Print each DC title and release date:
console.log("DC Movies:");
DCMovies.forEach(movie => {
    console.log(`${movie.title} released ${movie.released}`);
});

divider();

//Map
//Create an array of Marvel Movie Titles:
let marvelTitles = marvelMovies.map(movie => movie.title);
console.log("Marvel Movies: ", marvelTitles);

divider();

//Filter
//Create an array of Marvel Movie Titles that start with "B":
let bTitles = marvelTitles.filter(movie => movie.startsWith("B"));
console.log("Marvel Movies starting with B: ", bTitles);

divider();

//Create an array of DC Movies released before 2016:
let olderDCMovies = DCMovies.filter(movie => movie.released < 2016);
console.log("DC Movies before released before 2016: ", olderDCMovies);

divider();

//Reduce
//Find the average runtime of all Marvel Movies:
let sum = marvelMovies.reduce((acc, movie) => acc + movie.runtime, 0);
let average = sum / marvelMovies.length;
console.log("Marvel Movies average runtime: ", average, "minutes");

divider();


//Reduce, Map, Filter
//Find all movies who's runtime is longer than 2 hours:

//use reduce to turn array of arrays into one array
let movieTitles = allMovies.reduce((acc, movie) => {
        return acc.concat(movie);
//use map to turn minutes into hours
    }, []).map(movie => {
        return { ...movie, runtime: movie.runtime/60};
//use filter to find movies longer than 2 hours
    }).filter(movie => movie.runtime > 2)
//use map to return the movie titles
    .map(movie => movie.title);

console.log("Movies longer than 2 hours: ", movieTitles);

divider();

//Find average runtime of all movies released in 2018:

let lastYearMovies = allMovies.reduce((acc, movie) => {
    return acc.concat(movie);
}, []).filter(movie => movie.released === 2018);

let average2 = lastYearMovies.reduce((acc, movie) => acc + movie.runtime/lastYearMovies.length, 0);

console.log("Average runtime of all 2018 movies: ", average2, "minutes");

divider();