/* eslint-disable max-lines-per-function */
function makeList() {
  let tasks = [];

  return {
    add(task) {
      tasks.push(task);
      console.log(task + " added!");
    },

    list() {
      if (tasks.length === 0) {
        console.log("The list is empty.");
      } else {
        tasks.forEach(item => console.log(item));
      }
    },

    remove(task) {
      let index = tasks.indexOf(task);
      if (index > -1) {
        tasks.splice(index, 1);
        console.log(task + " removed!");
      }
    }
  };
}


let list = makeList();
// list.add("peas");
// // peas added!

// list.list();
// // peas

// list.add("corn");
// // corn added!

// list.list();
// // peas
// // corn

// list.remove("peas");
// // peas removed!

// list.list();
// // corn

console.log(list.tasks);