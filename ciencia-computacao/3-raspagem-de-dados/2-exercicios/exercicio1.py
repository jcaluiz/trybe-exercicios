import requests


def get_request() -> str:
    response = requests.get('https://httpbin.org/encoding/utf8')
    return response.text
