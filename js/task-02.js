const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const createIngredientsEl = document.querySelector('#ingredients');

const createIngredientsItem = ingredient => {
  const ingredientsItem = document.createElement('li');
  
  ingredientsItem.textContent = ingredient;
  
  return ingredientsItem;
};

const ingredientsEl = ingredients
  
  .map(createIngredientsItem);

// console.log(ingredientsEl)

createIngredientsEl.append(...ingredientsEl);
