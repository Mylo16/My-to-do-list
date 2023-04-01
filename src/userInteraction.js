import localstorage from './localstorage.js';

const { StorageInLocal } = localstorage;
const store = new StorageInLocal();

const renderList = ((item) => (`
    <li id = "list-${item.index}" class="list">
        <form id="update-form" class="list-left">
          <input type = 'checkbox' id = 'checkbox'/>
          <input type = 'text' class= 'description' readonly="true" ondblclick="this.readOnly='';" id = "description-${item.index}" value = "${item.description}"/>
        </form>
        <svg id = 'dots' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical dots" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
        <svg id = 'delete' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash3 del" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
        </svg>
    </li>
  `));

class UI {
  static displayAllLists() {
    const todoLists = store.getLists();
    todoLists.forEach((list) => UI.addList(list));
  }

  static addList(list) {
    const theList = document.getElementById('to-do-lists');
    theList.innerHTML += renderList(list);
  }

  static deleteList(element) {
    if (element) {
      element.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('.add-list').value = '';
  }

//   static showUpdatedList(index, description) {
//     document.querySelector('#description').value
//   }
}

export default {
  UI,
};