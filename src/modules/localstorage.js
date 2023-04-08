import { addList } from "./addTodo";
import removeList from "./removeTodo";

class StorageInLocal {
  constructor() {
    this.numberOfLists = this.getLists().length + 1;
    this.storage = null;
  }

  getLists() {
    if (localStorage.getItem('todoLists') === null) {
      this.todoLists = [];
    } else {
      this.todoLists = JSON.parse(localStorage.getItem('todoLists'));
    }

    return this.todoLists;
  }

  addList(list, storeArray) {
    localStorage.setItem('todoLists', JSON.stringify(addList(list, storeArray)));
    this.numberOfLists += 1;
  }

  removeList(index, storeArray) {
    // this.storage = removeList(index, storeArray);
    localStorage.setItem('todoLists', JSON.stringify(removeList(index, storeArray)));
  }

  updateList(index, description) {
    const todoLists = this.getLists();
    todoLists[index - 1].description = description;
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
  }

  removeSelectedLists() {
    const todoLists = this.getLists();
    const filteredLists = todoLists.filter((list) => !list.completed);
    for (let p = 0; p < filteredLists.length; p += 1) {
      filteredLists[p].index = p + 1;
    }
    localStorage.setItem('todoLists', JSON.stringify(filteredLists));
  }
}

export default {
  StorageInLocal,
};