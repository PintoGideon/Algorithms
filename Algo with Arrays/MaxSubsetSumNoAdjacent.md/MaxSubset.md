## Max Subset Sum No adjacent

array=[7,10,12,7,9,14]

**_Solution: 7+12+14=33_**

We will create an array of the same length
as our input array and calculate the
largest sum between our adjacent numbers.

maxArray=[]

```python
At the index 0, we have 7
That is the highest sum we can generate at the moment.
[7, ]

At the index 1 we have 10
We cant add 7 and 10 together as they are adjacent
[7,10]

At index 2 we have 12
We can add 7 and 12 here as they are not adjacent
[7,10,19]

At index 3 we have 7
7+7 would give us 14
7+10 would give is 17
but 19 is still the largest sum
[7,10,19,19,]

At index 4 we have 9
Here the biggest sum we could possible
calculate is 12+7+9=28
[7,10,19,19,28]

At index 5 we have 14
The largest sum would be
7+12+14=33

```

Is there any pattern that I can see here?

[7,10,12,7,9,14]

[7,10,19,19,28,33]

```python

If we see the number 33, we have two
choices to generate it.

We go to the previous index which has 28, and
conclude that it will have the number 9 which
corresponds to its index.
We cannot add 14 to 28 so we either pick
28 as our largest sum or we can go one index
lesser where we have 19.
If we add 19+14, we get 33.
```

```python
[7, 10, 19]

```

**_Time=O(n)_**
**_Space=O(n)_**

Can we aim for a better space
complexity?

We only need the values at i-1 and i-2
and we don't need the entire maxSums array.

Let us have two variables

```python
first
second

current=max(first, second+array[i])

At the end of each iteration
first->current
second->first
```

This does not effect our time complexity
but changes our space complexity
to O(1)
