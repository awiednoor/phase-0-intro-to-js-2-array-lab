// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
  cats.push(name);
  return cats;
};

const destructivelyPrependCat = (name) => {
  cats.unshift(name);
  return cats;
};

const destructivelyRemoveLastCat = (name) => {
  cats.pop();
  return cats;
};
const destructivelyRemoveFirstCat = (name) => {
  cats.shift();
  return cats;
};

const appendCat = (name) => {
  let newarr = [...cats];
  newarr.push(name);
  return newarr;
};

const prependCat = (name) => {
  let newarr = [...cats];
  newarr.unshift(name);
  return newarr;
};

const removeLastCat = () => {
  let newarr = [...cats];
  newarr.pop();
  return newarr;
};

const removeFirstCat = () => {
  let newarr = [...cats];
  newarr.shift();
  return newarr;
};

console.log(appendCat("Broom"));
console.log(prependCat("Arnold"));
console.log(removeLastCat());
console.log(removeFirstCat());
