describe('Pizza Web Application', function() {

  beforeEach(function() {
    this.PizzaChain = {
      newYork: {
        cheese: {
          name: 'Original New York',
          toppings: []
        },
        meat: {
          name: 'Meat Lovers',
          toppings: ['Onions', 'Pepperoni', 'Italian Sausage']
        },
        veggie: {
          name: 'Healthy Choice',
          toppings: ['Mushrooms', 'Ricotta Cheese', 'Arugula', 'Broccoli']
        }
      },
      chicago: {
        cheese: {
          name: 'Classico Chicago',
          toppings: []
        },
        meat: {
          name: 'Carnivore Special',
          toppings: ['Rosemary Ham', 'Pepperoni', 'Tyhme', 'Banana Peppers']
        },
        veggie: {
          name: 'Green Giant',
          toppings: ['Mushrooms', 'Black Olives', 'Spinach', 'Green Tomato']
        }
      },
      sanFrancisco: {
        cheese: {
          name: 'Simply Simple',
          toppings: []
        },
        meat: {
          name: 'Hunters Meal',
          toppings: ['Steak Strips', 'Pepperoni', 'Onions', 'Ranch Dressing']
        },
        veggie: {
          name: 'Farmers Meal',
          toppings: ['Mushrooms', 'Carrots', 'Asparagus']
        }
      }
    };
  });

  it('should contain the right information', function() {
    expect(this.PizzaChain.newYork.meat.name).toEqual('Meat Lovers');
  });

});