import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search/search.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  searchResults;
  isResultFound = false;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchService.searchResults.subscribe(data => {
      this.searchResults = data;
      this.isResultFound = (data.length > 0);
    });
  }

}
