// Gallery functionality
const images = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
    'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf',
    'https://images.unsplash.com/photo-1558317374-067fb5f30001',
    'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50'
];

let currentImageIndex = 0;

function showImage(index) {
    currentImageIndex = index;
    const currentImage = document.getElementById('currentImage');
    if (currentImage) {
        currentImage.src = images[index];
    }
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Login functionality
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        alert('Jūs esat veiksmīgi pieslēdzies!');
        return false;
    }
    return false;
}
