import { Screen } from '../pageobjects/screen'
import { MenuScreen } from '../pageobjects/menuScreen'

describe("menu screen tests", ()=> {

    before(async () => {
        const screen = new Screen()
        await screen.allowPermissionsOption.element.waitForDisplayed({timeout: 4000})
        if (await screen.allowPermissionsOption.elements.length > 0) {
            await screen.allowPermissionsOption.click()
            await screen.updateLater.click()
        }
    })

    it("adding store", async () => {

        const menuScreen = new MenuScreen()
        await menuScreen.selectMyStore()
        await expect(await menuScreen.myShopTitle.element).toBeExisting()
        await expect(await menuScreen.myShopName.element.getText()).toContain('Carrefour Express')
    })

    it("deleting store", async () => {

        const menuScreen = new MenuScreen()
        await menuScreen.deleteMyStore()
        await expect(await menuScreen.noStoreMessage.element.getText()).toEqual('Nie wybrałeś jeszcze sklepu')

    })
})