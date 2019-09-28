import { Component, OnInit } from "@angular/core";
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

    ngOnInit(): void {
    }

    setWallet() {
        appSettings.setString(Constant.WALLET_KEY, this.walletText);
        console.log("LOG: Wallet key has been saved: " + (this.walletText));
    }
}