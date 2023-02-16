def fatorial(seq):
    fatorial_numbers = range(1, seq + 1)
    mult_numbers = 1
    for number in fatorial_numbers:
        mult_numbers = mult_numbers * number
    return mult_numbers


print(fatorial(4))
