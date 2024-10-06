import { Component } from "../../components/component"
import { Screen } from "./screen" 

export class MagazinesScreen extends Screen{
    readonly magazinesIcon: Component
    readonly magazinesCounter: Component
    readonly chooseShop: Component;

    constructor() {
        super()
        this.magazinesIcon = new Component({ selector: '(//android.widget.ImageView[@resource-id="pl.carrefour.carrefourmobile:id/bottom_navigation_item_icon"])[4]' })
        this.magazinesCounter = new Component ({ selector: '//*[contains(@text, "Gazetki" )]' })
        this.chooseShop = new Component ({ selector: 'id=maskButtonPrimary' })
    }

    async navigateToMagazines() {
        await this.magazinesIcon.click()
    }
}