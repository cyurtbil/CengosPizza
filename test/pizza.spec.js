describe('Pizza Web Application', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'test/fixtures';
    var ul = loadFixtures('city-list.html');
    this.PizzaChain = {
      'New York': {
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
      'Chicago': {
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
      'San Francisco': {
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
    expect(this.PizzaChain['New York'].meat.name).toEqual('Meat Lovers');
  });

  it("should view the cities of the franchise", function() {
    for(var city in this.PizzaChain)
      $('ul#cities').append('<li>' + city + '</li>');
    expect($('ul#cities li:nth-child(1)').html()).toEqual('New York');
  });

});