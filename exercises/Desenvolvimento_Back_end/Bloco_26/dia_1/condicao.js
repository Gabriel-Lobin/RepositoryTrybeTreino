const imcCondicao = (imc) => {
    if (imc < 18.5) {
        return "Abaixo do peso (magreza)";
    } if (imc > 18.5 && imc < 24.9) {
        return "Peso normal";
    } if (imc > 25 && imc < 29.9) {
        return "Acima do peso (sobrepeso)";
    } if (imc > 30 && imc < 34.9) {
        return "Obesidade grau I";
    } if (imc > 35 && imc < 39.9) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III e IV";
    }    
};

module.exports = imcCondicao;
