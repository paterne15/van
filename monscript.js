const button = document.getElementById('myButton');
const spinnerOverlay = document.querySelector('.spinner-overlay');

button.addEventListener('click', () => {
  // Ajoute la classe pour flouter l'arrière-plan
  document.body.classList.add('blur-background');
  
  // Affiche le spinner
  spinnerOverlay.style.display = 'block';

  // Simule un chargement asynchrone pendant 3 secondes (à remplacer par votre logique de chargement réelle)
  setTimeout(() => {
    // Enlève la classe de flou de l'arrière-plan
    document.body.classList.remove('blur-background');
    
    // Cache le spinner
    spinnerOverlay.style.display = 'none';

    // Redirige vers l'action du bouton (à remplacer par votre URL de redirection)
    window.location.href = 'nouvelle-page.html';
  }, 3000);
});
