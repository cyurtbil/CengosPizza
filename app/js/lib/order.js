var selectPizza = function(event) {
  var selectedCity = findSelectedCity();

  var selectedPizza = PizzaChain[selectedCity].pizzas.filter(function(pizza) {
    return pizza.type === $(event.delegateTarget).attr('id');
  })[0];

  $('<p>').text(selectedPizza.name).appendTo('div#price');
};

var findSelectedCity = function() {
  for(var city in PizzaChain)
    if(!!PizzaChain[city].isSelected)
        return city;
};