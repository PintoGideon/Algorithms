# Depth First Search

For every node, we are going to add the node's name in
the final array, and then for every child node the node has,
we are going to call the DFS function.

We start at root node A and call the DFS function
[A]
For B,C,D we call DFS
[A,B]
For E we call DFS
[A,B,E]
E is the End of the branch, so we have explored
the depth of one branch
F is the other child of B
[A,B,E,F]
For I, We call DFS
[A,B,E,F,I]
Now I does not have a child node, so we move to J
[A,B,E,F,I,J]
Now J does not have a child node, So we done with
this branch

Now we call DFS on the second child of node A
[A,B,E,F,I,J,C]
Similary doing this for child D we get the final
array as
[A,B,E,F,I,J,C,D,G,K,H]

**Time=O(v+e)**
**Space=O(V)**
