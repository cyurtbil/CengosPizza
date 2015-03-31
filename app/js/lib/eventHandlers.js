var selectCityEvent = function() {
  $('ul#cities li').on('click', function(event) {
    $(event.target).addClass('hovered');
    loadPizzas(event.target.innerHTML, event);
  });
};

var selectPizzaEvent = function() {
  $('.pizza').on('click', function(event) {
    selectPizza(event);
  });
};