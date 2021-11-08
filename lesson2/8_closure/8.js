// const later = (func, str) => {
//   return () => func(str);
// };

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!



const logger = message => console.log(message);
let logWarning = logger.bind(null, "The system is shutting down!");
logWarning(); // The system is shutting down!
logWarning();
