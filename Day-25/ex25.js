//Phương thức filter2()
Array.prototype.filter2 = function (callback, thisArg) {
    const length = this.length;
    const result = [];

    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }
    return result;
};

// const arr = [1, 2, 3, 4, 5];
// const resultFilter2 = arr.filter2((value) => {
//     return value % 2 !== 0;
// });

// console.log(result); // [1, 3, 5]


// // Phương thức map2()
Array.prototype.map2 = function (callback, thisArg) {
    const length = this.length;
    const result = new Array(length);

    for (let i = 0; i < length; i++) {
        if (i in this) {
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }
    return result;
};

// const arr1 = [1, 2, 3, 4, 5];
// const result1 = arr1.map2((value) => value * 2);

// console.log(result1); // [2, 4, 6, 8, 10]
// console.log(result1.length); // 5

// // Sample 2
// const arr2 = [1, , , , 5]; // Có phần tử trống
// const result2 = arr2.map2((value) => value * 2);

// console.log(result2); // [2, empty, empty, empty, 10]
// console.log(result2.length);



//Phương thức reduce2()

Array.prototype.reduce2 = function (callback, initialValue) {

if (initialValue === undefined) {
        
        if (this.length) initialValue = this[0];
        else throw new Error("Error: Reduce of empty array with no initial value");
    }

    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        initialValue = callback.call(this, initialValue, this[i], i, this);
    }

return initialValue;
};

const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.reduce2((accumulator, value) => accumulator + value, 0);
console.log(result1); // 15

const arr3 = [];
const result3 = arr3.reduce2((accumulator, value) => accumulator + value, 0);
console.log(result3); // 0

const arr2 = [];
const result2 = arr2.reduce2((accumulator, value) => accumulator + value);
console.log(result2); // Error: Reduce of empty array with no initial value