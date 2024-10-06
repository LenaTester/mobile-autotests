import { Component } from "../../components/component"
import { Screen } from "./screen" 

export class RegistrationScreen extends Screen{
    readonly menuIcon: Component
    readonly welcomeMessage: Component
    readonly registration:Component
    readonly emailRadio: Component
    readonly phoneEmailField: Component
    readonly registerPassword: Component
    readonly createAccountButton: Component
    readonly wrongPhoneEmailMessage: Component

    constructor() {
        super()
        this.menuIcon = new Component({ selector: '(//android.widget.ImageView[@resource-id="pl.carrefour.carrefourmobile:id/bottom_navigation_item_icon"])[5]'} )
        this.welcomeMessage = new Component({ selector: 'id=welcome_message'})
        this.registration = new Component({ selector: '//*[contains(@text, "REJESTRACJA")]'})
        this.emailRadio = new Component({ selector: 'id=email_radio_button'})
        this.phoneEmailField = new Component({ selector: 'id=phone_email_adress_input'})
        this.registerPassword= new Component({ selector: 'id=register_password_input'})
        this.createAccountButton = new Component({ selector: 'id=button_create_account'})
        this.wrongPhoneEmailMessage = new Component({ selector: 'id=textinput_error'})
    }

    async registrationWithPhone(phone: string, password: string) {
        await this.menuIcon.click()
        await this.welcomeMessage.click()
        await this.registration.click()
        await this.phoneEmailField.setValue(phone)
        await this.registerPassword.setValue(password)
        await this.createAccountButton.click()
    }

    async registrationWithEmail(email: string, password: string) {
        await this.menuIcon.click()
        await this.welcomeMessage.click()
        await this.registration.click()
        await this.emailRadio.click()
        await this.phoneEmailField.setValue(email)
        await this.registerPassword.setValue(password)
        await this.createAccountButton.click()
    }
}