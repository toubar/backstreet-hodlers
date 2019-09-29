import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewDeliveryHomeComponent } from "./new_delivery_home/new-delivery-home.component";
import {NativeScriptUIDataFormModule} from "nativescript-ui-dataform/angular";
import {NativeScriptFormsModule} from "nativescript-angular";
import {NewDeliveryFormComponent} from "~/new-delivery-form/new-delivery-form.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIDataFormModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        NewDeliveryHomeComponent,
        NewDeliveryFormComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
