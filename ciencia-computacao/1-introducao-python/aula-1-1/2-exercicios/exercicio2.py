def average(list):
    sum = 0
    for number in list:
        sum += number
    return sum / len(list)


print(average([2, 4, 6, 8, 1]))
