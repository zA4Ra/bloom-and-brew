
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category;

    // Update the active button
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    // Show or hide menu cards
    menuCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (
        selectedCategory === "all" ||
        selectedCategory === cardCategory
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
