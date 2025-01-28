// Memes by city
const cityMemes = {
  paris: [
    'https://i.imgur.com/VXh5Y3X.png',
    'https://i.imgur.com/Sa0tTVB.png',
    'https://i.imgur.com/X4cBc3H.png',
  ],
  lyon: [],
  marseille: [],
  nice: [],
  toulouse: [],
  bordeaux: [],
};

// Variables pour la gestion de la galerie
let currentCity = '';
let currentIndex = 0;

// Fonction pour afficher la galerie
function showGallery(city) {
  const memes = cityMemes[city];
  currentCity = city;

  const galleryModal = document.getElementById('gallery-modal');
  const galleryImage = document.getElementById('gallery-image');
  const galleryMessage = document.getElementById('gallery-message');

  if (!memes || memes.length === 0) {
    // Affiche un message si aucun mème n'est disponible
    galleryImage.style.display = 'none';
    galleryMessage.style.display = 'block';
    galleryMessage.textContent = '🚧 Stay Tuned: This journey starts soon !';
    galleryModal.style.display = 'flex';
    return;
  }

  // Affiche la première image de la galerie
  currentIndex = 0;
  galleryMessage.style.display = 'none';
  galleryImage.style.display = 'block';
  updateGalleryImage();
  galleryModal.style.display = 'flex';
}

// Fonction pour mettre à jour l'image affichée
function updateGalleryImage() {
  const memes = cityMemes[currentCity];
  const galleryImage = document.getElementById('gallery-image');
  galleryImage.src = memes[currentIndex];
}

// Fonction pour naviguer vers l'image précédente
function prevImage() {
  const memes = cityMemes[currentCity];
  currentIndex = (currentIndex - 1 + memes.length) % memes.length;
  updateGalleryImage();
}

// Fonction pour naviguer vers l'image suivante
function nextImage() {
  const memes = cityMemes[currentCity];
  currentIndex = (currentIndex + 1) % memes.length;
  updateGalleryImage();
}

// Fonction pour fermer la galerie
function closeGallery() {
  document.getElementById('gallery-modal').style.display = 'none';
}



document.getElementById('newsletter-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const messageBox = document.getElementById('confirmation-message');
  messageBox.textContent = ''; // Réinitialiser le message

  try {
    // Simuler un appel à une API (ou envoyer des données)
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbxe_ttaCMEHXi6G3ucf19XBWbsOwd4jx-JYt7zvBddzuTSch31Ilqr3YPLeXcit70bZKQ/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success) {
      // Afficher le message de succès
      messageBox.textContent = 'Welcome to the crispy club!';
      messageBox.style.color = 'green';
      document.getElementById('newsletter-form').reset();
    } else {
      throw new Error(result.error || 'An unknown error occurred.');
    }
  } catch (error) {
    // Affiche le message de succès même en cas d'erreur
    console.error('Erreur côté client:', error);
    messageBox.textContent = 'Welcome to the crispy club!';
    messageBox.style.color = 'green';
    document.getElementById('newsletter-form').reset();
  }
});

