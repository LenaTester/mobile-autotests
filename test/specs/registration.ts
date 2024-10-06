import { Screen } from '../pageobjects/screen'
import { RegistrationScreen } from '../pageobjects/registrationScreen'
import { users} from '../../fixtures/users.data'

describe("registration screen tests", ()=> {

    before(async () => {
        const screen = new Screen()
        await screen.allowPermissionsOption.element.waitForDisplayed({timeout: 4000})
        if (await screen.allowPermissionsOption.elements.length > 0) {
            await screen.allowPermissionsOption.click()
            await screen.updateLater.click()
        }
    })

    it("incorrect phone", async () => {

        const registrationScreen = new RegistrationScreen()
        await registrationScreen.registrationWithPhone(users.user2.phone, users.user2.password)

        await expect(await registrationScreen.wrongPhoneEmailMessage.element.getText()).toEqual('Niepoprawny numer telefonu')
        driver.back()
    })

    it("incorrect email", async () => {

        const registrationScreen = new RegistrationScreen()
        await registrationScreen.registrationWithEmail(users.user3.email, users.user3.password)

        await expect(await registrationScreen.createAccountButton.element).not.toBeEnabled()
        driver.back()
    })

    it("week password", async () => {

        const registrationScreen = new RegistrationScreen()
        await registrationScreen.registrationWithPhone(users.user4.phone, users.user4.password)

        await expect(await registrationScreen.createAccountButton.element).not.toBeEnabled()
        driver.back()
    })

    it("empty creds", async () => {

        const registrationScreen = new RegistrationScreen()
        await registrationScreen.registrationWithPhone(users.user5.phone, users.user5.password)

        await expect(await registrationScreen.createAccountButton.element).not.toBeEnabled()
        driver.back()
    })
})

