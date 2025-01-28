// Memes by city
const cityMemes = {
  paris: [
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/LANDING.webp',
      description: 'Shibaguette Inu lands in Paris, greeted by the breathtaking view of the Eiffel Tower. A new journey begins!'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/AIRPORT.webp',
      description: 'At the airport, excitement fills the air as Shibaguette prepares to explore the City of Lights.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/subway.webp',
      description: 'Navigating the bustling Paris Metro, Shibaguette enjoys the pulse of the city underground.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/shopping.webp',
      description: 'A stop on the famous Rue de Rivoli, Shibaguette explores chic Parisian boutiques.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/AQUARIUM.webp',
      description: 'A magical visit to the Aquarium de Paris, where vibrant marine life adds wonder to the journey.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/COFFEE.webp',
      description: 'A pause at a cozy café, enjoying the quintessential Parisian espresso experience.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/LADEFENSE.webp',
      description: 'In La Défense, Shibaguette admires the sleek modernity of Paris, blending tradition with innovation.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/asterix.webp',
      description: 'A day of adventure at Parc Astérix, filled with thrilling rides and playful moments.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/disney.webp',
      description: 'Magic fills the air at Disneyland Paris, where dreams come to life under glowing lights.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/baguetteinthemouth.webp',
      description: 'Shibaguette proudly carries his favorite baguette through the streets of Paris.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/bench.webp',
      description: 'A quiet moment of reflection on a park bench, with the Eiffel Tower in the background.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/catacombe1.webp',
      description: 'Exploring the eerie Catacombs of Paris, Shibaguette faces the city’s hidden mysteries.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/champeelysee.webp',
      description: 'Walking down the iconic Champs-Élysées, Shibaguette feels the grandeur of Paris.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/croisiererealistic.webp',
      description: 'A serene cruise on the Seine, soaking in the romance of Paris at sunset.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/cuteundereiffeltower.webp',
      description: 'Under the Eiffel Tower, Shibaguette finds the beauty of Paris magnified by love and charm.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/dinercouchersol.webp',
      description: 'A candlelit dinner by the Seine, the perfect Parisian evening unfolds.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/fashionweek.webp',
      description: 'Exploring Paris during Fashion Week, Shibaguette celebrates the city’s chic vibe.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/library.webp',
      description: 'Shibaguette explores the grand library of Paris, immersing himself in the city’s rich history and stories.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/livreurbaguette.webp',
      description: 'Delivering baguettes across the city, Shibaguette adds a personal touch to every loaf.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/louvres.webp',
      description: 'A day at the Louvre, marveling at iconic art and the timeless beauty of Parisian culture.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/macaron.webp',
      description: 'Treating himself to colorful macarons, Shibaguette savors the sweet essence of Paris.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/manegeeiffeltower.webp',
      description: 'A joyful ride on the carousel near the Eiffel Tower, bringing childhood wonder to the forefront.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/moulinrouge.webp',
      description: 'An evening at the Moulin Rouge, dazzled by the bright lights and vibrant performances.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/1meeting1.webp',
      description: 'Their first meeting near the Eiffel Tower was nothing short of magical. Sparks flew as their eyes met under the Parisian lights.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/2dinerauchandelle.webp',
      description: 'A candlelit dinner by the Seine, where they shared laughter, stories, and their love for baguettes and croissants.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/13gondole.webp',
      description: 'On their honeymoon, they enjoyed a serene gondola ride on the Seine, the Eiffel Tower glowing in the moonlight.'
    },
    { 
      url: 'https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/14honeymoondepart.webp',
      description: 'Departing for their honeymoon adventure across France, their love story continues to inspire.'
    },
  ],
};

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

