// 'use strict';

var savePrice = function() {
  var totalPrice = calcTotalPrice();
  Order.payment = totalPrice.toPrecision(4);
  $('#js-price #js-total').text('Total: $' + Order.payment);
};

var findPizza = function(event) {
  return Order.items.filter(function(item) {
    return item.name === $(event.target).parent().text();
  });
};

var findSelectedCity = function() {
  for(var city in PizzaChain)
    if(!!PizzaChain[city].isSelected)
        return city;
};

var changeValue = function(first, second, callbacks) {
  var i;
  for(i = 0; i < first - second; i++)
    callbacks.forEach(function(callback) {
      callback;
    });
};