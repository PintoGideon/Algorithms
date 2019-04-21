# Alogrithms in JavaScript

# Example

```javascript
var countChars=function(str){
    var count=0;

    for (var i=0; i<str.length; i++){
        count ++
    }
    return count;
}


countChars('Gideon');
```

  As the input grows, the number of count operations grows.
  The time complexity is linear.
  The following example is a code snippet to remove duplicate values by creating an object (breadcrumbs) as a table to look up values
  rather than using two for loops for comparison

```
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

# Optimizing with Caching 
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



