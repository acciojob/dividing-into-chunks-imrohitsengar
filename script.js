const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	n=Number(n);
	let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        // If adding the next number exceeds the maximum sum 'n'
        // and we already have elements in our current chunk, we must close it.
        if (currentSubarray.length > 0 && currentSum + num > n) {
            result.push(currentSubarray); // Save the completed chunk
            currentSubarray = [];         // Reset for the next chunk
            currentSum = 0;
        }

        // Greedily add the current element to the active chunk
        currentSubarray.push(num);
        currentSum += num;
    }

    // Don't forget to push the very last chunk if it's not empty
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
