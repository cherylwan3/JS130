setTimeout(function() {  // wait 10 sec
  setTimeout(function() { // wait 25 sec 
    q(); // 7
  }, 15);

  d(); // 3

  setTimeout(function() { // wait 15 sec 
    n(); // 5
  }, 5);

  z(); // 4
}, 10);

setTimeout(function() { // wait 20 sec 
  s(); // 6
}, 20);

setTimeout(function() { // wait 0 sec
  f(); // 2
});

g(); // 1 

// g(), f(), d(), z(), n(), s(), q()