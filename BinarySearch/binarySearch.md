# Find the closest value in Binary Search Tree

### The Explainations are a bit verbose.
![ClosestValue](https://user-images.githubusercontent.com/15992276/56922626-a6590000-6a96-11e9-93d1-0f18dba1f7c9.JPG)

**Target value 12**

We will have a default closest value and we we will update it as we traverse the tree

Starting at the root node which has a value of 10, we will compute the absolute value of the current node
and the target value 
```
|10-12|=2
```
Also our closest default value will be set to infinity 
```
closest=infinity
|infinity-12|=infinity
```
**infinity is an integer value**
Here 2 is closest to 12 than infinity.
Updating the value of closest to 10
```
closest=10
```

Now, because we are in a BST and our current node value is less than the target value (10<12).
The nodes to the right of 10 must be greater and the nodes to the left are smaller. Every element to the left is farther away from 12 and we can elimnate the left of the tree.

**Traversing the right of the tree**
The value of the node is 15
```
|15-12|=3

```
The absolute value is greater than the closest value which tells us that 15 is farther away from 12 (target).
We can eliminate nodes to the right as they are greater.

The value of the node now is 13
```
|13-12|=1
1 < closestValue
The closest value is 13
```

###Time Complexity

***Average Case Scenario***
Time=O(log(n))- n is the number of nodes
Space=O(log(n)) - n is the depth of the tree

***Worst Case Scenario*** (Tree has only on branch)
Time=O(n)












