const createArray = () => {
  return new Promise((resolve, reject) => {
    const array = [];
    for (let index = 0; index <= 10; index += 1) {
      array.push(parseInt((Math.random() * 50) ** 2));
    }
    const soma = array.reduce((accumulate, current) => accumulate + current);
    if (soma < 8000) {
      return resolve({ text: 'Promise Resolvida', soma });
    }
    return reject({ text: 'Promise rejeitada', soma });
  })
}

const dividePaNoix = (soma) => {
  const arrayDividida = [];
  arrayDividida.push(parseInt(soma / 2));
  arrayDividida.push(parseInt(soma / 3));
  arrayDividida.push(parseInt(soma / 5));
  arrayDividida.push(parseInt(soma / 10));
  return arrayDividida;
}

const arrumandoPromessa = (cria) => {
  cria()
    .then(({ _, soma }) => console.log(dividePaNoix(soma)))
    .catch(() => console.log('É mais de oito Mil!'));
  // .then(({ text, soma }) => console.log(`${text} : ${soma} < 8000`))
  // .catch(({ text, soma }) => console.log(`${text} : ${soma} > 8000`))
}

arrumandoPromessa(createArray);