import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {IDelivery} from "~/types";
import axios from "axios";
import * as appSettings from "application-settings";
import {Constant} from "~/constant";

@Component({
    selector: "new-delivery-home",
    moduleId: module.id,
    templateUrl: "./new-delivery-form.component.html",
    styleUrls: ['./new-delivery-form.component.css']
})
export class NewDeliveryFormComponent  {

    private newDelivery: IDelivery;
    // private newDelivery: IDelivery;

    onButtonTap = () => {
        console.log(this.newDelivery);
        this.postNewDelivery(this.newDelivery);
    };

    postNewDelivery = (deliveryData: IDelivery) => {
        const newDelivery = {
            privateKey: appSettings.getString(Constant.WALLET_KEY),
            from: deliveryData.from,
            to: deliveryData.to,
            description: deliveryData.description,
            tokens: deliveryData.tokens,
        };
        axios.post(`192.168.51.66:8080`, newDelivery)
            .then((res) => {
                console.log(res.status);
                console.log("success!");
            })
            .catch((err) => {
                console.log("Could not get list of deliveries, ERR: ", err.toString());
            })
    };
}
