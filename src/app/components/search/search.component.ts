import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  @Output('searchResult') searchResult: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private searchService: SearchService) {
    this.createForm();
  }

  private createForm() {
    this.searchForm = this.fb.group({
      q: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public onSearch() {
    const searchValue = this.searchForm.get('q').value;

    if (searchValue && searchValue.length >= 2) {
      this.searchService.searchByTerm(searchValue);
    } else {
      this.searchService.searchResults.emit([]);
    }
  }
}
