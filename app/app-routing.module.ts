import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NewDeliveryHomeComponent } from './new_delivery_home/new-delivery-home.component';
import {NewDeliveryFormComponent} from "~/new-delivery-form/new-delivery-form.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "deliveryHome", component: NewDeliveryHomeComponent },
    { path: "new-delivery-form", component: NewDeliveryFormComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
