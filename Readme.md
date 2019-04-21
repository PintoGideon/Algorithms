# Alogrithms in JavaScript

O(n^2) quadratic n^2(operations)  
 O(n) linear 2n
O(1) constant n

```
var countChars=function(str){
    var count=0;

    for (var i=0; i<str.length; i++){
        count ++
    }
    return count;
}


countChars('Gideon');

# As the input grows, the number of count operations grows.
  The time complexity is linear.


# Code to remove duplicate values by creating an object as a property lookup
  rather than using two for loops for comparison


function removeDuplicate(arr){
var breadcrumbs={};
var result=[];

for(var i=0; i<arr.length;i++){
  if(!breadcrumbs[arr[i]]){
      result.push(arr[i]);
      breadcrumb[arr[i]]=true;
  }
  result.sort((a,b)=>a-b);

}


}

removeDuplicate([4,2,2,3,2,2,2]);

```

Aside: A property lookup is a constant time operation

# Optimizing with Caching -(Example in the slides)

# Optimizing with Closure

```
const memoizedClosureTimes10=()=>{
let cache={};

return function(n){
if (n in cache){
console.log("Fetching data from cache");
return cache[n]
}
else
{
console.log('Calculating Result');
let result=n\*10;
cache[n]=result;
return result;
}
}

}

const memoClosureTimes10=memoizedClosureTimes10();
memoClosureTimes10(9);
memoClosureTimes10(9); //90 //cached
```

# What is a Data Strucuture?

1. Background
2. Impelementation
3. Analysis
4. Gain Experience and intuition

# Stack

JavaScript engines have a call stack and a message queue that executes your code at runtime

Stack Stores in a last in, first out order.

example: Array with functions like push and pop

# Queue

Stores items in a First in First out order.

# Linked List

Organizes items sequentially, with each pointer storing a pointer to the next.

#Aside: Pass by value and Pass by reference.
If you pass values of variables/string to a function and change the values inside the function, the values outside the function remains unchanged. Whereas for object the value change persists.

# Singly LinkedList

```

const linkedList={
  head:{
      value:1
      next:{
          value:2
          next:{
              value:3
              next:null
          }
      }
  }

```

}
