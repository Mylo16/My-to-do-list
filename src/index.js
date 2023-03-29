import './style.css';

const todoData = [
  {
    description: 'Doing house chores',
    completed: false,
    index: 2,
  },
  {
    description: 'Joining Microverse class',
    completed: false,
    index: 1,
  },
  {
    description: 'Taking a nap',
    completed: false,
    index: 0,
  },
];

todoData.forEach(() => {
  for (let i = 0; i < todoData.length - 1; i += 1) {
    if (todoData[i].index > todoData[i + 1].index) {
      const temp = todoData[i];
      todoData[i] = todoData[i + 1];
      todoData[i + 1] = temp;
    }
  }
});

const renderList = ((item) => (`
    <li id = "list-${item.index}" class="list">
      <div class="list-left">
        <form>
          <input type = 'checkbox' class = "checkbox"/>
        </form>
        <p>${item.description}</p>
      </div>
      <div class = "dots">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
      </div>
    </li>
  `));

todoData.forEach((item) => {
  const list = document.getElementById('to-do-lists');
  list.innerHTML += renderList(item);
});