// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorArray = moviesArray.map ((movies) => {
        return movies.director;
    });
    return directorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter((search) => {
        return search.genre.includes("Drama") && search.director.includes("Steven Spielberg")
        }
    )
    return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const sumScores = moviesArray.reduce(
        (accumulator, currentScore) => accumulator + currentScore.score, 0) 
        return Math.round(sumScores / moviesArray.length);
    return sumScores;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((search) => {
        return search.genre.includes("Drama");
        }
    )
    return dramaMovies;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    moviesOrdered = [];
    movies.toSorted((a,b) => a-b);
    moviesOrdered.push(moviesArray);
    return moviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    /*const newArray = moviesArray.map((currentMovie) => currentMovie.title);
    moviesArray.sort(function (a, b) {
        if (a.movies < b.movies) {
          return -1;
        }
        if (a.movies > b.movies) {
          return 1;
        }
        else {
            return 0;
        } 
      });
    const twentyMovies = newArray.slice(0, 20).map((newArray) => {
        return newArray.twentyMovies;
    });
    //const sortedArray = twentyMovies.sort((a, b) => a - b);
    //return newArray; */
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
