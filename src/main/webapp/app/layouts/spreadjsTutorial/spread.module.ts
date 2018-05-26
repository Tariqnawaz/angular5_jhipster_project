import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SpreadComponent, spreadRoute } from "./";

@NgModule({
    imports: [RouterModule.forChild([spreadRoute])],
    declarations: [SpreadComponent],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpreadModule {}
