'use strict';

var selectCityEvent = function() {
  $('ul#js-cities li').on('click', function(event) {
    $(event.target).addClass('hovered');
    loadPizzas(event.target.innerHTML, event);
    $('section h2').hide();
    $('#js-pizza-container').show();
  });
};

var selectPizzaEvent = function() {
  $('.js-pizza').on('click', function(event) {
    selectPizza(event);
    savePrice();
  });
};

var deselectPizzaEvent = function() {
  $('#js-price').delegate('#js-remove', 'click', function(event) {
    deselectPizza(event);
    savePrice();
  });
};

var proceedEvent = function() {
  $('#js-proceed').on('click', function() {
    proceed();
  });
};

var checkoutEvent = function() {
  $('form input[value="Checkout"]').on('click', function(event) {
    event.preventDefault();
    checkout();
    for(var info in Order.customer)
      $('<p>').text(Order.customer[info]).appendTo('section#js-order-completed');
  });
};

var changeOrderEvent = function() {
  $('form input[value="Change Order"]').on('click', function(event) {
    event.preventDefault();
    changeOrder();
  });
};

var changeQuantityEvent = function() {
  $('#js-price').delegate('input[type="number"]', 'keyup change', function(event) {
    changeQuantity(event);
    savePrice();
  });
};