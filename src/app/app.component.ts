import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MediaComponent } from "./media/media.component";
import { StddevComponent } from "./stddev/stddev.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MediaComponent, StddevComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "unit-testing";
}
