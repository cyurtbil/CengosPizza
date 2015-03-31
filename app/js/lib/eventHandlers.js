var selectCityEvent = function() {
  $('ul#cities li').on('click', function(event) {
    $(event.target).addClass('hovered');
    loadPizzas(event.target.innerHTML, event);
    $('section h2').hide();
    $('#pizza-container').show();
  });
};

var selectPizzaEvent = function() {
  $('.pizza').on('click', function(event) {
    selectPizza(event);
    var totalPrice = calcTotalPrice();
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
    checkout();
    for(var info in Order.customer)
      $('<p>').text(Order.customer[info]).appendTo('section#order-completed');
  });
};

var changeOrderEvent = function() {
  $('form input[value="Change Order"]').on('click', function(event) {
    event.preventDefault();
    $('form').slideUp(300);
    $('#pizza-container').slideDown(300);
  });
};