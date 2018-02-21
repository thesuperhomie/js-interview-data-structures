const binary_search = (array, target) => {
  if (!array || !target) {
    return;
  }
  const start = 0,
    end = array.length - 1;

  const search = (array, start, end, target) => {
    const mid = Math.floor((end + start) / 2);
    if (array[mid] === target) {
      return true;
    } else if (array[mid] > target) {
      return binary_search(array, start, mid - 1, target);
    } else if (array[mid] < target) {
      return binary_search(array, mid + 1, end, target);
    } else {
      return false;
    }
    return false;
  };

  return search(array, start, end, target);
};
