import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MediaComponent } from "./media/media.component";
import { StddevComponent } from "./stddev/stddev.component";
import { LinearRegresionComponent } from "./linear-regression/linear-regression.component";
import { SimpsonComponent } from "./simpson/simpson.component";

export const routes: Routes = [
  { path: "media", component: MediaComponent },
  { path: "stddev", component: StddevComponent },
  { path: "linearRegresion", component: LinearRegresionComponent },
  { path: "simpson", component: SimpsonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
