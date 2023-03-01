const puppeteer = require("puppeteer");
(async() => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    
    await page.goto('http://www.amazon.com.mx');
   // await page.screenshot({path:'amazon1.jpg',fullPage: true});
    await page.type('#twotabsearchtextbox','libros de javascript');
   // await page.screenshot({path:'amazon2.jpg',fullPage: true});
    await page.click('.nav-search-submit input');
    await page.waitForSelector('[data-component-type=s-search-result]'); 
    await page.waitForTimeout(2000);
    // await page.screenshot({path:'amazon3.jpg',fullPage: true});

    const enlaces = await page.evaluate(() => {
         const elements = document.querySelectorAll('[data-component-type=s-search-result] h2 a');
         const links = [];
         for(let element of elements){
            links.push(element.href);
         }
         return links;      
    }); 

    for(let enlace of enlaces){
      await page.goto(enlace);
      await page.waitForTimeout(1000);

    } 

   //   console.log(enlaces.length);
      
    await browser.close();
})();
