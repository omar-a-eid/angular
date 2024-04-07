import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  i = 0;
  path = 'assets/images/img';
  images = [
    this.path + '1.jpg',
    this.path + '2.webp',
    this.path + '3.jpg',
    this.path + '4.webp',
  ];
  imgSrc = this.images[this.i];
  interval: any;
  next() {
    if (this.i < this.images.length - 1) {
      this.i += 1;
    }
    this.imgSrc = this.images[this.i];
  }

  prev() {
    if (this.i > 0) {
      this.i -= 1;
    }
    this.imgSrc = this.images[this.i];
  }
  slide() {
    this.interval = setInterval(() => {
      this.i += 1;
      if (this.i >= this.images.length) {
        this.i = 0;
      }
      this.imgSrc = this.images[this.i];
    }, 500);
  }

  stop() {
    clearInterval(this.interval);
  }
}
