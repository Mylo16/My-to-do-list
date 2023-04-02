import './style.css';
import localstorage from './localstorage.js';
import userInteraction from './userInteraction.js';
import { statusCheck, statusUncheck } from './status.js';

/* eslint max-classes-per-file: ["error", 3] */

class List {
  constructor(description, index) {
    this.description = description;
    this.index = index;
  }
}

const { UI } = userInteraction;
const { StorageInLocal } = localstorage;
const store = new StorageInLocal();
const storeArray = store.getLists();

storeArray.map(() => {
  for (let i = 0; i < storeArray.length - 1; i += 1) {
    if (storeArray[i].index > storeArray[i + 1].index) {
      const temp = storeArray[i];
      storeArray[i] = storeArray[i + 1];
      storeArray[i + 1] = temp;
    }
  }
  return null;
});

document.addEventListener('DOMContentLoaded', UI.displayAllLists);
document.querySelector('#addForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.querySelector('.add-list').value;
  const index = store.numberOfLists;
  const list = new List(description, index);
  UI.addList(list);
  store.addList(list);
  window.location.reload();
  UI.clearFields();
});

$('#to-do-lists').on('dblclick', 'li', function active() {
  $(this).parent().find('li.active').removeClass('active');
  $(this).addClass('active');
});

document.getElementById('to-do-lists').addEventListener('click', (e) => {
  if (e.target.classList.contains('del')) {
    const btnID = e.target.parentElement.id;
    const arrValues = btnID.split('-');
    const idString = arrValues[arrValues.length - 1];
    const id = parseInt(idString, 10);
    store.removeList(id);
    UI.deleteList(e.target);
    window.location.reload();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  Array.from(document.querySelectorAll('.list')).forEach((item) => {
    const btnID = item.id;
    const arrValues = btnID.split('-');
    const idString = arrValues[arrValues.length - 1];
    const index = parseInt(idString, 10);
    item.children[0].children[1].addEventListener('change', () => {
      const description = item.children[0].children[1].value;
      store.updateList(index, description);
      window.location.reload();
    });
    item.children[0].children[0].addEventListener('change', (e) => {
      if (item.children[0].children[0].checked) {
        const btnID = e.target.id;
        const arrValues = btnID.split('-');
        const idString = arrValues[arrValues.length - 1];
        const index = parseInt(idString, 10);
        statusCheck(index);
        window.location.reload();
        item.children[0].children[0].checked = storeArray[index - 1].completed;
      } else {
        const btnID = e.target.id;
        const arrValues = btnID.split('-');
        const idString = arrValues[arrValues.length - 1];
        const index = parseInt(idString, 10);
        statusUncheck(index);
        window.location.reload();
        item.children[0].children[0].checked = storeArray[index - 1].completed;
      }
    });
    item.children[0].children[0].checked = storeArray[index - 1].completed;
  });
});

document.querySelector('#clear').addEventListener('click', () => {
  store.removeSelectedLists();
  window.location.reload();
  UI.displayAllLists();
});