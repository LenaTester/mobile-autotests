import { Screen } from '../pageobjects/screen'
import { CouponesScreen } from '../pageobjects/couponesScreen'

describe("coupones screen tests", ()=> {

    before(async () => {
        const screen = new Screen()
        await screen.allowPermissionsOption.element.waitForDisplayed({timeout: 4000})
        if (await screen.allowPermissionsOption.elements.length > 0) {
            await screen.allowPermissionsOption.click()
            await screen.updateLater.click()
        }
    })

    it("checks coupones absence, when store is not selected", async () => {

        const couponesScreen = new CouponesScreen()
        await couponesScreen.navigateToCoupones()
        await expect(await couponesScreen.couponesCounter.element.getText()).toEqual('Kupony (0)')
    })

    it("checks coupones availability, when store is selected", async () => {

        const couponesScreen = new CouponesScreen()
        await couponesScreen.navigateToCoupones()
        await couponesScreen.chooseShop.click()
        const screen = new Screen()
        await screen.addStore()
        await couponesScreen.navigateToCoupones()
        await expect(await couponesScreen.couponesCounter.element.getText()).toMatch(/^Kupony \(([1-9][0-9]?|100)\)$/) })
})