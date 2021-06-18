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
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const adress = Object.values(order.address);
  console.log(`Olá ${deliveryPerson}, tudo bem? Temos uma entrega para ${name}, Telefone: ${phoneNumber}, R. ${adress[0]}, Nº:${adress[1]}, Ap:${adress[2]}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newObject = {
    name: 'Luiz Silva',
    payment: 50
  }
  Object.assign(order, newObject);
  const pizza = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const name = order.name;
  const total = order.payment;
  
  console.log(`Olá ${name}, o total do seu pedido de ${pizza} e ${drink} é de R$${total},00.`)
}

orderModifier(order);
