// === MUSIC CONTROL ===
const music = document.getElementById("backgroundMusic");
const musicIcon = document.getElementById("musicIcon");

function toggleMusic() {
  if (music.paused) {
    music.muted = false; // unmute
    music.play();
    musicIcon.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    music.pause();
    musicIcon.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
}

// === VIDEO MODAL (YouTube) ===
function openVideo() {
  document.getElementById("videoModal").style.display = "flex";
  document.getElementById("youtubeVideo").src =
    "https://www.youtube.com/embed/VIDEO_ID?autoplay=1";
}
function closeVideo() {
  document.getElementById("videoModal").style.display = "none";
  document.getElementById("youtubeVideo").src = "";
}

// === SLIDER MEMORIES ===
const slider = document.getElementById("slider");
const leftBtn = document.querySelector(".nav-btn.left");
const rightBtn = document.querySelector(".nav-btn.right");

leftBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -320, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 320, behavior: "smooth" });
});

// === REVEAL EFFECT ON SCROLL ===
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);

// === MODAL IMAGE (ZOOM FOTO) ===
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];
var images = document.querySelectorAll(".memories .slider img");

// Klik gambar → buka modal
images.forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Klik tombol close
span.onclick = function () {
  modal.style.display = "none";
};

// Klik area luar gambar → close
modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
