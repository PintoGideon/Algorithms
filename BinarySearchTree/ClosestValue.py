# Average: O(Log(n)) | O(log(n))


def findClosestValueInBst(tree, target):
    return findClosestValueInBstHelper(tree, target, float('inf'))


def findClosestValueInBstHelper(tree, target, closestValue):
    if tree is None:
        return closestValue
    if abs(target-closestValue) > abs(target-tree.value):
        closest = tree.value

    if target < tree.value:
        return findClosestValueInBstHelper(tree.left, target, closest)
    elif target > tree.value:
        return findClosestValueInBstHelper(tree.right, target, closest)
    else:
        return closest
