var loadCities = function() {
  for(var city in PizzaChain)
    $('ul#cities').append('<li>' + city + '</li>');
};

var loadPizzas = function(selectedCity) {
  // unloadPizzas();
  PizzaChain[selectedCity].isSelected = true;
  var pizzas = PizzaChain[selectedCity].pizzas;
  $('section h3').text(selectedCity);
  pizzas.forEach(function(pizza) {
    $('#' + pizza.type + ' h4').text(pizza.name);
    pizza.toppings.forEach(function(topping) {
      $('#' + pizza.type + ' ul.toppings').append('<li>' + topping + '</li>');
    });
  });
};

var unloadPizzas = function() {
  for(var city in PizzaChain) {
    if(!!PizzaChain[city].isSelected) {

      for(var pizza in PizzaChain[city]) {
        pizza.toppings.forEach(function(topping, index) {
          $('#' + pizza + ' ul.toppings li').eq(index).remove();
        });
      }
      PizzaChain[city].isSelected = false;
    }
  }

};