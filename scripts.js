// Film-Daten
const horrorMovies = [/* Horrorfilme Daten hier */];
const musicalMovies = [/* Musicalfilme Daten hier */];
const fantasyMovies = [/* Fantasyfilme Daten hier */];
const comedyMovies = [/* Komödienfilme Daten hier */];
const kidsMovies = [/* Kinderfilme Daten hier */];
const actionMovies = [/* Actionfilme Daten hier */];

// Funktion zum Anzeigen der Filme
function displayMovies(category, movieList) {
    const sectionElement = document.getElementById(`-movies`);
    sectionElement.innerHTML = movieList.map(movie => `
        <div class="movie-item">
            <img src="" alt="">
            <h2></h2>
            <button onclick="openPlayer('', '')">Film ansehen</button>
        </div>
    `).join('');
}

// Player öffnen
function openPlayer(m3u8Url, title) {
    const playerWindow = window.open("", "_blank");
    playerWindow.document.write(`...`); // Dein Player-Code hier
}

// Suchfunktion
function searchMovies() {
    const query = document.getElementById("search-query").value.toLowerCase();
    filterMovies("horror", horrorMovies, query);
    filterMovies("musical", musicalMovies, query);
    filterMovies("fantasy", fantasyMovies, query);
    filterMovies("action", actionMovies, query);
    filterMovies("comedy", comedyMovies, query);
    filterMovies("kids", kidsMovies, query);
}

// Filme filtern
function filterMovies(category, movieList, query) {
    const filteredMovies = movieList.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(category, filteredMovies);
}

// Seite initialisieren
window.onload = function() {
    displayMovies("horror", horrorMovies);
    displayMovies("musical", musicalMovies);
    displayMovies("fantasy", fantasyMovies);
    displayMovies("action", actionMovies);
    displayMovies("comedy", comedyMovies);
    displayMovies("kids", kidsMovies);
};