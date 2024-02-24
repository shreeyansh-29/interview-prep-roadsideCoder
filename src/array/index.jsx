//polyfill of map()

let arr = [1, 2, 3, 4];

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const newArr1 = arr.myMap((num, i, arr) => {
  return num * i;
});

console.log(newArr1);

//polyfil for filter()
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const newArr2 = arr.myFilter((num, i, arr) => {
  return num > i;
});

console.log(newArr2);

//polyfil for reduce()
Array.prototype.myReduce = function (cb, initial) {
  let accumulator = initial;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const newArr3 = arr.myReduce((acc, num, i, arr) => {
  return num * i;
});

console.log(newArr3);

//polyfil for isArray();
Array.prototype.isMyArray = function (args) {
  return Object.prototype.toString.call(args) === "[object Array]";
};

const newArr4 = Array.prototype.isMyArray(arr);

console.log(newArr4);

//polyfill for push();
Array.prototype.myPush = function () {
  let length = this.length;
  for (let i = 0; i < arguments.length; i++) {
    let item = arguments[i];
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        this[length++] = item[j];
      }
    } else {
      this[length++] = item;
    }
  }
  this.length = length;
  return this.length;
};

let newArr6 = arr.myPush([5, 6, 7]);

console.log(newArr6);

//polyfill for pop();
Array.prototype.myPop = function () {
  let length = this.length;
  if (!length) return;

  let lastEle = this[length - 1];

  this.length = length - 1;

  return lastEle;
};

let newArr7 = arr.myPop();

console.log(newArr7);

//polyfil for forEach()
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      cb(this[i], i, this);
    }
  }
};

arr.myForEach((num, i, arr) => {
  console.log(`Element at ${i} index is ${num}`);
});

//polyfill for flat()
function flat(arr, depth = Number.POSITIVE_INFINITY) {
  let res = [];
  arr.forEach((e) => {
    if (depth > 0 && Array.isArray(e)) res.push(...flat(e, depth - 1));
    else res.push(e);
  });
  return res;
}

let arr1 = [1, 2, [3, 4], [5, [6, 7]], 8];

console.log(flat(arr1, 2));
