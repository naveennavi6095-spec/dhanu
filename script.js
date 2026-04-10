const recipes = [
  {
    id: 1,
    title: "Paneer Tikka Skewers",
    cuisine: "Indian",
    mealType: "Snacks",
    time: "35 min",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80",
    description: "Smoky paneer cubes marinated in yogurt, spices, and charred vegetables.",
    ingredients: ["Paneer", "Yogurt", "Bell peppers", "Onion", "Ginger-garlic paste", "Garam masala", "Lemon juice"],
    steps: [
      "Mix yogurt, ginger-garlic paste, garam masala, lemon juice, and salt into a thick marinade.",
      "Coat paneer, bell peppers, and onion in the marinade and chill for 15 minutes.",
      "Thread onto skewers and grill or bake until lightly charred.",
      "Serve hot with mint chutney and lemon wedges."
    ]
  },
  {
    id: 2,
    title: "Masala Dosa",
    cuisine: "Indian",
    mealType: "Breakfast",
    time: "40 min",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=1200&q=80",
    description: "Golden crisp dosa wrapped around a fragrant spiced potato filling.",
    ingredients: ["Dosa batter", "Potatoes", "Mustard seeds", "Curry leaves", "Onion", "Turmeric", "Green chili"],
    steps: [
      "Cook mustard seeds, curry leaves, onion, and chili until aromatic.",
      "Add turmeric and mashed potatoes, then stir until the filling is warm and fluffy.",
      "Spread dosa batter on a hot skillet and cook until crisp.",
      "Place the filling in the center, fold, and serve with chutney and sambar."
    ]
  },
  {
    id: 3,
    title: "Butter Chicken",
    cuisine: "Indian",
    mealType: "Dinner",
    time: "50 min",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80",
    description: "Rich tomato-butter gravy with tender chicken and warm spice notes.",
    ingredients: ["Chicken", "Tomato puree", "Butter", "Cream", "Ginger", "Garlic", "Kasuri methi"],
    steps: [
      "Sear marinated chicken pieces until lightly golden.",
      "Cook tomato puree with butter, ginger, garlic, and spices until thick.",
      "Stir in cream and crushed kasuri methi for a smooth sauce.",
      "Simmer the chicken in the gravy and serve with naan or rice."
    ]
  },
  {
    id: 4,
    title: "Veg Fried Rice",
    cuisine: "Chinese",
    mealType: "Lunch",
    time: "25 min",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80",
    description: "Wok-tossed rice with crunchy vegetables, soy, and a quick savory finish.",
    ingredients: ["Cooked rice", "Carrot", "Beans", "Spring onion", "Soy sauce", "Garlic", "Pepper"],
    steps: [
      "Heat oil in a wok and saute garlic until fragrant.",
      "Add chopped vegetables and stir-fry on high heat until crisp-tender.",
      "Toss in cooked rice, soy sauce, and pepper until evenly coated.",
      "Finish with spring onion greens and serve immediately."
    ]
  },
  {
    id: 5,
    title: "Hakka Noodles",
    cuisine: "Chinese",
    mealType: "Dinner",
    time: "30 min",
    image: "https://images.unsplash.com/photo-1617622141573-4a6d12f12d7c?auto=format&fit=crop&w=1200&q=80",
    description: "Slurpable noodles packed with stir-fried vegetables and bold sauces.",
    ingredients: ["Noodles", "Cabbage", "Carrot", "Capsicum", "Soy sauce", "Vinegar", "Chili sauce"],
    steps: [
      "Boil noodles until just tender, drain, and toss with a little oil.",
      "Stir-fry garlic and vegetables over high heat to keep them crisp.",
      "Add sauces and noodles, then toss until glossy and hot.",
      "Serve with extra chili sauce if you like more heat."
    ]
  },
  {
    id: 6,
    title: "Spring Rolls",
    cuisine: "Chinese",
    mealType: "Snacks",
    time: "40 min",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1200&q=80",
    description: "Crispy rolls filled with seasoned vegetables and a light crunch.",
    ingredients: ["Spring roll wrappers", "Cabbage", "Carrot", "Capsicum", "Soy sauce", "Garlic", "Cornflour slurry"],
    steps: [
      "Cook shredded vegetables quickly with garlic and soy sauce.",
      "Place filling on wrappers, fold tightly, and seal with cornflour slurry.",
      "Fry until crisp and golden on all sides.",
      "Serve with sweet chili or garlic sauce."
    ]
  },
  {
    id: 7,
    title: "Margherita Pizza",
    cuisine: "Italian",
    mealType: "Lunch",
    time: "30 min",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    description: "Classic pizza with tomato sauce, mozzarella, and basil leaves.",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil", "Olive oil", "Garlic"],
    steps: [
      "Stretch the dough into a round and spread tomato sauce evenly.",
      "Top with mozzarella slices and a drizzle of olive oil.",
      "Bake until the crust is puffed and golden.",
      "Finish with fresh basil before serving."
    ]
  },
  {
    id: 8,
    title: "Creamy Alfredo Pasta",
    cuisine: "Italian",
    mealType: "Dinner",
    time: "25 min",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=1200&q=80",
    description: "Velvety pasta coated in parmesan cream sauce with garlic and herbs.",
    ingredients: ["Fettuccine", "Butter", "Garlic", "Cream", "Parmesan", "Black pepper", "Parsley"],
    steps: [
      "Cook pasta until al dente and reserve a little pasta water.",
      "Melt butter, saute garlic, and stir in cream until gently simmering.",
      "Add parmesan and black pepper, then whisk into a smooth sauce.",
      "Toss in pasta, loosen with pasta water if needed, and garnish with parsley."
    ]
  },
  {
    id: 9,
    title: "Tiramisu Cups",
    cuisine: "Italian",
    mealType: "Desserts",
    time: "20 min",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=80",
    description: "Layered coffee-soaked biscuits, mascarpone cream, and cocoa dusting.",
    ingredients: ["Ladyfingers", "Coffee", "Mascarpone", "Cream", "Sugar", "Cocoa powder", "Vanilla"],
    steps: [
      "Whip cream with sugar and fold into mascarpone with vanilla.",
      "Dip ladyfingers briefly in coffee and layer into serving cups.",
      "Spread mascarpone cream over each layer and repeat.",
      "Chill well, then dust generously with cocoa powder."
    ]
  },
  {
    id: 10,
    title: "Veg Quesadillas",
    cuisine: "Mexican",
    mealType: "Snacks",
    time: "20 min",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=1200&q=80",
    description: "Cheesy toasted tortillas stuffed with peppers, beans, and corn.",
    ingredients: ["Tortillas", "Cheese", "Bell peppers", "Corn", "Black beans", "Onion", "Salsa"],
    steps: [
      "Spread salsa over one tortilla and top with vegetables and cheese.",
      "Cover with another tortilla and toast on a skillet until golden.",
      "Flip carefully and cook the other side until the cheese melts.",
      "Slice into wedges and serve with sour cream or extra salsa."
    ]
  },
  {
    id: 11,
    title: "Bean Burrito Bowl",
    cuisine: "Mexican",
    mealType: "Lunch",
    time: "25 min",
    image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=1200&q=80",
    description: "A bright bowl of rice, beans, salsa, corn, avocado, and lime.",
    ingredients: ["Rice", "Black beans", "Corn", "Tomato", "Avocado", "Lettuce", "Lime"],
    steps: [
      "Warm cooked rice and season black beans with cumin and salt.",
      "Arrange rice, beans, corn, lettuce, and diced tomato in bowls.",
      "Top with avocado slices and a squeeze of lime.",
      "Serve with salsa and optional yogurt or sour cream."
    ]
  },
  {
    id: 12,
    title: "Churros with Chocolate",
    cuisine: "Mexican",
    mealType: "Desserts",
    time: "35 min",
    image: "https://images.unsplash.com/photo-1625943555419-56a2cb596640?auto=format&fit=crop&w=1200&q=80",
    description: "Crisp cinnamon-sugar churros served with warm chocolate sauce.",
    ingredients: ["Flour", "Butter", "Sugar", "Cinnamon", "Chocolate", "Milk", "Vanilla"],
    steps: [
      "Cook water, butter, and a little sugar, then stir in flour to form a dough.",
      "Pipe strips into hot oil and fry until golden and crisp.",
      "Roll warm churros in cinnamon sugar.",
      "Serve with melted chocolate sauce on the side."
    ]
  },
  {
    id: 13,
    title: "Poha with Peanuts",
    cuisine: "Indian",
    mealType: "Breakfast",
    time: "20 min",
    image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5d?auto=format&fit=crop&w=1200&q=80",
    description: "Light flattened rice tossed with turmeric, onion, peas, and peanuts.",
    ingredients: ["Poha", "Peanuts", "Onion", "Green peas", "Turmeric", "Mustard seeds", "Lemon"],
    steps: [
      "Rinse poha briefly and let it soften without becoming mushy.",
      "Cook mustard seeds, peanuts, onion, and peas in a pan.",
      "Add turmeric and poha, then toss gently until heated through.",
      "Finish with lemon juice and fresh coriander."
    ]
  },
  {
    id: 14,
    title: "Tomato Basil Bruschetta",
    cuisine: "Italian",
    mealType: "Snacks",
    time: "15 min",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=1200&q=80",
    description: "Toasted bread topped with juicy tomatoes, basil, and olive oil.",
    ingredients: ["Baguette", "Tomato", "Basil", "Olive oil", "Garlic", "Black pepper", "Sea salt"],
    steps: [
      "Toast sliced baguette until crisp and rub lightly with garlic.",
      "Mix diced tomatoes with basil, olive oil, salt, and pepper.",
      "Spoon the tomato mixture over the toast.",
      "Serve immediately while the bread stays crisp."
    ]
  },
  {
    id: 15,
    title: "Mexican Breakfast Tacos",
    cuisine: "Mexican",
    mealType: "Breakfast",
    time: "20 min",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=1200&q=80",
    description: "Warm tacos filled with scrambled eggs, beans, salsa, and herbs.",
    ingredients: ["Taco shells", "Eggs", "Black beans", "Tomato salsa", "Onion", "Cilantro", "Cheese"],
    steps: [
      "Scramble eggs softly with a little salt and pepper.",
      "Warm taco shells and fill with beans and scrambled eggs.",
      "Top with salsa, onion, cilantro, and cheese.",
      "Serve hot with lime wedges."
    ]
  },
  {
    id: 16,
    title: "Chili Garlic Tofu",
    cuisine: "Chinese",
    mealType: "Dinner",
    time: "30 min",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    description: "Pan-seared tofu tossed in a sticky chili garlic glaze.",
    ingredients: ["Tofu", "Garlic", "Soy sauce", "Chili paste", "Spring onion", "Cornflour", "Sesame"],
    steps: [
      "Coat tofu cubes lightly in cornflour and pan-sear until crisp.",
      "Cook garlic with chili paste, soy sauce, and a splash of water.",
      "Add tofu back to the pan and toss until glossy.",
      "Top with spring onion and sesame before serving."
    ]
  },
  {
    id: 17,
    title: "Mango Shrikhand",
    cuisine: "Indian",
    mealType: "Desserts",
    time: "15 min",
    image: "https://images.unsplash.com/photo-1628294896516-63a6f916c7bc?auto=format&fit=crop&w=1200&q=80",
    description: "Chilled saffron yogurt dessert blended with mango puree and cardamom.",
    ingredients: ["Hung curd", "Mango puree", "Sugar", "Cardamom", "Saffron", "Pistachios"],
    steps: [
      "Whisk hung curd until smooth and creamy.",
      "Blend in mango puree, sugar, cardamom, and soaked saffron.",
      "Chill until cold and thick.",
      "Garnish with chopped pistachios before serving."
    ]
  },
  {
    id: 18,
    title: "Pesto Veggie Sandwich",
    cuisine: "Italian",
    mealType: "Lunch",
    time: "15 min",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80",
    description: "Fresh sandwich layered with pesto, roasted vegetables, and mozzarella.",
    ingredients: ["Bread", "Pesto", "Zucchini", "Bell peppers", "Tomato", "Mozzarella", "Olive oil"],
    steps: [
      "Grill or roast sliced vegetables with olive oil until tender.",
      "Spread pesto over toasted bread.",
      "Layer vegetables, tomato, and mozzarella between the slices.",
      "Press lightly, slice, and serve warm or cold."
    ]
  }
];

const body = document.body;
const pageLoader = document.getElementById("pageLoader");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");
const themeText = document.querySelector(".theme-toggle-text");
const searchInput = document.getElementById("searchInput");
const cuisineFilter = document.getElementById("cuisineFilter");
const mealFilter = document.getElementById("mealFilter");
const resetFiltersButton = document.getElementById("resetFilters");
const recipeGrid = document.getElementById("recipeGrid");
const noResults = document.getElementById("noResults");
const resultsCount = document.getElementById("resultsCount");
const resultsLoader = document.getElementById("resultsLoader");
const recipeModal = document.getElementById("recipeModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalMeta = document.getElementById("modalMeta");
const modalTitle = document.getElementById("modalTitle");
const modalIngredients = document.getElementById("modalIngredients");
const modalSteps = document.getElementById("modalSteps");

let filterTimer = null;

function createRecipeCard(recipe, index) {
  const ingredientPreview = recipe.ingredients.slice(0, 3).join(", ");

  return `
    <article class="recipe-card" style="animation-delay: ${index * 70}ms">
      <img class="recipe-card-image" src="${recipe.image}" alt="${recipe.title}">
      <div class="recipe-card-body">
        <div class="recipe-card-header">
          <div>
            <span class="recipe-badge">${recipe.cuisine}</span>
            <h3>${recipe.title}</h3>
          </div>
        </div>
        <div class="recipe-meta">
          <span>${recipe.mealType}</span>
          <span>${recipe.time}</span>
        </div>
        <p class="recipe-description">${recipe.description}</p>
        <div class="recipe-footer">
          <span class="recipe-ingredients">Key ingredients: ${ingredientPreview}</span>
          <button class="button recipe-view" type="button" data-recipe-id="${recipe.id}">View Recipe</button>
        </div>
      </div>
    </article>
  `;
}

function updateResultsSummary(resultSet) {
  const count = resultSet.length;
  resultsCount.textContent = `${count} recipe${count === 1 ? "" : "s"} found`;
}

function renderRecipes(resultSet) {
  updateResultsSummary(resultSet);

  if (!resultSet.length) {
    recipeGrid.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");
  recipeGrid.innerHTML = resultSet.map(createRecipeCard).join("");
}

function matchesFilters(recipe, searchValue, cuisineValue, mealValue) {
  const normalizedSearch = searchValue.trim().toLowerCase();
  const inSearch =
    !normalizedSearch ||
    recipe.title.toLowerCase().includes(normalizedSearch) ||
    recipe.description.toLowerCase().includes(normalizedSearch) ||
    recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(normalizedSearch));

  const inCuisine = cuisineValue === "All" || recipe.cuisine === cuisineValue;
  const inMeal = mealValue === "All" || recipe.mealType === mealValue;

  return inSearch && inCuisine && inMeal;
}

function applyFilters() {
  resultsLoader.classList.add("visible");

  window.clearTimeout(filterTimer);
  filterTimer = window.setTimeout(() => {
    const filteredRecipes = recipes.filter((recipe) =>
      matchesFilters(recipe, searchInput.value, cuisineFilter.value, mealFilter.value)
    );

    renderRecipes(filteredRecipes);
    resultsLoader.classList.remove("visible");
  }, 180);
}

function fillList(element, items, tagName) {
  element.innerHTML = items.map((item) => `<${tagName}>${item}</${tagName}>`).join("");
}

function openRecipeModal(recipeId) {
  const recipe = recipes.find((item) => item.id === Number(recipeId));

  if (!recipe) {
    return;
  }

  modalImage.src = recipe.image;
  modalImage.alt = recipe.title;
  modalMeta.textContent = `${recipe.cuisine} | ${recipe.mealType} | ${recipe.time}`;
  modalTitle.textContent = recipe.title;
  fillList(modalIngredients, recipe.ingredients, "li");
  fillList(modalSteps, recipe.steps, "li");

  recipeModal.classList.remove("hidden");
  recipeModal.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");
}

function closeRecipeModal() {
  recipeModal.classList.add("hidden");
  recipeModal.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");
}

function syncThemeLabel(theme) {
  themeText.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  body.classList.toggle("dark-mode", isDark);
  syncThemeLabel(theme);
  localStorage.setItem("cloud-cook-theme", theme);
}

function initTheme() {
  const savedTheme = localStorage.getItem("cloud-cook-theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(savedTheme || preferredTheme);
}

function revealOnScroll() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function closeNavMenu() {
  navMenu.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

function initEvents() {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavMenu);
  });

  themeToggle.addEventListener("click", () => {
    const nextTheme = body.classList.contains("dark-mode") ? "light" : "dark";
    applyTheme(nextTheme);
  });

  searchInput.addEventListener("input", applyFilters);
  cuisineFilter.addEventListener("change", applyFilters);
  mealFilter.addEventListener("change", applyFilters);

  resetFiltersButton.addEventListener("click", () => {
    searchInput.value = "";
    cuisineFilter.value = "All";
    mealFilter.value = "All";
    applyFilters();
  });

  recipeGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-recipe-id]");
    if (trigger) {
      openRecipeModal(trigger.dataset.recipeId);
    }
  });

  modalClose.addEventListener("click", closeRecipeModal);
  modalBackdrop.addEventListener("click", closeRecipeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !recipeModal.classList.contains("hidden")) {
      closeRecipeModal();
    }
  });
}

window.addEventListener("load", () => {
  pageLoader.classList.add("hidden-loader");
});

initTheme();
renderRecipes(recipes);
revealOnScroll();
initEvents();
