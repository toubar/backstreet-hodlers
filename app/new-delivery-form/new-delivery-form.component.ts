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

    onButtonTap = () => {
        this.postNewDelivery();
    };

    postNewDelivery = () => {
        const newDeliveryJson = {
            privateKey: appSettings.getString(Constant.WALLET_KEY),
            tokens: this.tokens,
            description: this.description,
            from: this.from,
            to: this.to,
        };
        axios.post(`https://backstreet-hodlers.herokuapp.com/deliveries`, newDeliveryJson)
            .then((res) => {
                console.log(res.status);
                console.log("success!");
            })
            .catch((err) => {
                console.log("Could not get list of deliveries, ERR: ", err.toString());
            })
    };
}
