const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

// Description du block
describe('Ajouter des tâches au test', () => {

    // Le block
    it("Ajout avec succès d'une tâche à l'application", async function () {

        // Ici on donne un exemple de recherche dans le navigateur
        var searchString = "Automation testing with Selenium and JavaScript";

        // On crée une nouvelle instance de navigateur pour Google Chrome
        let driver = await new Builder().forBrowser("chrome").build();

        // On navigue vers l'application Web à l'aide du driver.get
        await driver.get("http://google.com");

        // On envoie une requête de recherche en passant la valeur dans searchString
        await driver.findElement(By.id("L2AGLb")).sendKeys(Key.RETURN);
        await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);

        // On vérifie le titre de la page et on l'affiche dans le terminal
        var title = await driver.getTitle();
        console.log('Le titre est :', title);

        // On utilise driver.quit pour fermer le navigateur
        await driver.quit();
        
    });
});








