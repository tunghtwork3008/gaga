let currentImage = 'a';

function switchImage() {
  const imageElement = document.getElementById('image');
  if (currentImage === 'a') {
    imageElement.src = 'image_b.jpg';
    currentImage = 'b';
  } else {
    imageElement.src = 'image_a.jpg';
    currentImage = 'a';
  }
}
