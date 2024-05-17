import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json';
import { TrackService } from '@modules/tracks/services/track.service';
import { response } from 'express';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit{
  //small = 'small'
  //big = 'big'
  tracksTrending:Array<TrackModel> = []
  tracksRandom:Array<TrackModel> = []
  listObserver:Array<Subscription> = []

  constructor(private trackService:TrackService) {}
  
  ngOnInit(): void {
    const observer1$ = this.trackService.dataTracksTrending$.subscribe(
      response => {
        this.tracksTrending = response;
        this.tracksRandom = response;
        console.log('Canciones trending', response);
      }
    )

    const observer2$ = this.trackService.dataTracksRandom$.subscribe(
      response => {
        this.tracksRandom = [... this.tracksRandom, ...response];
        console.log('Canciones random entrando...', response);
      }
    )

    this.listObserver = [observer1$, observer2$];
  }

  ngOnDestroy(): void {
    this.listObserver.forEach((observer) => observer.unsubscribe());
  }

}
