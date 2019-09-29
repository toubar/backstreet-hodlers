import {ItemEventData} from "tns-core-modules/ui/list-view"
import {AfterViewInit, Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import axios from "axios";
import {IDelivery} from "~/types"

@Component({
    selector: "new-delivery-home",
    moduleId: module.id,
    templateUrl: "./new-delivery-home.component.html",
    styleUrls: ['./new-delivery-home.component.css']
})

export class NewDeliveryHomeComponent implements AfterViewInit {

    // deliveries: Array<IDelivery> = [];

    constructor(private routerExtensions: RouterExtensions) {

    }

    ngAfterViewInit() {
        console.log("LOG: NewDeliveryHomeComponent just rendered")
        // axios.get("localhost:8080/")
        //     .then((res) => {
        //         // this.deliveries = res.data;
        //     })
        //     .catch((err)=> {
        //         console.log(err.toString());
        //     });
    }

    onNewDeliveryButtonTap() {
        this.routerExtensions.navigate(["/new-delivery-form"], {clearHistory: false});
    }

    // dummy data
    dummyDeliveries: IDelivery[] = [
        {
            status: "OPEN",
            id: "1",
            initiator: "alberto",
            deliverer: "alex",
            from: "Prague 1",
            to: "Prague 2",
            description: "",
            tokens: 5,
        },
        {
            status: "OPEN",
            id: "2",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 1",
            to: "Prague 3",
            description: "",
            tokens: 6,
        },
        {
            status: "OPEN",
            id: "3",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 1",
            to: "Prague 3",
            description: "",
            tokens: 2,
        },
        {
            status: "OPEN",
            id: "4",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 1",
            to: "Prague 4",
            description: "",
            tokens: 3,
        },
        {
            status: "OPEN",
            id: "5",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 5",
            to: "Prague 6",
            description: "",
            tokens: 6
        },
        {
            status: "OPEN",
            id: "6",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 1",
            to: "Prague 7",
            description: "",
            tokens: 9,
        },
        {
            status: "OPEN",
            id: "7",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 3",
            to: "Prague 7",
            description: "",
            tokens: 5,
        },
        {
            status: "OPEN",
            id: "8",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 4",
            to: "Prague 1",
            description: "",
            tokens: 3,
        },
        {
            status: "OPEN",
            id: "9",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 8",
            to: "Prague 2",
            description: "",
            tokens: 8,
        },
        {
            status: "OPEN",
            id: "10",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 1",
            to: "Prague 1",
            description: "",
            tokens: 3,
        },
        // {
        //     status: "COMPLETED",
        //     id: "11",
        //     initiator: "rey",
        //     deliverer: "toubar",
        //     from: "alberto",
        //     to: "rey",
        //     description: "Novakovych 8",
        //     tokens: 12,
        // },
        // {
        //     status: "IN_PROGRESS",
        //     id: "12",
        //     initiator: "rey",
        //     deliverer: "toubar",
        //     from: "alberto",
        //     to: "rey",
        //     description: "Novakovych 8",
        //     tokens: 12,
        // },
        // {
        //     status: "OPEN",
        //     id: "13",
        //     initiator: "rey",
        //     deliverer: "toubar",
        //     from: "alberto",
        //     to: "rey",
        //     description: "Novakovych 8",
        //     tokens: 12,
        // },
        // {
        //     status: "IN_PROGRESS",
        //     id: "14",
        //     initiator: "rey",
        //     deliverer: "toubar",
        //     from: "alberto",
        //     to: "rey",
        //     description: "Novakovych 8",
        //     tokens: 12,
        // },
    ];

    onItemTap(args: ItemEventData): void {
        console.log("item tapped");
    }

    isBusy: boolean = true;
}
