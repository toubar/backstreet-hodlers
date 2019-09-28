import { Component, OnInit } from "@angular/core";
import * as appSettings from "tns-core-modules/application-settings";
import {Constant} from "~/constant";
import {OasisConnection} from "~/backend_oasis/oasis-connection"
import {RouterExtensions} from "nativescript-angular";
import oasis from '@oasislabs/client';


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    private walletText;
    private oasisConnexion;

    constructor(private routerExtensions: RouterExtensions) {

    }

    ngOnInit(): void {
    }

    setWallet() {
        appSettings.setString(Constant.WALLET_KEY, this.walletText);
        console.log("LOG: Wallet key has been saved: " + (this.walletText));
        // this.oasisConnexion = new OasisConnection();
        // let test = this.oasisConnexion.connectToOasis();
        // console.log(test);
        let promise = this.connectToOasis();


        let booleanPromise = this.routerExtensions.navigate(["/deliveryHome"], {clearHistory: true});
    }

    public async connectToOasis() {
        console.log("LOG: creating oasis connection");
        const headers = new Map();
        headers.set('X-OASIS-LOGIN-TOKEN', "range drive remove bleak mule satisfy mandate east lion minimum unfold ready");
        headers.set('X-OASIS-SESSION-KEY', 'test-session');

        const gateway = new oasis.gateways.Gateway('http://192.168.51.76:8546', null, { headers });
        oasis.setGateway(gateway);
        console.log("LOG: oasis connection created");
    }
}