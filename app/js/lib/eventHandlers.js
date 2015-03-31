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
    $('div#price div').text('Total: $' + totalPrice.toPrecision(4));
  });
};

var proceed = function() {
  $('#proceed').on('click', function() {
    $('form').slideDown(300);
  });
};