var selectPizza = function(event, total) {
  var selectedCity = findSelectedCity();
  var selectedPizza = PizzaChain[selectedCity].pizzas.filter(function(pizza) {
    return pizza.type === $(event.delegateTarget).attr('id');
  })[0];

  $('<p>').text(selectedPizza.name).appendTo('div#price');
  $('#order-summary').slideDown(300);
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

var checkout = function() {
  var customerName = $('form input').eq(0).val();
  var customerAddress = $('form input').eq(1).val();
  var customerCreditCard = $('form input').eq(2).val();
  Order.customers.push({name: customerName, address: customerAddress, creditCard: customerCreditCard});
  $('section#pizza-console').hide();
  $('section#order-completed').show();
};