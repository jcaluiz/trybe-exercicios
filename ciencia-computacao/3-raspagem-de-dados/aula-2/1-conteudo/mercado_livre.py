import requests
from bs4 import BeautifulSoup
from selenium import webdriver

firefox = webdriver.Firefox()


class MercadoLivre:
    def get_link_vendas(self):
        web_request = requests.get("https://www.mercadolivre.com.br/")
        soup = BeautifulSoup(web_request.text, "html.parser")
        list_li = soup.find_all(
            "li",
            class_="nav-menu-item"
        )[4].find("a")["href"]
        return list_li

    def pagina_produtos(self):
        link_venda = self.get_link_vendas()
        js = "return document.body.innerHTML"
        firefox.get(link_venda)
        html_content = firefox.execute_script(js)
        soup = BeautifulSoup(html_content, "html.parser")
        return soup


if __name__ == "__main__":
    mercado_livre = MercadoLivre()
    web_request = mercado_livre.pagina_produtos()
    print(web_request)
