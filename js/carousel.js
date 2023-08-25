const carouselEl = document.getElementById("carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");

const firstImg = carouselEl.querySelectorAll("img")[0];
let firstImgWidth = firstImg.clientWidth + 16;

let isDragStart = false;
let prevPageX;
let prevScrollLeft;

arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        carouselEl.scrollLeft +=
            icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

const dragStart = (event) => {
    isDragStart = true;
    prevPageX = event.pageX;
    prevScrollLeft = carouselEl.scrollLeft;
};

const dragStop = () => {
    isDragStart = false;
    carouselEl.classList.remove('dragging');
};

const dragging = (event) => {
    if (!isDragStart) return;
    event.preventDefault();
    carouselEl.classList.add("dragging");
    let positionDiff = event.pageX - prevPageX;
    carouselEl.scrollLeft = prevScrollLeft - positionDiff;
};

carouselEl.addEventListener("mousedown", dragStart);
carouselEl.addEventListener("mousemove", dragging);
carouselEl.addEventListener("mouseup", dragStop);
