'use strict';

var savePrice = function() {
  var totalPrice = calcTotalPrice();
  Order.payment = totalPrice.toPrecision(4);
  $('#price #total').text('Total: $' + Order.payment);
};