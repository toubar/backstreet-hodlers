import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {IDelivery} from "~/types";
import axios from "axios";
import * as appSettings from "application-settings";
import {Constant} from "~/constant";
import {TextField} from "tns-core-modules/ui/text-field";

@Component({
    selector: "new-delivery-form",
    moduleId: module.id,
    templateUrl: "./new-delivery-form.component.html",
    styleUrls: ['./new-delivery-form.component.css']
})

export class NewDeliveryFormComponent  {
    private from: string;
    private to: string;
    private description: string;
    private tokens: number;

    private newDelivery: IDelivery;

    onButtonTap = () => {
        console.log(this.from);

        this.newDelivery.from = this.from;
        this.newDelivery.to = this.to;
        this.newDelivery.description = this.description;
        this.newDelivery.tokens = this.tokens;

        const delivery: IDelivery = {
            from: this.from,
            to: this.to,
            description: this.description,
            tokens: this.tokens
        };
        this.postNewDelivery(delivery);
    };

    postNewDelivery = (deliveryData: IDelivery) => {
        const newDelivery = {
            privateKey: appSettings.getString(Constant.WALLET_KEY),
            from: deliveryData.from,
            to: deliveryData.to,
            description: deliveryData.description,
            tokens: deliveryData.tokens,
        };
        axios.post(`https://backstreet-hodlers.herokuapp.com/`, newDelivery)
            .then((res) => {
                console.log(res.status);
                console.log("success!");
            })
            .catch((err) => {
                console.log("Could not get list of deliveries, ERR: ", err.toString());
            })
    };
}
