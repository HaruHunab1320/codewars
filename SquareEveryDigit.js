function squareDigits(num){

  //Declare variable so that we can pass it to parseInt()
  const numStr = this.

  //String() converts a value into a string
     String(num)
 
  //.split('') splits the string into individual characters and puts in an array.
     .split('')
 
  //.map takes the values and distributes them into a new array having been squared with Math.pow
     .map(function(val){
        return(Math.pow(parseInt(val), 2))   
        })
        
  //.join() takes an array and concatenates it into a string      
     .join('');
     
  //parse the string into an integer with parseInt()    
    return parseInt(numStr);  
  };
