'use strict;'


$(document).ready(function() {
  $('ul#cities li').on('click', function(event) {
    loadPizzas(event.target.innerHTML);
  });
});

loadCities();

