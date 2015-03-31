var selectPizza = function(event, total) {
  var selectedCity = findSelectedCity();
  var selectedPizza = PizzaChain[selectedCity].pizzas.filter(function(pizza) {
    return pizza.type === $(event.delegateTarget).attr('id');
  })[0];

  $('<p>').text(selectedPizza.name).appendTo('div#price');

  return getPrices(selectedPizza, total);
};

var findSelectedCity = function() {
  for(var city in PizzaChain)
    if(!!PizzaChain[city].isSelected)
        return city;
};

var getPrices = function(selectedPizza, prices) {
  prices.push(selectedPizza.price);
  return prices;
};

var calcTotalPrice = function(prices) {
  var sum = 0;
  prices.forEach(function(price) {
    sum += price;
  });

  return sum;
};

var proceed = function() {
  $('form').slideDown(300);
  $('p strong').text('Total: $' + Order.payment);
};