document.addEventListener('DOMContentLoaded', () => {
  const newCarForm = document.querySelector('#new-car-form');
  newCarForm.addEventListener('submit', handleNewCarForm);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleNewCarForm = function (event) {
  event.preventDefault();

  const carItem = createCarItem(event.target);
  const carList = document.querySelector('#car-list');
  carList.appendChild(carItem);

  event.target.reset();
};

const createCarItem = function (form) {
  const carItem = document.createElement('div');
  carItem.classList.add('car-list-item');

  const make = document.createElement('h2');
  make.textContent = form.make.value;
  carItem.appendChild(make);

  const model = document.createElement('h2');
  model.textContent = form.model.value;
  carItem.appendChild(model);

  const type = document.createElement('h3');
  type.textContent = form.type.value;
  carItem.appendChild(type);

  const fuel = document.createElement('h3');
  fuel.textContent = form.fuel.value;
  carItem.appendChild(fuel);

  const gear = document.createElement('h3');
  gear.textContent = form.gear.value;
  carItem.appendChild(gear);

  const colour = document.createElement('h3');
  colour.textContent = form.colour.value;
  carItem.appendChild(colour);


  return carItem;
};

const handleDeleteAllClick = function (event) {
  const viewCarList = document.querySelector('#car-list');
  viewCarList.innerHTML = '';
};
