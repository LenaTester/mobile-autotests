import { Component } from "../../components/component"

export class Screen {
    readonly allowPermissionsOption: Component
    readonly updateLater: Component
    readonly titles: Component
    readonly bottomNavItems: Component
    readonly addStoreButton: Component
    readonly nearestStore: Component
    readonly addMyStoreButton: Component
    readonly confirmMyShop: Component

    constructor() {
        this.allowPermissionsOption = new Component({ selector: '//*[ends-with(@resource-id, "permission_allow_foreground_only_button")]'} )
        this.updateLater = new Component({ selector: 'id=android:id/button2' })
        this.titles = new Component({ selector: '//*[ends-with(@resource-id, "id/title")]' })
        this.bottomNavItems = new Component({ selector: 'id=bottom_navigation_item_title'})
        this.addStoreButton = new Component({ selector: '//*[ends-with(@resource-id, "maskImageButton")]' })
        this.nearestStore = new Component({ selector: 'id=shop_title' })
        this.addMyStoreButton = new Component({ selector: 'id=menu_myshop' })
        this.confirmMyShop = new Component({ selector: 'id=android:id/button1' })
    }

    async addStore() {
        await this.addStoreButton.click()
        await this.nearestStore.click()
        await this.addMyStoreButton.click()
        await this.confirmMyShop.click()
    }
}