import {ItemEventData} from "tns-core-modules/ui/list-view"
import {AfterViewInit, Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import axios from "axios";
import {IDelivery} from "~/types"
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "new-delivery-home",
    moduleId: module.id,
    templateUrl: "./new-delivery-home.component.html",
    styleUrls: ['./new-delivery-home.component.css']
})

export class NewDeliveryHomeComponent implements AfterViewInit {

    // TODO enable API call and disable dummy data
    // deliveries: Array<IDelivery> = [];

    constructor(private routerExtensions: RouterExtensions) {

    }

    ngAfterViewInit() {
        console.log("LOG: NewDeliveryHomeComponent just rendered")
        // TODO enable API call and disable dummy data
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
            description: "I would like to deliver documents to my lawyer",
            tokens: 5,
        },
        {
            status: "OPEN",
            id: "2",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 1",
            to: "Prague 3",
            description: "I would like to deliver an item tomorrow",
            tokens: 6,
        },
        {
            status: "OPEN",
            id: "3",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 1",
            to: "Prague 3",
            description: "I would like to deliver a TV at next week",
            tokens: 2,
        },
        {
            status: "OPEN",
            id: "4",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 1",
            to: "Prague 4",
            description: "I would like to deliver an item from my friend in Prague 1",
            tokens: 3,
        },
        {
            status: "OPEN",
            id: "5",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 5",
            to: "Prague 6",
            description: "I would like to deliver something in the evening",
            tokens: 6
        },
        {
            status: "OPEN",
            id: "6",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 1",
            to: "Prague 7",
            description: "I would like to deliver my notes to my friend in Prague 7",
            tokens: 9,
        },
        {
            status: "OPEN",
            id: "7",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 3",
            to: "Prague 7",
            description: "I would like to deliver a bag to my mom",
            tokens: 5,
        },
        {
            status: "OPEN",
            id: "8",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 4",
            to: "Prague 1",
            description: "I would like to deliver my notes to my friend in Prague 7",
            tokens: 3,
        },
        {
            status: "OPEN",
            id: "9",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 8",
            to: "Prague 2",
            description: "I would like to deliver an item from my friend in Prague 1",
            tokens: 8,
        },
        {
            status: "OPEN",
            id: "10",
            initiator: "rey",
            deliverer: "toubar",
            from: "Prague 1",
            to: "Prague 1",
            description: "I would like to deliver documents to my lawyer",
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
        dialogs.confirm({
            // TODO - change dummy data to real API call
            title: "Delivery details",
            message: this.dummyDeliveries[args.index].description,
            okButtonText: "Take delivery",
            cancelButtonText: "Cancel",
        }).then(function (result) {
            // TODO - api call with result to take delivery
            console.log(result);
        });
    }
}
