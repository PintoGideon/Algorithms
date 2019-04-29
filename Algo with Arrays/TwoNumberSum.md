# Two Number Sum Algorithm (Explaination)

Give an array
```
[3,5,-4,8,11,1,-1,6]
```
and
the integer 10

Find the two numbers in the array which would
sum upto 10

# Hash Table (Time=O(n), Space=O(n))

We will use a hashtable for property lookup to check if we have the number.
```
Target Sum=10   
x+y=10
current num=x 
y=10-x
```

Let's check for each number in the array
```
3
y=10-3
y=7
Is 3 in the hash table? No
{3:"true}

5
y=10-5=5
Is 5 in the hash table? No
{5:true}

-4
y=10-(-4)=14
Is 14 in our hash table? No
{-4:true}

Similary

{
3:"True",
5:"True",
-4:"True",
11:True
}

When we come across -1
x+y=10
y=10-(-1)=11
```

Is 11 in the hash table? Yes We have found our two numbers.

