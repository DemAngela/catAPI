const likeBtn = document.querySelector('.likeBTN')
const likeCount = document.querySelector('#like-count')
const disLikeBnt = document.querySelector('.nopeBTN')
const disLikeCount = document.querySelector('#dislike-count')
const picture = document.querySelector('.picture')

let likes = 0;
let dislikes = 0;

likeBtn.addEventListener("click", () => {
    likes++;
    likeCount.textContent = likes;
    showNextImage();
});

disLikeBnt.addEventListener("click", () => {
    dislikes++;
    disLikeCount.textContent = dislikes;
    showNextImage();
});


function showNextImage() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            picture.src = json[0].url
            console.log(picture.src = json[0].url)
        })
}

showNextImage();
