import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  private slideIndex = 0;
  slideHidden: boolean[] = [];

  constructor() { }

  ngOnInit() {
    const slides = document.getElementsByClassName('mySlides');
    for (let i = 0; i < slides.length; i++) {
      this.slideHidden.push(false);
    }
    this.showSlides(this.slideIndex);
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    if (n < 0) {
      this.slideIndex = this.slideHidden.length - 1;
    } else if (n > this.slideHidden.length - 1) {
      this.slideIndex = 0;
    }
    this.updateDots();
    for (let i = 0; i < this.slideHidden.length; i++) {
      this.slideHidden[i] = true;
    }
    this.slideHidden[this.slideIndex] = false;
  }

  updateDots() {
    const dots = document.getElementsByClassName('dot');
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[this.slideIndex].className += ' active';
  }
}
