window.onload = function () {
  const estadosBR = {
    AC: "Acre",
    AL: "Alagoas",
    AP: "Amapá",
    AM: "Amazonas",
    BA: "Bahia",
    CE: "Ceará",
    DF: "Distrito Federal",
    ES: "Espírito Santo",
    GO: "Goías",
    MA: "Maranhão",
    MT: "Mato Grosso",
    MS: "Mato Grosso do Sul",
    MG: "Minas Gerais",
    PA: "Pará",
    PB: "Paraíba",
    PR: "Paraná",
    PE: "Pernambuco",
    PI: "Piauí",
    RJ: "Rio de Janeiro",
    RN: "Rio Grande do Norte",
    RS: "Rio Grande do Sul",
    RO: "Rondônia",
    RR: "Roraíma",
    SC: "Santa Catarina",
    SP: "São Paulo",
    SE: "Sergipe",
    TO: "Tocantins",
  };
  const state = document.getElementById("states");
  for (let index in estadosBR) {
    let opt = document.createElement("option");
    opt.value = index;
    opt.style.backgroundColor = "black";
    opt.style.color = "white";
    opt.innerText = estadosBR[index];
    state.appendChild(opt);
  }
  function verificaData() {
    let startDates = document.getElementById("startDate");
  }
  verificaData();
};
