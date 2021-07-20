const form_song_selector = document.querySelector("#song-form");
const song_list_selector = document.querySelector("#songList");
const submit_btn_form_selector = document.querySelector("#btn-form-properties");
const song_title_input_selector = document.querySelector("#songTtile");
const song_duration_input_selector = document.querySelector("#songDuration");
const song_album_input_selector = document.querySelector("#songAlbum");
const song_artist_input_selector = document.querySelector("#songArtist");
const song_image_input_selector = document.querySelector("#songImage");
const song_category_input_selector = document.querySelector("#songCategory");
const song_highlight_input_selector = document.querySelector("#songHighlighted");

let songArray = [];
let globalId;
let idSongDelete;

const createSongItem = (song) => {
  songArray.push({ ...song, id: Date.now() });
};

const SongDataSaverLS = () => {
  localStorage.setItem("songs", JSON.stringify(songArray));
  showSongInDom();
};

const DOMCleaner = () => {
  while (song_list_selector.firstChild) {
    song_list_selector.removeChild(song_list_selector.firstChild);
  }
};

const showSongInDom = () => {
  DOMCleaner();
  songArray = JSON.parse(localStorage.getItem("songs"));
  if (songArray === null) {
    songArray = [];
  } else {
    if (songArray.length > 0) {
      songArray.forEach((song) => {
        const SONGLIST_SELECTOR = document.querySelector("#songList");
        const row = document.createElement("tr");
        row.id = song.id;
        row.innerHTML = `
          <td class="border-top-0">${song.id}</td>
          <td><img src="${song.image}" width="40px" height="40px"></td>
          <td>${song.title}</td>
          <td>${song.duration}</td>
          <td>${song.album}</td>
          <td>${song.artist}</td>
          <td>${song.category}</td>
          <td>
          <span class="material-icons">
            <i data-toggle="modal" data-target="#deleteSongModal">delete</i>
            <i data-toggle="modal" data-target="#addSongModalForm">edit</i>
          </span>
          </td>
        `;
        SONGLIST_SELECTOR.append(row);
      });
    }
  }
};

const editSongValues = (id) => {
  const songItem = songArray.find((song) => song.id === Number(id));
  song_title_input_selector.value = songItem.title;
  song_duration_input_selector.value = songItem.duration;
  song_album_input_selector.value = songItem.album;
  song_artist_input_selector.value = songItem.artist;
  song_image_input_selector.value = songItem.image;
  song_category_input_selector.value = songItem.category;
  song_highlight_input_selector.value = songItem.highlightedSong;
  submit_btn_form_selector.textContent = "Editar";
};

const editSongValuesLS = (id) => {
  const newSongTitle = song_title_input_selector.value;
  const newSongDuration = song_duration_input_selector.value;
  const newSongAlbum = song_album_input_selector.value;
  const newSongArtist = song_artist_input_selector.value;
  const newSongImage = song_image_input_selector.value;
  const newSongCategory = song_category_input_selector.value;
  const newHighlightedValue = song_highlight_input_selector.value;
  songArray = songArray.map((song) => {
    if (song.id === Number(id)) {
      return {
        ...song,
        title: newSongTitle,
        duration: newSongDuration,
        album: newSongAlbum,
        artist: newSongArtist,
        image: newSongImage,
        category: newSongCategory,
        highlightedSong: newHighlightedValue,
      };
    } else {
      return song;
    }
  });
};

const deleteSongFromLS = (id) => {
  console.log(id)
  songArray = songArray.filter((song) => song.id !== Number(id));
  SongDataSaverLS();
};

form_song_selector.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = song_title_input_selector.value;
  const duration = song_duration_input_selector.value;
  const album = song_album_input_selector.value;
  const artist = song_artist_input_selector.value;
  const image = song_image_input_selector.value;
  const category = song_category_input_selector.value;
  const highlightedSong = song_highlight_input_selector.value;
  if (submit_btn_form_selector.textContent === "Guardar") {
    createSongItem({
      title,
      duration,
      album,
      artist,
      image,
      category,
      highlightedSong,
    });
  } else {
    editSongValuesLS(globalId);
  }
  SongDataSaverLS(globalId);
});

document.addEventListener("DOMContentLoaded", showSongInDom);





song_list_selector.addEventListener("click", (e) => {
  if (e.target.innerHTML === "edit" || e.target.innerHTML === "delete") {
    if (e.target.innerHTML === "edit") {
      globalId = e.target.parentElement.parentElement.parentElement.id;
      editSongValues(globalId);
    }
    if (e.target.innerHTML === "delete") {
      const idToDelete = e.target.parentElement.parentElement.parentElement.id;
      localStorage.setItem("idToDelete", idToDelete);
      //deleteSongFromLS(songId);
    }
  }
});

const songToDelete = document.querySelector("#deleteBtnSongModal");
if (songToDelete) {
  songToDelete.addEventListener("click", () => {
    deleteSongFromLS(localStorage.getItem("idToDelete"));
    localStorage.removeItem("idToDelete");
  });
}