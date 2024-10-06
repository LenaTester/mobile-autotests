import { Component } from "../../components/component"
import { Screen } from "./screen" 

export class MenuScreen extends Screen{
    readonly menuIcon: Component
    readonly yourStore: Component
    readonly myShopTitle: Component
    readonly myShopName: Component
    readonly showMoreButton: Component
    readonly removeStoreButton: Component
    readonly noStoreMessage: Component
    readonly discounts: Component

    constructor() {
        super()
        this.menuIcon = new Component({ selector: '(//android.widget.ImageView[@resource-id="pl.carrefour.carrefourmobile:id/bottom_navigation_item_icon"])[5]'} )
        this.yourStore = new Component({ selector: '//android.widget.ImageView[@content-desc="Ikona twoich sklepów"]' })
        this.myShopTitle = new Component({ selector: '//*[contains(@text, "Twój sklep")]'})
        this.myShopName = new Component({ selector: 'id=shopName' })
        this.showMoreButton = new Component({ selector: 'id=showMore' })
        this.removeStoreButton = new Component({ selector: '//*[contains(@text, "Usuń")]' })
        this.noStoreMessage = new Component({ selector: 'id=maskTitle' })
        this.discounts = new Component({ selector: '//*[contains(@text, "Kupony")]' })
    }

    async selectMyStore() {
        const screen = new Screen()
        await this.menuIcon.click()
        await this.yourStore.click()
        await screen.addStore()
    }

    async deleteMyStore() {
        await this.menuIcon.click()
        await this.yourStore.click()
        await this.showMoreButton.click()
        await this.removeStoreButton.click()
    }
}