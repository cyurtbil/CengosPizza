'use strict';

$(document).ready(function() {
  Order.customer = [];
  selectCityEvent();
  selectPizzaEvent();
  proceedEvent();
  checkoutEvent();
});

loadCities();

