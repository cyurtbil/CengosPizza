'use strict';

$(document).ready(function() {
  selectCityEvent();
  selectPizzaEvent();
  proceedEvent();
  checkoutEvent();
  changeOrderEvent();
  deselectPizzaEvent();
  changeQuantityEvent();
  reorderEvent();
});

loadCities();

