 
 // Retrieve the movie data from the URL query parameters
 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);
 const movieData = urlParams.get('data');

 if (movieData) {
   const movie = JSON.parse(decodeURIComponent(movieData));

   // Populate the banner section
   if (movie.banner) {
     const bannerSection = document.getElementById('bannerSection');
     const bannerImage = document.createElement('img');
     bannerImage.src = movie.banner;
     bannerImage.alt = movie.title;
     bannerSection.appendChild(bannerImage);
   }

   // Populate the movie details in the result content page
   document.getElementById('movieTitle').textContent = movie.title;
   
    // Add release date and language under the movie title
    const movieReleaseDate = document.getElementById('movieReleaseDate');
    movieReleaseDate.textContent = `Release Date: ${movie.releaseDate}`;

    const movieLanguage = document.getElementById('movieLanguage');
    movieLanguage.textContent = `Language: ${movie.language}`;

   document.getElementById('movieRating').innerHTML = getRatingStars(movie.rating);
   document.getElementById('movieCategory').innerHTML = `<i class="fas fa-tag"></i> ${movie.category}`;
   document.getElementById('movieDuration').innerHTML = `<i class="fas fa-clock"></i> ${movie.duration}`;
   document.getElementById('movieQuality').innerHTML = `<i class="fas fa-video"></i> ${movie.quality}`;
  
   document.getElementById('movieDescription').innerHTML = `
     <h2>Description</h2>
     <p>${movie.description}</p>
   `;
   document.getElementById('castInfo').innerHTML = `
     <h2>Cast</h2>
     <p><i class="fas fa-user-circle"></i> ${movie.cast.join(', ')}</p>
   `;
 }


 function getRatingStars(rating) {
   const fullStars = Math.floor(rating);
   const halfStar = rating - fullStars >= 0.5;
   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

   let starsHtml = '';
   for (let i = 0; i < fullStars; i++) {
     starsHtml += '<i class="fas fa-star"></i>';
   }

   if (halfStar) {
     starsHtml += '<i class="fas fa-star-half-alt"></i>';
   }

   for (let i = 0; i < emptyStars; i++) {
     starsHtml += '<i class="far fa-star"></i>';
   }

   return starsHtml;
 }

 function toggleSharePopup() {
   const sharePopup = document.getElementById('sharePopup');
   sharePopup.classList.toggle('show');
 }

 function toggleHeartIconColor() {
   const heartIcon = document.getElementById('heartIcon');
   heartIcon.classList.toggle('red-heart');
 }









 // Sample top-rated movie data (you can replace this with real movie data fetched from an API or database)
const topRated = [
  {
    title: "Pattan",
    rating: 4.5,
    language: "Hindi",
    category: "Action",
    duration: "2h 15min",
    poster: "https://www.tallengestore.com/cdn/shop/products/Pathan-ShahRukhKhan-BollywoodSuperhitHindiMoviePoster.jpg?v=1675247618",
  },
  {
    title: "Iratta",
    rating: 4.5,
    language: "Malayalam",
    category: "thriller",
    duration: "2h 30min",
    poster: "https://www.scrolldroll.com/wp-content/uploads/2023/04/iratta-best-malayalam-movies-of-2023.jpg",
  },
  {
    title: "Ayisha",
    rating: 4.2,
    language: "Malayalam",
    category: "Drama",
    duration: "2h 30min",
    poster: " https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjXv9FRFv8KSpXva8LlcipmYVc7A0ye_KZz2XukEjL33TB4mWlBcaXTKcD8feURsH4tkxPUW1uPPerDSiDeXPRTSva3WDDqUlgSorZ8Tnprkx8VZn_WIo4FQVbaSddBpCMZ8QsiDbJRIxnlD5hk0zoTgWxppd9Xxr-wh_wpAEsJ1GuXjbhoW3xAlZyIw/s1600/Ayisha-Malayalam-Movie-Box-Office-Hit-or-Flop.jpg",
  },
  {
    title: "Javan",
    rating: 5.8,
    language: "Hindi",
    category: "Action ,Drama",
    duration: "2h 50min",
    poster: "https://cdn.bollywoodbubble.com/wp-content/uploads/2023/07/SRK-Jawan-poster-1.jpg",
  },
  {
    title: "Pacchhuvum Adthvutha Vilakkum",
    rating: 4.7,
    language: "Malayalam",
    category: "Drama , Romatic",
    duration: "2h 20min",
    poster: "https://assets.voxcinemas.com/posters/P_HO00010200.jpg",
  },

  {
    title: "John Wick: Chapter 4",
    rating: 4.7,
    language: "English",
    category: "Drama , Action ,Sci-Fci",
    duration: "2h 20min",
    poster: "https://musicart.xboxlive.com/7/78196600-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
  },
  {
    title: "Pacchhuvum Adthvutha Vilakkum",
    rating: 4.7,
    language: "Malayalam",
    category: "Drama , Romatic",
    duration: "2h 20min",
    poster: "https://assets.voxcinemas.com/posters/P_HO00010200.jpg",
  },



];

// Function to create a single movie card
function createMovieCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-item");

  const moviePoster = document.createElement("img");
  moviePoster.src = movie.poster;
  moviePoster.alt = "Movie Poster";

  const cinemaTitle = document.createElement("h2");
  cinemaTitle.classList.add("cinema-title");
  cinemaTitle.textContent = movie.title;

  const rating = document.createElement("div");
  rating.classList.add("rating");
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.classList.add("star");
    if (i <= movie.rating) {
      star.textContent = "★";
    } else {
      star.textContent = "☆";
    }
    rating.appendChild(star);
  }

  const language = document.createElement("p");
  language.classList.add("language");
  language.textContent = "Language: " + movie.language;

  const category = document.createElement("p");
  category.classList.add("category");
  category.textContent = "Category: " + movie.category;

  const duration = document.createElement("p");
  duration.classList.add("duration");
  duration.textContent = "Duration: " + movie.duration;

  movieCard.appendChild(moviePoster);
  movieCard.appendChild(cinemaTitle);
  movieCard.appendChild(rating);
  movieCard.appendChild(language);
  movieCard.appendChild(category);
  movieCard.appendChild(duration);

  return movieCard;
}

// Function to add a movie card with smooth animation
function addMovieCardWithAnimation(movie) {
  const movieCard = createMovieCard(movie);
  movieCard.style.opacity = 0; // Set initial opacity to 0 (transparent)
  movieCard.style.transform = "translateY(20px)"; // Move card down slightly

  const movieSlider = document.getElementById("movieSlider");
  movieSlider.appendChild(movieCard);

  // Trigger reflow by accessing the property for smooth transition
  movieCard.getBoundingClientRect();

  movieCard.style.opacity = 1; // Fade in the card
  movieCard.style.transform = "translateY(0)"; // Move card back to its original position
}

// Function to add all top-rated movie cards to the slider with smooth animation
function addTopRatedToSliderWithAnimation(topRated) {
  topRated.forEach((movie, index) => {
    setTimeout(() => {
      addMovieCardWithAnimation(movie);
    }, index * 300); // Delay each card addition for a smoother effect
  });
}

// Call the function to add top-rated movie cards with smooth animation
addTopRatedToSliderWithAnimation(topRated);







 // Your existing JavaScript code
    // Get the current year and update the dynamic content
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;






