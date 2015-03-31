var loadCities = function() {
  for(var city in PizzaChain)
    $('<li>').text(city).addClass(city.replace(/\s+/g, '')).appendTo('ul#cities');
};

var loadPizzas = function(selectedCity, event) {
  unloadPizzas();
  PizzaChain[selectedCity].isSelected = true;
  var pizzas = PizzaChain[selectedCity].pizzas;
  $('section h3#city-name').text(selectedCity);
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
      $('ul#cities li.' + city.replace(/\s+/g, '')).removeClass('hovered');
      PizzaChain[city].pizzas.forEach(function(pizza) {
        pizza.toppings.forEach(function(topping, index) {
          $('#' + pizza.type + ' ul.toppings li').eq(0).remove();
        });
      });
      PizzaChain[city].isSelected = false;
    }
  }

};