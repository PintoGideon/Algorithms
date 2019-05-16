# Insertion, Searching and Deletion in BST

Every node in a BST has to satisfy the BST property.

The ```BST``` property is defined as follows:

***A Node's (parent node) value should be greater than the value of the node to it's left and less that it's value to the right.***
![BST](https://user-images.githubusercontent.com/15992276/57819632-5e550100-7757-11e9-8aaf-b92140a45481.JPG)



We want our BST class to support the following 
three functionalities
a. Insertion
b. Searching
c. Deletion

Suppose that we want to insert a number 12.

We start by comparing the root node value by 12

```javascript
10<12

This tell us that we want to insert 12 to the
right of 10 as per the BST property

We can eliminate the left side of 10 as 12 will
not be located in it

```

```javascript

15>12

This tells us that we want to insert 12
to the left of 15 

```


```javascript
13>12

Every value to the right of 13 is greater than 13
so we can elimante the entire right subtree.

```


```javascript
We have reached to the end of the left subtree
of 13.

We can insert the number 12 down here

```

## Searching a BST

Searching a indentical to the logic of insertion
where we eliminate the subtrees.


## Deletion of a BST

Suppose we deleting the node 1

Starting at 10

```javascript

We see that 10>1

We delete the entire right subtree

```

```javascript
5>1

We move to the left of 5 and delete the right subtree

2>1
We move to the left of 2 and delete the right subtree

```
This is an easy case because 1 does not hae a children node
so all we have to do is point the left child of 2 to null.


The difficulty is in deleting a node which has 
a left and a right child node.

If we are told to delelte 10 which is the root node,
we cannot grab a tree and move it up.


```javascript
In this case, we grab the smallest in the right 
subtree of that node.

The leftmost value in the right subtree is 12.
We grab the 12 and relace the root node 10 with 12.

We can do this because 12> than all the values of 
the left subtree. As 12 was the leftmost value
of the right subtree, it is smallest that above value in
the right subtree.

Deleting the 12 from its original position is now easy as it is at the bottom
of the tree.
```
## Average Case

***Time Complexity=O(log(n))***
***Space Complexity=O(1)***


## Worst Case

***Time Complexity=O(n)***
***Space Complexity=O(1)***
















