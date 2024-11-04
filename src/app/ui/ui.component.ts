import { Component } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

import { MediaComponent } from "../media/media.component";
import { StddevComponent } from "../stddev/stddev.component";
import { media } from "../media/media";

@Component({
  selector: "app-ui",
  standalone: true,
  imports: [
    MediaComponent,
    StddevComponent,
    RouterOutlet,
    RouterLink,
    CommonModule,
  ],
  templateUrl: "./ui.component.html",
  styleUrl: "./ui.component.css",
})
export class UiComponent {}
