# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from parsel import Selector
import requests
import csv
import json

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox()


def fetch_content(wait) -> str:
    url = firefox.current_url
    page_html = requests.get(url, timeout=wait)
    return page_html.text


# requisições para essa instância criada utilizando o método `get`
def search_in_google(csv_path, search_argument, wait: int = 1):
    csv_dict = []
    with open(csv_path, encoding="utf8") as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            csv_dict.append(row)
    with open("parts.json", "w") as new_file:
        json_to_write = json.dumps(csv_dict)
        new_file.write(json_to_write)

    # response = firefox.get("https://www.google.com.br")
    firefox.get("https://www.google.com.br")
    # print(csv_dict)
    search_input = firefox.find_element("name", "q")
    search_input.send_keys(search_argument)
    sleep(3)
    search_input.send_keys(Keys.ENTER)
    sleep(3)
    firefox.find_element(By.CSS_SELECTOR, "div.MUFPAc :nth-child(2) a").click()
    sleep(3)
    # url = firefox.current_url
    page_html = fetch_content(wait)
    selector = Selector(page_html)
    # titles_products = selector.css("h3.tAxDx").getall()
    print(selector.css("h1").getall())
    print(
        selector.css(
            "div.EI11Pd"
        ).getall()
    )
    # print(titles_products)
    # print(shopping)
    sleep(3)
    firefox.quit()


# path_csv = input("Digite o caminho do arquivo CSV:")
search_in_google("870506.csv", "3523200278 CAVALETE/SUP INF SUS")
# search_in_google(path_csv, "3523200278 CAVALETE/SUP INF SUS")
