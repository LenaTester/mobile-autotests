import { Screen } from '../pageobjects/screen'

describe("home screen tests", ()=> {

    before(async () => {
        const screen = new Screen()
        await screen.allowPermissionsOption.element.waitForDisplayed({timeout: 4000})
        if (await screen.allowPermissionsOption.elements.length > 0) {
            await screen.allowPermissionsOption.click()
            await screen.updateLater.click()
        }
    })

    it("checks category titles on home page", async () => {

        const screen = new Screen()
        const expectedValues = ['KUPONY', 'POLECANE OFERTY', 'PROMOCJE', 'ZAKUPY', 'TWÓJ SKLEP', 'GAZETKI']
        let actualValues = []

        for await (const element of screen.titles.elements) {
            actualValues.push(await element.getText())
        }

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("ZAKUPY")')
        for await (const element of screen.titles.elements) {
            actualValues.push(await element.getText())
        }

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(3)')
        for await (const element of screen.titles.elements) {
            actualValues.push(await element.getText())
        }

        await expect(actualValues).toEqual(expectedValues)
    })
    
    it("checking footer menu", async () => {

        const screen = new Screen()
        const expectedValues = ["Home", "Twoja Karta", "Kupony", "Gazetki", "Menu"]
        let actualValues = []

        for await (const element of screen.bottomNavItems.elements) {
            actualValues.push(await element.getText())
        }

        await expect(actualValues).toEqual(expectedValues)
    })
})