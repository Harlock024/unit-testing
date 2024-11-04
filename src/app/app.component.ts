import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UiComponent } from "./ui/ui.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, UiComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "unit-testing";
}
