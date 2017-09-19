import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  // searchResults = new EventEmitter<any>();

  constructor(private http: HttpClient) {
  }

  public searchByTerm(term: string) {
    const url = 'https://restcountries.eu/rest/v2/name/' + term;
    this.http
      .get(url)
      .subscribe(data => {
        // this.searchResults.emit(data);
      }, error => {
        // this.searchResults.emit([]);
      });
  }

}
