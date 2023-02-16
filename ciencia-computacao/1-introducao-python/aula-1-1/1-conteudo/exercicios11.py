"a estrutura de repetição FOR"

y_list = [20, 20, 1, 2]
new_list = {}

for list in y_list:
    if list in new_list:
        print(list)
        new_list[list] += 1
    else:
        new_list[list] = 1

# new_list = {number for number in y_list if number in new_list}

print(new_list)
