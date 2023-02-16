def asteristicos(number):
    number_range = range(number * number)
    ast = []
    for aste in number_range:
        ast.append('*')


print(asteristicos(5))
