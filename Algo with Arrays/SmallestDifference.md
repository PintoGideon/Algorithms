#Smallest Difference

A) [-1,5,10,20,28,3]
B)[26,134,135,15,17]

### Sort the two arrays

Place two pointers at the starting location of each arrays

```javascript

x= -1
y= 15

The difference between them is 16.

Is -1==15
No
-1<15 Yes

If we increment the pointer in the second array,
the element to the right of 15 would be greater
resulting in a larger sum with -1.

Hence we increment the x pointer by 1

```

```javascript
x=3
y=15

Is 3<15
Yes

The Difference is 12.

We will increment the pointer x as incrementing
the pointer y will give us a greater difference

```

```javascript

x=5
y=15

5<15
15-5

The difference is 10

We move the x pointer to the right

```

```javascript
x=10
y=15

The difference is 5

We move the x pointer to the right
```

```javascript
x=20
y=15

x>y
The difference is 5

We move the y pointer to the right

```

```javascript
x=20
y=17

x>y
The difference is 3

We move the y pointer to the right

```

```javascript

x=20
y=26

x<y
The difference is 6

We move the x pointer to the right
```

```javascript

x=28
y=26

x>y
The difference is 2

We have reached the end of the array to the left.
Any value to the right of 26 will give us a bigger
value as the array is sorted in the ascending order.

```

**_Time Complexity=O(Nlog(N) + Mlog(M))_**

***Space Complexity
