var selectPizza = function(event) {
  var selectedCity, selectedPizza;
  selectedCity = findSelectedCity();
  selectedPizza = PizzaChain[selectedCity].pizzas.filter(function(pizza) {
    return pizza.type === $(event.delegateTarget).attr('id');
  })[0];
  Order.items.push(selectedPizza);
  var groupedItems = _.groupBy(Order.items, 'name');
  var quantity = groupedItems[selectedPizza.name].length;
  if(quantity > 1) {
    var filteredElement = $('#price p').filter(function() {return $(this).text().replace(/\sx./g, '') === selectedPizza.name});
    filteredElement.children().eq(1).val(quantity);
  } else {
    $('<p>').text(selectedPizza.name).append('<input type="number" value="1">').prepend('<span> x </span>').appendTo('#price');
  }
  $('#order-summary').slideDown(300);
};

var deselectPizza = function(event) {
  var selectedCity, selectedPizza, deselectedPizzaIndex;
  selectedCity = findSelectedCity();
  deselectedPizza = PizzaChain[selectedCity].pizzas.filter(function(pizza) {
    return pizza.name === $(event.target).parent().text().replace(/\sx./g, '');
  })[0];
  deselectedPizzaIndex = Order.items.indexOf(deselectedPizza);
  Order.items.splice(deselectedPizzaIndex, 1);
  if(deselectedPizzaIndex < 0) {
    $('#price p').last().fadeOut(200);
  } else {
    $('#price p').eq(deselectedPizzaIndex).fadeOut(200);
  }
}

var findSelectedCity = function() {
  for(var city in PizzaChain)
    if(!!PizzaChain[city].isSelected)
        return city;
};

var calcTotalPrice = function() {
  var sum = 0;
  Order.items.forEach(function(item) {
    sum += item.price;
  });

  return sum;
};

var proceed = function() {
  $('form').slideDown(300);
  $('#pizza-container').slideUp(300);
  $('p strong').text('Total: $' + Order.payment);
};

var checkout = function() {
  var customerName = $('form input').eq(0).val(), 
  customerAddress = $('form input').eq(1).val(), 
  customerCreditCard = $('form input').eq(2).val();

  Order.customer = {name: customerName, address: customerAddress, creditCard: customerCreditCard};
  $('section#pizza-console').hide();
  $('section#order-completed').show();
};