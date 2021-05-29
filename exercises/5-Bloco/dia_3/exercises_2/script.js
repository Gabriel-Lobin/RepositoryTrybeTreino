function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // função cria cada dia do calendário e adiciona-os como filho da tag ul com id days
  
function MontaDia() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let dias = document.getElementById('days');
    
    for (let index = 0; index < dezDaysList.length; index += 1){
      let dia = dezDaysList[index];
      let criaLi = document.createElement('li');
      criaLi.className = 'day';
      criaLi.innerHTML = dia;  
      dias.appendChild(criaLi);
      if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
        criaLi.className += ' holiday'
      } if (dezDaysList[index] === 25 ) {
        criaLi.className += ' holiday friday';
      } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
        criaLi.className += ' friday';
      }
    }
  }

  MontaDia();

  const Feri = 'Feriados';

function holidayUwU(feriado) {
  let divBtn = document.querySelector('.buttons-container');
  let btn = document.createElement('button');
  divBtn.appendChild(btn)
  btn.innerText = feriado;
  btn.className = 'btn-holiday';
}

  holidayUwU(Feri);

  document.querySelector('.btn-holiday').addEventListener('click', clickFeriado);
  
  
function clickFeriado(){
  let holiday = document.querySelectorAll('.holiday');  
  for (let index = 0; index < holiday.length; index += 1 ) {
    if (holiday[index].style.backgroundColor !== 'green'){
    document.querySelectorAll('.holiday')[index].style.backgroundColor = 'green';
    document.querySelectorAll('.holiday')[index].style.color = 'Black';
    document.querySelectorAll('.holiday')[index].style.borderRadius = '15px';
    } else {
    document.querySelectorAll('.holiday')[index].style.backgroundColor = 'rgb(238,238,238)';
    document.querySelectorAll('.holiday')[index].style.color = '#777';
    document.querySelectorAll('.holiday')[index].style.borderRadius = '0';
    }
  }
}

const sextaF = 'Sexta-Feira';

function Sextou(sextlul) {
  let divBtn = document.querySelector('.buttons-container');
  let btn2 = document.createElement('button');
  divBtn.appendChild(btn2)
  btn2.innerText = sextlul;
  btn2.className = 'btn-friday';
}

  Sextou(sextaF);

  document.querySelector('.btn-friday').addEventListener('click', clickSexta);
    let guarda = [4,11,18,25];
  function clickSexta() {
    let sextF = document.querySelectorAll('.friday');
        for (let index = 0; index < sextF.length; index += 1){
      if (sextF[index].innerText !== 'Sextoou') {
        document.querySelectorAll('.friday')[index].innerText = 'Sextoou';
      } else {
        const guarda = [4, 11, 18, 25];
        for (let i in guarda){
        document.querySelectorAll('.friday')[index].innerText = guarda[index];
        }
      }
    }
  }
  let zoom = document.getElementById('days');
  
  function ZoomUwu(evento) {       
    if (evento.target.className === 'day') {
      evento.target.style.fontSize = '40px'; 
      }
  }
  function zoomout(evento) {
    if (evento.target.style.fontSize !== '20px') {
      evento.target.style.fontSize = '20px';
    }
  }
    zoom.addEventListener('mouseover', ZoomUwu);
    zoom.addEventListener('mouseout', zoomout);

