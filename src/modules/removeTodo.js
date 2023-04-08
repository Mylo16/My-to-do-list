function removeList(index, storeArray) {
  const filteredLists = storeArray.filter((list) => list.index !== index);
  for (let j = index; j < filteredLists.length + 1; j += 1) {
    filteredLists[j - 1].index = j;
  }
  return filteredLists;
}

export default removeList;