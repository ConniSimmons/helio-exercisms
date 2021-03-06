export function hello(array) {
  let n = array.length;
  while (n > 0) {
    let lastModifiedIndex = 0;
    for (let currentIndex = 1; currentIndex < n; currentIndex++) {
      // if the item at the previous index is greater than the item at the `currentIndex`, swap them
      if (array[currentIndex - 1] > array[currentIndex]) {
        // swap
        let temp = array[currentIndex - 1];
        array[currentIndex - 1] = array[currentIndex];
        array[currentIndex] = temp; // save the index that was modified
        lastModifiedIndex = currentIndex;
      }
    } // save the last modified index so we know not to iterate past it since all proceeding values are sorted
    n = lastModifiedIndex;
  }
}
