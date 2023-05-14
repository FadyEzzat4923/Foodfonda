let year = document.querySelector(".year");
let date = new Date();
year.innerHTML = date.getFullYear();
let toUp = document.querySelector(".toUp");
toUp.style.display = "none";
toUp.onclick = () => {
    window.scrollTo(0, 0);
}
window.onscroll = () => {
    if (window.scrollY >= 500) {
        toUp.style.display = "block";
    }
    else {
        toUp.style.display = "none";
    }
}