# Find the three Largest Numbers from the array and sort them

![threelargest](https://user-images.githubusercontent.com/15992276/57350674-043bb680-712d-11e9-9333-2f82327e04b8.JPG)

Traverse through the array and keep track of the the three largest numbers.

Declare an empty array
[- - -]
The array will have number sorted in an ascending order which makes [3] the largest number. We will check if the largest number exists

example: [141,1,17,-7,-17,-27,18,541,8,7,7]

1. Does the Largest number exist? No
   [- - 141]

2. Do we have the largest number?
   is 1 > 141
   No
   Do we have a 2nd largest number?
   No
   [- 1 141]

3. Is 17 greater than 141? No
   Is 17 greater than 1? Yes

   [1, 17, 141]

   Pop the first number from the array, move the 2nd number to thr first place
   and place 17 in the 2nd place

4. -7, -17, -27

5. 18>17
   Shift the 1st element in the array out, shift the 2nd element out and replace
   the 2nd element with the new value
   [17, 18, 141]

6. 541
   [18,141,541]

**_Time Complexity= O(n)_**
**_Space Compexity=O(1)_**
