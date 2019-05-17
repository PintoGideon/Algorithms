
# O(nd)time |


def minNumOfCoinsForChange(denoms, target):
    calcCoins = [float("inf") for amount in range(target+1)]

    calcCoins[0] = 0

    for denom in denoms:
        for amount in range(len(calcCoins)):
            if denom <= amount:
                calcCoints[amount] = min(
                    calcCoins[amount], 1+calcCoins[amount-denom])
    return calcCoins[target] if calcCoins[target] != float("inf") else -1
