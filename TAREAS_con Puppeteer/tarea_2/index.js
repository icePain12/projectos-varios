const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com.mx');


  await page.type('#twotabsearchtextbox', 'intel core i7 11700k');
  await page.click('.nav-search-submit input');
  await page.waitForSelector('[data-component-type=s-search-result]');

 
  const firstProductLink = await page.evaluate(() => {
    return document.querySelector('[data-component-type=s-search-result] h2 a').href;
  });
  await page.goto(firstProductLink);

  
  const pdf = await page.pdf({
    path: 'product-details.pdf',
    format: 'A4'
  });

  console.log(`PDF generado: ${pdf}`);

  await browser.close();
})();