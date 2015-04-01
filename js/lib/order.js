'use strict';

var selectPizza = function(event) {
  var selectedCity, selectedPizza, groupedItems, quantity, filteredElement;
  selectedCity = findSelectedCity();
  selectedPizza = PizzaChain[selectedCity].pizzas.filter(function(pizza) {
    return pizza.type === $(event.delegateTarget).attr('id');
  })[0];

  Order.items.push(selectedPizza);
  groupedItems = _.groupBy(Order.items, 'name');
  quantity = groupedItems[selectedPizza.name].length;

  if(quantity > 1) {
    filteredElement = $('#js-price p').filter(function() {
      return $(this).text() === selectedPizza.name
    });
    filteredElement.children().eq(0).val(quantity);
  } else {
    $('<p>').text(selectedPizza.name).append('<input type="number" value="1">' + '<input type="submit" id="js-remove" value="Remove">').appendTo('#js-price');
  }
  $('#js-order-summary').slideDown(300);
};

var deselectPizza = function(event) {
  var deselectedPizzas, deselectedPizzaIndex;
  deselectedPizzas = findPizza(event);
  Order.items = _.without(Order.items, deselectedPizzas[0]);
  $(event.target).parent().remove();
}

var changeQuantity = function(event) {
  var currentValue, newValue, selectedPizzaIndex, i, selectedPizzas;
  selectedPizzas = findPizza(event);
  currentValue = selectedPizzas.length;
  newValue = parseInt($(event.target).val());
  if(newValue > currentValue) {
    changeValue(newValue, currentValue, [Order.items.push(selectedPizzas[0])]);
  } else if(newValue < currentValue) {
    changeValue(currentValue, newValue, [selectedPizzaIndex = Order.items.indexOf(selectedPizzas[0]), Order.items.splice(selectedPizzaIndex, 1)])
    if(newValue === 0) {
      $(event.target).parent().remove();
    }
  }
};

var calcTotalPrice = function() {
  var sum = 0;
  Order.items.forEach(function(item) {
    sum += item.price;
  });
  return sum;
};

var changeOrder = function() {
  $('form').slideUp(300);
  $('#js-pizza-container').slideDown(300);
  $('#js-price p input').show();
  $('#js-proceed').show();
};

var proceed = function() {
  $('form').slideDown(300);
  $('#js-pizza-container').slideUp(300);
  $('p strong').text('Total: $' + Order.payment);
  $('#js-price p input').hide();
  $('#js-proceed').hide();
};

var checkout = function() {
  var customerName = $('form input').eq(0).val(), 
  customerAddress = $('form input').eq(1).val(), 
  customerCreditCard = $('form input').eq(2).val();
  Order.customer = {name: customerName, address: customerAddress, creditCard: customerCreditCard};
  $('section#js-pizza-console').hide();
  $('section#js-order-completed').show();
  $('nav').hide();
  $('#js-order-way').slideDown(300).delay(3000).slideUp(300);
};