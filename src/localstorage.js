class StorageInLocal {
  constructor() {
    this.numberOfLists = this.getLists().length + 1;
  }

  getLists() {
    if (localStorage.getItem('todoLists') === null) {
      this.todoLists = [];
    } else {
      this.todoLists = JSON.parse(localStorage.getItem('todoLists'));
    }

    return this.todoLists;
  }

  addList(list) {
    const newList = {
      index: this.numberOfLists, description: list.description, completed: false,
    };
    const todoLists = this.getLists();
    todoLists.push(newList);
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
    this.numberOfLists += 1;
  }

  removeList(index) {
    const todoLists = this.getLists();
    const filteredLists = todoLists.filter((list) => list.index !== index);
    for (let j = index; j < filteredLists.length + 1; j += 1) {
      filteredLists[j - 1].index = j;
    }
    localStorage.setItem('todoLists', JSON.stringify(filteredLists));
  }

  updateList(index, description) {
    const todoLists = this.getLists();
    todoLists[index - 1].description = description;
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
  }
}

export default {
  StorageInLocal,
};