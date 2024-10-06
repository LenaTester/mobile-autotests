import { Component } from "../../components/component"
import { Screen } from "./screen" 

export class CouponesScreen extends Screen{
    readonly couponIcon: Component
    readonly couponesCounter: Component
    readonly chooseShop: Component;

    constructor() {
        super()
        this.couponIcon = new Component({ selector: '(//android.widget.ImageView[@resource-id="pl.carrefour.carrefourmobile:id/bottom_navigation_item_icon"])[3]' } )
        this.couponesCounter = new Component ({ selector: '//*[contains(@text, "Kupony" )]' })
        this.chooseShop = new Component ({ selector: 'id=chooseShopTitle' })
    }

    async navigateToCoupones() {
        await this.couponIcon.click()
    }
}