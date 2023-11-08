function receivesAFunction(callback) {
        callback();
  }
  
  function returnsANamedFunction() {
    
    function myFunction() {
      console.log("Hello from the named function!");
    }
  
    
    return myFunction;
  }

  const returnsAnAnonymousFunction = () => {
   
    return () => {
      console.log("Hello from the anonymous function!");
    };
  };
  