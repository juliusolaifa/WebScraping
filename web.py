import requests
from bs4 import BeautifulSoup

url = 'http://example.com'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Example: Extract the first <h1> tag
h1_tag = soup.find('h1').text
print(h1_tag)
