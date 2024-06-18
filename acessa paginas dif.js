import fetch from 'node-fetch';
import cheerio from 'cheerio';
import fs from 'fs';
import parser from 'node-html-parser'

const dataFilePath = './dataOutput/CSGOskinsData.json';
let data = [];

async function scrapePage(pageNum) {
  const response = await fetch(`https://csgoskins.gg/?page=${pageNum}`);
  const html = await response.text();
  const $ = cheerio.load(html);

  $('body > div > div:nth-child(3)').children().each(function(x) {
    $(this).find('div').each(function(i) {
      const looped = $(this);
      let category, name;

      if (i === 0) {
        category = looped.text().trim().split('\n')[0];
        name = looped.text().trim().split('\n')[1];
        console.log('Categoria = ', category, 'Nome =', name);
      }

      const dataObj = {
        category,
        name,
        otherInfo: 'Other info here' // Replace this with the other data you want to include
      };

      data.push(dataObj);
    });
  });	
}

async function scrapePages() {
  for (let i = 1; i <= 3; i++) {
    await scrapePage(i);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Wait 1.5 seconds before scraping the next page
  }

  // Append the new data to the existing JSON file
  fs.appendFile(dataFilePath, JSON.stringify(data, null, 2), function (err) {
    if (err) throw err;
    console.log('New data appended to', dataFilePath);
  });
}

scrapePages();
