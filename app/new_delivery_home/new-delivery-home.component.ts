import { Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: "new-delivery-home",
    moduleId: module.id,
    templateUrl: "./new-delivery-home.component.html",
    styleUrls: ['./new-delivery-home.component.css']
})
export class NewDeliveryHomeComponent {

    constructor(private routerExtensions: RouterExtensions) {

    }

    onNewDeliveryButtonTap() {
        this.routerExtensions.navigate(["/new-delivery-form"]);
    }
}
