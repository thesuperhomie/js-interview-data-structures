// [[1,1],2,[1,1]]

const flattenWithMap = arr => {
  return Array.isArray(arr) ? [].concat(...arr).map(flatten) : arr;
};

let flattenWithReduce = arr =>
  arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(...item);
    }
    return item ? [...acc, item] : acc;
  }, []);
