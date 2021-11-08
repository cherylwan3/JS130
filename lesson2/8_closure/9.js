const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

const later2 = (func, msg) => {
  return when => func(msg, when);
};

function later2(func, msg) {
  return function(when) {
    func(msg, when);
  };
}

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!