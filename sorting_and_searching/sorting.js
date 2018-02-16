const merge_sort = array => {
  if (array.length === 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const leftSide = array.slice(0, mid);
  const rightSide = array.slice(mid);

  const merge = (leftArray, rightArray) => {
    let leftIndex = 0,
      rightIndex = 0;
    let leftArraySize = leftArray.length,
      rightArraySize = rightArray.length;
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

    return orderedArray.concat(
      leftArray.slice(leftIndex),
      rightArray.slice(rightIndex)
    );
  };

  return merge(merge_sort(leftSide), merge_sort(rightSide));
};

const quick_sort = array => {
  const left = 0,
    right = array.length - 1;

  if (!array) {
    return;
  }

  if (array.length === 1) {
    return array;
  }

  const sort = function(array, left, right) {
    if (left < right) {
      const pivot = right;

      const partition = (array, left, right, pivot) => {
        let partitionIndex = left;
        const pivotValue = array[pivot];
        for (let i = left; i < right; i++) {
          if (array[i] < pivotValue) {
            let temp = array[i];
            array[i] = array[partitionIndex];
            array[partitionIndex] = temp;
            partitionIndex++;
          }
        }
        let temp = array[right];
        array[right] = array[partitionIndex];
        array[partitionIndex] = temp;
        return partitionIndex;
      };

      const partitionIndex = partition(array, left, right, pivot);

      sort(array, left, partitionIndex - 1);
      sort(array, partitionIndex + 1, right);
    }

    return array;
  };

  return sort(array, left, right);
};
