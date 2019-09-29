import {ItemEventData} from "tns-core-modules/ui/list-view"
import {AfterViewInit, Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import axios from "axios";
import {IDelivery} from "~/types"
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as appSettings from "application-settings";
import {Constant} from "~/constant";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";

@Component({
    selector: "new-delivery-home",
    moduleId: module.id,
    templateUrl: "./new-delivery-home.component.html",
    styleUrls: ['./new-delivery-home.component.css']
})

export class NewDeliveryHomeComponent implements AfterViewInit {

    // TODO enable API call and disable dummy data
    private deliveries: Array<IDelivery> = [];

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngAfterViewInit() {
        console.log("LOG: NewDeliveryHomeComponent just re-rendered");
        // TODO enable GET list of deliveries HTTP call and disable dummy data
        this.deliveries = this.getDeliveries();
    };

    getDeliveries = (): IDelivery[] => {
        console.log("LOG: getting list of deliveries....");
        const url: string = `https://backstreet-hodlers.herokuapp.com/deliveries/open?privateKey=${appSettings.getString(Constant.WALLET_KEY)}`;
        console.log(url);
        let listOfDeliveries: IDelivery[] = [];
        axios.get(url)
            .then((res) => {
                console.log("got the list of deliveries!");
                console.log(res.data);
                listOfDeliveries = res.data;
            })
            .catch((err) => {
                console.log("FAILED!");
                console.log(err.toString());
                listOfDeliveries = [];
            });
        return listOfDeliveries;
    };

    takeDelivery = (id: number, address: string) => {
        axios.put(`https://backstreet-hodlers.herokuapp.com/deliveries/${id}/assign?privateKey=${appSettings.getString(Constant.WALLET_KEY)}`)
            .then((res) => {
                // TODO GET list of deliveries
                // this.deliveries = this.getDeliveries();
            })
            .catch((err) => {
                console.log("Could not get list of deliveries, ERR: ", err.toString());
            })
    };

    // dummy data till REST works
    // deliveries: IDelivery[] = [
    //     {
    //         status: "OPEN",
    //         id: "1",
    //         initiator: "alberto",
    //         deliverer: "alex",
    //         from: "Prague 1",
    //         to: "Prague 2",
    //         description: "I would like to deliver documents to my lawyer",
    //         tokens: 5,
    //     },
    //     {
    //         status: "OPEN",
    //         id: "2",
    //         initiator: "rey",
    //         deliverer: "toubar",
    //         from: "Prague 1",
    //         to: "Prague 3",
    //         description: "I would like to deliver an item tomorrow",
    //         tokens: 6,
    //     },
    //     {
    //         status: "OPEN",
    //         id: "3",
    //         initiator: "rey",
    //         deliverer: "toubar",
    //         from: "Prague 1",
    //         to: "Prague 3",
    //         description: "I would like to deliver a TV at next week",
    //         tokens: 2,
    //     },
    //     {
    //         status: "OPEN",
    //         id: "4",
    //         initiator: "rey",
    //         deliverer: "toubar",
    //         from: "Prague 1",
    //         to: "Prague 4",
    //         description: "I would like to deliver an item from my friend in Prague 1",
    //         tokens: 3,
    //     },
    //     {
    //         status: "OPEN",
    //         id: "5",
    //         initiator: "rey",
    //         deliverer: "toubar",
    //         from: "Prague 5",
    //         to: "Prague 6",
    //         description: "I would like to deliver something in the evening",
    //         tokens: 6
    //     },
    //     {
    //         status: "OPEN",
    //         id: "6",
    //         initiator: "rey",
    //         deliverer: "toubar",
    //         from: "Prague 1",
    //         to: "Prague 7",
    //         description: "I would like to deliver my notes to my friend in Prague 7",
    //         tokens: 9,
    //     },
    //     {
    //         status: "OPEN",
    //         id: "7",
    //         initiator: "rey",
    //         deliverer: "toubar",
    //         from: "Prague 3",
    //         to: "Prague 7",
    //         description: "I would like to deliver a bag to my mom",
    //         tokens: 5,
    //     },
    //     {
    //         status: "OPEN",
    //         id: "8",
    //         initiator: "rey",
    //         deliverer: "toubar",
    //         from: "Prague 4",
    //         to: "Prague 1",
    //         description: "I would like to deliver my notes to my friend in Prague 7",
    //         tokens: 3,
    //     },
    //     {
    //         status: "OPEN",
    //         id: "9",
    //         initiator: "rey",
    //         deliverer: "toubar",
    //         from: "Prague 8",
    //         to: "Prague 2",
    //         description: "I would like to deliver an item from my friend in Prague 1",
    //         tokens: 8,
    //     },
    //     {
    //         status: "OPEN",
    //         id: "10",
    //         initiator: "rey",
    //         deliverer: "toubar",
    //         from: "Prague 1",
    //         to: "Prague 1",
    //         description: "I would like to deliver documents to my lawyer",
    //         tokens: 3,
    //     },
    //     // {
    //     //     status: "COMPLETED",
    //     //     id: "11",
    //     //     initiator: "rey",
    //     //     deliverer: "toubar",
    //     //     from: "alberto",
    //     //     to: "rey",
    //     //     description: "Novakovych 8",
    //     //     tokens: 12,
    //     // },
    //     // {
    //     //     status: "IN_PROGRESS",
    //     //     id: "12",
    //     //     initiator: "rey",
    //     //     deliverer: "toubar",
    //     //     from: "alberto",
    //     //     to: "rey",
    //     //     description: "Novakovych 8",
    //     //     tokens: 12,
    //     // },
    //     // {
    //     //     status: "OPEN",
    //     //     id: "13",
    //     //     initiator: "rey",
    //     //     deliverer: "toubar",
    //     //     from: "alberto",
    //     //     to: "rey",
    //     //     description: "Novakovych 8",
    //     //     tokens: 12,
    //     // },
    //     // {
    //     //     status: "IN_PROGRESS",
    //     //     id: "14",
    //     //     initiator: "rey",
    //     //     deliverer: "toubar",
    //     //     from: "alberto",
    //     //     to: "rey",
    //     //     description: "Novakovych 8",
    //     //     tokens: 12,
    //     // },
    // ];

    onNewDeliveryButtonTap = () => {
        this.routerExtensions.navigate(["/new-delivery-form"], {clearHistory: false});
    };

    onItemTap = (args: ItemEventData) => {
        dialogs.confirm({
            // TODO - change dummy data to HTTP response
            title: "Delivery details",
            message: this.deliveries[args.index].description,
            okButtonText: "Take delivery",
            cancelButtonText: "Cancel",
        }).then((willDeliver: boolean) => {
            willDeliver ?
                this.takeDelivery(args.index, appSettings.getString(Constant.WALLET_KEY))
            :
                console.log("delivery will not be taken");
        });
    }

}
