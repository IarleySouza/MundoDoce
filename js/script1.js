const reviews = document.querySelectorAll('.review-card');
const reviewsPerView = 3;
let currentStartIndex = 0;
let autoSlideInterval;

function updateCarousel() {
    reviews.forEach((review, index) => {
        if (index >= currentStartIndex && index < currentStartIndex + reviewsPerView) {
            review.style.display = 'flex';
        } else {
            review.style.display = 'none';
        }
    });

    document.querySelector('.left-arrow').disabled = currentStartIndex === 0;
    document.querySelector('.right-arrow').disabled = currentStartIndex + reviewsPerView >= reviews.length;
}

function autoSlide() {
    if (currentStartIndex + reviewsPerView < reviews.length) {
        currentStartIndex += reviewsPerView;
    } else {
        currentStartIndex = 0;
    }
    updateCarousel();
}

function initCarousel() {
    updateCarousel();
    autoSlideInterval = setInterval(autoSlide, 5000);
}

function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
}

function restartAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 4000);
}

initCarousel();
document.querySelector('.right-arrow').addEventListener('click', () => {
    pauseAutoSlide();
    if (currentStartIndex + reviewsPerView < reviews.length) {
        currentStartIndex += reviewsPerView;
        updateCarousel();
    }
    restartAutoSlide();
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    pauseAutoSlide();
    if (currentStartIndex - reviewsPerView >= 0) {
        currentStartIndex -= reviewsPerView;
        updateCarousel();
    }
    restartAutoSlide();
});

