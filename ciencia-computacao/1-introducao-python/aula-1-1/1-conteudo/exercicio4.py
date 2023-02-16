books = 60
book_price = 24.20 * (1 - 0.4)
logistic = 3 + (books - 1) * 0.75
cost = round(books * book_price + logistic, 2)
print(f'O custo total de atacado para 60 cópias é de R$ {cost}')
