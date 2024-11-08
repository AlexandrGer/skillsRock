// 1. Проверка на палиндром

function isPalindrome(data) {
  data = String(data)
    .toLowerCase()
    .replace(/[^A-Za-zА-Яа-яЁё0-9]/g, "");
  return data === data.split("").reverse().join("")
    ? console.log(true)
    : console.log(false);
}

isPalindrome("А роза упала на лапу Азора");
isPalindrome("Привет");
isPalindrome(1234321);

// 2. FizzBuzz

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

fizzBuzz();

// 3. Разбиение массива на части

function chunkArray(array, size) {
  const newArray = [];
  for (let i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return console.log(newArray);
}

chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);
chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
