const startButton = document.getElementById('start-discovery');
const recipeSection = document.getElementById('recipes');

if (startButton && recipeSection) {
  startButton.addEventListener('click', function (event) {
    event.preventDefault();
    recipeSection.classList.remove('hidden');
    recipeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
