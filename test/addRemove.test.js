import { addList } from "../src/modules/addTodo";
import removeList from "../src/modules/removeTodo";

describe('addList function', () => {
  it('add new todo list', () => {
    const lists = [];
    const listInput = { description: 'Brush my teeth', index: 1, completed: false};
    const output = addList(listInput, lists);
    expect(output).toEqual([{description: 'Brush my teeth', index: 1, completed: false}]);
  });

  it('remove todo list', () => {
    const lists = [{description: 'Hello', index: 1, completed: false}];
    const output = removeList(1, lists);
    expect(output).toEqual([]);
  })
});