var PizzaChain = {
  'New York': {
    pizzas: [
      {
        name: 'Original New York 12.99',
        type: "cheese",
        price: 12.99,
        toppings: ['Made with finest cheeses.']
      },
      {
        name: 'Meat Lovers 23.99',
        type: "meat",
        price: 23.99,
        toppings: ['Onions', 'Pepperoni', 'Italian Sausage']
      },
      {
        name: 'Healthy Choice 24.99',
        type: "veggie",
        price: 24.99,
        toppings: ['Mushrooms', 'Ricotta Cheese', 'Arugula', 'Broccoli']
      }
    ]
  },
  'Chicago': {
    pizzas: [
      {
        name: 'Classico Chicago 10.99',
        type: "cheese",
        price: 10.99,
        toppings: ['Made with finest cheeses.']
      },
      {
        name: 'Carnivore Special 21.99',
        type: "meat",
        price: 21.99,
        toppings: ['Rosemary Ham', 'Pepperoni', 'Tyhme', 'Banana Peppers']
      },
      {
        name: 'Green Giant 16.99',
        type: "veggie",
        price: 16.99,
        toppings: ['Mushrooms', 'Black Olives', 'Spinach', 'Green Tomato']
      }
    ]
  },
  'San Francisco': {
    pizzas: [
      {
        name: 'Simply Simple 14.99',
        type: "cheese",
        price: 14.99,
        toppings: ['Made with finest cheeses.']
      },
      {
        name: 'Hunters Meal 25.99',
        type: "meat",
        price: 25.99,
        toppings: ['Steak Strips', 'Pepperoni', 'Onions', 'Ranch Dressing']
      },
      {
        name: 'Farmers Meal 20.99',
        type: "veggie",
        price: 20.99,
        toppings: ['Mushrooms', 'Carrots', 'Asparagus']
      }
    ]
  }
};


var Order = Order || {};