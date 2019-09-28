import { Component, OnInit } from "@angular/core";
import {EventData} from "data/observable";
import {Button} from "ui/button";
import * as appSettings from "tns-core-modules/application-settings";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    TURNKEY = "isTurnedOn";

    constructor() {
    }

    ngOnInit(): void {
        appSettings.setBoolean("isTurnedOn", true);
    }

    onTap(args: EventData) {
        let button = args.object as Button;
        let isTurnedOn = appSettings.getBoolean(this.TURNKEY, false);
        console.log((isTurnedOn));
    }

    onTapChangeValue(args: EventData) {
        let isTurnedOn = appSettings.getBoolean(this.TURNKEY, false);
        if (isTurnedOn) {
            console.log("isON");
            appSettings.setBoolean(this.TURNKEY, false);
        }
        else {
            console.log("isOFF");
            appSettings.setBoolean(this.TURNKEY, true);
        }
    }

}
