import { Component, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'bboy-moves-visual',
  templateUrl: './bboy-moves-visual.component.html',
  styleUrl: './bboy-moves-visual.component.scss'
})

export class BboyMovesVisualComponent {
  private modal: any;

  ngAfterViewInit() {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
    }
  }

  openModal() {
    if (this.modal) {
      this.modal.show();
    }
  }

  closeModal() {
    if (this.modal) {
      this.modal.hide();
    }
  }
}