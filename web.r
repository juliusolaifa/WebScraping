library(rvest)

url <- 'http://example.com'
webpage <- read_html(url)

# Example: Extract the first <h1> tag
h1_tag <- html_text(html_nodes(webpage, 'h1')[1])
print(h1_tag)
