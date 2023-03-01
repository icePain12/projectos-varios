var express = require("express");
var router = express.Router();
var puppeteer = require("puppeteer");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Busqueda Puppeteer", merc: "" });
});

router.post("/", async function (req, res, next) {
  let mercado = await f1(req.body.proc);
  let escribir = "";
  escribir += `Nombre: ${mercado[0]} `;
  escribir += `Descripción: ${mercado[1]} `;
  escribir += `Precio: ${mercado[2]} `;
  escribir += `Precio de Envio: ${mercado[3]} `;
  escribir += `URL: ${mercado[4]} `;
  escribir += `Imagen: ${mercado[5]} `;

  res.render("index", { title: "Busqueda Puppeteer", merc: escribir });
});

/*router.post('/', async function(req, res, next) {
  
//  res.json(req.body);
  // res.render('index', { title: 'Express' });
  // puppeteer start
  let mercado = await f1(req.body.proc)
  // console.log(mercado);

  let escribir = `Nombre: ${mercado[0]}\n Descripcion: ${mercado[1]}\n Precio: ${mercado[2]}\n Precio de Envio: ${mercado[3]}\n URL: <a href="${mercado[3]}">${mercado[0]}</a>\n Imagen: <img src="${mercado[4]}" />`;

 // f1(req.body.proc);
 res.render('index',{title:'Busqueda Puppeteer', merc:escribir});

}); */

// Funciones

async function f1(proc) {
  const fs = require("fs");

  //   const browser = await puppeteer.launch({headless:false, executablePath:'C:/Program Files/Mozilla Firefox/firefox.exe'});

  // const browser = await puppeteer.launch({headless:false, executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "C:/Users/david/AppData/Local/Google/Chrome SxS/Application/chrome.exe",
  });

  const page = await browser.newPage();

  await page.goto("https://www.mercadolibre.com.mx", { waitUntil: "load" });

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  // Type into search box
  // await page.type('.search-box__input', 'automate beyond recorder');
  // Wait and click on first result

  await page.waitForSelector("input.nav-search-input");
  await page.type("input.nav-search-input", proc);
  await page.click(".nav-search-btn");

  // await page.click('#categorySearch');
  //  await page.click('.nav-search-btn');
  await page.waitForSelector("a .ui-search-item__title");
  
  await page.click("a .ui-search-item__title");
  await page.waitForTimeout(5000);
  // Nombre, Descripcion, Precio, Precio de Envio, Imagen.

  const nombre = proc;
  const url = page.url();

  const descripcion = ".ui-pdp-header__title-container h1";

  const desc = await page.evaluate((descripcion) => {
    const d = document.querySelector(descripcion);
    return d.innerHTML;
  }, descripcion);

  const precio =
    ".ui-pdp-price__second-line .andes-money-amount .andes-money-amount__fraction";

  const price = await page.evaluate((precio) => {
    let elem = document.querySelector(precio).innerHTML;
    // const d = document.querySelector(precio);
    let news = `$${elem}`;
    return news;
  }, precio);
  const img1 = "img.ui-pdp-image.ui-pdp-galleryfigureimage[src] ";
  const imgs = await page.$$eval(img1, (imgs) =>
    imgs.map((imagen) => imagen.getAttribute("src"))
  );
  const filter = imgs.filter((img) => img.startsWith("h"));
  const img = filter[0];

  let newS = "";
  const send = ".andes-tooltip__trigger > .ui-pdp-color--GREEN";
  if ((await page.evaluate((send) => {})) != null) {
    await page.evaluate((send) => {
      let s = document.querySelector(send).innerHTML;
      let i = s.indexOf("<");
      newS = s.slice(0, i).trim();
    }, send);
  } else {
    newS = "Envío gratis a todo el país";
  }
  const env = newS;
  const result = [nombre, desc, price, env, url, img];
  fs.writeFile("resultado.json", JSON.stringify(result), function (err) {
    if (err) throw err;
    console.log("El archivo resultado.json ha sido creado exitosamente.");
  });
  //  await browser.close();
  return result;
}
module.exports = router;
