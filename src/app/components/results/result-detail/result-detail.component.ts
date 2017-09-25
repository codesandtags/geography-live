import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.sass']
})
export class ResultDetailComponent implements OnInit {

  @Input('result') result;

  constructor() {
  }

  ngOnInit() {
  }

}
