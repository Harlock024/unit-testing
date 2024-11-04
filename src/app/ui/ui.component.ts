import { Component } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";

import { MediaComponent } from "../media/media.component";
import { media } from "../media/media";

@Component({
  selector: "app-ui",
  standalone: true,
  imports: [MediaComponent, RouterOutlet, RouterLink],
  templateUrl: "./ui.component.html",
  styleUrl: "./ui.component.css",
})
export class UiComponent {}
