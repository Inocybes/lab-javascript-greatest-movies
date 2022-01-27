// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {
  const directors = arr.map((movie) => {
    return movie.director
  });
return directors
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const dramaMoviesSpilberg = arr.filter((movies, index) => {
    return movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')
    })
  return dramaMoviesSpilberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(arr) {
  
  if (arr.length === 0) {
    return 0;
  }
  let totalScore = arr.reduce( (accScore, movieScore) => {
    if (movieScore.score === undefined) {
      return accScore
    } else {
      return accScore + movieScore.score
    }
  }, 0 )
  
  let averageScore = totalScore / arr.length
  
  return Number( averageScore.toFixed(2) )

}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaMovies = arr.filter ( (movies, index) => {
    return movies.genre.includes('Drama')
  })
  if(dramaMovies.length === 0){
    return 0
  }
  let dramaMoviesTotal = dramaMovies.reduce( (accScoreDrama, movieScoreDrama) => {
    if (movieScoreDrama.score === undefined) {
      return accScoreDrama
    } else {
      return accScoreDrama + movieScoreDrama.score
    }
  }, 0 )
  
  let averageDramaScore = dramaMoviesTotal / dramaMovies.length
  
  return Number( averageDramaScore.toFixed(2) )
}

/*{
  title: 'Schindler"s List',
  year: 1993,
  director: 'Steven Spielberg',
  duration: '3h 15min',
  genre: ['Biography', 'Drama', 'History'],
  score: 8.9
}*/

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let moviesYearCopy = JSON.parse( JSON.stringify( arr ) )
  let newMoviesYear = moviesYearCopy.sort((a,b) =>{
    if(a.year > b.year) {
      return 1
    } else if (a.year < b.year) {
      return -1
    } else {
      if (a.title > b.title) {
        return 1
      } else {
        return -1
      }
    }
  })
  return newMoviesYear
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let moviesCopy = JSON.parse( JSON.stringify( arr ) )
  let moviesTitles = moviesCopy.map( (movie) => {
    return movie.title
  } )
  let newMoviesTitle = moviesTitles.sort((title1, title2) =>{
    if(title1 > title2) {
      return 1;
    } else if (title1 < title2) {
      return -1;
    } else {
      return 0;
    }
  })
  if (newMoviesTitle.length > 20) {
    newMoviesTitle = newMoviesTitle.slice(0,20)
  }
  return newMoviesTitle
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
