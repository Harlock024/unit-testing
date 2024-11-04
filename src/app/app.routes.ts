import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MediaComponent } from "./media/media.component";
import { StddevComponent } from "./stddev/stddev.component";

export const routes: Routes = [
  { path: "media", component: MediaComponent },
  { path: "stddev", component: StddevComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
