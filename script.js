// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Afficher le spinner
    document.getElementById("spinner").style.display = "flex";
  
    // Simuler un délai de chargement (vous pouvez le remplacer par votre logique de chargement réelle)
    setTimeout(function () {
      // Cacher le spinner
      document.getElementById("spinner").style.display = "none";
  
      // Afficher le formulaire
      document.getElementById("form-container").style.display = "block";
    }, 2000); // Le délai est en millisecondes (2 secondes dans cet exemple)
  });
  