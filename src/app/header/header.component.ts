import { Output } from "@angular/core";
import { Component, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: [],
})

export class Header {

 @Output() featuredSelected = new EventEmitter<string>();
  collapsed = true;

  onSelect(feature: string) {
    this.featuredSelected.emit(feature);
  }

}
