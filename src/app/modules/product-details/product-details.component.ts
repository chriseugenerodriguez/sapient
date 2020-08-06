import { Component, OnInit, TemplateRef } from '@angular/core';

// BOOTSTRAP
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  modalRef: BsModalRef;

  // NUMBER
  max = 5;
  rate = 0;
  overStar: number | undefined;
  percent: number;

  // BOOLEAN
  isReadonly = false;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;

    // BONUS
    console.log(value);
  }

  resetStar(): void {
    this.overStar = void 0;
  }
}
