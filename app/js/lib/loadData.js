var loadCities = function() {
  for(var city in this.PizzaChain)
    $('ul#cities').append('<li>' + city + '</li>');
}