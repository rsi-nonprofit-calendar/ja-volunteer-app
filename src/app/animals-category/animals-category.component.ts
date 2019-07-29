import { Component } from "@angular/core";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-animals-category",
  templateUrl: "./animals-category.component.html",
  styleUrls: ["./animals-category.component.css"]
})
export class AnimalsCategoryComponent {
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
