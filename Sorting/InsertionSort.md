**_This algorithm is not optimal as we do quite a bit of swapping_**.

![insertionSort](https://user-images.githubusercontent.com/15992276/57644117-6bbc9080-7589-11e9-8fad-301a59e01d7f.JPG)

**_Space Complexity=O(1)_**
**_Time Complexity=O(n^2)_**

[8,5,2,9,5,6,3]

We start with 5 and check it with 8.

```
i=1
j=1

if 5 is less than 8
Yes
[5,8,2,9,5,6,3]

j=0

```

```

i=2
j=2

if 2 less than 8
Yes
[5,2,8,9,5,6,3]

if 2 less than 5
[2,5,8,9,5,6,3]

j=0

```

We can now see that 2,5,8 are in sorted order

```
if 9 less than 8
No
```

9 is in it's correct position
Current sorted List
[2,5,8,9,5,6,3]

```
If 5 less than 9
Yes
[2,5,8,5,9,6,3]

If 5 less than 8
Yes
[2,5,5,8,9,6,3]

If 5 less than 5
No
```

```
Similary for 6 and 3

[2,5,5,6,8,9,3]
[2,3,5,5,6,8,9]

```
