import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public topPosition = 10;
  public leftPosition = 50;
  public rotation = 45;

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.topPosition = Math.floor(Math.random() * 80) + 1;
      this.leftPosition = Math.floor(Math.random() * 80) + 1;
      this.rotation = Math.floor(Math.random() * 300) + 1;
    }, 2000);
  }


  public getStylesAnimation() {
    return {
      'top': `${this.topPosition}%`,
      'left': `${this.leftPosition}%`,
      'transform': `rotate(${this.rotation}deg)`
    };
  }

}
