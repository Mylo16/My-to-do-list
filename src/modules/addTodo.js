function addList(list, storeArray) {
  const newList = {
    index: list.index, description: list.description, completed: false,
  };
  storeArray.push(newList);
  return storeArray;
}
export default {
  addList,
};