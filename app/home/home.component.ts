import { Component, OnInit } from "@angular/core";
import {EventData} from "data/observable";
import {Button} from "ui/button";
import * as appSettings from "tns-core-modules/application-settings";
import {Constant} from "~/constant";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    private walletText;

    constructor() {
    }

    ngOnInit(): void {
    }

    onTap(args: EventData) {
        appSettings.setString(Constant.WALLET_KEY, this.walletText);
        console.log("LOG: Wallet key has been saved: " + (this.walletText));
    }
}
