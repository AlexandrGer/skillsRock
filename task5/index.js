// 1. Функция debounce

function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debouncedFunction = debounce(() => {
  console.log("Вызвана функция с задержкой");
}, 2000);
debouncedFunction();
debouncedFunction();

// 2. Глубокое клонирование объекта

function deepClone(obj) {
  if (typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  const newObject = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObject[key] = deepClone(obj[key]);
    }
  }

  return newObject;
}

const original = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};
const copy = deepClone(original);
copy.address.city = "Los Angeles";
console.log(original.address.city);
console.log(copy.address.city);
