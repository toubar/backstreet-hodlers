import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: "new-delivery-home",
    moduleId: module.id,
    templateUrl: "./new-delivery-form.component.html",
    styleUrls: ['./new-delivery-form.component.css']
})
export class NewDeliveryFormComponent {

    onButtonTap(): void {
        console.log("Button was pressed");
    }
}
