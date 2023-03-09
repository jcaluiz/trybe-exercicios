import requests
# from parsel import Selector


def github_request(url: str, wait: int = 1):
    try:
        response = requests.get(url, timeout=wait)
        response.raise_for_status()
    except (requests.HTTPError, requests.ReadTimeout):
        return ""

    return response.json()


def github_get_users(content):
    for user in content:
        print(f"{user['login']} {user['url']}")


if __name__ == "__main__":
    page_content = github_request('https://api.github.com/users')
    users_content = github_get_users(page_content)
