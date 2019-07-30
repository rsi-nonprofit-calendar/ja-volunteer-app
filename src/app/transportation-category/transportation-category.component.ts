import { Component } from "@angular/core";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-transportation-category",
  templateUrl: "./transportation-category.component.html",
  styleUrls: ["./transportation-category.component.css"]
})
export class TransportationCategoryComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(result => {
        this.closeResult = `Closed with: ${result}`;
      });
  }
}
