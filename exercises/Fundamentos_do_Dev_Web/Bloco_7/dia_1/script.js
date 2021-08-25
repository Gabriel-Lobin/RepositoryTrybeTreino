const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº:${order.address.number}, AP:${order.address.apartment}`;

}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.order.pizza.muzzarella = {amount: 1, price:20};
  order.order.pizza.calabresa = {amount: 1, price:20};
  const keyPizza = Object.keys(order.order.pizza);
  const valorPizza1 = order.order.pizza.muzzarella.price;
  const valorPizza2 = order.order.pizza.calabresa.price;
  const valorCoca = order.order.drinks.coke.price;  
return `Olá ${order.name}, o total do seu pedido de ${keyPizza[2]}, ${keyPizza[3]} e ${order.order.drinks.coke.type} é R$ ${(valorCoca+valorPizza1+valorPizza2).toFixed(2)}`
}
console.log(orderModifier(order));

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};



const addTurno = (objeto, chave, valor) => {
  
}

console.log(addTurno(lesson2, 'turno', 'manhã'));