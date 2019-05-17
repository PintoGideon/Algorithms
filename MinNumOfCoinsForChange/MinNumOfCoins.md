# Minimun number of coins for change

Target= $6
Coins that we are given [1,2,4]

Solution: 2+4=6
2 coins


We are going to loop through the denominations
array at a time

```python
Is 1<=0
No
If we need to make $0, we cannot
use $1 coin.

Is 1<=1
We can use $1 coin to get to the target
amount of $1.


Is 1<=2?
Yes
2-$1(coin)=1 (We need $1 coin for the remaining amount)
We need to 2 coins to reach the target sum of $2.
```

Similarly

```python

Is 2<=2
2-2(1 coin)=0(0 coins)


Is 2<=3
Yes
3-2(1 coin)=1 (1 coin)
2 coins in total need to meet
the target sum

```

Now iterating through the 2nd denomination
We can update the values.










