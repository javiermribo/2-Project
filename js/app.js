const getComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await response.json();
  createComments(comments.slice(0, 5));
}

getComments();

function createComments (comments) {
  comments.forEach((comments) => {
    const SECTION_COMMENTS_SELECTOR = document.querySelector("#userCommentsId");
    const divComment = document.createElement("div");
    divComment.classList.add = ("class", "m-auto");
    divComment.innerHTML = `
    <h5 class="background-comment-style p-1">${comments.name}</h5>
    <p>${comments.body}</p>
    `;
    SECTION_COMMENTS_SELECTOR.append(divComment);
  })
}

const id = window.location.hash.slice(1);
const getSongs = JSON.parse(localStorage.getItem("songs"));
const findSong = getSongs.find((song) => song.id === Number(id));
const div_jumbotron_selector = document.querySelector(
  "#jumbotronImgBackground"
);
let image = document.getElementById("jumbotronImgBackground");
image.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${findSong.image}')`;
div_jumbotron_selector.innerHTML = `
  <div class="jumbotronContent">
    <h1 class="display-3 text-white">${findSong.title}</h1>
    <p class="h3 text-white mb-3">${findSong.artist}</p>
    <a class="btn button-primary btn-lg" href="https://open.spotify.com/search/${findSong.title}" role="button">¡Dale play!</a>
  </div>
`;

const song_detail_selector = document.querySelector("#songDetailsId");
const song_info_content = document.createElement("section");
song_info_content.innerHTML = `
  <h2 class="text-white mb-5 text-center">MAS INFORMACIÓN</h2>
  <div class="d-flex justify-content-between flex-wrap">
  <h5 class="text-white"><strong>Duración:</strong> ${findSong.duration}</h5>
  <h5 class="text-white"><strong>Album:</strong> ${findSong.album}</h5>
  <h5 class="text-white"><strong>Categoría:</strong> ${findSong.category}</h5>
  </div>
`;
song_detail_selector.append(song_info_content);

const form_comment_selector = document.querySelector("#form-validator");
const textarea_selector = document.querySelector("#text-area");
const btn_submit_comment_selector = document.querySelector(
  "#btn-submit-comment"
);
textarea_selector.addEventListener("change", commentsValidations);

function commentsValidations() {
  if (document.querySelector("#text-area").value.length < 1) {
    btn_submit_comment_selector.disabled = true;
  } else {
    btn_submit_comment_selector.disabled = false;
  }
}

commentsValidations();