function repeatMessage(message, interval) {
    const id= setInterval(()=>{console.log(message)},interval);
    return function(){
      clearInterval(id);
      console.log("Interval cleared.")
    }
  }