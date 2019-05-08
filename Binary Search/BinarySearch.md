# Binary Search


![BinarySearch](https://user-images.githubusercontent.com/15992276/57350673-043bb680-712d-11e9-8d2c-9dd1db11c99a.JPG)

The number to be searched=33

1. left pointer is pointing at 0
2. right pointer is pointing at 73

We will initialize two pointers to the first and the last value respectively.

The Middle value will be

```python
M=(0+9)//2
M=4 (Rounded Down value)

45>33 so we can erase the right half of the array as they are greater numbers
M points to the value 45
```

Grab the right pointer and place it to the left of the middle pointer

[0,1,21,33]

Left->0
Right->33

```python
M=(0+3)//2
M=1
 1<33
```

Grab the left pointer and place it to the right of the middle pointer

[21,33]

Left->21
Right->33

```python
M=0+1//2
M=0

[21,33]
M->21
21 > 33
Left->33
Right->33
```

**_Time=O(log(n))_**
**_Space=O(1)_**


We are eliminating half of the input every time we recall the array hence the time complexity above.

