var uniqueInOrder=function(iterable){
  
  //Convert incoming data into string to ensure either a string or an array can be input into the function
  let stringifiedIterable =  String(iterable)
  
      //.replace with the below regex eliminates consecutive duplicates 
      .replace(/,/g, '').replace(/(.)\1+/g, '$1')

      //.split returns an array of each character in the incoming string
      .split('')

      //.map here is taking the string array and testing it to see if its contents are integers using isNaN()
      .map(function (item) {
         if(!isNaN(item) && !isNaN(item - 0)) {
             //if item is integer parse to return integer
             return(parseInt(item))
           } else { 
             //if item is string, return the item to the map function
             return(item)
             }
          }); 
        // return the newly formated array  
        return(stringifiedIterable)
      }
