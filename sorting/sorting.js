const binary_search = (array, start, end, target) => {
  const mid = Math.floor((end+start)/2);
  if (array[mid] === target) {
    return true;
  } else if (array[mid] > target) {
    return binary_search(array, start, mid-1, target);
  } else if (array[mid] < target) {
    return binary_search(array, mid+1, end, target);
  } else {
    return false;
  }
  return false;
}

const merge_sort = (array) => {
  if (array.length === 1) {
    return array;
  }

  const mid = Math.floor(array.length/2);
  const leftSide = array.slice(0,mid);
  const rightSide = array.slice(mid);

  const merge = (leftArray, rightArray) => {
    let leftIndex = 0, rightIndex = 0;
    let leftArraySize = leftArray.length, rightArraySize = rightArray.length;
    const orderedArray = [];

    while (leftIndex < leftArraySize && rightIndex < rightArraySize) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        orderedArray.push(leftArray[leftIndex]);
        leftIndex++;
      } else {
        orderedArray.push(rightArray[rightIndex]);
        rightIndex++;
      }
    }

    return orderedArray.concat(leftArray.slice(leftIndex), rightArray.slice(rightIndex));
  }

  return merge(
    merge_sort(leftSide),
    merge_sort(rightSide)
  );
}
