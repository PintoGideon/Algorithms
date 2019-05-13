# Selection Sort

![selectionSort](https://user-images.githubusercontent.com/15992276/57644119-6bbc9080-7589-11e9-8062-b8a1af1ebb07.JPG)

We are given a list of numbers and we are going to sort it by dividing the list into two.
One sublist will represent sorted numbers
The Other sublist will represent unsorted numbers.


[8,5,2,9,5,6,3]

```javascript
Is 5 smaller than 8
Yes, Move the pointer to 5

Is 2 smaller than 5,
Move the pointer to 2

Is 9 smaller than 2
No
Is 5 smaller than 2
No
Is 6 smaller than 2
No
Is 3 smaller than 2
No

The pointer is currently at 2

We will swap 8 with 2

[2,5,8,9,5,6,3]

Now 2 is part of sorted sublist.

```

Similary

```javascript
[2,5,8,9,5,6,3]
[2,3,8,9,5,6,5]
[2,3,5,9,8,6,5]
[2,3,5,5,8,6,9]
[2,3,5,5,6,8,9]

```
***Space=O(1)***
***Time=O(n^2)***
