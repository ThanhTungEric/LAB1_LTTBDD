// const array1 = [1, 2, 3, 4, 5, 6];

// Array.prototype.forEach1 = function (fc) {
//   for (let index = 0; index < this.length; index++) {
//     fc(this[index]);
//   }
// };
// var fc = (num) => {
//   console.log(num);

//   array1.forEach1(fc);
// };

//map1: return new array base return new element in callback function

//every1

//find1

//some1
// Phương thức forEach
const array1 = [1, 2, 3, 4, 5, 6];
Array.prototype.forEach1 = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
};

array1.forEach1((num) => {
    console.log(num);
  });

// Phương thức map
//const array1 = [1, 2, 3, 4, 5, 6];
Array.prototype.map1 = function (callback) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }
  return result;
};

const doubledArray = array1.map1((num) => {
    return num * 2;
  });
  console.log(doubledArray); // [2, 4, 6, 8, 10, 12]

// Phương thức every
//const array1 = [1, 2, 3, 4, 5, 6];
Array.prototype.every1 = function (callback) {
  for (let index = 0; index < this.length; index++) {
    if (!callback(this[index], index, this)) {
      return false;
    }
  }
  return true;
};

const isEven = array1.every1((num) => {
    return num % 2 === 0;
  });
  console.log(isEven); // false

// Phương thức find
//const array1 = [1, 2, 3, 4, 5, 6];
Array.prototype.find1 = function (callback) {
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      return this[index];
    }
  }
  return undefined;
};

const firstEvenNumber = array1.find1((num) => {
    return num % 2 === 0;
  });
  console.log(firstEvenNumber); // 2

// Phương thức some
//const array1 = [1, 2, 3, 4, 5, 6];
Array.prototype.some1 = function (callback) {
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      return true;
    }
  }
  return false;
};

const hasEvenNumber = array1.some1((num) => {
  return num % 2 === 0;
});
console.log(hasEvenNumber); // true