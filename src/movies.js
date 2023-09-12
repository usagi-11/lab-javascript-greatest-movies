// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorArray = moviesArray.map ((currElement) => {
        return currElement.director;
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
    if (moviesArray.length === 0) {
        return 0;
    }
    else {
        const sumScores = moviesArray.reduce(
            (accumulator, currMovie) => {
                if (currMovie.score === undefined) {
                    return accumulator;
                }
                else {
                    return accumulator + currMovie.score;
                }
            }, 0) 
            return Math.round((sumScores / moviesArray.length)*100)/100;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((currMovie) => {
        return currMovie.genre.includes("Drama");
        }
    )
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesOrdered = moviesArray.toSorted((firstMovie,secondMovie) => {
        if (firstMovie.year === secondMovie.year) {
            return firstMovie.title.localeCompare(secondMovie.title);
        }
        else {
            return firstMovie.year - secondMovie.year;
        }
    });
    return moviesOrdered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphabetOrder = moviesArray.toSorted((firstMovie,secondMovie) => {
        return firstMovie.title.localeCompare(secondMovie.title);
    });
    const movieTitles = alphabetOrder.map((currElem) => {
        return currElem.title;
    })
    return movieTitles.slice(0, 20);
}
    
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
