# Number of Ways To make Change

We have $10 and an array [1,5,10,25] of integers
which are coin denominations. We have to find the
number of ways we can make change for the target
amount using the array. We can use one coin many times
to meet our sum of $10.

There are 4 ways in which we can make change.

```python
1. 1*10
2. 2*5
3. 1*5+5
4. 10*1
```

We initialize the array all at zero
except the first index which is set at 1.

Why is that?
This is going to serve as a base case. From
an intuitive point of view, there is only
one way to make change for \$0 and that is
not to make any change.

There is one way of making change for \$0
and this is going to serve as a base case.

```python
We start with the denomination 1.

We are going to interate through the
ways array and update the number of
ways we can make change for that amount

Is 1<=0
Can we use $1 coin to make $zero
No so we skip the step.

Is 1<=1, Yes
We are going to update our ways array

ways[1]+=ways[1-1]
ways[1]=ways[1]+ways[1-1]
        0      +   1

1<=2
ways[2]+=ways[2-1]
ways[2]=ways[2]+ways[2-1]
        0+1
The number of ways to make $2
given just $1 coin, there is only
one way.

Now are going to move to $5 denomination.

For each amount,
is 5<=1
Can we use $5 to generate $1.
Similary for 2 to 5 in the ways array.

ways[5]+=way[5-5]
1+1=2


Our formula is going to be
if denomination<=amount
ways[amount]+=ways[amount-denomination]


```

**_SpaceComplexity=O(N)_**
**_TimeComplexity=O(Nd)_**
