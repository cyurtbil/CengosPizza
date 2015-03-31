var loadCities = function() {
  for(var city in this.PizzaChain)
    $('ul#cities').append('<li>' + city + '</li>');
};

var loadPizzas = function(city) {
  var pizzas = PizzaChain[city];
  $('section h3').text(city);
  for(var pizza in pizzas) {
    $('#' + pizza + ' h4').text(pizzas[pizza].name);
  };
};