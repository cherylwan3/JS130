/* eslint-disable max-lines-per-function */

function makeList() {
  let tasks = [];

  return function(task) {
    let index;
    if (task) {
      index = tasks.indexOf(task);
      if (index === -1) {
        tasks.push(task);
        console.log(task + " added!");
      } else {
        tasks.splice(index, 1);
        console.log(task + " removed!");
      }
    } else if (tasks.length === 0) {
      console.log("The list is empty.");
    } else {
      tasks.forEach(item => console.log(item));
    }
  };
}


// let list = makeList();
// list();
// // The list is empty.

// list("make breakfast");
// // => make breakfast added!

// list("read book");
// // => read book added!

// list();
// // make breakfast
// // read book

// list("make breakfast");
// // =>  make breakfast removed!

// list();
// // => read book