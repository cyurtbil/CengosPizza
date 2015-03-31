var selectCityEvent = function() {
  $('ul#cities li').on('click', function(event) {
    $(event.target).addClass('hovered');
    loadPizzas(event.target.innerHTML, event);
  });
};

var selectPizzaEvent = function() {
  var empty = [];
  $('.pizza').on('click', function(event) {
    var prices = selectPizza(event, empty);
    var totalPrice = calcTotalPrice(prices);
    Order.payment = totalPrice.toPrecision(4);
    $('div#price div').text('Total: $' + Order.payment);
  });
};

var proceed = function() {
  $('#proceed').on('click', function() {
    $('form').slideDown(300);
    $('p strong').text('Total: $' + Order.payment);
  });
};