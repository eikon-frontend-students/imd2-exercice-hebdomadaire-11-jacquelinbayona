const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");

let count = Number(likeCount.textContent);

likeButton.addEventListener("click", () => {
  // +1 like à chaque clic
  count++;
  likeCount.textContent = count;

  // changement de couleur
  likeButton.classList.add("active");

  // retour à l’état normal après 2 secondes
  setTimeout(() => {
    likeButton.classList.remove("active");
  }, 2000);
});
