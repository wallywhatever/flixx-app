const global = {
  currentPage: window.location.pathname,
};

async function displayPopularMovies() {
  const { results } = await fetchAPIData("movie/popular");

  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("card");
    
    const poster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : "images/no-image.jpg";

    div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
          <img
            src=${poster}
            class="card-img-top"
            alt="${movie.title}"
          />
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;
    document.querySelector("#popular-movies").appendChild(div);
  });
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = "6e7c6584a69505f1858acfb8568d3f1b";
  const API_URL = "https://api.themoviedb.org/3/";

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-us`
  );

  const data = await response.json();

  return data;
}

// Highlight active link
function hightlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

// Init
function init() {
  // Routing
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displayPopularMovies();
      break;
    case "/shows.html":
      console.log("shows");
      break;
    case "/movie-details.html":
      console.log("movie-details");
      break;
    case "/tv-details.html":
      console.log("tv-details");
      break;
    case "/search.html":
      console.log("search");
      break;
  }
  hightlightActiveLink();
}

console.log(global.currentPage);
document.addEventListener("DOMContentLoaded", init);
