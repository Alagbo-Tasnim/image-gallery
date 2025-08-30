const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// OPen lightbox
galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = item.src;
        caption.innerText = item.alt;
        currentIndex = index;
    });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Navigate Next
nextBtn.addEventListener("click", () =>{
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage();
});

// Navigate Prev
prevBtn.addEventListener("click", () => {
    currentIndex + (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage();
});

// Show image function
function showImage() {
    lightboxImg.src = galleryItems[currentIndex].src;
    caption.innerText = galleryItems[currentIndex].alt;
};

// Close on outside click
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
