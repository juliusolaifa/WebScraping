const axios = require('axios');
const cheerio = require('cheerio');

const url = 'http://example.com';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // Example: Extract the first <h1> tag
    const h1Tag = $('h1').first().text();
    console.log(h1Tag);
  })
  .catch(error => console.error(error));
