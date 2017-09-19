import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../search/search.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  searchResults;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchService.searchResults.subscribe(data => {
      console.log('Data from service', data);
      this.searchResults = data;
    });
  }

}
