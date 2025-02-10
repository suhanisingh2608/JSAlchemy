return function createThrottle(fn, delay) {
    let lastCalled=0;
    return function(...arg){
       if(Date.now()<lastCalled +delay) return;
       fn(...arg);
       lastCalled=Date.now();
    }
   };