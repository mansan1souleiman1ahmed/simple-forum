import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { WssService } from "src/app/service/wss.service";

@Component({
  selector: "app-component-list",
  templateUrl: "./component-list.component.html",
  styleUrls: ["./component-list.component.scss"]
})
export class ComponentListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
