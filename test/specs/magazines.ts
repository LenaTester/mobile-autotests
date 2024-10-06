import { Screen } from '../pageobjects/screen'
import { MagazinesScreen } from '../pageobjects/magazinesScreen'

describe("coupones screen tests", ()=> {

    before(async () => {
        const screen = new Screen()
        await screen.allowPermissionsOption.element.waitForDisplayed({timeout: 4000})
        if (await screen.allowPermissionsOption.elements.length > 0) {
            await screen.allowPermissionsOption.click()
            await screen.updateLater.click()
        }
    })

    it("checks magazines absence, when store is not selected", async () => {

        const magazinesScreen = new MagazinesScreen()
        await magazinesScreen.navigateToMagazines()
        await expect(await magazinesScreen.magazinesCounter.element.getText()).toEqual('Gazetki (0)')
    })

    it("checks magazines availability, when store is selected", async () => {

        const magazinesScreen = new MagazinesScreen()
        await magazinesScreen.navigateToMagazines()
        await magazinesScreen.chooseShop.click()
        const screen = new Screen()
        await screen.addStore()
        await magazinesScreen.navigateToMagazines()
        await expect(await magazinesScreen.magazinesCounter.element.getText()).toMatch(/^Gazetki \(([1-9][0-9]?|100)\)$/) })
    })