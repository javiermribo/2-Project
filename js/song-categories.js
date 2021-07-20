let arraySong = JSON.parse(localStorage.getItem("songs"));
const popSongs = arraySong.filter((song) => song.category === "Pop");
const rockSongs = arraySong.filter((song) => song.category === "Rock");
const punkSongs = arraySong.filter((song) => song.category === "Punk");
const otherSongs = arraySong.filter((song) => song.category === "Otro");
const highlightedSongs = arraySong.filter((song) => song.highlightedSong === "Si");

function appendSongsByCategory(container, xArraySong) {
  xArraySong.forEach((song) => {
    songArticle = document.createElement("article");
    songArticle.setAttribute("class", "mx-3 text-center", "article-background");
    songArticle.innerHTML = `
    <a href="song-page.html#${song.id}"><img src="${song.image}" width="200px" height="200px" class="img-thumbnail songCoverImg"></a>
    <h5 class="song-card-tile mt-2">${song.title}</h5>
    <p class="song-artist">${song.artist}</p>
    `;
    container.append(songArticle);
  });
}

appendSongsByCategory(popSongsCardsId, popSongs);
appendSongsByCategory(rockSongsCardId, rockSongs);
appendSongsByCategory(punkSongsCardId, punkSongs);
appendSongsByCategory(otherSongsCardId, otherSongs);
appendSongsByCategory(highlightedSongsCardId, highlightedSongs);
