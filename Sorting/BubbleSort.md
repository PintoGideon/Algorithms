[8,5,2,9,5,6,3]

```javascript
Is 8 less than or equal to 5
No
swap 8 and 5
[5,8,2,9,5,6,3]

```

```javascript
Is 8 less than or equal to 2
No
Swap 8 and 2
[5,2,8,9,5,6,3]

```

```javascript
Is 8 less than or equal to 0
Yes

Increment pointer to point at 9

```

```javascript
Similary doing this for the result of numbers in our first iteration
[5,2,8,5,6,3,9]

```

**_A quick observation here would be that the last number will be sorted_**

The next iterations:

```javascript
[2, 5, 5, 6, 3, 8, 9];

[2, 5, 5, 3, 6, 8, 9];

[2, 5, 3, 5, 6, 8, 9];

[2, 3, 5, 5, 6, 8, 9];
```

**_Time Complexities: O(n^2)_**
***Space Complexities: O(1)***
