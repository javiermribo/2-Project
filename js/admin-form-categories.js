const TITLE_SELECTOR = document.querySelector("#songTtile");
const DURATION_SELECTOR = document.querySelector("#songDuration");
const ALBUM_SELECTOR = document.querySelector("#songAlbum");
const ARTIST_SELECTOR = document.querySelector("#songArtist");
const CATEGORY_SELECTOR = document.querySelector("#songCategory");
const BTN_FORM_SELECTOR = document.querySelector("#btn-form-properties");
const HIGHLIGHT_SONG_SELECTOR = document.querySelector("#songHighlighted");
BTN_FORM_SELECTOR.disabled = true;

TITLE_SELECTOR.addEventListener("change", formSongValidations);
DURATION_SELECTOR.addEventListener("change", formSongValidations);
ALBUM_SELECTOR.addEventListener("change", formSongValidations);
ARTIST_SELECTOR.addEventListener("change", formSongValidations);
CATEGORY_SELECTOR.addEventListener("change", formSongValidations);
HIGHLIGHT_SONG_SELECTOR.addEventListener("change", formSongValidations);

function formSongValidations() {
  if (
    document.querySelector("#songTtile").value === "" ||
    document.querySelector("#songDuration").value === "" ||
    document.querySelector("#songAlbum").value === "" ||
    document.querySelector("#songArtist").value === "" ||
    document.querySelector("#songCategory").value === "" ||
    document.querySelector("#songHighlighted").value === ""
  ) {
    BTN_FORM_SELECTOR.disabled = true;
  } else {
    BTN_FORM_SELECTOR.disabled = false;
  }
}

const FORM_SELECTOR = document.querySelector("#song-form");
FORM_SELECTOR.addEventListener("submit", (e) => {
  e.preventDefault();
  const image = document.querySelector("#songImage").value;
  const title = document.querySelector("#songTtile").value;
  const duration = document.querySelector("#songDuration").value;
  const album = document.querySelector("#songAlbum").value;
  const artist = document.querySelector("#songArtist").value;
  const category = document.querySelector("#songCategory").value;

  const song = new Songs(image, title, duration, album, artist, category);

  UI.addSongsToList(song);

  Store.addSongToLS(song);
});
