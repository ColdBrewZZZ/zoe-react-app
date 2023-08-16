function findMax(arr) {
    let diffBetweenJandI;
    let rightMaxArray = new Array(arr.length);
    let leftMinArray = new Array(arr.length);

    leftMinArray[0] = arr[0];
    for (i = 1; i < arr.length; ++i)
        if (arr[i] < leftMinArray[i - 1]) {
            leftMinArray[i] = arr[i];
        } else {
            leftMinArray[i] = leftMinArray[i - 1];
        }

    rightMaxArray[arr.length - 1] = arr[arr.length - 1];
    for (j = arr.length - 2; j >= 0; --j)
        if (arr[j] > rightMaxArray[j + 1]) {
            rightMaxArray[j] = arr[j];
        } else {
            rightMaxArray[j] = rightMaxArray[j + 1];
        }

    i = 0;
    j = 0;
    diffBetweenJandI = -1;
    while (j < arr.length && i < arr.length) {
        if (leftMinArray[i] <= rightMaxArray[j]) {
            if (diffBetweenJandI > j - i) {
                diffBetweenJandI = diffBetweenJandI;
            } else {
                diffBetweenJandI = j - i;
            }
            j++;
        } else {
            i++;
        }
    }

    return diffBetweenJandI;
}

let arr1 = [34, 8, 10, 3, 2, 80, 30, 33, 1];
let arr2 = [9, 2, 3, 4, 5, 6, 7, 8, 18, 0];
let arr3 = [1, 2, 3, 4, 5, 6];
let arr4 = [6, 5, 4, 3, 2, 1];
let arr5 = [34, 8, 10, 3, 2, 80, 30, 33, 1];
let arr6 = [34, 8, 10, 3, 2, 80, 30, 33, 1];
let arr7 = [34, 8, 10, 3, 2, 80, 30, 33, 1];
let arrays = [arr1, arr2, arr3, arr4, arr5, arr6, arr7];

function test(arrays) {
    let arrayOfNums = [];
    for (const arr of arrays) {
        let newNum = findMax(arr);
        arrayOfNums.push(newNum);
    }
    console.log(arrayOfNums)
    
    const counts = {};
    let majorityNum = null;
    
    for (const num of arrayOfNums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > arrays.length / 2) {
            majorityNum = num;
            break;
        }
    }
    
    if (majorityNum !== null) {
        console.log(majorityNum);
    } else {
        console.log('there is no number that is the majority');
    }
    
    return majorityNum;
}

test(arrays);


 