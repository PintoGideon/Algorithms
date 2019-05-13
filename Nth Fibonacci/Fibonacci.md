 A Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

![algo-1](https://user-images.githubusercontent.com/15992276/57350672-043bb680-712d-11e9-9fd7-d00653dc1fa7.JPG)

### Mathematical Formula:

**_fib(n)=fibo(n-1) + fibo(n-2) for n>2_**

Question: Find the nth Fibonacci

I am using a recursive alogirthm to solve this problem and would need a base case.

### Base Conditions:

```
if n==2:
return 1

elif n==1:
return 0

else:
return fib(n-1) + fib(n-2)

```

The time alogirthm isn't that great as there are some duplications operations that we perform.

**_Time=O(2^n)_**
**_Space=O(n)_**

As we are using the recursive call stack, the space complexity is ***O(n)***.
We have n frames on the call stack as we have n function calls and at anytime
of the given algorithm, we are using O(n) space.

### Memoization or Caching

```python
if n is memoize:
 return memoize[n]
else:
    memoize[n]=fib(n-1)+fib(n-2)
    return memoize[n]
```

**_Time=O(n)_**
**_Space=O(n)_**

Can we do better?

### Iterative Solution

Let's have an array of the last two values.

```python
[0,1]

If we have to calculate the fibonacci of
6
next= arr[0]+arr[1]
next=1
Pop the first element in the array and replace it with
the 2nd number.
We put the next fibonacci in the 2nd place in the array.

[1,1]

```

**_Time=O(n)_**
**_Space=O(1)_**
