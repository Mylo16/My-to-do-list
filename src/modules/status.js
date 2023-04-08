import localstorage from './localstorage.js';

const { StorageInLocal } = localstorage;
const store = new StorageInLocal();
const storeArray = store.getLists();

function statusCheck(id) {
  const todoLists = storeArray;
  todoLists[id - 1].completed = true;
  localStorage.setItem('todoLists', JSON.stringify(todoLists));
}

function statusUncheck(id) {
  const todoLists = storeArray;
  todoLists[id - 1].completed = false;
  localStorage.setItem('todoLists', JSON.stringify(todoLists));
}

export {
  statusCheck,
  statusUncheck,
};