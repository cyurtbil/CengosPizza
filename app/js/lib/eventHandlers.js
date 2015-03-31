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

var proceedEvent = function() {
  $('#proceed').on('click', function() {
    proceed();
  });
};

var checkoutEvent = function() {
  $('form input[value="Checkout"]').on('click', function(event) {
    event.preventDefault();
    var customerName = $('form input').eq(0).val();
    var customerAddress = $('form input').eq(1).val();
    var customerCreditCard = $('form input').eq(2).val();
    Order.customers.push({name: customerName, address: customerAddress, creditCard: customerCreditCard});
    $('section#pizza-console').hide();
    $('section#order-completed').show();
    
  });
};