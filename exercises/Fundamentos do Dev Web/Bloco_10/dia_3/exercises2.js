const fetch = require('node-fetch');

const randomNumber = () => Math.floor(Math.random() * 100);

const caixaAlta = (str) => str.toUpperCase();

const firstLetter = (string) => string[0];

const concatt = (a, b) => `${a} ${b}`;

const randomDog = () => {
  const url = 'https://dog.ceo/api/breeds/image/random';
  fetch(url)
  .then((resolve) => resolve.json())
  .then((respost) => respost.status);
};

module.exports = { randomNumber, caixaAlta, firstLetter, concatt, randomDog }