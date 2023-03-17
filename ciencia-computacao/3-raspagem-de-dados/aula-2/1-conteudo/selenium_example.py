# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# from parsel import Selector
import requests
import csv
import json
from bs4 import BeautifulSoup
import re

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox()


class FindPartsGoogle:
    def fetch_content(self, wait: int = 1) -> str:
        url = firefox.current_url
        page_html = requests.get(url, timeout=wait)
        return page_html.text

    # requisições para essa instância criada utilizando o método `get`
    def search_in_google(
            self, csv_path, search_argument, wait: int = 1, number: int = 1
            ):
        csv_dict = []
        with open(csv_path, encoding="utf8") as file:
            csv_reader = csv.DictReader(file)
            for row in csv_reader:
                csv_dict.append(row)
        with open("parts.json", "w") as new_file:
            json_to_write = json.dumps(csv_dict)
            new_file.write(json_to_write)

        firefox.get("https://www.google.com.br")
        search_input = firefox.find_element("name", "q")
        search_input.send_keys(search_argument)
        sleep(3)
        search_input.send_keys(Keys.ENTER)
        sleep(3)
        shopping_data_hveid = ""
        if number == 1:
            shopping_data_hveid = '[data-hveid="CAEQAw"]'
        if number == 2:
            shopping_data_hveid = '[data-hveid="CAEQBA"]'
        if number == 3:
            shopping_data_hveid = '[data-hveid="CAEQBQ"]'
        print(number)
        shopping = WebDriverWait(firefox, 10).until(
            EC.presence_of_element_located(
                (By.CSS_SELECTOR,
                    shopping_data_hveid)
                )
            )
        shopping.click()
        sleep(3)
        page_html = self.fetch_content(wait)
        # firefox.quit()
        return page_html

    def get_products_html(
            self, path_csv, name_product, wait: int = 1, number: int = 1
            ):
        self.search_in_google(path_csv, name_product, wait, number)
        url = firefox.current_url
        js = "return document.body.innerHTML"
        firefox.get(url)
        html_content = firefox.execute_script(js)
        soup = BeautifulSoup(html_content, "html.parser")
        products_container_find_all = soup.find_all(
            "div", class_="sh-dgr__content"
        )
        return products_container_find_all

    def get_products_name(self, get_html):
        products_html = get_html
        products_name_container = []
        for product in products_html:
            product_name = product.find("h3", class_="tAxDx")
            products_name_container.append(product_name.text)
        return products_name_container

    def get_products_price(self, get_html):
        products_html = get_html
        products_price_container = []
        for product in products_html:
            product_price = product.find("span", class_="a8Pemb OFFNJ")
            regex = re.compile(r"\d+[,]\d+")
            for match in regex.finditer(product_price.text):
                products_price_container.append(match.group())
        for i in range(len(products_price_container)):
            products_price_container[i] = re.sub(
                ",", ".", products_price_container[i]
            )
        return products_price_container

    def get_products_url(self, get_html):
        products_html = get_html
        products_url_container = []
        for product in products_html:
            url_base = "https://www.google.com.br"
            product_url = product.find("a", class_="shntl")["href"]
            products_url_container.append(url_base + product_url)
        return products_url_container

    def save_products_json(self, get_html, product_to_search, json_name):
        products_name = self.get_products_name(get_html)
        products_price = self.get_products_price(get_html)
        products_url = self.get_products_url(get_html)
        products_list = []
        for i in range(len(products_name)):
            products_list.append(
                {
                    "nome do produto": products_name[i],
                    "preco": products_price[i],
                    "link do produto": products_url[i],
                }
            )
        with open(json_name, "w") as file:
            json_to_write = json.dumps(products_list)
            file.write(json_to_write)
        # firefox.quit()
        return products_list


# path_csv = input("Digite o caminho do arquivo CSV:")
if __name__ == "__main__":
    find_parts_google = FindPartsGoogle()
    csv_dict = []
    with open("870506.csv", encoding="utf8") as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            csv_dict.append(row)
    number = 0
    for product in csv_dict:
        product_code_original = product["ORIGINAL"]
        product_description = product["DESCRICAO"]
        product_to_search = f"{product_code_original} {product_description}"
        json_name = f"data/{product_code_original}.json"
        number += 1
        if number == 3:
            number = 1
        products_html = find_parts_google.get_products_html(
            "870506.csv",
            product_to_search,
            number,
        )
        search = find_parts_google.save_products_json(
            products_html, product_to_search, json_name
            )
    print(search)
    # print(product.ORIGINAL, product.DESCRICAO)
    # print(product["ORIGINAL"])
# search_in_google(path_csv, "3523200278 CAVALETE/SUP INF SUS")
