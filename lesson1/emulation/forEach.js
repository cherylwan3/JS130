// own forEach method w/ context, and passing index & array
function forEach(array, callback, context) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(context, array[index], index, array);
  }
}

let arr = [1, 2, 3, 4];
forEach(arr, value => console.log(value * value));

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
forEach([1, 2, 3], foo.showItem, foo);

//forEach([4, 5, 6], foo.showItem);
// output:
// a
// b
// c
// Item:  1
// Item:  2
// Item:  3
// TypeError: Cannot read property 'prefix' of undefined


// calling original forEach method
["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});
// After a comes b
// After b comes c
// After c comes undefined

// calling my own forEach method
forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});
// After a comes b
// After b comes c
// After c comes undefined