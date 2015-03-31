var loadCities = function() {
  for(var city in PizzaChain)
    $('ul#cities').append('<li>' + city + '</li>');
};

var loadPizzas = function(selectedCity) {
  unloadPizzas();
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
      PizzaChain[city].pizzas.forEach(function(pizza) {
        pizza.toppings.forEach(function(topping, index) {
          $('#' + pizza.type + ' ul.toppings li').eq(0).remove();
        });
      });
      PizzaChain[city].isSelected = false;
    }
  }

};