// EXO 1 :
function minMax(arr) {
  let max = arr[0];
  let min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] < min) min = arr[j];
  }
  return [min, max];
}
console.log(minMax(arr));

// EXO 2 :
function isSameNum(num1, num2) {
  if (num1 === num2) return true;
  return false;
}

// EXO 3 :
function filterArray(arr) {
  return arr.filter((Elem) => typeof Elem === "number");
}
console.log(filterArray[(1, 2, "a", "b")]);

// EXO 4 :
function getAbsSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) arr[i] = arr[i] * -1;
    sum += arr[i];
  }

  return sum;
}
// EXO 5 :
function countTrue(arr) {
  let count = 0;
  if (arr.length == 0) return 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count += 1;
    }
  }
  return count;

  /* ES6 : arr.filter((Elem) => Elem === true);
return arr.length; */
}

// EXO 6 :

function inkLevels(inks) {
  let h = Object.values(inks);
  let min = h[0];
  for (var i = 0; i < h.length; i++) {
    if (h[i] < min) min = h[i];
  }
  return min;
}

// EXO 7 :
function objectToArray(obj) {
  let arr4 = Object.keys(obj);
  let arr5 = Object.values(obj);
  let arr6 = [];
  for (let i = 0; i < arr4.length; i++) arr6.push([arr4[i], arr5[i]]);
  return arr6;
}

// EXO 8 :
function getBudgets(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].budget;
  }
  return sum;
}
// EXO 9 :
function afterNYears(names, n) {
  let arr9 = Object.keys(names);
  if (n < 0) n = n * -1;
  for (let j = 0; j < arr9.length; j++) {
    names[arr9[j]] += n;
  }
  return {
    names,
  };
}
// EXO 10 :
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};
function greeting(name) {
  if (GUEST_LIST[name] != undefined)
    return `Hi! I'm ${name},and I'm from ${GUEST_LIST[name]}.`;
  return "Hi! I'm a guest.";
}
//
