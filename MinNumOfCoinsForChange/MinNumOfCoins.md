# Minimun number of coins for change

Target= $6
Coins that we are given [1,2,4]



Solution: 2+4=6
We need two coins to make a sum of $6.


We are going to loop through the denominations
array at a time
![minValue1](https://user-images.githubusercontent.com/15992276/57952930-a3df0e80-78bc-11e9-956d-57a209130882.JPG)
![minValue2](https://user-images.githubusercontent.com/15992276/57952931-a3df0e80-78bc-11e9-8dff-f770526e5a9b.JPG)
![minValue3](https://user-images.githubusercontent.com/15992276/57952932-a3df0e80-78bc-11e9-9b39-dff852a7205b.JPG)
![minValue4](https://user-images.githubusercontent.com/15992276/57952933-a3df0e80-78bc-11e9-8d65-4722ec5bcfdd.JPG)


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










