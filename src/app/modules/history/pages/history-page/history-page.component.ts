import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit{
  listResult: TrackModel[] = []; 

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event: string): void {
    console.log('Data received in father component: ', event);
    this.searchService.searchTrack$(event).subscribe(({data}) => {
      this.listResult = data;
      console.log('...... ', data);
    });
  }
}
