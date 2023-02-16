def square(side):
    return side * side


def rectangle(length, width):
    return length * width


def circle(radius):
    return round(3.14 * radius * radius, 2)


print("Área do quadrado:", square(10))
print("Área do retângulo:", rectangle(2, 2))
print("Área do círculo:", circle(3))
