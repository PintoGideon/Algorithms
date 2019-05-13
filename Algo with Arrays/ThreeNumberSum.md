# Three Number Sum

![numberthree](https://user-images.githubusercontent.com/15992276/57661324-5f9bf780-75b8-11e9-83c3-e21cce8d9c41.png)

![threenumber](https://user-images.githubusercontent.com/15992276/57661327-5f9bf780-75b8-11e9-975d-31e6133ce0f3.png)


[12,3,1,2,-6,5,-8,6]

**_Target=0_**

Answer:

```javascript
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]];
```

Solution:

```javascript

Step 1: Sort the Array
[-8,-6,1,2,3,5,6,12]

Left=6
Right=12

CS=CN+L+R
CS=-8+-6+12
CS=-2

Is Current Sum == target?
No
But Current Sum < target and the numbers
in the array are sorted


If we move our left pointer to the right by an index,
we have a change of getting a greater sum that -2

Left++
Left=1
Right=12
CS=-8+1+12
CS=5

The Current Sum > Target
Right--
Left=1
Right=6
CS=-8+1+6
CS=-1


Left++
left=2
Right=6
CS=-8+2+6
CS=0

CS===Target
Add it to our results array
[[-8,2,6]]


Now if we move the Left pointer, the Current
Sum is going to be less than Zero and
if we move the right pointer, the Current sum
is going to be greater than Zero

Left=3
Right=5
CS=-8+3+5
CS=0


CS===Target
Add it to our results array
[[-8,2,6],[-8,3,5]]

Move both pointers, but now we see
that both the pointers have passed each other.

We reset our Current Number from index=0 to index=1

Left=1
Right=12
CS=-6,1,12
CS=7

CurrentSum>Target
Right--

Left=1
Right=6
CS=-6+1+6
CS=1


CurrentSum > Target
Right--

Left=1
Right=5
CS=-6+1+5

CurrentSum==Target
[[-8,2,6],[-8,3,5],[-6,1,5]]

```

**_Time Complexity=O(n^2)_**
**_Space Complexity=O(n)_**
