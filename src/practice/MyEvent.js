
// const MyEvent = (() => {
//     const listeners = {};
  
//     function on(type, listener) {
//       if (!listeners[type]) {
//         listeners[type] = [];
//       }
//       listeners[type].push(listener);
//     }
  
//     function emit(type, ...args) {
//       if (listeners[type]) {
//         listeners[type].forEach((listener) => listener(...args));
//       }
//     }
  
//     return {
//       on,
//       emit,
//     };
//   })();
  
//   module.exports = MyEvent;
  

const MyEvent = require('events');


class MyPubSub {
    const listeners = {};
  
    function on(type, listener) {
      if (!listeners[type]) {
        listeners[type] = [];
      }
      listeners[type].push(listener);
    }
  
    function emit(type, ...args) {
      if (listeners[type]) {
        listeners[type].forEach((listener) => listener(...args));
      }
    }
  
    return {
      on,
      emit,
    };
}


const emitter = new MyPubSub();

emitter.on('msg', ()=> console.log('Hi event!'));
emitter.emit('msg');