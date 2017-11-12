# contains.js
contains explained!
This JavaScipt function returns true or false to the callback function. If the cb is not supplied the callback is assign an anonymous function that returns the first property passed to the callback.

Usage :
```JavaScript
/* As a string */
contains('x', '<ukljh;lojhhje'); // false
contains('x', '<ukljh;xlojhhje'); // true

/* As an Array */
contains('x', ['<ukljh;lojhhje'].split()); // false
contains('x', ['<ukljh;xlojhhje'].split()); // true
```
